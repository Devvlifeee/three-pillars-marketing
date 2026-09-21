/**
 * Three Pillars. Migration page: switching from Tally / Zoho / Excel.
 * A product of buildingit. © 2026 buildingit. All rights reserved.
 * Style: Obsidian Monolith. pure black, silver/white, frosted glass.
 */
import { useState } from "react";
import { Link } from "wouter";
import Reveal from "@/components/effects/Reveal";
import {
  ArrowRight,
  Database,
  FileSpreadsheet,
  Boxes,
  CheckCircle2,
  Upload,
  SearchCheck,
  Rocket,
} from "lucide-react";

const SOURCES = [
  {
    key: "tally",
    label: "From Tally",
    icon: Database,
    headline: "Your books, without the desktop shackles",
    carries: [
      "Chart of accounts & ledger groups",
      "Opening balances & outstanding bills",
      "Party masters with GSTINs",
      "Stock items, units & godowns",
      "Pending GST filing continuity",
    ],
    note: "Most Tally migrations are live within days, and your team gains CRM, HR, and a full workspace the moment you switch.",
  },
  {
    key: "zoho",
    label: "From Zoho",
    icon: Boxes,
    headline: "Consolidate the app sprawl into one platform",
    carries: [
      "Contacts, vendors & items",
      "Invoices, bills & credit notes",
      "CRM leads, deals & pipelines",
      "Projects & timesheets",
      "Chart of accounts mapping",
    ],
    note: "Replace a bundle of separate Zoho apps, and their separate bills, with one subscription and one data layer.",
  },
  {
    key: "excel",
    label: "From Excel / Sheets",
    icon: FileSpreadsheet,
    headline: "Graduate from spreadsheets without losing a cell",
    carries: [
      "Customer & vendor lists (CSV/XLSX)",
      "Item catalogs with HSN codes",
      "Opening balances & outstanding",
      "Employee master data",
      "Historical invoice registers",
    ],
    note: "Guided importers validate every row before committing, you see exactly what lands in your books, with error reports.",
  },
];

const STEPS = [
  {
    icon: Upload,
    title: "Export & upload",
    desc: "Export from your current tool (or hand us the files). Our importers accept Tally XML, Zoho exports, and CSV/XLSX.",
  },
  {
    icon: SearchCheck,
    title: "Validate & map",
    desc: "Every row is validated against your chart of accounts and GST rules. You review a mapping report before anything is written.",
  },
  {
    icon: Rocket,
    title: "Go live",
    desc: "Books open with correct balances, filings continue from your first month, and your team starts in one platform.",
  },
];

export default function Migrate() {
  const [active, setActive] = useState(0);
  const src = SOURCES[active];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container max-w-4xl">
        <Reveal className="text-center">
          <p className="font-mono text-xs tracking-widest text-zinc-500 mb-4">SWITCHING IS THE EASY PART</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold tracking-tight">
            <span className="text-silver">Migrate without the migraine</span>
          </h1>
          <p className="text-zinc-400 mt-5 max-w-xl mx-auto leading-relaxed">
            Whether you're on Tally, a stack of Zoho apps, or a folder of
            spreadsheets, your data moves into Three Pillars with validation at
            every step.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex flex-wrap justify-center gap-2 mt-12">
            {SOURCES.map((s, i) => (
              <button
                key={s.key}
                onClick={() => setActive(i)}
                className={`press inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium border transition-colors duration-200 ${
                  i === active
                    ? "bg-white text-black border-white"
                    : "text-zinc-400 border-white/25 hover:text-white hover:border-white/25"
                }`}
              >
                <s.icon className="w-4 h-4" />
                {s.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div key={src.key} className="glass-card rounded-2xl p-8 mt-8 animate-in fade-in duration-500">
            <h2 className="font-display text-2xl font-bold text-white tracking-tight">{src.headline}</h2>
            <div className="grid sm:grid-cols-2 gap-3 mt-6">
              {src.carries.map((c) => (
                <div key={c} className="flex items-center gap-3 rounded-xl border border-white/[0.18] bg-white/[0.02] px-4 py-3">
                  <CheckCircle2 className="w-4 h-4 text-zinc-300 shrink-0" />
                  <span className="text-sm text-zinc-300">{c}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-zinc-400 mt-6 leading-relaxed">{src.note}</p>
          </div>
        </Reveal>

        {/* How it works */}
        <Reveal className="text-center mt-20">
          <p className="font-mono text-xs tracking-widest text-zinc-500 mb-4">HOW MIGRATION WORKS</p>
          <h2 className="font-display text-3xl font-bold text-white tracking-tight">Three steps. Zero guesswork.</h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-4 mt-10">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="glass-card rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/[0.2] bg-white/[0.03] text-zinc-300">
                    <s.icon className="w-4.5 h-4.5" />
                  </span>
                  <span className="font-mono text-xs text-zinc-600">0{i + 1}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-white mt-4">{s.title}</h3>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-16">
          <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed">
            Business and Enterprise subscriptions include assisted migration. Our team works with you until the books balance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-7">
            <Link
              href="/contact"
              className="press inline-flex items-center gap-2 rounded-full bg-white text-black font-medium px-7 py-3.5 hover:bg-zinc-200"
            >
              Plan my migration
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/compare"
              className="press inline-flex items-center gap-2 rounded-full border border-white/20 text-white font-medium px-7 py-3.5 hover:bg-white/[0.06] hover:border-white/30 transition-colors"
            >
              Compare costs first
            </Link>
          </div>
          <p className="text-sm text-zinc-500 mt-9 max-w-lg mx-auto leading-relaxed">
            Moving from Tally? Read the{" "}
            <Link href="/insights/tally-migration-guide" className="underline underline-offset-4 text-zinc-300 hover:text-white">
              step-by-step migration guide
            </Link>{" "}
            and{" "}
            <Link href="/insights/tally-alternative-2026" className="underline underline-offset-4 text-zinc-300 hover:text-white">
              our honest comparison of Tally alternatives
            </Link>
            . Also useful:{" "}
            <Link href="/insights/gst-einvoicing-deadlines-explained" className="underline underline-offset-4 text-zinc-300 hover:text-white">
              the 2026 e-invoicing deadlines explained
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </div>
  );
}
