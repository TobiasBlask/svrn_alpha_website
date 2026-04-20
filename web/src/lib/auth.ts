import { createClient } from "@/lib/supabase/server";
import type { Tier } from "@/lib/tier";

export async function getSession() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export async function getUserTier(): Promise<Tier> {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return "free";

  const { data } = await supabase
    .from("subscriptions")
    .select("tier, status")
    .eq("user_id", user.id)
    .eq("status", "active")
    .maybeSingle();

  return (data?.tier as Tier) ?? "free";
}
