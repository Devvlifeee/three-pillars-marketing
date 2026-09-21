/**
 * Three Pillars. Modules catalog page: the "Module Universe" as an engineered
 * catalog. Live search + category filters, clustered category sections with
 * technical labels, starfield atmosphere, silver-gradient display type.
 * A product of buildingit. © 2026 buildingit. All rights reserved.
 * Style: Obsidian Monolith. pure black, silver/white, frosted glass.
 */
import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import {
  Search, X, Calculator, Settings, BarChart3, Zap, Users, ShieldCheck,
  HeartHandshake, ShoppingCart, Wrench, Building2, Scale, Package,
  GraduationCap, Gavel, Truck, Factory, Megaphone, LayoutDashboard, UserCog,
  ClipboardList, FolderKanban, AlertTriangle, Receipt, Headphones, Landmark,
  Layers, AppWindow, ArrowRight, type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/effects/Reveal";
import Starfield from "@/components/effects/Starfield";
import CountUp from "@/components/effects/CountUp";
import { MODULE_CATEGORIES, TOTAL_CATEGORIES, categorySlug } from "@/lib/modules";

const ICONS: Record<string, LucideIcon> = {
  Calculator, Settings, BarChart3, Zap, Users, ShieldCheck, HeartHandshake,
  ShoppingCart, Wrench, Building2, Scale, Package, GraduationCap, Gavel,
  Truck, Factory, Megaphone, LayoutDashboard, UserCog, ClipboardList,
  FolderKanban, AlertTriangle, Receipt, Headphones, Landmark, Layers, AppWindow,
};

export default function Modules() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>("All");

  // Support deep-link ?cat=Category from the Module Universe grid
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("cat");
    if (cat && MODULE_CATEGORIES.some((c) => c.name === cat)) {
      setActiveCat(cat);
    }
  }, []);

  const q = query.trim().toLowerCase();

  // Category clusters with filtered modules
  const clusters = useMemo(() => {
    return MODULE_CATEGORIES.map((c) => ({
      ...c,
      visible: c.modules.filter(
        (m) =>
          (activeCat === "All" || c.name === activeCat) &&
          (!q || m.toLowerCase().includes(q))
      ),
    })).filter((c) => c.visible.length > 0);
  }, [q, activeCat]);

  const shownCount = clusters.reduce((s, c) => s + c.visible.length, 0);

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Starfield atmosphere */}
      <div className="absolute inset-0 h-[720px] opacity-45 pointer-events-none">
        <Starfield className="w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      </div>

      <div className="container relative z-10">
        {/* Asymmetric hero: title left, system readout right */}
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 items-end">
          <Reveal>
            <p className="font-mono text-xs tracking-widest text-zinc-500 mb-4">
              THE CATALOG, EVERY FUNCTION, ONE SYSTEM
            </p>
            <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-tight">
              <span className="text-silver">All Modules</span>
            </h1>
            <p className="text-zinc-400 mt-5 max-w-xl leading-relaxed">
              153+ modules across {TOTAL_CATEGORIES} categories. Search, filter, and explore.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="glass-card rounded-2xl p-6 font-mono text-xs hidden lg:block">
              <p className="text-zinc-500 tracking-widest mb-4">SYSTEM READOUT</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-display font-bold text-silver">
                    <CountUp end={153} suffix="+" duration={1400} />
                  </p>
                  <p className="text-zinc-500 mt-1">MODULES</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-silver">
                    <CountUp end={27} duration={1400} />
                  </p>
                  <p className="text-zinc-500 mt-1">CATEGORIES</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-silver">
                    <CountUp end={20} suffix="+" duration={1400} />
                  </p>
                  <p className="text-zinc-500 mt-1">TOOLS REPLACED</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-silver">1</p>
                  <p className="text-zinc-500 mt-1">DATA LAYER</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Search */}
        <Reveal delay={120}>
          <div className="relative max-w-xl mt-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-zinc-500 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search 153+ modules…"
              aria-label="Search modules"
              className="w-full rounded-xl bg-white/[0.03] border border-white/[0.2] pl-11 pr-11 py-3.5 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-white/25 focus:bg-white/[0.05] transition-all duration-200"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </Reveal>

        {/* Category tabs */}
        <Reveal delay={200}>
          <div className="flex gap-2 mt-8 overflow-x-auto no-scrollbar -mx-4 px-4 pb-2">
            {["All", ...MODULE_CATEGORIES.map((c) => c.name)].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`press whitespace-nowrap rounded-full px-4 py-2 text-sm transition-all duration-200 border ${
                  activeCat === cat
                    ? "bg-white text-black border-white font-medium"
                    : "border-white/[0.2] bg-white/[0.02] text-zinc-400 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Count */}
        <p className="font-mono text-xs text-zinc-500 mt-10 tracking-wider" aria-live="polite">
          SHOWING {shownCount} OF 153+ MODULES
          {activeCat !== "All" && `, ${activeCat.toUpperCase()}`}
          {q && `, QUERY: "${query.toUpperCase()}"`}
        </p>

        {/* Category clusters: engineered constellation logic */}
        <div className="mt-8 space-y-10">
          {clusters.map((cluster, ci) => {
            const Icon = ICONS[cluster.icon] || Package;
            return (
              <Reveal key={cluster.name} delay={Math.min(ci, 4) * 60}>
                <section className="relative pl-6 sm:pl-10">
                  {/* Constellation spine */}
                  <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-white/25 via-white/[0.07] to-transparent" />
                  <div className="absolute -left-[3.5px] top-2 w-2 h-2 rounded-full bg-white/60 shadow-[0_0_12px_rgba(255,255,255,0.5)]" />

                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-5">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-white/[0.2] bg-white/[0.03] text-zinc-300 -translate-y-1">
                      <Icon className="w-4 h-4" />
                    </span>
                    <Link
                      href={`/modules/${categorySlug(cluster.name)}`}
                      className="group/title inline-flex items-baseline gap-2"
                    >
                      <h2 className="font-display text-xl font-semibold text-white group-hover/title:text-zinc-300 transition-colors">
                        {cluster.name}
                      </h2>
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-600 group-hover/title:text-white group-hover/title:translate-x-0.5 transition-all self-center" />
                    </Link>
                    <span className="font-mono text-[11px] text-zinc-600 tracking-widest">
                      {String(cluster.visible.length).padStart(2, "0")} / {String(cluster.modules.length).padStart(2, "0")} MODULES
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {cluster.visible.map((m) => (
                      <div
                        key={m}
                        className="glass-card rounded-xl p-4 flex items-center justify-between gap-2 group"
                      >
                        <span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
                          {m}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-zinc-100 group-hover:shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all shrink-0" />
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>
            );
          })}
        </div>

        {shownCount === 0 && (
          <div className="text-center py-24">
            <p className="text-zinc-400">No modules match "{query}".</p>
            <button
              onClick={() => {
                setQuery("");
                setActiveCat("All");
              }}
              className="press mt-4 inline-flex rounded-full border border-white/20 text-white text-sm px-5 py-2.5 hover:bg-white/[0.06]"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
