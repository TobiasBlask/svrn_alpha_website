-- =============================================================
-- 0001 · FOUNDATION
-- profiles, subscriptions, founders_circle_seats, tier helpers.
-- This migration covers Sprint 1 only — research-core comes in 0002.
-- =============================================================

-- ---------- ENUMS --------------------------------------------------------
DO $$ BEGIN
  CREATE TYPE tier_level AS ENUM (
    'free', 'equities', 'crypto', 'commodities', 'house', 'elite', 'circle'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE sub_status AS ENUM (
    'trialing', 'active', 'past_due', 'canceled', 'unpaid', 'incomplete', 'incomplete_expired', 'paused'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- ---------- PROFILES -----------------------------------------------------
CREATE TABLE IF NOT EXISTS public.profiles (
  user_id      UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  locale       TEXT NOT NULL DEFAULT 'en',
  is_analyst   BOOLEAN NOT NULL DEFAULT FALSE,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (user_id, display_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'display_name', SPLIT_PART(NEW.email, '@', 1)))
  ON CONFLICT (user_id) DO NOTHING;
  RETURN NEW;
END $$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ---------- SUBSCRIPTIONS ------------------------------------------------
CREATE TABLE IF NOT EXISTS public.subscriptions (
  user_id              UUID PRIMARY KEY REFERENCES public.profiles(user_id) ON DELETE CASCADE,
  stripe_customer_id   TEXT UNIQUE,
  stripe_sub_id        TEXT UNIQUE,
  tier                 tier_level NOT NULL DEFAULT 'free',
  status               sub_status NOT NULL DEFAULT 'active',
  current_period_end   TIMESTAMPTZ,
  trial_ends_at        TIMESTAMPTZ,
  updated_at           TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS subscriptions_customer_idx
  ON public.subscriptions (stripe_customer_id);

-- ---------- FOUNDER'S CIRCLE (50-seat cap) -------------------------------
CREATE TABLE IF NOT EXISTS public.founders_circle_seats (
  id                       BIGSERIAL PRIMARY KEY,
  user_id                  UUID UNIQUE NOT NULL REFERENCES public.profiles(user_id) ON DELETE CASCADE,
  joined_at                TIMESTAMPTZ NOT NULL DEFAULT now(),
  dinner_zurich_opt_in     BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE OR REPLACE FUNCTION public.enforce_circle_cap()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
DECLARE seat_count INT;
BEGIN
  SELECT COUNT(*) INTO seat_count FROM public.founders_circle_seats;
  IF seat_count >= 50 THEN
    RAISE EXCEPTION 'Founder''s Circle is full (50/50 seats taken)';
  END IF;
  RETURN NEW;
END $$;

DROP TRIGGER IF EXISTS founders_circle_cap ON public.founders_circle_seats;
CREATE TRIGGER founders_circle_cap
  BEFORE INSERT ON public.founders_circle_seats
  FOR EACH ROW EXECUTE FUNCTION public.enforce_circle_cap();

-- ---------- TIER HELPERS -------------------------------------------------
CREATE OR REPLACE FUNCTION public.user_tier()
RETURNS tier_level LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT COALESCE(
    (SELECT tier FROM public.subscriptions
     WHERE user_id = auth.uid() AND status IN ('trialing','active')),
    'free'::tier_level
  )
$$;

CREATE OR REPLACE FUNCTION public.tier_unlocks(required tier_level)
RETURNS BOOLEAN LANGUAGE sql STABLE AS $$
  SELECT public.user_tier() = ANY(
    CASE required
      WHEN 'free'        THEN ARRAY['free','equities','crypto','commodities','house','elite','circle']::tier_level[]
      WHEN 'equities'    THEN ARRAY['equities','house','elite','circle']::tier_level[]
      WHEN 'crypto'      THEN ARRAY['crypto','house','elite','circle']::tier_level[]
      WHEN 'commodities' THEN ARRAY['commodities','house','elite','circle']::tier_level[]
      WHEN 'house'       THEN ARRAY['house','elite','circle']::tier_level[]
      WHEN 'elite'       THEN ARRAY['elite','circle']::tier_level[]
      WHEN 'circle'      THEN ARRAY['circle']::tier_level[]
    END
  )
$$;

-- ---------- RLS ---------------------------------------------------------
ALTER TABLE public.profiles               ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions          ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.founders_circle_seats  ENABLE ROW LEVEL SECURITY;

-- profiles: readable by self, writable by self
DROP POLICY IF EXISTS profiles_self_read  ON public.profiles;
DROP POLICY IF EXISTS profiles_self_write ON public.profiles;
CREATE POLICY profiles_self_read  ON public.profiles FOR SELECT USING (user_id = auth.uid());
CREATE POLICY profiles_self_write ON public.profiles FOR UPDATE USING (user_id = auth.uid());

-- subscriptions: read self only; writes only via service_role (Stripe webhook)
DROP POLICY IF EXISTS subscriptions_self_read ON public.subscriptions;
CREATE POLICY subscriptions_self_read ON public.subscriptions FOR SELECT USING (user_id = auth.uid());

-- founders_circle: read public (count is meaningful), insert only self
DROP POLICY IF EXISTS circle_public_read ON public.founders_circle_seats;
DROP POLICY IF EXISTS circle_self_insert ON public.founders_circle_seats;
CREATE POLICY circle_public_read ON public.founders_circle_seats FOR SELECT USING (TRUE);
CREATE POLICY circle_self_insert ON public.founders_circle_seats FOR INSERT WITH CHECK (user_id = auth.uid());
