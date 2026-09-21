/**
 * Three Pillars. Compare page: the fragmented stack vs one platform.
 * A product of buildingit. © 2026 buildingit. All rights reserved.
 * Style: Obsidian Monolith. pure black, silver/white, frosted glass.
 */
import Reveal from "@/components/effects/Reveal";
import CountUp from "@/components/effects/CountUp";
import { Check, X, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const STACK_ITEMS = [
  { tool: "Accounting software", cost: "₹18,000/yr" },
  { tool: "CRM platform", cost: "₹86,000/yr" },
  { tool: "HR & payroll suite", cost: "₹72,000/yr" },
  { tool: "Inventory system", cost: "₹48,000/yr" },
  { tool: "Project management", cost: "₹54,000/yr" },
  { tool: "Helpdesk software", cost: "₹42,000/yr" },
  { tool: "e-Invoicing add-on", cost: "₹15,000/yr" },
  { tool: "Docs & spreadsheets", cost: "₹38,000/yr" },
  { tool: "Marketing tools", cost: "₹60,000/yr" },
  { tool: "…and 11 more tools", cost: "₹2,00,000+/yr" },
];

const MATRIX = [
  { feature: "Single login for everything", stack: false, tp: true },
  { feature: "One unified data layer", stack: false, tp: true },
  { feature: "Reports that agree with each other", stack: false, tp: true },
  { feature: "GST, e-Invoicing (NIC v1.1), e-Way Bill built in", stack: false, tp: true },
  { feature: "TDS/TCS, PF/ESI/PT compliance", stack: false, tp: true },
  { feature: "AI copilot across every function", stack: false, tp: true },
  { feature: "One invoice, one vendor, one renewal", stack: false, tp: true },
  { feature: "Integration projects required", stack: true, tp: false },
  { feature: "Per-tool subscription sprawl", stack: true, tp: false },
  { feature: "Data silos between departments", stack: true, tp: false },
];

export default function Compare() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container">
        <Reveal className="text-center">
          <p className="font-mono text-xs tracking-widest text-zinc-500 mb-4">THE MATH</p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">
            <span className="text-silver">20+ tools vs One platform</span>
          </h1>
          <p className="text-zinc-400 mt-5 max-w-xl mx-auto leading-relaxed">
            What a typical growing business pays for a fragmented stack, and what happens when it all becomes one subscription.
          </p>
        </Reveal>

        {/* Cost stack vs one platform */}
        <div className="grid lg:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto items-stretch">
          <Reveal>
            <div className="glass-card rounded-2xl p-7 h-full">
              <p className="font-mono text-xs tracking-widest text-zinc-500">
                THE FRAGMENTED STACK
              </p>
              <div className="mt-5 space-y-2.5">
                {STACK_ITEMS.map((s) => (
                  <div
                    key={s.tool}
                    className="flex items-center justify-between text-sm border-b border-white/[0.05] pb-2.5"
                  >
                    <span className="text-zinc-300">{s.tool}</span>
                    <span className="font-mono text-zinc-500">{s.cost}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-zinc-400">Typical total</span>
                <span className="font-display text-2xl font-bold text-zinc-200">
                  ₹6,00,000+/yr
                </span>
              </div>
              <p className="font-mono text-[11px] text-zinc-600 mt-3 tracking-wider">
                + INTEGRATION COSTS + 20 RENEWALS + 20 SUPPORT QUEUES
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-2xl p-7 h-full border border-white/25 bg-white/[0.05] shadow-[0_0_60px_rgba(255,255,255,0.08)] flex flex-col">
              <p className="font-mono text-xs tracking-widest text-zinc-400">
                THREE PILLARS
              </p>
              <div className="flex-1 flex flex-col items-center justify-center text-center py-10">
                <p className="font-display text-7xl font-bold text-silver">
                  <CountUp end={1} duration={1200} />
                </p>
                <p className="text-zinc-400 mt-2">platform · subscription · vendor</p>
                <p className="font-display text-3xl font-bold text-white mt-8">
                  ₹2,499<span className="text-sm text-zinc-500 font-normal">/user/month</span>
                </p>
                <p className="text-sm text-zinc-500 mt-2">
                  100+ core modules on Business · all 153+ on Enterprise
                </p>
              </div>
              <Link
                href="/pricing"
                className="press inline-flex items-center justify-center gap-1.5 rounded-full bg-white text-black font-medium px-6 py-3 text-sm w-full hover:bg-zinc-200"
              >
                See Pricing
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Feature matrix */}
        <div className="max-w-3xl mx-auto mt-24">
          <Reveal>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight text-center">
              Side by side
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="glass-card rounded-2xl mt-10 overflow-hidden">
              <div className="grid grid-cols-[1fr_88px_88px] sm:grid-cols-[1fr_120px_120px] text-sm">
                <div className="px-5 py-4 font-mono text-[11px] tracking-widest text-zinc-500 border-b border-white/[0.2]">
                  CAPABILITY
                </div>
                <div className="px-2 py-4 font-mono text-[11px] tracking-widest text-zinc-500 border-b border-white/[0.2] text-center">
                  20+ TOOLS
                </div>
                <div className="px-2 py-4 font-mono text-[11px] tracking-widest text-white border-b border-white/[0.2] text-center bg-white/[0.03]">
                  THREE PILLARS
                </div>
                {MATRIX.map((row) => (
                  <div key={row.feature} className="contents">
                    <div className="px-5 py-3.5 text-zinc-300 border-b border-white/[0.05]">
                      {row.feature}
                    </div>
                    <div className="px-2 py-3.5 border-b border-white/[0.05] flex items-center justify-center">
                      {row.stack ? (
                        <Check className="w-4 h-4 text-zinc-500" />
                      ) : (
                        <X className="w-4 h-4 text-zinc-700" />
                      )}
                    </div>
                    <div className="px-2 py-3.5 border-b border-white/[0.05] flex items-center justify-center bg-white/[0.03]">
                      {row.tp ? (
                        <Check className="w-4 h-4 text-zinc-200" />
                      ) : (
                        <X className="w-4 h-4 text-zinc-700" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="rounded-2xl border border-white/[0.12] p-6 sm:p-8 mt-14">
              <p className="font-mono text-xs tracking-widest text-zinc-500">FURTHER READING</p>
              <div className="mt-5 grid sm:grid-cols-3 gap-4">
                <Link
                  href="/insights/tally-alternative-2026"
                  className="press group rounded-xl border border-white/[0.1] p-4 hover:bg-white/[0.04] transition-colors"
                >
                  <p className="text-sm font-semibold text-white group-hover:text-zinc-200 leading-snug">
                    Looking for a Tally alternative? An honest comparison
                  </p>
                  <p className="font-mono text-[11px] text-zinc-500 mt-2.5 tracking-wider">GUIDES · 7 MIN</p>
                </Link>
                <Link
                  href="/insights/zoho-one-cost-analysis"
                  className="press group rounded-xl border border-white/[0.1] p-4 hover:bg-white/[0.04] transition-colors"
                >
                  <p className="text-sm font-semibold text-white group-hover:text-zinc-200 leading-snug">
                    The real cost of Zoho One for a growing Indian team
                  </p>
                  <p className="font-mono text-[11px] text-zinc-500 mt-2.5 tracking-wider">MARKET WATCH · 5 MIN</p>
                </Link>
                <Link
                  href="/insights/real-cost-of-saas-sprawl"
                  className="press group rounded-xl border border-white/[0.1] p-4 hover:bg-white/[0.04] transition-colors"
                >
                  <p className="text-sm font-semibold text-white group-hover:text-zinc-200 leading-snug">
                    The real cost of SaaS sprawl for Indian businesses
                  </p>
                  <p className="font-mono text-[11px] text-zinc-500 mt-2.5 tracking-wider">PERSPECTIVE · 6 MIN</p>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
