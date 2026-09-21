/**
 * Three Pillars — Insights hub: featured article + article grid.
 * A product of buildingit. © 2026 buildingit. All rights reserved.
 * Style: Obsidian Monolith — pure black, silver/white, frosted glass.
 */
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/effects/Reveal";
import { ARTICLES } from "@/lib/insights";

const fmtDate = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export default function Insights() {
  const featured = ARTICLES.find((a) => a.featured) ?? ARTICLES[0];
  const rest = ARTICLES.filter((a) => a.slug !== featured.slug);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-zinc-500 mb-4">
            INSIGHTS
          </p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">
            <span className="text-silver">Ideas for running</span>
            <br />
            <span className="text-white">a tighter business.</span>
          </h1>
          <p className="text-zinc-400 mt-5 leading-relaxed max-w-2xl">
            Guides on compliance, migration, and software strategy for Indian
            businesses, written by the team building Three Pillars.
          </p>
        </Reveal>

        {/* Featured article */}
        <Reveal delay={80}>
          <Link
            href={`/insights/${featured.slug}`}
            className="group block mt-14 rounded-2xl border border-white/25 bg-white/[0.03] hover:bg-white/[0.05] hover:border-white/40 transition-colors p-8 sm:p-12"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[10px] tracking-widest px-2 py-0.5 rounded-full border border-white/20 bg-white/[0.05] text-zinc-300">
                FEATURED
              </span>
              <span className="font-mono text-[10px] tracking-widest px-2 py-0.5 rounded-full border border-white/15 bg-white/[0.04] text-zinc-400 uppercase">
                {featured.category}
              </span>
              <span className="font-mono text-[11px] text-zinc-500 tracking-widest">
                {fmtDate(featured.date)} · {featured.readMinutes} MIN READ
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white mt-5 max-w-3xl group-hover:text-silver transition-colors">
              {featured.title}
            </h2>
            <p className="text-zinc-400 mt-4 leading-relaxed max-w-2xl">
              {featured.excerpt}
            </p>
            <span className="inline-flex items-center gap-1.5 mt-6 text-sm text-zinc-200 group-hover:text-white transition-colors">
              Read article
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </Link>
        </Reveal>

        {/* Article grid */}
        <div className="grid sm:grid-cols-2 gap-5 mt-6">
          {rest.map((a, i) => (
            <Reveal key={a.slug} delay={Math.min(i, 3) * 60}>
              <Link
                href={`/insights/${a.slug}`}
                className="group flex flex-col h-full rounded-2xl border border-white/25 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/40 transition-colors p-7"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[10px] tracking-widest px-2 py-0.5 rounded-full border border-white/15 bg-white/[0.04] text-zinc-400 uppercase">
                    {a.category}
                  </span>
                  <span className="font-mono text-[11px] text-zinc-500 tracking-widest">
                    {fmtDate(a.date)} · {a.readMinutes} MIN
                  </span>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-white mt-4 group-hover:text-silver transition-colors">
                  {a.title}
                </h3>
                <p className="text-sm text-zinc-400 mt-3 leading-relaxed flex-1">
                  {a.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 mt-5 text-sm text-zinc-300 group-hover:text-white transition-colors">
                  Read article
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
