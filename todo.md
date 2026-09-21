# Website Expansion TODO

- [x] Roadmap page — silver high-contrast cards, connected by a stream, alternating left/right, teasing style (later reworked to Three Pillars' own future per user request)
- [x] Product showcase section on Home — tabbed "See it in action" (mockups later replaced by illustrative capability flows per user request — no fake product UI)
- [x] Plan comparison table under pricing cards
- [x] Interactive license calculator on Pricing (user slider, monthly/annual)
- [x] Industries / use-cases section (Home)
- [x] Comparison page — Three Pillars vs the fragmented stack (Tally/Zoho/20 tools)
- [x] Contact / Book-a-demo page (upgraded from mailto to database-backed form)
- [x] Open Graph social share image + meta tags
- [x] Legal pages — Privacy Policy, Terms of Service
- [x] What's New / updates page (changelog style)
- [x] Update navbar + footer links for new pages
- [x] Screenshot pass, checkpoint, deliver

## Round 2 — user-requested fixes

- [x] Remove fake AI-generated product UI mockups (replaced with illustrative flows, labeled)
- [x] Brighten footer fonts to white
- [x] Rework Roadmap into Three Pillars' own future (not other buildingit apps)

## Round 3 — "build all this" expansion

- [x] Upgrade project to full-stack (db, server, user)
- [x] Lead-capture backend: demo_requests + notify_subscribers tables, tRPC leads router, vitest tests (6 passing)
- [x] Contact form wired to backend with success/error states
- [x] Notify-me email capture on Roadmap page
- [x] Security & Compliance page (/security)
- [x] FAQ hub page with search + category filters (/faq)
- [x] 27 module category detail pages (/modules/:slug) with plan badges + prev/next nav
- [x] Migration page — Tally/Zoho/Excel (/migrate)
- [x] sitemap.xml (40 URLs) + robots.txt + JSON-LD structured data
- [x] Announcement bar (dismissible, sessionStorage)
- [x] Branded starfield 404 page
- [x] Scroll-to-top button
- [x] Footer/nav links updated for all new pages
- [x] Verification screenshot pass (desktop + mobile), tests green, checkpoint d99ebf25

## Round 4 — investor package

- [x] deck_requests table + tRPC investor router + vitest tests
- [x] /investors page: problem, market opportunity (TAM/SAM/SOM), business model, moat, vision narrative, roadmap connection
- [x] Traction section with clearly labeled placeholder slots (no fabricated metrics)
- [x] Deck request capture form (stored in DB)
- [x] Footer link to /investors; sitemap update
- [x] Screenshot pass, tests, checkpoint, deliver

## Round 5 — home page refresh + copy cleanup

- [x] Redesign home page with a fresher, premium look (restructure hero, tighter sections, refined visual rhythm)
- [x] Remove ALL em-dashes (—) and double-hyphens (--) from user-visible copy across all pages, rewriting sentences naturally
- [x] Verify screenshots, tests, checkpoint, deliver (checkpoint 3b922d28)

## Round 6 — problem section + flow section rework

- [x] Problem section: make tool chips (QuickBooks, Xero, Tally...) livelier, less dull
- [x] Problem section: make Three Pillars the large dominant element, not a small card
- [x] Replace "Every action connects" terminal box + 4 tabs with a visual one-data-layer story: all business domains feed one data core, no terminal UI
- [x] Show SilverBat AI as helpful across every domain within the new section
- [x] Run tests (9/9 pass), verify screenshots, checkpoint, deliver

## Round 7: Silver outlines + SilverBat visual rework (user feedback)

- [x] All card/box outlines site-wide changed to silver high-contrast borders
- [x] Remove the orb/globe image behind the SilverBat terminal
- [x] Replace SilverBat terminal window with a non-terminal AI visual representation
- [x] Ensure no terminal-style UI remains anywhere on the site
- [x] Remove green "AI-Powered" sparkle badge and any similar green AI labels everywhere
- [x] Run tests, verify screenshots, checkpoint, deliver

## Round 8: Home page repetition audit (user feedback)

- [x] Audit Home.tsx section by section for repeated stats/phrases (153+, 27 categories, 20+ tools, one login/one data layer/one bill, SilverBat mentions)
- [x] Rework repeated copy so each section carries distinct information
- [x] Verify visually across full home page, run tests, checkpoint, deliver

## Round 9: Investor-grade additions (user approved, buildingit narrative instead of founders)

- [x] "buildingit revolution" section: the company behind Three Pillars, consolidation revolution narrative (no founder bios)
- [x] "Why now" section: regulatory/market timeline (GST e-invoicing thresholds, UPI, MSME digitization)
- [x] Unit economics illustration: seat-expansion math from published pricing (clearly labeled illustrative, no fabricated data)
- [x] Competitive landscape matrix: Three Pillars vs ledger tools / app bundles / enterprise ERP (generic categories, no named competitors)
- [x] Use of funds / what the round accelerates (roadmap-linked, no amounts)
- [x] Verify visually, run tests, checkpoint, deliver

## Round 10: Nav update

- [x] Add Investors link to top navbar, then reverted per user: keep Investors in footer only (navbar unchanged)
- [x] Verify, checkpoint, deliver

## Round 11: Plain-language monolith card + day-in-the-life story (user feedback)

- [x] Replace "0 integrations / 0 sync jobs / 1 vendor" stats with plain-language benefits users understand
- [x] Add a "how you actually use one app" walkthrough after the SaasSprawl section (day-in-the-life, no jargon)
- [x] Verify visually, run tests, checkpoint, deliver with further site suggestions

## Round 12: Connected-ecosystem visual (user feedback: Tuesday timeline feels like a billing app)

- [x] Replace OneAppInPractice timeline with an eye-catching connected-ecosystem visual: workspace, creative studio, database, marketing, CRM, email, chat, tax, salary, automation, e-commerce modules orbiting/linked to a SilverBat-powered core
- [x] Show data flowing together into one core with SilverBat and a security ring (all data together, more secure)
- [x] Verify visually (desktop + mobile), run tests, checkpoint, deliver

## Round 13: Merge duplicate sections + transparent logo (user feedback)

- [x] Remove OneDataLayer section (duplicates the ecosystem orbit message); fold "Enter once / Report anywhere / Audit anytime" into the ecosystem section
- [x] Orbit core: remove black box behind logo, show big transparent Three Pillars logo
- [x] Verify visually, run tests, checkpoint, deliver

## Round 14: SilverBat logo + unique data-flow redesign (user feedback: orbit ring is outdated, logo not original)

- [x] Extract the EXACT SilverBat mark from the user's uploaded image (no redesign): remove black background, keep identical shape/gradient, upscale cleanly
- [x] Replace the III mark at the ecosystem center with the SilverBat logo
- [x] Scrap the circular orbit ring; design a unique modern data-flow visual (no solar-system look)
- [x] Verify visually, run tests, checkpoint, deliver

## Round 16 — Borderline SilverBat icons (after rollback to d1fcabbe)

- [x] Create a borderline-only (stroke, no fill) SilverBat mark asset for small icon usage
- [x] Replace sparkle icons representing SilverBat (hero badge, copilot section, "sees everything" card, Investors icons) with the borderline mark
- [x] Keep the filled SilverBat logo in the "Everything connects" backplane untouched
- [x] Verify visually, run tests, checkpoint, deliver

## Round 17 — Small-size SilverBat icon (user feedback: tiny outline looks bad)

- [x] Create a small-size-optimized SilverBat icon: bolder strokes / solid silhouette that reads clearly at 20-24px
- [x] Swap all small icon usages (hero badge, "sees everything" card, Investors card icons) to the new small icon; keep larger copilot mark as appropriate
- [x] Verify at real rendered size, run tests, checkpoint, deliver

## Round 18 — Insights/blog section (user picked option 5)

- [x] Write 5 launch articles (SaaS sprawl cost, GST e-invoicing deadlines, Tally migration guide, AI needs unified data, choosing software that scales)
- [x] Build /insights hub page with featured article + article grid, matching black/silver theme
- [x] Build /insights/:slug article page with clean reading typography
- [x] Wire nav (footer + header decision) and cross-links; register routes
- [x] Verify visually, run tests, checkpoint, deliver

## Round 19 — Real articles: government updates + competitor news

- [x] Research real GST/e-invoicing/MSME government updates (official sources, 2025-2026)
- [x] Research real competitor news: Zoho, Tally, and similar (credible sources)
- [x] Save research findings with source URLs to a notes file
- [x] Rewrite/expand Insights articles with real facts, dates, and source links
- [x] Verify, test, checkpoint, deliver

## Round 20 — Apple-style typography
- [x] Replace current fonts with SF Pro system stack + Inter fallback (Google Fonts)
- [x] Apply Apple-like headline letter-spacing and weight hierarchy in index.css
- [x] Verify across pages, run tests, checkpoint, deliver

## Round 21 — Heavier font (user feedback: letters are so thin)
- [x] Swap to a font family that renders with more weight/presence; load heavier weights (Manrope 500-800)
- [x] Bump headline/body weights so text no longer reads thin on the dark background (body 500, headlines 800)
- [x] Verify visually, run tests, checkpoint, deliver

## Round 22 — Back to original font, refined (user: Manrope too thick, wants the first font but better)
- [x] Restore Inter as the primary font (the original pre-change font) using the variable/optical-sized version
- [x] Tune weights between the two extremes: body 450, headlines 700, balanced tracking
- [x] Verify visually, run tests, checkpoint, deliver

## Round 23 — Black & white theme + semicircle top bar (user request)
- [x] Convert theme to strict black and white: pure white text/borders/accents, no gray-silver tints in copy (raise zinc grays to white/near-white)
- [x] Keep the logo (Three Pillars mark + SilverBat marks) in silver only; silver gradient stays exclusive to logos
- [x] Restyle top navbar as a pill with fully rounded semicircle ends and a visible border
- [x] Verify visually, run tests, checkpoint, deliver

## Round 24 — Light theme: white background, black font (user request)
- [x] Invert global CSS: white page background, black text; remap white-opacity utilities (text/bg/border white/*, zinc remaps) to black-opacity equivalents
- [x] Invert component utilities: glass-card, silver-card, hairline, roadmap-stream, live-dot, starfield/comet/intro effects to light equivalents
- [x] Layout: pill navbar, announcement bar, footer, mobile menu, scroll-top button to light styling; keep silver logo (add contrast treatment if needed on white)
- [x] Sweep pages for hardcoded bg-black/text-white/black-only imagery and fix contrast issues (gradients to-black/from-black flipped, compliance bg inverted, SilverBat mark inverted for visibility, LIVE NOW badge fixed, ThemeProvider set to light)
- [x] Verify all pages visually (desktop + mobile), run tests, checkpoint, deliver

## Round 25 — Squircle logo chips (user request)
- [x] Find all square logo chip containers (navbar, footer, hero platform card, elsewhere) and change to rounded squircle corners (single Logo component in Layout.tsx, borderRadius = 30% of size, applies to navbar 32px, footer 40px, Home 40/72px, About 52px)
- [x] Verify visually on desktop + mobile, checkpoint, deliver

## Round 26 — Transparent black logo, no background chip (user request)
- [x] Recreate the "III" logo mark pixel-to-pixel from the existing PNG as black-on-transparent (Pillow luminance-alpha extract with FLOOR=60, exact source pixels recolored black; /manus-storage/three-pillars-mark-black_c7ecb609.png)
- [x] Upload new logo asset and swap LOGO_URL; remove squircle/chip background so logo sits directly on white
- [x] Make the top bar translucent (frosted glass) in both idle (white 0.35 + blur) and scrolled (white 0.55 + blur) states
- [x] Verify navbar, footer, Home, About, Contact on desktop + mobile; tsc clean, 9/9 tests pass; checkpoint, deliver

## Round 27 — Crisp logo (user: logo is blurred)
- [x] Rebuild the transparent black "III" mark at high resolution: used the user's existing 1920x1920 original logo (same mark), luminance-alpha background removal + rim component removal → 986x986 crisp asset (/manus-storage/three-pillars-mark-black-hires_74444d13.png)
- [x] Swap asset in Layout.tsx LOGO_URL, verified sharp rendering in navbar and platform card; tsc clean, 9/9 tests pass

## Round 28 — Restore original logo (user: "you changed my logo i want the original logo")
- [x] Uploaded the original logo artwork unmodified (1920x1920 downscaled to 512x512 for web, dark chip + silver III preserved exactly; /manus-storage/three-pillars-logo-512_beb9eb76.png) and set as LOGO_URL
- [x] Verified navbar and platform card on desktop + mobile; tsc clean, 9/9 tests pass; checkpoint, deliver

## Round 29 — Identify the correct logo (user: "the first logo", wants to point it out visually)
- [x] Built a numbered contact sheet of every logo asset and showed it to the user
- [x] User selected Logo 4 (three-pillars-logo-transparent.png, Roman-column mark on light chip) and wants it to look BLACK
- [x] Produced black variants of Logo 4 (full-invert and black-mark-on-chip drafts)
- [x] Extracted mark from Logo 4 as black transparent PNG (traced version — user approved shape but edges jagged)
- [x] Rebuild mark on canvas as clean geometry: measure original proportions, draw straight-edged symmetric pillars/plinths at high res, show for approval
- [x] After approval: apply sitewide via LOGO_URL, verify navbar/footer/platform card desktop + mobile, checkpoint, deliver

## Round 30 — Google discoverability (SEO)
- [x] index.html: proper title, meta description, keywords, Open Graph + Twitter card tags, canonical, og:image
- [x] JSON-LD structured data: Organization (buildingit) + SoftwareApplication (Three Pillars) + WebSite
- [x] robots.txt allowing crawl + pointing to sitemap
- [x] sitemap.xml listing all public routes with correct domain (fixed malformed /investors line, added /insights hub + 7 articles = 49 URLs)
- [x] Favicon from the new logo mark so search results/tabs show branding (favicon.ico + 192/512 PNG + apple-touch-icon)
- [x] Per-route document titles on client-side navigation (usePageTitle hook mounted in Layout)
- [x] Verify meta output, tsc + tests, checkpoint, deliver with Google Search Console instructions

## Round 31 — buildingit logo in footer/intro + intro forms the real logo (user request)
- [x] Convert uploaded buildingit logo webp to optimized PNG, upload as webdev asset
- [x] Footer: show the buildingit logo image where "a buildingit product" text appears
- [x] Intro overlay: use the buildingit logo image for the "from buildingit" credit
- [x] Intro particle formation: form the exact Three Pillars column-mark logo shape instead of the generic III
- [x] Verify desktop + mobile, tsc + tests, checkpoint, deliver

## Round 32 — intro rework: crisp edges, longer, three-act sequence (user request)
- [x] Remove grainy particle formation (bad edges) from IntroOverlay
- [x] Act 1: "The only app you need for your business" fades in, then out
- [x] Act 2: Three Pillars logo + name fade in, then out
- [x] Act 3: "a product of buildingit" + buildingit logo fade in, then overlay fades to page
- [x] Longer overall duration so each act is readable (~4.9s total)
- [x] Verify desktop + mobile, tsc + tests, checkpoint, deliver

## Round 33 — intro fixes (user bug report + new request)
- [x] Investigate why Act 1 tagline never appears for the user (Act 1 was only 1.5s and initial act state was 0 for the first 100ms; now act starts at 1 and holds 3.1s)
- [x] Act 1: type "The only app you need for your business." word by word
- [x] Act 2: show the Three Pillars name clearly alongside the logo, held long enough to read
- [x] Extend total intro to at least 5 seconds of visible content (~7.4s timeline)
- [x] Verify all three acts render, tsc + tests, checkpoint, deliver

## Round 34 — Act 1 tagline still not visible for user (bug report)
- [x] Diagnose root cause of Act 1 never appearing on the live site (Round 24 inversion layer: `.text-black { color:#fff !important }` made the tagline white-on-white)
- [x] Fix so "The only app you need for your business." reliably types out on every load (inline #0a0a0a color on Act 1 tagline and Act 2 name, immune to utility remapping)
- [x] Verify all three acts on the production-like preview, tsc + tests, checkpoint, deliver (Act 1 black tagline + Act 3 credit both captured in screenshots)

## Round 35 — SEO blog expansion (high-intent search terms)
- [x] Review existing Insights data structure and article format
- [x] Write new SEO-targeted articles (Tally alternative, GST billing software, Zoho alternative, business software cost, HR software India, etc.)
- [x] Cross-link new articles from relevant pages (/compare, /migrate, /pricing)
- [x] Add new article URLs to sitemap.xml with fresh lastmod
- [x] Verify pages render, tsc + tests, checkpoint, deliver

## Round 36 — Dual-audience repositioning (business + individual users)
- [x] Update hero and home copy to speak to both businesses and individuals
- [x] Build a dedicated /personal page (what an individual gets: in-house tools, premium access)
- [x] Add For Individuals to navigation and footer
- [x] Reflect individual/personal plan in pricing page copy (Starter Free plan framing)
- [x] Update SEO metadata (titles, descriptions, structured data) for dual audience
- [x] Add /personal to sitemap.xml
- [x] Verify pages render, tsc + tests, checkpoint, deliver

## Round 37 — Intro tagline dual-audience update
- [x] Update intro Act 1 typed tagline to "The only app you need. For business. For life."
- [x] Verify intro renders, tsc + tests, checkpoint, deliver

## Round 38 — Email address update (user request)
- [x] Replace hello@buildingit.today (and any other old emails) with hello@usethreepillars.com for general/sales contexts
- [x] Use support@usethreepillars.com in support-specific contexts (FAQ support answer, Security responsible disclosure)
- [x] Use corporate@buildingit.in on the Investors page
- [x] Update JSON-LD structured data / legal pages / footer with new emails
- [x] Verify pages render, tsc + tests, checkpoint, deliver

## Round 38b — Remove em-dashes / double hyphens from user-visible copy (user request)
- [x] Sweep all pages/components for em-dashes (—) and double hyphens (--) in visible copy, rewrite sentences naturally (hero, Home, Layout footer, Personal, Insights hub + articles, page titles/meta, index.html meta)
- [x] Verify hero and other sections read cleanly, tsc + tests, checkpoint, deliver

## Round 39 — Surface support and corporate emails visibly (user request)
- [x] Contact page: show all three emails (hello, support, corporate) as clearly labeled contact channels
- [x] Investors page: display corporate@buildingit.in as a visible mailto link under the deck request intro
- [x] Verify, tsc + tests, checkpoint, deliver

## Round 40 — Intro tagline on one line (user request)
- [x] Make the Act 1 intro tagline render on a single line (no wrap), scaling font size responsively so it fits on mobile too
- [x] Verify visually (desktop 1280px and mobile 375px), tsc + tests, checkpoint, deliver

## Round 41 — 4-tier pricing with free Student plan (user request)
- [x] Review current Pricing page structure and plan data
- [x] Design 4 tiers: Student (free: workspace, creative studios, code, arts & engineering student apps), Starter, Business, Enterprise
- [x] Implement new plan cards on Pricing page (4-column grid, FOR STUDENTS badge) with student verification note
- [x] Update related copy: FAQ page (2 new student Q&As), Pricing FAQ, comparison table (Student column), meta description, Terms of Service, Investors revenue ladder
- [x] Verify visually, tsc + tests, checkpoint, deliver

## Round 42 — Highlight Three Pages (Notion alternative) in Student plan (user request)
- [x] Add Three Pages callout to Student tier features on Pricing page
- [x] Add Three Pages row/mention in comparison table and student FAQ answers
- [x] Research competitor student offers: Google (Workspace for Education / Drive), Microsoft (365 Education / OneDrive), Notion (Education plan) storage and features
- [x] Report findings to user with a recommended Student cloud storage allowance
- [x] Add cloud storage spec to Student plan features and comparison table
- [x] Add SilverBat AI Copilot to ALL plans (USP): tiered limits — Student/Starter included, Business advanced, Enterprise unlimited/custom
- [x] Update comparison table SilverBat row and related copy (FAQ page SilverBat answer updated)
- [x] Bump Student cloud storage from 25 GB to 100 GB (user wants students to never worry about deleting work); ladder: Student 100 GB, Starter 50 GB, Business 500 GB/user, Enterprise custom
- [x] Verify, tsc + tests, checkpoint, deliver

## Round 43 — Rename Three Pages to Three Spaces, drop Notion-replaced framing (user request)
- [x] Rename "Three Pages" to "Three Spaces" everywhere (modules catalog, Home marquee, Pricing card, comparison table, FAQs)
- [x] Remove "your Notion, replaced" framing; repositioned as "one connected workspace for projects, docs & wikis"
- [x] Verify, tsc + tests, checkpoint, deliver
