"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function signInWithEmail(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const next = String(formData.get("next") ?? "/");
  if (!email) redirect("/sign-in");

  const supabase = createClient();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${siteUrl}/auth/callback?next=${encodeURIComponent(next)}`,
    },
  });

  if (error) {
    redirect(`/sign-in?error=${encodeURIComponent(error.message)}`);
  }
  redirect(`/sign-in?sent=1&next=${encodeURIComponent(next)}`);
}

export async function signOut() {
  const supabase = createClient();
  await supabase.auth.signOut();
  redirect("/");
}
