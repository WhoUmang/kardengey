# Kardengey Lead Intelligence — Phase 1 Architecture

## Status
- Working branch: `feature/lead-intelligence-foundation`
- Base: current `main`
- Phase 1: repository audit and product/data model
- No production files changed and no Supabase SQL applied.

## Product goal
A private, authenticated prospecting workspace for Kardengey to discover local businesses, verify their online presence, prioritise genuine opportunities, and manage human-reviewed outreach.

## Pilot scope
- Geography: Noida and Ghaziabad, Uttar Pradesh; designed to expand across Delhi NCR.
- Initial categories: clinics/dentists, restaurants/cafes, interior designers, manufacturers/suppliers, gyms/salons, coaching institutes.
- Acquisition: provider-compliant business discovery; no uncontrolled scraping or automated unsolicited messaging.
- Website assessment: distinguish (1) no website found, (2) website found and reachable, (3) website found but unreachable, and (4) status uncertain. A failed HTTP check must never be treated as proof that a business has no website.
- Outreach: draft and track only; a human reviews and sends messages.

## Application architecture
- Existing frontend: React + Vite in this repository.
- Private route: `/admin/leads` (must be guarded by Supabase Auth).
- Backend/data: dedicated Supabase project, Postgres with Row Level Security.
- Discovery integration: server-side provider adapter using an approved API (provider selection and API key configuration are a Phase 2/3 decision).
- Website checks: server-side only, rate-limited, with timeouts and safe URL validation.
- Hosting: existing Vercel project, preview deployment first; do not merge to `main` until acceptance checks pass.

## Data model (initial)
1. `leads`: one business prospect; normalized name, category, locality/city, address, phone, email, website URL, website status, source/provider identifiers, rating/review metadata when permitted, score, owner notes, follow-up status, timestamps.
2. `lead_sources`: provenance for each discovered/imported record; provider, provider place ID, source URL, retrieval time, raw payload minimised to necessary fields.
3. `lead_activities`: append-only timeline for notes, verification events, outreach drafts/sent events, replies, meetings, and status changes.
4. `lead_lists`: optional saved prospecting lists/campaign batches.
5. `lead_list_items`: join table between saved lists and leads.

## Lead status model
- `new`
- `needs_review`
- `verified`
- `contacted`
- `replied`
- `interested`
- `meeting_booked`
- `won`
- `lost`
- `do_not_contact`

Website status is separate from sales status:
- `no_website_found` (only after adequate provider/search review; not inferred from a failed check)
- `live`
- `unreachable`
- `uncertain`
- `not_checked`

## Initial scoring rubric (0–100; editable later)
- Fit with Kardengey services: 0–30
- Verified website gap or meaningful improvement opportunity: 0–30
- Business activity/quality signals supported by source data: 0–20
- Reachability through a legitimate public business contact channel: 0–20
Scores are prioritisation aids, not claims about business quality. Every score should expose its reasons and source evidence.

## Security and privacy baseline
- Supabase Auth required for every dashboard route and data operation.
- RLS enabled on all prospect tables; initial access limited to authenticated owner/admin users.
- Never put Supabase service-role secrets in browser code or chat. Browser uses only the publishable/anon key with RLS.
- Discovery and verification secrets stay in server-side Vercel environment variables.
- Minimise stored personal data; store business contact details only where lawfully sourced and needed for business outreach.
- Record source and retrieval timestamp; respect provider terms, opt-outs, and applicable Indian privacy/telemarketing requirements.
- No bulk auto-messaging, scraping behind logins, or bypassing provider restrictions.

## Phase 1 acceptance checklist
- [x] Audit existing branch and confirm whether Lead Intelligence code exists.
- [x] Confirm current branch is stale relative to `main`.
- [x] Create a clean feature branch from `main`.
- [x] Document product scope, data model, statuses, scoring, and security rules.
- [ ] Inspect Supabase project settings and confirm region/auth configuration (without exposing secrets).
- [ ] Approve final schema and apply migrations in Phase 2.
- [ ] Build private dashboard and connect it only to the dedicated Supabase project.
