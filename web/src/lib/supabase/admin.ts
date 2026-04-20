import { createClient } from "@supabase/supabase-js";

// Bypasses RLS — use ONLY in trusted server-side code (webhooks, cron, admin actions).
export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    throw new Error("Supabase admin env vars missing");
  }
  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
