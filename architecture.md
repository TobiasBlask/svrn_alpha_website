# Premise — Architektur & Schema (v0.1)

## Stack

| Layer | Technologie | Warum |
|---|---|---|
| Frontend | **Next.js 14 (App Router) auf Vercel** | RSC für editorial/data-heavy Screens, ISR für `Today` (15-min cache), Edge-Routing für Tier-Middleware |
| Backend / DB | **Supabase** (Postgres 15 + Auth + Realtime + Storage) | RLS = Paywall-Engine, Realtime = "The Desk", Auth = Magic-Link + OAuth |
| Payments | **Stripe** Billing + Customer Portal | Webhook → Supabase `subscriptions` table |
| Marktdaten | **Polygon.io** (oder Finnhub als Backup) | Quotes, Fundamentals, EPS-Estimates; Webhook → Supabase Edge Function |
| Email | **Resend** | Morning Brief, Alerts; React Email Templates |
| Long-form Reports | **MDX im Repo** (Phase 1) → Sanity (Phase 2) | Analysten committen via PR; später CMS wenn Volumen wächst |
| Charts | **Lightweight-Charts** (TradingView OSS) + eigene Target-Zone-Layer | Phase-1-Token bereits gesetzt |

---

## Schema (Postgres)

### Identitäten & Subscriptions
```sql
-- auth.users kommt von Supabase
profiles (user_id PK→auth.users, display_name, locale, created_at)

subscriptions (
  user_id PK→profiles,
  stripe_customer_id, stripe_sub_id,
  tier ENUM('free','equities','crypto','commodities','house','elite','circle'),
  status, current_period_end, trial_ends_at
)

founders_circle_seats (   -- 50-seat cap
  id PK, user_id UNIQUE→profiles,
  joined_at, dinner_zurich_opt_in BOOL
)
-- CHECK trigger: COUNT(*) ≤ 50
```

### Research-Core (HKCM-Erbe)
```sql
markets (id PK, ticker UNIQUE, name, sector, asset_class, active)

analysts (
  id PK, user_id→profiles, slug UNIQUE, name, bio_md,
  specialty, tier ENUM('public','elite'),
  hit_rate_cache NUMERIC,    -- denormalisiert, nightly job
  total_calls_cache INT
)

premises (                  -- DAS Kernobjekt
  id PK, market_id→markets, analyst_id→analysts,
  stance ENUM('bullish','bearish','neutral'),
  thesis_md TEXT,
  target_low NUMERIC, target_high NUMERIC, stop NUMERIC,
  scenario_primary_md, scenario_alt_md,
  horizon_months INT,
  status ENUM('open','target_hit','stopped','expired','withdrawn'),
  opened_at, closed_at,
  paywall_tier ENUM('free','tier','elite')   -- gate for full body
)

chronicle_events (          -- audit-trail, append-only
  id PK, premise_id→premises,
  kind ENUM('opened','target_moved','stop_moved','partial_exit','closed','note'),
  body_md, occurred_at, recorded_at DEFAULT now()
)
```

### Phase-2-Layer
```sql
factor_grades (             -- Seeking-Alpha-Erbe
  market_id PK→markets,
  growth CHAR(1), profitability CHAR(1), valuation CHAR(1),
  momentum CHAR(1), revisions CHAR(1),
  updated_at
)

earnings (
  market_id→markets, fiscal_period,
  eps_estimate, eps_actual, revenue_estimate, revenue_actual,
  reports_at TIMESTAMPTZ,
  PRIMARY KEY (market_id, fiscal_period)
)

execution_instruments (     -- "concrete instruments matched to the Premise"
  id PK, premise_id→premises,
  kind ENUM('stock','etf','option','warrant','future'),
  isin, name, ratio NUMERIC, broker_url
)

articles (                  -- per-market article feed (tabbed)
  id PK, market_id→markets, analyst_id→analysts,
  title, lede, body_md,
  sentiment ENUM('bullish','bearish','neutral'),
  paywall_tier, published_at
)

reports (                   -- long-form
  id PK, slug UNIQUE, title, dek,
  analyst_id→analysts, market_id NULLABLE,
  body_mdx_path,            -- → repo OR Sanity ID
  read_minutes INT, paywall_tier, published_at
)
```

### Desk (das Differenzierungsmerkmal)
```sql
desk_trades (               -- live broadcast — REALTIME
  id PK, premise_id→premises,
  side ENUM('buy','sell'),
  qty NUMERIC, price NUMERIC,
  kind ENUM('entry','add','trim','stop_move','exit'),
  broadcast_at DEFAULT now(),
  note_md
)

desk_book_snapshot (        -- daily rollup, materialized
  date PK, nav, ytd_pct, gross_exposure, open_positions INT
)

top_ideas (                 -- curated weekly
  week_of DATE, rank INT,
  premise_id→premises,
  PRIMARY KEY (week_of, rank)
)
```

### Distribution
```sql
morning_brief_issues (
  id PK, issue_number INT UNIQUE, sent_date,
  lead_premise_id→premises, body_md, sent_count
)

alerts (
  id PK, user_id→profiles, premise_id→premises,
  kind ENUM('target_hit','stop','new_premise','desk_trade'),
  channel ENUM('push','email'), sent_at
)
```

---

## RLS-Policies (die Paywall-Engine)

**Helper-Function** — überall wiederverwendbar:
```sql
CREATE FUNCTION user_tier() RETURNS TEXT
LANGUAGE sql STABLE SECURITY DEFINER AS $$
  SELECT COALESCE(
    (SELECT tier FROM subscriptions
     WHERE user_id = auth.uid() AND status = 'active'),
    'free'
  )
$$;

CREATE FUNCTION tier_unlocks(required TEXT) RETURNS BOOL
LANGUAGE sql STABLE AS $$
  SELECT user_tier() = ANY(CASE required
    WHEN 'free'  THEN ARRAY['free','equities','crypto','commodities','house','elite','circle']
    WHEN 'tier'  THEN ARRAY['equities','crypto','commodities','house','elite','circle']
    WHEN 'house' THEN ARRAY['house','elite','circle']
    WHEN 'elite' THEN ARRAY['elite','circle']
    WHEN 'circle' THEN ARRAY['circle']
  END)
$$;
```

**Beispiel-Policies:**
```sql
-- Premises: lite-view öffentlich, Body nur mit passendem Tier
ALTER TABLE premises ENABLE ROW LEVEL SECURITY;

CREATE POLICY premises_read ON premises FOR SELECT USING (true);
-- Body wird auf View-Ebene gemasked:
CREATE VIEW premises_public AS
  SELECT id, market_id, analyst_id, stance, target_low, target_high,
         stop, status, opened_at,
         CASE WHEN tier_unlocks(paywall_tier)
              THEN thesis_md ELSE NULL END AS thesis_md,
         CASE WHEN tier_unlocks(paywall_tier)
              THEN scenario_primary_md ELSE NULL END AS scenario_primary_md
  FROM premises;

-- Analysten dürfen nur eigene Premises schreiben
CREATE POLICY premises_write ON premises
  FOR INSERT WITH CHECK (
    analyst_id IN (SELECT id FROM analysts WHERE user_id = auth.uid())
  );

-- Chronicle: append-only (kein UPDATE/DELETE), public read
CREATE POLICY chronicle_read ON chronicle_events FOR SELECT USING (true);
CREATE POLICY chronicle_no_mutate ON chronicle_events
  FOR UPDATE USING (false);
CREATE POLICY chronicle_no_delete ON chronicle_events
  FOR DELETE USING (false);

-- Desk-Trades: lesen nur house+, schreiben nur service_role
CREATE POLICY desk_read ON desk_trades FOR SELECT
  USING (tier_unlocks('house'));

-- Founder's Circle Seats: cap enforcement via trigger
CREATE TRIGGER enforce_circle_cap BEFORE INSERT ON founders_circle_seats
  FOR EACH ROW EXECUTE FUNCTION check_seat_cap();   -- raises if COUNT ≥ 50
```

---

## Realtime-Channels

| Channel | Quelle | Verbraucher | Frequenz |
|---|---|---|---|
| `desk:trades` | INSERT auf `desk_trades` | The Desk Screen, Toast/Badge global | event-driven |
| `desk:book` | UPDATE auf `desk_book_snapshot` | Desk-Header (NAV, YTD) | 1× täglich |
| `market:{ticker}` | Polygon-Webhook → Edge Function → Postgres NOTIFY | Market Detail, Today (movers), Brief preview | Sekunden |
| `premise:{id}` | UPDATE auf `premises.status` + INSERT `chronicle_events` | Market Detail, Analyst Profile, Alerts | event-driven |
| `alerts:{user_id}` | INSERT auf `alerts` filtered by user | In-App Notification Bell | event-driven |

Supabase Realtime nutzt Postgres-Logical-Replication — keine extra Infrastruktur. Tier-Filter laufen automatisch über RLS auch im Realtime-Channel.

---

## Screen → Datenfluss (10 Screens)

| # | Screen | Tabellen | Realtime | Tier-Gate |
|---|---|---|---|---|
| 01 | **Market Detail** | markets, premises_public, factor_grades, earnings, articles, execution_instruments | `market:{t}`, `premise:{id}` | Premise-Body: tier; Execution: tier |
| 02 | **Today** | premises_public (lead), markets (top movers), articles (latest), earnings (this week) | `market:*` (movers) | free |
| 03 | **Top Ideas** | `top_ideas` JOIN premises_public | `premise:*` für Status-Updates | house+ für volle Ansicht |
| 04 | **The Desk** | desk_trades (paginated), desk_book_snapshot, premises | `desk:trades`, `desk:book` | **house+** (Kerngate) |
| 05 | **Analysts** | analysts (+ leaderboard MV), premises_aggregate_view | none | overview free, elite-Profile paywall |
| 05a | **Analyst Profile** | analysts, premises (alle vom Analyst), chronicle_events | `premise:*` für offene | premise-Body wie 01 |
| 06 | **Research Report** | reports (MDX), analysts | none | tier abhängig vom report.paywall_tier |
| 07 | **Screener** | `screener_view` (MV: markets + grades + latest premise + 30d perf) | none | filter-Set free, einige Spalten paid |
| 08 | **Packages** | Stripe Prices (lookup_keys), feature flags | none | public |
| 09 | **Morning Brief** | morning_brief_issues archive | none | letzte 7 Tage public, Archiv subscriber-only |

---

## Build-Reihenfolge (8 Sprints à ~1 Woche)

1. **Foundation** — Supabase Projekt, Auth, Stripe-Webhook, Tier-Middleware in Next.js, Storybook der Phase-1-Tokens
2. **Markets + Premises** — CRUD, Market Detail Screen, Chart-Integration, Phase-1 Premise-Block
3. **Today + Top Ideas** — meist read-heavy, ISR-Caching
4. **The Desk** ← *größter Hebel, hier zeit investieren* — Realtime, Broadcast-Pipeline (Trader-CLI / Edge Function), animated Feed
5. **Analysts + Profile + Chronicle** — Leaderboard MV, Track-Record-Aggregation
6. **Reports** — MDX-Pipeline, Drop-Cap, Pull-Quote-Komponenten aus dem Prototyp
7. **Screener** — materialized view, client-side faceting
8. **Brief** — Resend cron 07:30 CET, React-Email Template, Open-Tracking

---

## Offene Fragen (vor Sprint 1 klären)

1. **Marktdaten-Provider**: Polygon ($199/mo Starter) vs. Finnhub ($79/mo) vs. EOD-only (Twelve Data, $29) — abhängig von "Live"-Anspruch der Desk-Trades
2. **Analysten-Schreibtool**: Direkt im Admin-UI oder Markdown-Files im Repo (PR-Workflow)? Beeinflusst MDX vs. Sanity-Entscheidung
3. **Region**: Supabase-Region (eu-central-1 für DACH-Latenz vermutlich)
4. **Founder's Circle**: Ist die 50-Seat-Cap hart (Trigger raised) oder Waitlist (overflow ok)?
5. **Compliance**: BaFin/MiFID-II Disclaimer-Layer — separates `disclosures` table pro Premise/Report?
