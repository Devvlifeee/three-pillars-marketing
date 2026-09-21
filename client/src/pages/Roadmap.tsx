/**
 * Three Pillars. Roadmap page: "The future of Three Pillars", phased platform
 * expansion milestones as silver high-contrast cards alternating left/right,
 * connected by a flowing luminous stream. Teasing tone: names + hints, not specs.
 * A product of buildingit. © 2026 buildingit. All rights reserved.
 * Style: Obsidian Monolith. pure black, silver/white, frosted glass.
 */
import Reveal from "@/components/effects/Reveal";
import Starfield from "@/components/effects/Starfield";
import NotifyForm from "@/components/NotifyForm";
import { Lock, ArrowUpRight } from "lucide-react";

const MILESTONES = [
  {
    name: "153+ Modules",
    status: "LIVE NOW",
    live: true,
    tease: "The foundation is laid. Billing to compliance to workspace, one platform, live today.",
    year: "2026",
  },
  {
    name: "SilverBat Unleashed",
    status: "IN THE LAB",
    live: false,
    tease: "The copilot stops waiting for instructions. Autonomous workflows that run your routine while you sleep.",
    year: "NEXT",
  },
  {
    name: "Three Pillars Mobile",
    status: "IN THE LAB",
    live: false,
    tease: "The whole platform, in your pocket. Approvals, invoices, and insights from anywhere.",
    year: "TBA",
  },
  {
    name: "The Marketplace",
    status: "IN THE LAB",
    live: false,
    tease: "Beyond 153. An ecosystem where developers extend the platform with modules of their own.",
    year: "TBA",
  },
  {
    name: "Intelligence Layer",
    status: "IN THE LAB",
    live: false,
    tease: "Your data starts talking. Forecasts, anomalies, and answers before you ask the question.",
    year: "TBA",
  },
  {
    name: "Beyond Borders",
    status: "IN THE LAB",
    live: false,
    tease: "India-first, not India-only. Multi-country compliance for businesses that outgrow the map.",
    year: "TBA",
  },
];

export default function Roadmap() {
  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 h-[640px] opacity-45 pointer-events-none">
        <Starfield className="w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      </div>

      <div className="container relative z-10">
        <Reveal className="text-center">
          <p className="font-mono text-xs tracking-widest text-zinc-500 mb-4">
            THE THREE PILLARS ROADMAP
          </p>
          <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-tight">
            <span className="text-silver">Where Three Pillars goes next</span>
          </h1>
          <p className="text-zinc-400 mt-5 max-w-xl mx-auto leading-relaxed">
            153+ modules was the starting line. Here's a glimpse of where the
            platform is headed, the details, you'll have to wait for.
          </p>
        </Reveal>

        {/* The stream: alternating cards connected by a luminous spine */}
        <div className="relative max-w-4xl mx-auto mt-24">
          {/* Central stream */}
          <div
            aria-hidden
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px roadmap-stream"
          />

          <div className="space-y-16 sm:space-y-24">
            {MILESTONES.map((v, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={v.name} delay={80}>
                  <div
                    className={`relative flex ${
                      left ? "justify-start" : "justify-end"
                    }`}
                  >
                    {/* Node on the stream */}
                    <span
                      aria-hidden
                      className={`absolute left-1/2 -translate-x-1/2 top-10 w-3 h-3 rounded-full ${
                        v.live
                          ? "bg-zinc-100 shadow-[0_0_16px_rgba(255,255,255,0.8)]"
                          : "bg-zinc-300 shadow-[0_0_14px_rgba(255,255,255,0.6)]"
                      }`}
                    />
                    {/* Connector from stream to card */}
                    <span
                      aria-hidden
                      className={`hidden sm:block absolute top-[46px] h-px w-[8%] bg-gradient-to-r from-white/40 to-transparent ${
                        left
                          ? "right-1/2 mr-1.5 rotate-180"
                          : "left-1/2 ml-1.5"
                      }`}
                    />

                    <div
                      className={`w-full sm:w-[44%] silver-card rounded-2xl p-7 group ${
                        left ? "sm:mr-auto" : "sm:ml-auto"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className={`font-mono text-[10px] tracking-widest px-2.5 py-1 rounded-full border ${
                            v.live
                              ? "text-zinc-100 border-white/30 bg-white/[0.06]"
                              : "text-zinc-400 border-white/15 bg-white/[0.04]"
                          }`}
                        >
                          {v.status}
                        </span>
                        <span className="font-mono text-[11px] text-zinc-500">{v.year}</span>
                      </div>
                      <h2 className="font-display text-3xl sm:text-4xl font-bold mt-5 text-silver-strong tracking-tight">
                        {v.name}
                      </h2>
                      <p className="text-sm text-zinc-400 mt-3 leading-relaxed italic">
                        "{v.tease}"
                      </p>
                      <div className="mt-6 flex items-center gap-2 text-xs font-mono tracking-widest">
                        {v.live ? (
                          <a
                            href="/"
                            className="inline-flex items-center gap-1.5 text-white hover:text-zinc-300 transition-colors"
                          >
                            EXPLORE <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-zinc-600 select-none">
                            <Lock className="w-3.5 h-3.5" /> CLASSIFIED
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Stream fades into the unknown: notify capture */}
          <Reveal>
            <div className="flex flex-col items-center text-center mt-20">
              <p className="font-mono text-xs tracking-widest text-zinc-600">
                THE PLATFORM KEEPS GROWING. STAY CLOSE.
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-6">
                Be first to know what ships next
              </h2>
              <p className="text-zinc-400 text-sm mt-3 max-w-md leading-relaxed">
                Drop your email and we'll notify you the moment a roadmap
                milestone goes live. No spam, only launches.
              </p>
              <div className="mt-7 w-full flex justify-center">
                <NotifyForm source="roadmap" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
