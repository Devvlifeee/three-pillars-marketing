/**
 * Three Pillars. Investors page.
 * A product of buildingit. © 2026 buildingit. All rights reserved.
 * Style: Obsidian Monolith. pure black, silver gradients, frosted glass, starfield.
 * Sections: Hero · The Problem · Market Opportunity · Business Model · Moat ·
 *           Traction (placeholder slots) · Vision · Deck Request
 */
import { useState, type FormEvent } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  TrendingUp,
  Layers,
  ShieldCheck,
  IndianRupee,
  Users2,
  Landmark,
  CheckCircle2,
  Loader2,
  FileText,
  Route,
  Building2,
  CalendarClock,
  Check,
  Minus,
  X,
  Rocket,
  Smartphone,
  Store,
  BrainCircuit,
  Globe2,
} from "lucide-react";
import { SilverBatOutlineIcon } from "@/components/SilverBatOutline";
import Starfield from "@/components/effects/Starfield";
import Reveal from "@/components/effects/Reveal";
import CountUp from "@/components/effects/CountUp";
import { trpc } from "@/lib/trpc";

/* Section: Hero */
function Hero() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <Starfield className="w-full h-full" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="container relative z-10 text-center">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-zinc-500 mb-5">FOR INVESTORS</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto">
            <span className="text-silver">The operating system for Indian business.</span>
          </h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-zinc-400 mt-7 max-w-2xl mx-auto leading-relaxed text-lg">
            Three Pillars replaces the 20+ fragmented tools an Indian business
            runs on with one platform, 153+ modules, built-in statutory
            compliance, and an AI copilot that executes across all of it.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="#deck"
              className="press inline-flex items-center gap-2 rounded-full bg-white text-black font-medium px-7 py-3.5 hover:bg-zinc-200"
            >
              Request the Deck
              <FileText className="w-4 h-4" />
            </a>
            <Link
              href="/roadmap"
              className="press inline-flex items-center gap-2 rounded-full border border-white/20 text-white font-medium px-7 py-3.5 hover:bg-white/[0.06] hover:border-white/30 transition-colors"
            >
              See the Roadmap
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Section: The Problem */
function Problem() {
  const pains = [
    {
      stat: "20+",
      label: "tools per business",
      desc: "The average growing business juggles separate billing, accounting, HR, CRM, and inventory software, none of which talk to each other.",
    },
    {
      stat: "2×",
      label: "compliance burden",
      desc: "GST returns, e-invoicing (NIC v1.1), e-Way Bills, TDS, PF/ESI, statutory workflows most global SaaS simply doesn't handle.",
    },
    {
      stat: "0",
      label: "unified data layer",
      desc: "Fragmented tools mean fragmented data. Owners fly blind because their revenue, payroll, and stock live in different silos.",
    },
  ];
  return (
    <section className="relative py-24">
      <div className="container">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-zinc-500 mb-4">01, THE PROBLEM</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight max-w-2xl">
            Indian businesses run on fragmented, non-compliant software
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {pains.map((p, i) => (
            <Reveal key={p.label} delay={i * 120}>
              <div className="glass-card rounded-2xl p-7 h-full">
                <span className="font-display text-5xl font-bold text-silver">{p.stat}</span>
                <h3 className="font-display text-lg font-semibold text-white mt-3">{p.label}</h3>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Section: Market Opportunity */
function Market() {
  const rings = [
    {
      tier: "TAM",
      headline: "63M+ MSMEs",
      desc: "India has one of the world's largest small-and-medium business bases, digitizing rapidly under GST, UPI, and mandatory e-invoicing.",
      icon: Landmark,
    },
    {
      tier: "SAM",
      headline: "Digitally active businesses",
      desc: "Businesses already paying for software, accounting, billing, payroll, or CRM, and feeling the pain of running many disconnected tools.",
      icon: Users2,
    },
    {
      tier: "SOM",
      headline: "Consolidation-ready teams",
      desc: "Companies with 5 to 500 employees whose stack costs more than a single Three Pillars subscription. This is our immediate, winnable segment.",
      icon: TrendingUp,
    },
  ];
  return (
    <section className="relative py-24">
      <div className="container">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-zinc-500 mb-4">02, THE MARKET</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight max-w-2xl">
            A generational software consolidation wave
          </h2>
          <p className="text-zinc-400 mt-5 max-w-2xl leading-relaxed">
            Regulation is forcing every Indian business onto digital rails. E-invoicing mandates keep expanding to smaller turnover thresholds
            every year. The spend exists today; it is simply scattered across
            20+ vendors per customer.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {rings.map((r, i) => (
            <Reveal key={r.tier} delay={i * 120}>
              <div className="glass-card rounded-2xl p-7 h-full group">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-white/[0.2] bg-white/[0.03] text-zinc-300 group-hover:text-white transition-colors">
                    <r.icon className="w-5 h-5" />
                  </span>
                  <span className="font-mono text-xs tracking-widest text-zinc-500">{r.tier}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-white mt-5">{r.headline}</h3>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Section: Business Model */
function Model() {
  const layers = [
    {
      icon: IndianRupee,
      title: "Per-user SaaS licensing",
      desc: "Subscription revenue that scales with every seat: Student & Starter (free acquisition tiers) → Business (₹2,499/user/mo, up to 50) → Enterprise (custom, unlimited).",
      tag: "TODAY",
    },
    {
      icon: TrendingUp,
      title: "Built-in expansion revenue",
      desc: "Customers grow into the platform, more users, more modules. The 5 → 50 → unlimited seat ladder and the 100+ → 153+ module ladder drive natural upgrades without a sales push.",
      tag: "TODAY",
    },
    {
      icon: Layers,
      title: "Marketplace & intelligence layer",
      desc: "The roadmap adds a developer module marketplace (platform take-rate) and a predictive intelligence layer (premium tier) on top of the same data foundation.",
      tag: "ROADMAP",
    },
  ];
  return (
    <section className="relative py-24">
      <div className="container">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-zinc-500 mb-4">04, BUSINESS MODEL</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight max-w-2xl">
            Compounding SaaS economics
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {layers.map((l, i) => (
            <Reveal key={l.title} delay={i * 120}>
              <div className="glass-card rounded-2xl p-7 h-full group">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-white/[0.2] bg-white/[0.03] text-zinc-300 group-hover:text-white transition-colors">
                    <l.icon className="w-5 h-5" />
                  </span>
                  <span
                    className={`font-mono text-[10px] tracking-widest px-2.5 py-1 rounded-full border ${
                      l.tag === "TODAY"
                        ? "text-zinc-200 border-white/30 bg-white/[0.06]"
                        : "text-zinc-400 border-white/25 bg-white/[0.03]"
                    }`}
                  >
                    {l.tag}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-white mt-5">{l.title}</h3>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{l.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div className="mt-8 glass-card rounded-xl p-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[13px] text-zinc-400">
            <span>Starter · Free</span>
            <ArrowRight className="w-4 h-4 text-zinc-600" />
            <span>Business · ₹2,499/user/mo</span>
            <ArrowRight className="w-4 h-4 text-zinc-600" />
            <span>Enterprise · Custom, unlimited seats</span>
          </div>
        </Reveal>

        {/* Unit economics: illustrative seat expansion from published pricing */}
        <Reveal delay={250}>
          <div className="mt-10 glass-card rounded-2xl p-7 sm:p-9">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h3 className="font-display text-xl font-semibold text-white">
                How one customer compounds
              </h3>
              <span className="font-mono text-[10px] tracking-widest text-zinc-500 border border-white/20 rounded-full px-2.5 py-1">
                ILLUSTRATIVE, FROM PUBLISHED PRICING
              </span>
            </div>
            <p className="text-sm text-zinc-400 mt-3 max-w-2xl leading-relaxed">
              The same account, growing on the published Business plan at
              ₹2,499 per user per month. No upsell motion required; revenue
              follows the customer's own headcount.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-7">
              {[
                { stage: "Year 1", seats: "5 seats", acv: "₹1.5L", note: "annual run-rate as the team starts" },
                { stage: "Growing", seats: "20 seats", acv: "₹6.0L", note: "same account, 4x revenue, zero acquisition cost" },
                { stage: "At cap", seats: "50 seats", acv: "₹15.0L", note: "then graduates to Enterprise, custom pricing" },
              ].map((s, i) => (
                <div key={s.stage} className="silver-card rounded-xl p-5 relative">
                  <span className="font-mono text-[10px] tracking-widest text-zinc-500">{s.stage.toUpperCase()}</span>
                  <p className="font-display text-3xl font-bold text-silver mt-2">{s.acv}<span className="text-sm text-zinc-500 font-normal"> /yr</span></p>
                  <p className="text-sm text-zinc-300 mt-1">{s.seats}</p>
                  <p className="text-xs text-zinc-500 mt-2 leading-relaxed">{s.note}</p>
                  {i < 2 && (
                    <ArrowRight className="hidden sm:block absolute -right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 z-10" />
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs text-zinc-600 mt-5">
              Figures are the arithmetic of the public price list (2,499 x seats x 12), not reported revenue.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Section: Competitive Landscape */
function Landscape() {
  const rows: { cap: string; tp: boolean | "partial"; tally: boolean | "partial"; zoho: boolean | "partial"; sap: boolean | "partial" }[] = [
    { cap: "Full statutory stack (GST, e-Invoicing, e-Way, TDS, PF/ESI, ROC)", tp: true, tally: "partial", zoho: "partial", sap: "partial" },
    { cap: "153+ modules on one data layer", tp: true, tally: false, zoho: "partial", sap: false },
    { cap: "AI copilot that executes across modules", tp: true, tally: false, zoho: "partial", sap: false },
    { cap: "Built-in workspace suite (docs, sheets, mail, chat)", tp: true, tally: false, zoho: "partial", sap: false },
    { cap: "One subscription, per-user pricing", tp: true, tally: false, zoho: true, sap: false },
    { cap: "MSME-accessible entry price", tp: true, tally: true, zoho: true, sap: false },
  ];
  const mark = (v: boolean | "partial") =>
    v === true ? (
      <Check className="w-4 h-4 text-white mx-auto" />
    ) : v === "partial" ? (
      <Minus className="w-4 h-4 text-zinc-500 mx-auto" />
    ) : (
      <X className="w-4 h-4 text-zinc-700 mx-auto" />
    );
  return (
    <section className="relative py-24">
      <div className="container">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-zinc-500 mb-4">06, LANDSCAPE</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight max-w-2xl">
            Where we sit against the field
          </h2>
          <p className="text-zinc-400 mt-5 max-w-2xl leading-relaxed">
            Incumbents each own a slice: ledgers, app bundles, or enterprise ERP.
            None combine full Indian statutory depth, one data layer, and an AI
            copilot at an MSME price point.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-12 glass-card rounded-2xl overflow-hidden overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-white/[0.2]">
                  <th className="text-left font-mono text-[11px] tracking-widest text-zinc-500 px-6 py-4 font-normal">CAPABILITY</th>
                  <th className="font-display text-[13px] text-white px-4 py-4 whitespace-nowrap">Three Pillars</th>
                  <th className="font-display text-[13px] text-zinc-400 px-4 py-4">Ledger tools</th>
                  <th className="font-display text-[13px] text-zinc-400 px-4 py-4">App bundles</th>
                  <th className="font-display text-[13px] text-zinc-400 px-4 py-4">Enterprise ERP</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.cap} className="border-b border-white/[0.08] last:border-0">
                    <td className="px-6 py-3.5 text-zinc-300">{r.cap}</td>
                    <td className="px-4 py-3.5 bg-white/[0.03]">{mark(r.tp)}</td>
                    <td className="px-4 py-3.5">{mark(r.tally)}</td>
                    <td className="px-4 py-3.5">{mark(r.zoho)}</td>
                    <td className="px-4 py-3.5">{mark(r.sap)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <p className="text-xs text-zinc-600 mt-4">
          Categories represent typical incumbents (desktop ledger software, multi-app suites, legacy enterprise ERP). Partial marks indicate the capability exists but requires add-ons, third-party tools, or higher tiers.
        </p>
      </div>
    </section>
  );
}

/* Section: Moat */
function Moat() {
  const moats = [
    {
      icon: ShieldCheck,
      title: "Compliance depth",
      desc: "NIC v1.1 e-invoicing, GST engines, e-Way Bills, TDS/TCS, PF/ESI, statutory plumbing that takes years to build and certify. Global SaaS can't shortcut it.",
    },
    {
      icon: Layers,
      title: "One data layer, 153+ modules",
      desc: "Every module writes to the same data foundation. The switching cost compounds with each module a customer adopts, replacing Three Pillars means replacing everything.",
    },
    {
      icon: SilverBatOutlineIcon,
      title: "SilverBat AI action chains",
      desc: "An AI copilot that plans and executes multi-step workflows across modules is only possible because the modules share one platform. Point solutions can't replicate it.",
    },
    {
      icon: Route,
      title: "India-first, then beyond",
      desc: "The hardest compliance market first. The roadmap's multi-country expansion reuses the same statutory architecture for new geographies.",
    },
  ];
  return (
    <section className="relative py-24">
      <div className="container">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-zinc-500 mb-4">05, DEFENSIBILITY</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight max-w-2xl">
            Why this compounds and can't be copied quickly
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-5 mt-14">
          {moats.map((m, i) => (
            <Reveal key={m.title} delay={(i % 2) * 120}>
              <div className="glass-card rounded-2xl p-7 h-full group">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-white/[0.2] bg-white/[0.03] text-zinc-300 group-hover:text-white transition-colors">
                  <m.icon className="w-5 h-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-white mt-4">{m.title}</h3>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Section: Traction (real platform facts + placeholder slots) */
function Traction() {
  const platformFacts = [
    { value: 153, suffix: "+", label: "Modules live in production" },
    { value: 27, suffix: "", label: "Business categories covered" },
    { value: 15, suffix: "", label: "Built-in workspace tools" },
    { value: 6, suffix: "", label: "Statutory compliance engines" },
  ];
  const placeholders = [
    "Businesses onboarded",
    "Invoices processed",
    "GMV through the platform",
    "Month-over-month growth",
  ];
  return (
    <section className="relative py-24">
      <div className="container">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-zinc-500 mb-4">07, TRACTION</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight max-w-2xl">
            What's already built, and what we report next
          </h2>
          <p className="text-zinc-400 mt-5 max-w-2xl leading-relaxed">
            The platform is live. The numbers below on the left are shipped
            product facts; commercial metrics are shared in the investor deck as
            they mature.
          </p>
        </Reveal>
        <div className="grid lg:grid-cols-2 gap-5 mt-14">
          <Reveal>
            <div className="glass-card rounded-2xl p-7 h-full">
              <h3 className="font-mono text-xs tracking-widest text-zinc-200 mb-6">SHIPPED, VERIFIABLE TODAY</h3>
              <div className="grid grid-cols-2 gap-6">
                {platformFacts.map(f => (
                  <div key={f.label}>
                    <span className="font-display text-4xl font-bold text-silver">
                      <CountUp end={f.value} duration={1500} suffix={f.suffix} />
                    </span>
                    <p className="text-sm text-zinc-400 mt-1.5">{f.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="rounded-2xl p-7 h-full border border-dashed border-white/15 bg-white/[0.01]">
              <h3 className="font-mono text-xs tracking-widest text-zinc-500 mb-6">COMMERCIAL METRICS, SHARED IN THE DECK</h3>
              <div className="grid grid-cols-2 gap-6">
                {placeholders.map(p => (
                  <div key={p}>
                    <span className="font-display text-4xl font-bold text-zinc-700 select-none">···</span>
                    <p className="text-sm text-zinc-500 mt-1.5">{p}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-zinc-600 mt-6 leading-relaxed">
                We publish commercial numbers only when they're real and
                verifiable. Request the deck below for the current figures.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* Section: Vision */
function Vision() {
  const arc = [
    { phase: "Now", title: "Consolidate the stack", desc: "153+ modules replace 20+ tools for every business function." },
    { phase: "Next", title: "Open the platform", desc: "The Marketplace lets developers build and sell modules, Three Pillars becomes infrastructure." },
    { phase: "Beyond", title: "Run the business", desc: "The Intelligence Layer predicts cash flow, flags compliance risk, and SilverBat executes autonomously." },
  ];
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <Starfield className="w-full h-full" />
      </div>
      <div className="container relative z-10">
        <Reveal className="text-center">
          <p className="font-mono text-xs tracking-widest text-zinc-500 mb-4">08, THE VISION</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight max-w-3xl mx-auto">
            <span className="text-silver">From software consolidation to business infrastructure</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {arc.map((a, i) => (
            <Reveal key={a.phase} delay={i * 150}>
              <div className="glass-card rounded-2xl p-7 h-full text-center">
                <span className="font-mono text-xs tracking-widest text-zinc-500">{a.phase.toUpperCase()}</span>
                <h3 className="font-display text-xl font-semibold text-white mt-3">{a.title}</h3>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300} className="text-center mt-10">
          <Link
            href="/roadmap"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
          >
            Explore the full roadmap
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* Section: buildingit, the company behind the revolution */
function Buildingit() {
  const principles = [
    {
      icon: Layers,
      title: "Consolidation as a thesis",
      desc: "buildingit exists to end software fragmentation. Where the industry ships one more point tool, we collapse entire categories into one system.",
    },
    {
      icon: Rocket,
      title: "Ship the whole platform",
      desc: "Three Pillars launched with 153+ modules, not an MVP with three. The bet: businesses switch for completeness, not for another partial tool.",
    },
    {
      icon: ShieldCheck,
      title: "Compliance-first engineering",
      desc: "Statutory workflows are treated as core product, built and maintained in-house, because trust in filings is what keeps a business on the platform.",
    },
    {
      icon: SilverBatOutlineIcon,
      title: "AI as the operating layer",
      desc: "SilverBat is not a feature bolted on. Every module is built to be operated by AI, positioning the platform for the agent-driven decade ahead.",
    },
  ];
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-25">
        <Starfield className="w-full h-full" />
      </div>
      <div className="container relative z-10">
        <Reveal className="text-center">
          <p className="font-mono text-xs tracking-widest text-zinc-500 mb-4">09, THE COMPANY</p>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.05] px-4 py-1.5 text-xs font-mono tracking-widest text-zinc-300">
            <Building2 className="w-3.5 h-3.5" />
            BUILDINGIT
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mt-6 max-w-3xl mx-auto">
            <span className="text-silver">buildingit is engineering a software revolution</span>
          </h2>
          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto leading-relaxed">
            Three Pillars is not a standalone product. It is the flagship of
            buildingit, a product company with a single conviction: the next
            decade of business software belongs to unified platforms, not
            thousand-tool stacks. Backing Three Pillars is backing that thesis.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-5 mt-14">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 120}>
              <div className="glass-card rounded-2xl p-7 h-full group">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-white/[0.2] bg-white/[0.03] text-zinc-300 group-hover:text-white transition-colors">
                  <p.icon className="w-5 h-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-white mt-4">{p.title}</h3>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Section: Use of funds (what the round accelerates, no amounts) */
function UseOfFunds() {
  const items = [
    {
      icon: Smartphone,
      title: "Mobile",
      desc: "Native apps that put approvals, billing, and SilverBat in every owner's pocket.",
      stage: "ACCELERATES NEXT",
    },
    {
      icon: Store,
      title: "Marketplace",
      desc: "Open the module platform to developers and take a platform share of every install.",
      stage: "OPENS THE PLATFORM",
    },
    {
      icon: BrainCircuit,
      title: "Intelligence Layer",
      desc: "Predictive cash flow, compliance risk flags, and autonomous SilverBat execution as a premium tier.",
      stage: "PREMIUM REVENUE",
    },
    {
      icon: Globe2,
      title: "Beyond Borders",
      desc: "Reuse the statutory architecture to enter new geographies with hard compliance regimes.",
      stage: "EXPANDS TAM",
    },
  ];
  return (
    <section className="relative py-24">
      <div className="container">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-zinc-500 mb-4">10, THE ASK</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight max-w-2xl">
            What the round accelerates
          </h2>
          <p className="text-zinc-400 mt-5 max-w-2xl leading-relaxed">
            The platform is built and live; capital goes to distribution and the
            next four layers of the roadmap, not to finishing the product.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 100}>
              <div className="glass-card rounded-2xl p-6 h-full group flex flex-col">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/[0.2] bg-white/[0.03] text-zinc-300 group-hover:text-white transition-colors">
                  <it.icon className="w-4.5 h-4.5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-white mt-4">{it.title}</h3>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed flex-1">{it.desc}</p>
                <span className="font-mono text-[10px] tracking-widest text-zinc-500 mt-4">{it.stage}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="text-sm text-zinc-500 mt-8 max-w-2xl">
            Round details, terms, and current commercial metrics are shared in
            the deck. <a href="#deck" className="text-zinc-300 underline underline-offset-4 hover:text-white transition-colors">Request it below.</a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* Section: Deck Request */
function DeckRequest() {
  const [form, setForm] = useState({ name: "", email: "", firm: "", note: "" });
  const [done, setDone] = useState(false);
  const requestDeck = trpc.leads.requestDeck.useMutation({
    onSuccess: () => setDone(true),
  });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    requestDeck.mutate({
      name: form.name.trim(),
      email: form.email.trim(),
      firm: form.firm.trim() || undefined,
      note: form.note.trim() || undefined,
    });
  };

  return (
    <section id="deck" className="relative py-24">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <Reveal className="text-center">
            <p className="font-mono text-xs tracking-widest text-zinc-500 mb-4">11, NEXT STEP</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Request the investor deck
            </h2>
            <p className="text-zinc-400 mt-5 leading-relaxed">
              Leave your details and we'll share the current deck, market
              sizing, commercial metrics, and the round.
            </p>
            <p className="text-sm text-zinc-500 mt-4">
              Prefer email? Write to us directly at{" "}
              <a
                href="mailto:corporate@buildingit.in"
                className="text-zinc-300 underline underline-offset-4 hover:text-white transition-colors"
              >
                corporate@buildingit.in
              </a>
              .
            </p>
          </Reveal>
          <Reveal delay={150}>
            {done ? (
              <div className="glass-card rounded-2xl p-10 mt-10 text-center">
                <CheckCircle2 className="w-10 h-10 text-zinc-200 mx-auto" />
                <h3 className="font-display text-xl font-semibold text-white mt-4">Request received</h3>
                <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                  Thank you, we'll be in touch at {form.email} shortly with the deck.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="glass-card rounded-2xl p-7 sm:p-9 mt-10 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="inv-name" className="block text-sm text-zinc-300 mb-2">Name *</label>
                    <input
                      id="inv-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full rounded-lg border border-white/25 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="inv-email" className="block text-sm text-zinc-300 mb-2">Email *</label>
                    <input
                      id="inv-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full rounded-lg border border-white/25 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="you@fund.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="inv-firm" className="block text-sm text-zinc-300 mb-2">Firm / Fund</label>
                  <input
                    id="inv-firm"
                    type="text"
                    value={form.firm}
                    onChange={e => setForm(f => ({ ...f, firm: e.target.value }))}
                    className="w-full rounded-lg border border-white/25 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Optional"
                  />
                </div>
                <div>
                  <label htmlFor="inv-note" className="block text-sm text-zinc-300 mb-2">Note</label>
                  <textarea
                    id="inv-note"
                    rows={3}
                    value={form.note}
                    onChange={e => setForm(f => ({ ...f, note: e.target.value }))}
                    className="w-full rounded-lg border border-white/25 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
                    placeholder="Anything specific you'd like to see? (optional)"
                  />
                </div>
                {requestDeck.isError && (
                  <p className="text-sm text-red-400">
                    Something went wrong, please try again, or write to corporate@buildingit.in.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={requestDeck.isPending}
                  className="press w-full inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium px-7 py-3.5 hover:bg-zinc-200 disabled:opacity-60"
                >
                  {requestDeck.isPending ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <FileText className="w-4 h-4" />
                  )}
                  {requestDeck.isPending ? "Sending…" : "Request the Deck"}
                </button>
                <p className="text-xs text-zinc-600 text-center">
                  Your details are stored securely and used only to share investor materials.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function Investors() {
  return (
    <>
      <Hero />
      <div className="hairline" />
      <Problem />
      <div className="hairline" />
      <Market />
      <div className="hairline" />
      <WhyNow />
      <div className="hairline" />
      <Model />
      <div className="hairline" />
      <Moat />
      <div className="hairline" />
      <Landscape />
      <div className="hairline" />
      <Traction />
      <div className="hairline" />
      <Vision />
      <div className="hairline" />
      <Buildingit />
      <div className="hairline" />
      <UseOfFunds />
      <div className="hairline" />
      <DeckRequest />
    </>
  );
}
/* Section: Why Now (regulatory + market forcing functions) */
function WhyNow() {
  const waves = [
    {
      year: "2017",
      title: "GST unifies indirect tax",
      desc: "One nation, one tax. Every business, however small, now files digitally. Software stops being optional.",
    },
    {
      year: "2020",
      title: "e-Invoicing goes live",
      desc: "IRN generation becomes mandatory for large enterprises (₹500 Cr+ turnover), while UPI normalizes digital payments for even the smallest merchants.",
    },
    {
      year: "2023",
      title: "Thresholds keep dropping",
      desc: "The e-invoicing mandate reaches businesses above ₹5 Cr turnover, pulling millions of MSMEs into mandatory digitization.",
    },
    {
      year: "Now",
      title: "The consolidation window",
      desc: "Businesses forced online are paying for many disconnected tools. Whoever consolidates that spend first wins the relationship for a decade.",
    },
  ];
  return (
    <section className="relative py-24">
      <div className="container">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-zinc-500 mb-4">03, WHY NOW</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight max-w-2xl">
            Regulation built the rails. We run on them.
          </h2>
          <p className="text-zinc-400 mt-5 max-w-2xl leading-relaxed">
            India's compliance mandates have done the hardest part of customer
            education for us: every business must operate digitally. What remains
            fragmented is the software they do it with.
          </p>
        </Reveal>
        <div className="relative mt-14">
          <div className="absolute left-[15px] lg:left-0 lg:right-0 lg:top-[15px] top-3 bottom-3 w-px lg:w-auto lg:h-px bg-gradient-to-b lg:bg-gradient-to-r from-white/30 via-white/10 to-white/30" />
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-5">
            {waves.map((w, i) => (
              <Reveal key={w.year} delay={i * 120}>
                <div className="relative pl-10 lg:pl-0 lg:pt-10">
                  <span className="absolute left-0 top-0 lg:left-0 w-8 h-8 rounded-full border border-white/30 bg-black flex items-center justify-center">
                    <CalendarClock className="w-3.5 h-3.5 text-zinc-300" />
                  </span>
                  <span className="font-mono text-xs tracking-widest text-zinc-500">{w.year}</span>
                  <h3 className="font-display text-lg font-semibold text-white mt-2">{w.title}</h3>
                  <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
