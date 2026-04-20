import Stripe from "stripe";

let _stripe: Stripe | null = null;
export function stripe(): Stripe {
  if (!_stripe) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) throw new Error("STRIPE_SECRET_KEY missing");
    _stripe = new Stripe(key, { apiVersion: "2025-02-24.acacia" });
  }
  return _stripe;
}

import type { Tier } from "@/lib/tier";

/**
 * Map Stripe Price lookup_key → app tier.
 * Configure these lookup_keys when creating Prices in the Stripe dashboard.
 */
export function priceKeyToTier(lookupKey: string | null | undefined): Tier {
  if (!lookupKey) return "free";
  if (lookupKey.startsWith("equities")) return "equities";
  if (lookupKey.startsWith("crypto")) return "crypto";
  if (lookupKey.startsWith("commodities")) return "commodities";
  if (lookupKey.startsWith("house")) return "house";
  if (lookupKey.startsWith("elite")) return "elite";
  if (lookupKey.startsWith("circle")) return "circle";
  return "free";
}
