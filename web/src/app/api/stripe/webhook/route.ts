import { NextResponse, type NextRequest } from "next/server";
import type Stripe from "stripe";
import { stripe, priceKeyToTier } from "@/lib/stripe";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs"; // stripe SDK needs node runtime

const RELEVANT_EVENTS = new Set<Stripe.Event["type"]>([
  "customer.subscription.created",
  "customer.subscription.updated",
  "customer.subscription.deleted",
  "checkout.session.completed",
]);

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!sig || !secret) {
    return new NextResponse("missing signature or secret", { status: 400 });
  }

  const body = await req.text();
  let event: Stripe.Event;
  try {
    event = stripe().webhooks.constructEvent(body, sig, secret);
  } catch (err) {
    return new NextResponse(`bad signature: ${(err as Error).message}`, { status: 400 });
  }

  if (!RELEVANT_EVENTS.has(event.type)) {
    return NextResponse.json({ received: true, ignored: event.type });
  }

  const admin = createAdminClient();

  try {
    if (
      event.type === "customer.subscription.created" ||
      event.type === "customer.subscription.updated" ||
      event.type === "customer.subscription.deleted"
    ) {
      const sub = event.data.object as Stripe.Subscription;
      await syncSubscription(admin, sub);
    } else if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      if (session.subscription) {
        const sub = await stripe().subscriptions.retrieve(
          session.subscription as string,
          { expand: ["items.data.price"] }
        );
        await syncSubscription(admin, sub);
      }
    }
  } catch (err) {
    console.error("[stripe webhook] sync failed", err);
    return new NextResponse("sync failed", { status: 500 });
  }

  return NextResponse.json({ received: true });
}

async function syncSubscription(
  admin: ReturnType<typeof createAdminClient>,
  sub: Stripe.Subscription
) {
  const customerId =
    typeof sub.customer === "string" ? sub.customer : sub.customer.id;

  // Resolve user_id by stripe_customer_id (set when we create the Checkout session)
  const { data: existing } = await admin
    .from("subscriptions")
    .select("user_id")
    .eq("stripe_customer_id", customerId)
    .maybeSingle();

  const userId = existing?.user_id;
  if (!userId) {
    console.warn(`[stripe webhook] no user mapped to customer ${customerId} yet`);
    return;
  }

  const price = sub.items.data[0]?.price;
  const lookupKey = price?.lookup_key ?? null;
  const tier = priceKeyToTier(lookupKey);

  await admin.from("subscriptions").upsert(
    {
      user_id: userId,
      stripe_customer_id: customerId,
      stripe_sub_id: sub.id,
      tier,
      status: sub.status,
      current_period_end: new Date(sub.current_period_end * 1000).toISOString(),
      trial_ends_at: sub.trial_end ? new Date(sub.trial_end * 1000).toISOString() : null,
    },
    { onConflict: "user_id" }
  );
}
