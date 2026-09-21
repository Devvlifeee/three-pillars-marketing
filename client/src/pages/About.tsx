/**
 * Three Pillars. About page: a manifesto from a precise infrastructure company.
 * Proof-led copy anchored to concrete claims (153+ modules, one data layer,
 * NIC v1.1, AES-256, SilverBat). Starfield atmosphere + III monolith motif.
 * A product of buildingit. © 2026 buildingit. All rights reserved.
 * Style: Obsidian Monolith. pure black, silver/white, frosted glass.
 */
import { Mail, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/effects/Reveal";
import Starfield from "@/components/effects/Starfield";
import CountUp from "@/components/effects/CountUp";
import { Logo } from "@/components/Layout";
import { APP_URL } from "@/lib/modules";

const STORY = [
  {
    label: "01",
    title: "The Problem We Saw",
    body: "The average business runs on 20+ different SaaS tools. Twenty logins. Twenty data silos. Twenty invoices. Integration projects that never end, and reports that never agree with each other.",
    proof: "20+ TOOLS · 20+ SILOS · 0 SINGLE SOURCE OF TRUTH",
  },
  {
    label: "02",
    title: "Our Answer",
    body: "Three Pillars is a single platform that replaces the entire stack: 153+ deeply integrated modules across 27 categories. It is not a marketplace of loosely connected apps. It is a unified system where every module shares the same data layer, the same permission model, and the same AI copilot, SilverBat.",
    proof: "153+ MODULES · 27 CATEGORIES · 1 DATA LAYER · 1 LOGIN",
  },
  {
    label: "03",
    title: "India-First, Global-Ready",
    body: "Indian compliance is built into the core, not bolted on: GST returns, NIC v1.1 e-Invoicing with IRN generation, e-Way Bills, TDS/TCS, PF/ESI/PT, and ROC/MCA filings are first-class modules. Multi-currency and multi-entity support keep it ready for global operations.",
    proof: "GST · NIC v1.1 · e-WAY BILL · TDS/TCS · PF/ESI · ROC/MCA",
  },
  {
    label: "04",
    title: "Built by buildingit",
    body: "buildingit exists to end software fragmentation. Three Pillars is delivered as a fully managed SaaS: subscribe, choose how many user licenses you need, and your team gets instant access. AES-256 encryption on tokens at rest and a complete audit trail on every action come standard.",
    proof: "MANAGED SAAS · PER-USER LICENSING · AES-256 · FULL AUDIT TRAIL",
  },
];

const PILLARS = [
  {
    numeral: "I",
    title: "Unified",
    desc: "153+ modules on one data layer with one permission model. One login replaces 20+ tools. No connectors, no sync jobs, no silos.",
  },
  {
    numeral: "II",
    title: "Subscription-Simple",
    desc: "One subscription, licensed per user. Add or remove licenses as your team changes. No servers, no maintenance, no IT overhead.",
  },
  {
    numeral: "III",
    title: "AI-Native",
    desc: "SilverBat proposes multi-step action chains across modules. Plan, confirm, execute. Built into the core from day one.",
  },
];

const STATS = [
  { end: 153, suffix: "+", label: "MODULES" },
  { end: 27, suffix: "", label: "CATEGORIES" },
  { end: 20, suffix: "+", label: "TOOLS REPLACED" },
  { end: 1, suffix: "", label: "PLATFORM" },
];

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Starfield atmosphere */}
      <div className="absolute inset-0 h-[640px] opacity-45 pointer-events-none">
        <Starfield className="w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      </div>

      <div className="container relative z-10">
        {/* Manifesto hero */}
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 items-end">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <Logo size={52} />
              <span className="font-mono text-xs tracking-widest text-zinc-500">
                A PRODUCT OF BUILDINGIT
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-tight max-w-2xl">
              <span className="text-silver">Software should consolidate, not fragment.</span>
            </h1>
            <p className="text-zinc-400 mt-6 max-w-xl leading-relaxed">
              Three Pillars is our answer to SaaS sprawl: one platform, 153+ modules,
              one data layer. Built by buildingit.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="glass-card rounded-2xl p-6 font-mono text-xs hidden lg:block">
              <p className="text-zinc-500 tracking-widest mb-4">BY THE NUMBERS</p>
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <p className="text-3xl font-display font-bold text-silver">
                      <CountUp end={s.end} suffix={s.suffix} duration={1400} />
                    </p>
                    <p className="text-zinc-500 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Story: spine-connected manifesto chapters */}
        <div className="mt-24 max-w-4xl relative">
          <div className="absolute left-[7px] sm:left-[9px] top-3 bottom-3 w-px bg-gradient-to-b from-white/30 via-white/[0.08] to-transparent" />
          <div className="space-y-14">
            {STORY.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="relative pl-10 sm:pl-14">
                  <span className="absolute left-0 top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-white/30 bg-black flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                  </span>
                  <span className="font-mono text-xs text-zinc-600 tracking-widest">
                    CHAPTER {s.label}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mt-2">
                    {s.title}
                  </h2>
                  <p className="text-zinc-400 mt-4 leading-relaxed max-w-2xl">{s.body}</p>
                  <p className="font-mono text-[11px] text-zinc-600 tracking-widest mt-5 border-l border-white/15 pl-4">
                    {s.proof}
                  </p>
                  {s.label === "04" && (
                    <a
                      href="mailto:hello@usethreepillars.com"
                      className="inline-flex items-center gap-2 mt-5 text-sm text-zinc-300 hover:text-white transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      hello@usethreepillars.com
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* The Three Pillars: monolith motif */}
        <div className="mt-32">
          <Reveal>
            <p className="font-mono text-xs tracking-widest text-zinc-500 mb-4">
              THE NAME IS THE ARCHITECTURE
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Three pillars hold everything up
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5 mt-12">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 130}>
                <div
                  className="glass-card rounded-2xl p-7 h-full group relative overflow-hidden"
                  style={{ marginTop: i === 1 ? "0" : undefined }}
                >
                  <span
                    aria-hidden
                    className="absolute -top-6 -right-2 font-display font-semibold text-[7rem] leading-none text-white/[0.04] group-hover:text-white/[0.07] transition-colors select-none pointer-events-none"
                  >
                    {p.numeral}
                  </span>
                  <span className="font-mono text-xs text-zinc-600 tracking-widest">
                    PILLAR {p.numeral}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-white mt-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-3 leading-relaxed relative z-10">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <Reveal delay={100}>
          <div className="mt-28 glass-card rounded-2xl p-10 sm:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-35 pointer-events-none">
              <Starfield className="w-full h-full" />
            </div>
            <div className="relative z-10">
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight">
                <span className="text-silver">One platform. Every function. Zero sprawl.</span>
              </h2>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="press mt-8 inline-flex items-center gap-2 rounded-full bg-white text-black font-medium px-7 py-3.5 hover:bg-zinc-200"
              >
                Launch Three Pillars
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
