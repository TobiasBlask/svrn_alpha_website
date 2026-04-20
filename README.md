# Premise

Institutional-grade research for retail investors.

## Repo layout

```
2026_Ulrich/
├── web/                  # Next.js 14 app (deploys to Vercel)
├── supabase/             # Postgres migrations + local config
│   ├── config.toml
│   └── migrations/
├── premise/              # Phase-1 + Phase-2 HTML/CSS/JS prototype (design reference)
├── architecture.md       # System sketch + schema + RLS + realtime channels
├── designer-briefing.md  # Original product brief (DE)
└── README.md             # this file
```

## Hosting

| Concern | Where | Tier needed for dev | Notes |
|---|---|---|---|
| Source of truth | **GitHub** | free | repo only; not the runtime |
| App runtime | **Vercel** | Hobby (free) | connects to GitHub repo, auto-deploys on push |
| DB / Auth / Realtime / Storage | **Supabase Cloud** | Free | choose region `eu-central-1` for DACH latency |
| Payments | **Stripe** | free | per-transaction fees only |
| Market data | **Polygon.io** (or Finnhub) | $0 dev key, $199/mo for live | wire in Sprint 2 |
| Email | **Resend** | free up to 3k/mo | wire in Sprint 8 (Brief) |

GitHub alone is **not** enough — it's the code repo, not a runtime. The minimum live setup is GitHub + Vercel + Supabase + Stripe (test mode).

## Sprint 1 — Foundation (this commit)

Done:
- Next.js 14 (App Router) + TypeScript scaffold
- Supabase SSR auth (magic link), session refresh middleware
- Tier helper (`user_tier()` SQL + `tierUnlocks()` TS — kept in lockstep)
- Stripe webhook handler that syncs subscriptions → `subscriptions` table
- Postgres migration `0001_foundation.sql`: profiles, subscriptions, founders_circle (50-seat cap trigger), tier helpers, RLS
- Phase-1 design tokens (`tokens.css`, `base.css`, `premise.css`) wired globally

Still todo (later sprints):
- Markets, premises, chronicle, factor grades, articles, reports (Sprint 2)
- TipTap editor for analyst authoring (Sprint 2/6)
- The Desk realtime broadcast (Sprint 4)
- Stripe Checkout flow + Customer Portal (Sprint 1.5 once products are configured)

## Local dev

```bash
# 1. install
cd web
npm install

# 2. configure env
cp .env.local.example .env.local
# fill in: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY,
#         STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET

# 3. run
npm run dev
# → http://localhost:3000
```

### Supabase

Two options for the DB:

**A) Cloud (recommended for dev)** — create project at <https://app.supabase.com>, copy URL + anon key + service_role key into `.env.local`, then run the migrations via the SQL editor or:

```bash
brew install supabase/tap/supabase
supabase login
supabase link --project-ref <your-project-ref>
supabase db push
```

**B) Local (no internet)**:

```bash
supabase start          # spins up Postgres + Studio + Auth in Docker
supabase db reset       # applies migrations from supabase/migrations/
```

### Stripe webhook (local)

```bash
brew install stripe/stripe-cli/stripe
stripe login
stripe listen --forward-to localhost:3000/api/stripe/webhook
# copy the printed `whsec_...` into STRIPE_WEBHOOK_SECRET
```

## Tier model (mirrored in TS + SQL)

`free` ⊂ `equities` | `crypto` | `commodities` ⊂ `house` ⊂ `elite` ⊂ `circle`

Each individual sector tier inherits `house`+ access; `house` inherits `elite`+; `elite` inherits `circle`. See `web/src/lib/tier.ts` and `tier_unlocks()` in `0001_foundation.sql` — they MUST stay in sync.

## Smoke-test commands

```bash
cd web
npm run typecheck   # tsc --noEmit
npm run build       # next build
npm run dev         # next dev → http://localhost:3000
```
