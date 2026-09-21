# Three Pillars Marketing Website — Design Brainstorm

> Product of buildingit. All rights reserved to buildingit.

## Note on the brief
The user supplied a detailed specification PDF that fully prescribes the visual direction
(premium dark SaaS in the vein of Linear/Vercel/Stripe/Raycast). The spec is treated as the
ground-truth design contract. The three approaches below are recorded for completeness, but
the choice is dictated by the spec: **Obsidian Monolith**.

## Three stylistic approaches
1. **Obsidian Monolith** — Pure-black, silver-gradient premium dark SaaS: frosted glass,
   starfields, glow-on-hover. Precision and gravity. *(Probability: 0.09)*
2. **Ledger Paper** — Warm off-white fintech look with ink-blue accents and ruled-paper
   textures, evoking accounting heritage. *(Probability: 0.02)*
3. **Circuit Bazaar** — Vibrant India-tech maximalism with saffron/teal neon on deep navy,
   dense modular grids. *(Probability: 0.01)*

## Chosen approach: Obsidian Monolith (per spec)

- **Design Movement**: Contemporary "premium dark developer SaaS" — Linear / Vercel /
  Stripe dark / Raycast. Engineering-grade minimalism with cinematic motion.
- **Core Principles**:
  1. Pure black (#000) canvas; light is information — anything bright earns attention.
  2. Frosted-glass materiality: `bg-white/[0.03]`, `border-white/[0.06]`, backdrop blur.
  3. Motion as teasing: progressive disclosure, staggered reveals, parallax star-map.
  4. Technical credibility: exact numbers (153+, 27, NIC v1.1, AES-256-GCM), monospace
     terminal artifacts.
- **Color Philosophy**: Monochrome silver-on-black conveys neutrality and seriousness;
  the single emerald accent (`text-emerald-400`) marks "live/active" states only. No purple
  gradients. White CTA buttons on black read as the highest-contrast action possible.
- **Layout Paradigm**: Vertical narrative scroll with asymmetric section internals —
  offset two-column splits (copy left, artifact right), sprawl-cloud converging to a single
  card, star-map module grid with parallax. Avoid uniform centered stacks except the hero.
- **Signature Elements**:
  1. The giant silver-gradient "153+" counter.
  2. Frosted glass cards with hover glow (white/5–10 box-shadow).
  3. Starfield/particle canvas + comet cursor trail.
- **Interaction Philosophy**: The site behaves like the product — responsive, instant,
  confirming. Hover states reveal hidden detail (module lists tease on hover), buttons
  compress `scale(0.97)` at 160ms, sections materialize on scroll.
- **Animation**: 1.5s intro particle burst forming the "III" logo → fades to hero.
  IntersectionObserver fade-up reveals with ~120–200ms stagger; counter counts up on view;
  navbar transparent→frosted on scroll; parallax card drift on mouse; all UI transitions
  under 300ms with `cubic-bezier(0.23,1,0.32,1)`; respect `prefers-reduced-motion`.
- **Typography System**: Sora (600–800) for headings and the giant numerals; Inter
  (400–600) for body/UI; JetBrains Mono for terminal mockups and badges. Headline scale
  text-4xl→text-7xl; body text-zinc-400.
- **Brand Essence**: Three Pillars — the only app a business will ever need; for Indian
  SMBs and global operators who are done with tool sprawl. Adjectives: unified, precise,
  self-reliant.
- **Brand Voice**: Clean, direct, confident; specific claims over hype. Examples:
  "One app. Every business function." / "Replace 20+ tools. Keep one login." Ban:
  "revolutionary", "game-changing", "Welcome to our website".
- **Wordmark & Logo**: Roman numeral "III" inside a rounded square, white on black; the
  wordmark "Three Pillars" set in Sora SemiBold beside it.
- **Signature Brand Color**: Silver-white gradient (`from-white to-zinc-400`) — the brand
  reads as "light on black"; emerald-400 reserved as the live-status accent.

## Fixed content facts (do not drift)
- 153+ modules, 27 categories, 20+ tools replaced.
- CTAs → https://usethreepillars.online ; pages: / , /modules , /pricing , /about.
- AI copilot: SilverBat. Company: buildingit. Contact: hello@buildingit.today.
- © 2026 buildingit. All rights reserved.

## Style Decisions
- Secondary pages must use the same Obsidian Monolith language as the homepage: black
  starfield atmosphere, silver-gradient display type, frosted technical artifacts, and at
  least one Three Pillars-specific visual motif per page.
- The Modules page should read as a "module universe," not a flat list: categories are
  treated as engineered clusters with visible counts, technical labels, and constellation
  grid logic.
- About page voice should be manifesto-like and proof-led: every broad value statement must
  be anchored to a concrete Three Pillars claim such as one data layer, 153+ modules,
  Indian compliance, self-hosting, or SilverBat.
