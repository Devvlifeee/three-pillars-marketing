/**
 * Three Pillars. Module category detail page (/modules/:slug).
 * A product of buildingit. © 2026 buildingit. All rights reserved.
 * Style: Obsidian Monolith. pure black, silver/white, frosted glass.
 */
import { Link, useParams } from "wouter";
import Reveal from "@/components/effects/Reveal";
import {
  findCategoryBySlug,
  categorySlug,
  MODULE_CATEGORIES,
  APP_URL,
} from "@/lib/modules";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Package,
} from "lucide-react";

/** Categories included in the Business plan (100+ core modules). The rest are Enterprise. */
const BUSINESS_CATS = new Set([
  "Accounting", "Administration", "Analytics", "Automation", "CRM",
  "Compliance", "Customer Success", "E-commerce", "Field Service",
  "Fixed Assets", "Inventory", "Marketing", "Overview", "People & Payroll",
  "Procurement", "Projects", "Sales & Billing", "Service Desk", "Workspace",
]);

function planFor(catName: string): "Business" | "Enterprise" {
  return BUSINESS_CATS.has(catName) ? "Business" : "Enterprise";
}

const CATEGORY_BLURBS: Record<string, string> = {
  Accounting: "Complete double-entry books, from journals and reconciliation to multi-currency consolidation and year-end close.",
  Administration: "Control the platform itself: users, roles, entities, branches, documents, licenses, and API access.",
  Analytics: "Turn your operational data into decisions with financial reports, business analytics, and BI dashboards.",
  Automation: "Eliminate repetitive work with OCR data entry, workflow automation, a no-code app builder, and SilverBat AI.",
  CRM: "Every customer conversation in one place, pipeline, support desk, knowledge base, and omnichannel inbox.",
  Compliance: "India-first statutory coverage: GST, e-Invoicing, e-Way Bill, TDS, and a compliance calendar that never forgets.",
};

export default function ModuleCategoryPage() {
  const params = useParams<{ slug: string }>();
  const cat = findCategoryBySlug(params.slug ?? "");

  if (!cat) {
    return (
      <div className="pt-40 pb-24 min-h-screen text-center">
        <div className="container">
          <h1 className="font-display text-4xl font-bold text-white">Category not found</h1>
          <p className="text-zinc-400 mt-4">This module category doesn't exist, it may have been renamed.</p>
          <Link
            href="/modules"
            className="press inline-flex items-center gap-2 mt-8 rounded-full border border-white/20 text-white font-medium px-6 py-3 text-sm hover:bg-white/[0.06] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all modules
          </Link>
        </div>
      </div>
    );
  }

  const plan = planFor(cat.name);
  const idx = MODULE_CATEGORIES.findIndex((c) => c.name === cat.name);
  const prev = MODULE_CATEGORIES[(idx - 1 + MODULE_CATEGORIES.length) % MODULE_CATEGORIES.length];
  const next = MODULE_CATEGORIES[(idx + 1) % MODULE_CATEGORIES.length];
  const blurb =
    CATEGORY_BLURBS[cat.name] ??
    `Everything your business needs for ${cat.name.toLowerCase()}, ${cat.modules.length} purpose-built modules that share one data layer with the rest of the platform.`;

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container max-w-4xl">
        <Reveal>
          <Link
            href="/modules"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All modules
          </Link>

          <div className="flex flex-wrap items-center gap-3 mt-8">
            <span className="font-mono text-[11px] tracking-widest text-zinc-500">
              CATEGORY {String(idx + 1).padStart(2, "0")} / {MODULE_CATEGORIES.length}
            </span>
            <span
              className={`font-mono text-[10px] tracking-widest px-2.5 py-1 rounded-full border ${
                plan === "Business"
                  ? "text-zinc-300 border-white/15 bg-white/[0.04]"
                  : "text-amber-300/90 border-amber-300/25 bg-amber-300/[0.06]"
              }`}
            >
              {plan === "Business" ? "BUSINESS PLAN & UP" : "ENTERPRISE"}
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl font-bold tracking-tight mt-4">
            <span className="text-silver">{cat.name}</span>
          </h1>
          <p className="text-zinc-400 mt-5 max-w-2xl leading-relaxed">{blurb}</p>
        </Reveal>

        <Reveal delay={120}>
          <div className="glass-card rounded-2xl p-7 mt-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-lg font-semibold text-white">
                Modules in this category
              </h2>
              <span className="font-mono text-xs text-zinc-500">
                {String(cat.modules.length).padStart(2, "0")} MODULES
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {cat.modules.map((m) => (
                <div
                  key={m}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.18] bg-white/[0.02] px-4 py-3 hover:border-white/20 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-zinc-300 shrink-0" />
                  <span className="text-sm text-zinc-300">{m}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="glass-card rounded-2xl p-7 mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <h3 className="font-display text-lg font-semibold text-white">
                Included in the {plan} plan{plan === "Business" ? " and above" : ""}
              </h3>
              <p className="text-sm text-zinc-400 mt-1.5 leading-relaxed max-w-md">
                {plan === "Business"
                  ? "Available with Business (₹2,499/user/mo, up to 50 licenses) and Enterprise subscriptions."
                  : "Part of the full 153+ module catalog, unlocked with an Enterprise subscription."}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/pricing"
                className="press inline-flex items-center gap-1.5 rounded-full border border-white/20 text-white font-medium px-5 py-2.5 text-sm hover:bg-white/[0.06] transition-colors"
              >
                See pricing
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex items-center gap-1.5 rounded-full bg-white text-black font-medium px-5 py-2.5 text-sm hover:bg-zinc-200"
              >
                Try it
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Prev / next navigation */}
        <Reveal delay={260}>
          <div className="grid grid-cols-2 gap-4 mt-10">
            <Link
              href={`/modules/${categorySlug(prev.name)}`}
              className="glass-card rounded-xl p-5 group"
            >
              <span className="font-mono text-[10px] tracking-widest text-zinc-600">← PREVIOUS</span>
              <p className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors mt-2 flex items-center gap-2">
                <Package className="w-4 h-4 text-zinc-500" />
                {prev.name}
              </p>
            </Link>
            <Link
              href={`/modules/${categorySlug(next.name)}`}
              className="glass-card rounded-xl p-5 text-right group"
            >
              <span className="font-mono text-[10px] tracking-widest text-zinc-600">NEXT →</span>
              <p className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors mt-2 flex items-center justify-end gap-2">
                {next.name}
                <Package className="w-4 h-4 text-zinc-500" />
              </p>
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
