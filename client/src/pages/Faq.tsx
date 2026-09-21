/**
 * Three Pillars. FAQ hub: searchable, categorized questions.
 * A product of buildingit. © 2026 buildingit. All rights reserved.
 * Style: Obsidian Monolith. pure black, silver/white, frosted glass.
 */
import { useMemo, useState } from "react";
import Reveal from "@/components/effects/Reveal";
import { Link } from "wouter";
import { Search, ChevronDown, ArrowRight } from "lucide-react";

type Faq = { q: string; a: string; cat: string };

const CATEGORIES = ["All", "Product", "Pricing & Licensing", "Migration", "Security", "Support"] as const;

const FAQS: Faq[] = [
  // Product
  { cat: "Product", q: "What is Three Pillars?", a: "Three Pillars is an all-in-one business platform by buildingit with 153+ modules across 27 categories, covering billing, accounting, GST compliance, CRM, HR & payroll, inventory, manufacturing, and a full built-in workspace suite. It replaces the 20+ separate tools a typical business juggles." },
  { cat: "Product", q: "What is SilverBat AI?", a: "SilverBat is the AI copilot inside Three Pillars and it is included in every plan, including the free Student and Starter tiers. It proposes multi-step action chains that span modules, for example creating a customer, raising an invoice, and scheduling a reminder, and executes them only after you confirm the plan. Business plans add advanced cross-module actions and Enterprise runs with unlimited usage." },
  { cat: "Product", q: "Does it work with Google Workspace and Microsoft 365?", a: "Yes. Connect your Google or Microsoft account at login and access Gmail/Outlook, Drive/OneDrive, Docs/Word, Sheets/Excel, Slides/PowerPoint, tasks, and calendars from inside Three Pillars. There are also 15 built-in native workspace tools at no extra cost." },
  { cat: "Product", q: "Is Three Pillars built for Indian businesses?", a: "Yes, it is India-first by design. GST returns (GSTR-1, GSTR-3B), NIC v1.1 e-Invoicing with IRN generation, e-Way Bills, TDS/TCS, PF/ESI/PT, and ROC/MCA compliance are part of the core platform, not paid add-ons." },
  { cat: "Product", q: "Which industries does it serve?", a: "Vertical modules cover manufacturing, retail and distribution, agencies and services, education, healthcare, real estate and construction, and more. The Modules page lists all 27 categories." },
  // Pricing
  { cat: "Pricing & Licensing", q: "How does pricing work?", a: "Four plans: Student is free for verified students and unlocks the full workspace suite, creative studios, Code Studio, and the arts & engineering student apps. Starter is free for up to 5 users with core essentials. Business is ₹2,499 per user per month with up to 50 user licenses and 100+ core business modules. Enterprise is custom-priced with unlimited licenses and the full 153+ module catalog." },
  { cat: "Pricing & Licensing", q: "Is Three Pillars really free for students?", a: "Yes. Students in any discipline, arts, engineering, design, commerce, and more, get the workspace suite, creative studios, Code Studio, and all student apps completely free. Verify with your student ID or institute email, and renew the verification once a year while you study." },
  { cat: "Pricing & Licensing", q: "How does user licensing work?", a: "You purchase a subscription and choose how many user licenses you need. Each team member uses one license. You can add or remove licenses at any time as your team changes." },
  { cat: "Pricing & Licensing", q: "What happens when my team grows past 50 users?", a: "The Business plan covers up to 50 licenses. Beyond that, Enterprise gives you unlimited licenses, volume discounts, custom onboarding, and a dedicated account manager. Talk to sales for a quote." },
  { cat: "Pricing & Licensing", q: "Is there an annual discount?", a: "Yes. Annual billing gives you 2 months free compared to paying monthly. Use the calculator on the Pricing page to see your exact total." },
  { cat: "Pricing & Licensing", q: "Do I need to install anything?", a: "No. Three Pillars is a fully managed cloud SaaS. Subscribe, add user licenses, and go live from your browser. No servers, no maintenance." },
  // Migration
  { cat: "Migration", q: "Can I migrate from Tally?", a: "Yes. Import your chart of accounts, ledgers, opening balances, stock items, and party masters. Most Tally migrations complete within days, and our team assists Business and Enterprise customers throughout." },
  { cat: "Migration", q: "Can I migrate from Zoho, or from spreadsheets?", a: "Yes. Structured importers handle contacts, items, invoices, and transactions from Zoho apps and Excel/CSV files, with validation reports before anything is committed to your books." },
  { cat: "Migration", q: "Will my GST history carry over?", a: "Your opening balances, outstanding invoices, and party-wise GST details can be imported so filings continue seamlessly from your first month on Three Pillars." },
  { cat: "Migration", q: "How long does migration take?", a: "Small teams moving from spreadsheets are typically live in a day. Tally or Zoho migrations usually take a few days depending on data volume. Enterprise migrations get a dedicated migration plan." },
  // Security
  { cat: "Security", q: "How is my data protected?", a: "AES-256 encryption at rest, TLS in transit, per-company data isolation, role-based access control, and a complete audit trail. See the Security page for full details." },
  { cat: "Security", q: "Who owns my data?", a: "You do, always. Export your complete data in standard formats at any time. We never sell or share your business data." },
  { cat: "Security", q: "Are backups automatic?", a: "Yes. Continuous automated backups with point-in-time recovery are part of the managed platform." },
  // Support
  { cat: "Support", q: "What support is included?", a: "Student and Starter include community support. Business adds priority email support. Enterprise gets a dedicated account manager, SLA-backed response times, and team training." },
  { cat: "Support", q: "How do I book a demo?", a: "Use the Contact page to book a live walkthrough. Tell us your team size and what tools you want to replace, and we'll tailor the demo to your business." },
  { cat: "Support", q: "How do I report a problem?", a: "Write to support@usethreepillars.com or use the in-app support channel. Security issues also go to support@usethreepillars.com with the subject line Security." },
];

function FaqItem({ faq, open, onToggle }: { faq: Faq; open: boolean; onToggle: () => void }) {
  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-sm sm:text-base font-medium text-white">{faq.q}</span>
        <ChevronDown
          className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqHub() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQS.filter(
      (f) =>
        (cat === "All" || f.cat === cat) &&
        (!q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q))
    );
  }, [query, cat]);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container max-w-3xl">
        <Reveal className="text-center">
          <p className="font-mono text-xs tracking-widest text-zinc-500 mb-4">FAQ</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold tracking-tight">
            <span className="text-silver">Questions, answered</span>
          </h1>
          <p className="text-zinc-400 mt-5 leading-relaxed">
            Everything about the product, pricing, migration, security, and support.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mt-10">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpenIdx(null);
              }}
              placeholder="Search questions…"
              aria-label="Search FAQ"
              className="w-full rounded-full bg-white/[0.03] border border-white/[0.1] pl-12 pr-5 py-3.5 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all duration-200"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setCat(c);
                  setOpenIdx(null);
                }}
                className={`press rounded-full px-4 py-1.5 text-xs font-medium border transition-colors duration-200 ${
                  c === cat
                    ? "bg-white text-black border-white"
                    : "text-zinc-400 border-white/25 hover:text-white hover:border-white/25"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 space-y-3">
          {filtered.length === 0 ? (
            <Reveal>
              <div className="glass-card rounded-xl p-10 text-center">
                <p className="text-zinc-400 text-sm">
                  No results for "{query}". Try different keywords, or{" "}
                  <Link href="/contact" className="text-white underline underline-offset-4">
                    ask us directly
                  </Link>
                  .
                </p>
              </div>
            </Reveal>
          ) : (
            filtered.map((f, i) => (
              <Reveal key={f.q} delay={Math.min(i, 6) * 40}>
                <FaqItem faq={f} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? null : i)} />
              </Reveal>
            ))
          )}
        </div>

        <Reveal className="text-center mt-14">
          <p className="text-sm text-zinc-500">
            Still stuck?
          </p>
          <Link
            href="/contact"
            className="press inline-flex items-center gap-2 mt-4 rounded-full border border-white/20 text-white font-medium px-6 py-3 text-sm hover:bg-white/[0.06] hover:border-white/30 transition-colors"
          >
            Talk to the team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
