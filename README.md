# ateeqasif.com

Personal brand website for Ateeq Asif — technology entrepreneur, business
leader, and AI & Business Automation Strategist. Built with Next.js 16 (App
Router), TypeScript, and Tailwind CSS 4, from the implementation-ready
specification in `Ateeq_Asif_Personal_Website_Content_and_Claude_Code_Brief.docx`.

## 1. What was implemented

- Full site shell: header with accessible mobile drawer, footer, skip link.
- All approved page copy from the spec, verbatim, across every route below.
- A typed local content model (`src/content/*.ts`, `src/content/insights/*.mdx`)
  standing in for a CMS, with a documented migration path (see §5).
- A working contact form: client + server (Zod) validation, honeypot,
  in-memory rate limiting, Resend email integration with a safe
  development fallback (logs instead of pretending to send).
- A newsletter capture form wired to a stub API route (no ESP connected yet
  — see §5).
- SEO: per-page metadata, canonical URLs, `sitemap.xml`, `robots.txt`, an RSS
  feed for Insights, and JSON-LD for Person, WebSite, Article, and
  BreadcrumbList.
- A dynamic Open Graph image (`src/app/opengraph-image.tsx`) generated with
  `next/og` — no static placeholder JPGs required.
- WCAG 2.2 AA–oriented accessibility: semantic landmarks, keyboard-operable
  mobile nav, visible focus rings, labeled form fields with inline errors,
  `prefers-reduced-motion` support, verified color-contrast ratios (all
  ≥ 5:1, see §6).
- Local SVG placeholders for every image the spec calls for but that hasn't
  been approved yet (portraits, venture logos, insight covers), each
  labeled in-image so nobody mistakes them for final assets.

## 2. Routes created

| Route | Notes |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/ventures` | Ventures — ZAPTA Technologies, Sync4Tech |
| `/expertise` | Expertise |
| `/insights` | Insights archive (shows the empty state until an article is published — see §5) |
| `/insights/[slug]` | Article template — 12 draft entries seeded, all currently unpublished |
| `/insights/rss.xml` | RSS feed (published insights only) |
| `/speaking` | Speaking & Media |
| `/contact` | Contact — live form |
| `/privacy` | Privacy notice (draft — see §5) |
| `/sitemap.xml`, `/robots.txt` | Generated from `src/app/sitemap.ts` / `robots.ts` |
| 404 | `src/app/not-found.tsx` |

## 3. Local setup

```bash
npm install
npm run dev       # http://localhost:3000
npm run build      # production build
npm run lint        # ESLint
npx tsc --noEmit    # type check
```

Node 20+ recommended.

## 4. Environment variables

Copy `.env.example` to `.env.local`:

```
RESEND_API_KEY=       # from resend.com — required to actually send contact-form email
CONTACT_FROM_EMAIL=   # a verified Resend sending address
CONTACT_TO_EMAIL=     # optional, defaults to siteSettings.email
```

Without `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` set, `POST /api/contact`
logs the enquiry to the server console instead of pretending to send it —
intentional, so nothing claims to be live before it is. No secrets are
referenced in client code; the Resend SDK only runs server-side in
`src/app/api/contact/route.ts`.

## 5. Items still awaiting approval before launch

Per the spec's "do not invent facts" instruction, the following are left as
clearly marked drafts rather than published content:

- **Ventures**: EcoGreen Solar, ZeeFrames, and Ummah & Humanity exist in
  `src/content/ventures.ts` with `status: "draft"` and are filtered out of
  every public listing (`src/lib/ventures.ts`) until role, description,
  logo, and URL are confirmed. ZAPTA Technologies has no confirmed public
  URL yet — its card renders without an outbound CTA until one is added.
- **Insights**: all 12 seeded articles (6 "migrate from LinkedIn", 6
  "recommended original") are `published: false` in their MDX frontmatter
  (`src/content/insights/*.mdx`). The archive therefore shows the approved
  "New perspectives are being prepared" empty state, and each article page
  displays a visible "Draft — not yet published" banner and is excluded
  from the sitemap and RSS feed. Flip `published: true` and add a real
  `date` once an article's approved text is in place — the homepage
  "Featured insights" section already displays the 4 approved titles
  regardless of publish status, per the exact copy in the spec.
- **Appearances**: the PTV and Boardroom Pakistan entries
  (`src/content/appearances.ts`) use the source links found during
  research but are marked `confirmed: false` pending the exact program
  name, broadcast date, and approved stills called for in the spec.
- **Privacy notice**: `/privacy` is a structurally complete draft based on
  the spec's outline and the tools actually wired into this codebase
  (Vercel + Resend, no analytics yet). It's marked `noindex` and carries an
  on-page "Draft" notice until it's reviewed against final hosting/analytics
  choices and approved as a legal document.
- **Portraits, venture logos, insight covers**: local SVG placeholders in
  `public/images/` with correct aspect ratios and an in-image label. Swap
  them for the real files (same filenames, or update the `src` in
  `src/content/*.ts` and the relevant page/component) once approved.
- **Newsletter delivery**: `/api/newsletter` accepts and validates
  submissions but isn't connected to an email service provider yet — it
  logs instead. Wire it to your ESP of choice the same way `/api/contact`
  is wired to Resend.
- **Analytics**: none installed. Add a privacy-friendly analytics snippet
  (or consent-managed GA4) and update `/privacy` accordingly before launch.

## 6. Verification results

- `npm run build` — succeeds, all 29 routes prerender/compile cleanly.
- `npm run lint` — no errors or warnings.
- `npx tsc --noEmit` — no type errors.
- Manually verified in a real browser (Chromium via Playwright during
  development, not a project dependency): all primary routes return 200,
  the mobile menu opens/closes and traps no focus, and a full contact-form
  submission round-trips through `/api/contact` end to end (dev fallback
  logs the enquiry).
- Color contrast checked against WCAG 2.2 AA for every text/background
  combination in the design system — all pairs measured ≥ 5:1 (body text
  on paper: 6.29:1; accent links on paper: 5.2–5.7:1; inverse text on ink:
  16.67:1).
- Not yet run: automated cross-browser testing (Safari/Firefox/Edge) and a
  Lighthouse pass — do this against a deployed preview before launch.

## 7. Content editing

- **Site-wide settings** (name, email, socials, default SEO): `src/content/site.ts`.
- **Profile / bios / beliefs**: `src/content/profile.ts`.
- **Ventures**: `src/content/ventures.ts` — set `status: "published"` to go live.
- **Speaking topics**: `src/content/speaking-topics.ts`.
- **Appearances**: `src/content/appearances.ts` — set `confirmed: true` once approved.
- **Insights**: one `.mdx` file per article in `src/content/insights/`,
  frontmatter matches the content model in the spec (title, slug, excerpt,
  category, tags, date, canonicalUrl, featured, published, sourceType).
  Set `published: true` and a real ISO `date` to go live.

This is intentionally a typed-local-content model, not a CMS. If Ateeq or
his team will publish regularly, the recommended migration path is Git-based
MDX with a lightweight editor (e.g. Tina CMS or Decap CMS) pointed at
`src/content/insights/`, or a headless CMS (Sanity/Contentful) with a thin
adapter replacing the functions in `src/lib/insights.ts` and
`src/lib/ventures.ts` — the rest of the app only depends on those functions'
return types (`src/lib/types.ts`), not on the filesystem.

## 8. Image replacement

Every placeholder lives in `public/images/` and is a labeled SVG at the
correct aspect ratio:

- `portraits/hero-portrait.svg` (4:5) — homepage hero.
- `portraits/about-environmental.svg` (4:5) — About page.
- `portraits/headshot-square.svg` (1:1) — author block / media kit.
- `portraits/speaking-landscape.svg` (3:2) — Speaking page.
- `insights/placeholder-XX.svg` (16:9) — currently unused (insight cards are
  typographic by design, per the spec's "real covers or typographic cards,
  not stock thumbnails" guidance); wire up if real cover art is approved.
- `ventures/zapta-logo.svg`, `ventures/sync4tech-logo.svg` — not yet rendered
  in the UI (spec calls for monochrome logos "unless brand guidelines
  require color" — add once approved marks exist).

Replace a file at the same path to swap it in with no code changes, or
update the `src` reference in the relevant `src/content/*.ts` file/page.

## 9. Deployment (Vercel)

1. Push this repository to GitHub (already done if you're reading this on
   `github.com/ateeqasif/ateeqasif-website`).
2. In Vercel: **New Project** → import this repo → framework preset
   `Next.js` is auto-detected → deploy.
3. Add the environment variables from §4 in Vercel's Project Settings →
   Environment Variables (Production **and** Preview).
4. Point `ateeqasif.com` at the Vercel project (Project Settings → Domains),
   configure the `www` → apex redirect (or vice versa) and verify HTTPS.
5. Verify `/sitemap.xml` and `/robots.txt` resolve, then submit the sitemap
   in Google Search Console.
6. Re-run `/insights/rss.xml` after publishing the first article to confirm
   the feed validates.
7. Rate limiting on `/api/contact` is in-memory and per-instance — fine for
   a single Vercel Node runtime instance, but reset on redeploy/cold start.
   For higher-traffic production use, swap it for a shared store (Upstash
   Redis or Vercel KV); the integration point is clearly marked in
   `src/app/api/contact/route.ts`.

## 10. Known upstream advisory

`npm audit` reports 3 high-severity advisories in `postcss`/`sharp`, both
transitive dependencies bundled by `next@16.2.12` itself. There is no
non-breaking fix available upstream at time of writing (the only suggested
fix is downgrading to `next@9`, which is not viable). Monitor and upgrade
Next.js when a patched release ships.
