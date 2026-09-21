/**
 * Three Pillars. What's New page: changelog-style updates feed.
 * A product of buildingit. © 2026 buildingit. All rights reserved.
 * Style: Obsidian Monolith. pure black, silver/white, frosted glass.
 */
import Reveal from "@/components/effects/Reveal";

const UPDATES = [
  {
    date: "JUL 2026",
    tag: "LAUNCH",
    title: "Three Pillars is live",
    body: "The full platform launches with 153+ modules across 27 categories, billing, accounting, CRM, HR, inventory, manufacturing, compliance, and the complete Three Workspace suite.",
  },
  {
    date: "JUL 2026",
    tag: "AI",
    title: "SilverBat AI Copilot",
    body: "SilverBat ships built-in: describe what you need, review its multi-step plan, confirm, and watch it execute across modules.",
  },
  {
    date: "JUN 2026",
    tag: "COMPLIANCE",
    title: "NIC v1.1 e-Invoicing & e-Way Bill",
    body: "IRN generation on the government NIC v1.1 schema, plus e-Way Bill creation, validation, and tracking, natively inside billing.",
  },
  {
    date: "JUN 2026",
    tag: "INTEGRATION",
    title: "Google & Microsoft workspace sync",
    body: "Connect Google Workspace and Microsoft 365: mail, calendar, and drive sync into Three Mail, Three Calendar, and Three Drive.",
  },
  {
    date: "MAY 2026",
    tag: "PLATFORM",
    title: "Multi-entity & multi-currency",
    body: "Run multiple companies, branches, and currencies under one account with consolidated reporting.",
  },
];

export default function Updates() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="font-mono text-xs tracking-widest text-zinc-500 mb-4">CHANGELOG</p>
            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">
              <span className="text-silver">What's new</span>
            </h1>
            <p className="text-zinc-400 mt-5 leading-relaxed">
              The platform moves fast. Here's what shipped recently.
            </p>
          </Reveal>

          <div className="relative mt-16">
            <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-white/25 via-white/[0.07] to-transparent" />
            <div className="space-y-12">
              {UPDATES.map((u, i) => (
                <Reveal key={u.title} delay={Math.min(i, 3) * 80}>
                  <div className="relative pl-10">
                    <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full border border-white/30 bg-black flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                    </span>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-[11px] text-zinc-500 tracking-widest">{u.date}</span>
                      <span className="font-mono text-[10px] tracking-widest px-2 py-0.5 rounded-full border border-white/15 bg-white/[0.04] text-zinc-400">
                        {u.tag}
                      </span>
                    </div>
                    <h2 className="font-display text-xl font-semibold text-white mt-2.5">{u.title}</h2>
                    <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{u.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

