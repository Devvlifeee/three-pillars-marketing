/**
 * Three Pillars. Pricing page: four tiers (Student free, Starter, Business, Enterprise) + FAQ.
 * A product of buildingit. © 2026 buildingit. All rights reserved.
 * Style: Obsidian Monolith. pure black, silver/white, frosted glass.
 */
import { useMemo, useState } from "react";
import { Check, X, ArrowUpRight, Users, GraduationCap } from "lucide-react";
import { Link } from "wouter";
import Reveal from "@/components/effects/Reveal";
import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { APP_URL } from "@/lib/modules";

const TIERS = [
  {
    name: "Student",
    price: "Free",
    period: "",
    desc: "For students in arts, engineering, and beyond, with a valid student ID",
    features: [
      "SilverBat AI Copilot included",
      "Three Spaces, one connected workspace for projects, docs & wikis",
      "Full workspace suite (Docs, Sheets, Slides, Notes, Mail)",
      "Creative studios (Design Studio)",
      "Code Studio with full tooling",
      "All student apps for arts & engineering",
      "100 GB personal cloud storage",
      "Three Calendar, Tasks, Forms & Chat",
      "Community support",
      "Free while you study, verified yearly",
    ],
    cta: "Verify & Start Free",
    href: APP_URL,
    highlight: false,
    badge: "FOR STUDENTS",
  },
  {
    name: "Starter",
    price: "Free",
    period: "",
    desc: "For individuals, freelancers, and small teams",
    features: [
      "Up to 5 users",
      "SilverBat AI Copilot included",
      "Personal workspace tools",
      "Core billing & invoicing",
      "Basic accounting",
      "GST compliance",
      "CRM (up to 500 contacts)",
      "Workspace tools",
      "Community support",
    ],
    cta: "Start Free",
    href: APP_URL,
    highlight: false,
    badge: null,
  },
  {
    name: "Business",
    price: "₹2,499",
    period: "/user/month",
    desc: "For growing businesses, license up to 50 users",
    features: [
      "Up to 50 user licenses",
      "100+ core business modules",
      "Billing, Accounting, CRM, HR & Inventory",
      "SilverBat AI Copilot, advanced actions",
      "Google & Microsoft integration",
      "Multi-entity support",
      "e-Invoicing (NIC v1.1)",
      "Priority support",
      "API access",
    ],
    cta: "Start Trial",
    href: APP_URL,
    highlight: true,
    badge: null,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large organizations, unlimited users with volume pricing",
    features: [
      "Everything in Business",
      "All 153+ modules unlocked",
      "Unlimited user licenses",
      "SilverBat AI Copilot, unlimited & custom",
      "Volume license discounts",
      "Custom onboarding & migration",
      "AES-256 token encryption",
      "Custom roles & permissions",
      "Dedicated account manager",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    href: "mailto:hello@usethreepillars.com",
    highlight: false,
    badge: null,
  },
];

const FAQS = [
  {
    q: "Who qualifies for the free Student plan?",
    a: "Anyone currently enrolled in a school, college, or university, whether you study arts, engineering, design, commerce, or anything else. Sign up with your student ID or institute email, and you get the full workspace suite, Three Spaces (one connected workspace for projects, docs, and wikis), creative studios, Code Studio, SilverBat AI Copilot, 100 GB of cloud storage, and all student apps free for as long as you study. That is 5x the storage a typical university Google account gives you, so your projects, portfolios, and coursework never need deleting. Verification is renewed once a year.",
  },
  {
    q: "What is the difference between Student and Starter?",
    a: "Student is built for individual learners: it unlocks the complete workspace, Three Spaces, creative studios, Code Studio, and the arts & engineering student apps for one person, free with student verification. Starter is for individuals, freelancers, and small teams running a business: it covers up to 5 users with core billing, basic accounting, GST compliance, and CRM. SilverBat AI Copilot is included in both.",
  },
  {
    q: "Is SilverBat AI included in every plan?",
    a: "Yes. SilverBat AI Copilot is part of every plan, it is the core of Three Pillars. Student and Starter include SilverBat for everyday assistance, Business adds advanced multi-step business actions across modules, and Enterprise runs with unlimited usage and custom controls.",
  },
  {
    q: "Do I need to pay per module?",
    a: "No. There are no per-module charges, you only pay per user license. Each plan unlocks a defined set of modules: Starter covers the essentials, Business includes 100+ core business modules, and Enterprise unlocks the complete catalog of all 153+ modules.",
  },
  {
    q: "How does licensing work?",
    a: "Simple per-user licensing. Purchase a subscription, choose how many user licenses you need, and every licensed user gets full SaaS access. Starter covers up to 5 users, Business scales up to 50 user licenses, and Enterprise offers unlimited licenses with volume discounts. Add or remove licenses anytime as your team changes.",
  },
  {
    q: "What happens when my team grows beyond 50 users?",
    a: "Move to the Enterprise plan. You get unlimited user licenses at volume-discounted rates, the complete catalog of all 153+ modules, plus a dedicated account manager, custom onboarding, and an SLA guarantee.",
  },
  {
    q: "Is there a free trial for Business?",
    a: "Yes. Start with a 14-day free trial of the Business plan. No credit card required.",
  },
  {
    q: "What about data migration?",
    a: "We provide migration tools for Tally, QuickBooks, Zoho, and CSV imports. Enterprise customers get dedicated migration support.",
  },
];

/* Row-by-row plan comparison matrix */
const COMPARISON: { feature: string; student: string | boolean; starter: string | boolean; business: string | boolean; enterprise: string | boolean }[] = [
  { feature: "User licenses", student: "1 (verified student)", starter: "Up to 5", business: "Up to 50", enterprise: "Unlimited" },
  { feature: "Modules included", student: "Workspace + studios", starter: "Essentials", business: "100+ core", enterprise: "All 153+" },
  { feature: "SilverBat AI Copilot", student: "Included", starter: "Included", business: "Advanced", enterprise: "Unlimited" },
  { feature: "Workspace suite (Docs, Sheets, Slides…)", student: true, starter: true, business: true, enterprise: true },
  { feature: "Three Spaces (projects, docs & wikis)", student: true, starter: true, business: true, enterprise: true },
  { feature: "Creative studios (Design Studio)", student: true, starter: false, business: true, enterprise: true },
  { feature: "Code Studio", student: true, starter: false, business: true, enterprise: true },
  { feature: "Arts & engineering student apps", student: true, starter: false, business: false, enterprise: false },
  { feature: "Cloud storage", student: "100 GB", starter: "50 GB", business: "500 GB/user", enterprise: "Custom" },
  { feature: "Billing & GST invoicing", student: false, starter: true, business: true, enterprise: true },
  { feature: "Accounting", student: false, starter: "Basic", business: "Full", enterprise: "Full" },
  { feature: "CRM", student: false, starter: "500 contacts", business: "Unlimited", enterprise: "Unlimited" },
  { feature: "HR & Payroll (PF/ESI)", student: false, starter: false, business: true, enterprise: true },
  { feature: "Inventory & warehousing", student: false, starter: false, business: true, enterprise: true },
  { feature: "Manufacturing & verticals", student: false, starter: false, business: false, enterprise: true },
  { feature: "e-Invoicing (NIC v1.1) & e-Way Bill", student: false, starter: false, business: true, enterprise: true },
  { feature: "Google & Microsoft integration", student: false, starter: false, business: true, enterprise: true },
  { feature: "Multi-entity support", student: false, starter: false, business: true, enterprise: true },
  { feature: "API access", student: false, starter: false, business: true, enterprise: true },
  { feature: "Custom roles & permissions", student: false, starter: false, business: false, enterprise: true },
  { feature: "Volume license discounts", student: false, starter: false, business: false, enterprise: true },
  { feature: "Dedicated account manager", student: false, starter: false, business: false, enterprise: true },
  { feature: "SLA guarantee", student: false, starter: false, business: false, enterprise: true },
  { feature: "Support", student: "Community", starter: "Community", business: "Priority", enterprise: "Dedicated" },
];

function Cell({ v }: { v: string | boolean }) {
  if (v === true) return <Check className="w-4 h-4 text-zinc-200 mx-auto" />;
  if (v === false) return <X className="w-4 h-4 text-zinc-700 mx-auto" />;
  return <span className="text-zinc-300 text-[13px]">{v}</span>;
}

const PER_USER = 2499;
const fmtINR = (n: number) => "₹" + n.toLocaleString("en-IN");

function LicenseCalculator() {
  const [users, setUsers] = useState(10);
  const [annual, setAnnual] = useState(false);
  const overCap = users > 50;

  const { monthly, yearly, saved } = useMemo(() => {
    const m = users * PER_USER;
    // Annual billing: 2 months free (pay for 10)
    const y = annual ? m * 10 : m * 12;
    return { monthly: m, yearly: y, saved: m * 2 };
  }, [users, annual]);

  return (
    <Reveal delay={120}>
      <div className="glass-card rounded-2xl p-7 sm:p-9 max-w-3xl mx-auto mt-20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="font-mono text-xs tracking-widest text-zinc-500">LICENSE CALCULATOR</p>
            <h2 className="font-display text-2xl font-bold text-white mt-2 tracking-tight">
              How much for your team?
            </h2>
          </div>
          <div className="flex items-center gap-1 rounded-full border border-white/25 bg-white/[0.03] p-1">
            {(["Monthly", "Annual"] as const).map((mode) => {
              const isAnnual = mode === "Annual";
              const on = annual === isAnnual;
              return (
                <button
                  key={mode}
                  onClick={() => setAnnual(isAnnual)}
                  className={`press rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                    on ? "bg-white text-black" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {mode}
                  {isAnnual && <span className={on ? "text-zinc-600" : "text-zinc-200"}> · 2 mo free</span>}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-9">
          <div className="flex items-center justify-between mb-4">
            <span className="flex items-center gap-2 text-sm text-zinc-400">
              <Users className="w-4 h-4" /> User licenses
            </span>
            <span className="font-display text-2xl font-bold text-white">{users}{users >= 60 ? "+" : ""}</span>
          </div>
          <Slider
            value={[users]}
            min={1}
            max={60}
            step={1}
            onValueChange={([v]) => setUsers(v)}
            aria-label="Number of user licenses"
          />
          <div className="flex justify-between font-mono text-[10px] text-zinc-600 mt-2 tracking-wider">
            <span>1</span>
            <span>25</span>
            <span>50, BUSINESS CAP</span>
          </div>
        </div>

        <div className="mt-9 border-t border-white/[0.07] pt-7">
          {overCap ? (
            <div className="text-center">
              <p className="font-display text-2xl font-bold text-silver">Enterprise territory</p>
              <p className="text-sm text-zinc-400 mt-2 leading-relaxed max-w-md mx-auto">
                Beyond 50 licenses you qualify for volume discounts, all 153+
                modules, and a dedicated account manager. Let's talk numbers.
              </p>
              <a
                href="mailto:hello@usethreepillars.com"
                className="press inline-flex items-center gap-1.5 rounded-full bg-white text-black font-medium px-6 py-2.5 text-sm mt-5 hover:bg-zinc-200"
              >
                Contact Sales <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          ) : (
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="font-mono text-[10px] tracking-widest text-zinc-500">PER MONTH</p>
                <p className="font-display text-3xl font-bold text-white mt-1.5">{fmtINR(monthly)}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-widest text-zinc-500">
                  {annual ? "BILLED ANNUALLY" : "PER YEAR"}
                </p>
                <p className="font-display text-3xl font-bold text-silver mt-1.5">{fmtINR(yearly)}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-widest text-zinc-500">
                  {annual ? "YOU SAVE" : "SAVE WITH ANNUAL"}
                </p>
                <p className={`font-display text-3xl font-bold mt-1.5 ${annual ? "text-zinc-200" : "text-zinc-500"}`}>
                  {fmtINR(saved)}
                </p>
              </div>
            </div>
          )}
        </div>
        <p className="font-mono text-[10px] text-zinc-600 mt-6 tracking-wider text-center">
          BUSINESS PLAN · ₹2,499/USER/MONTH · ADD OR REMOVE LICENSES ANYTIME
        </p>
      </div>
    </Reveal>
  );
}

export default function Pricing() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container">
        <Reveal className="text-center">
          <p className="font-mono text-xs tracking-widest text-zinc-500 mb-4">PRICING</p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">
            <span className="text-silver">Simple, Transparent Pricing</span>
          </h1>
          <p className="text-zinc-400 mt-5 max-w-xl mx-auto leading-relaxed">
            Free for students. Free to start for everyone else. No hidden fees,
            no per-module charges, just simple per-user licensing.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16 max-w-7xl mx-auto items-stretch">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 130} className="h-full">
              <div
                className={`relative rounded-2xl p-7 h-full flex flex-col ${
                  tier.highlight
                    ? "border border-white/25 bg-white/[0.05] shadow-[0_0_60px_rgba(255,255,255,0.08)]"
                    : "glass-card"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white text-black text-[11px] font-semibold px-3.5 py-1 tracking-wide">
                    MOST POPULAR
                  </span>
                )}
                {tier.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full border border-white/30 bg-black text-zinc-200 text-[11px] font-semibold px-3.5 py-1 tracking-wide">
                    <GraduationCap className="w-3 h-3" />
                    {tier.badge}
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold text-white">{tier.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-silver">{tier.price}</span>
                  {tier.period && <span className="text-sm text-zinc-500">{tier.period}</span>}
                </div>
                <p className="text-sm text-zinc-400 mt-3 leading-relaxed">{tier.desc}</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <Check className="w-4 h-4 text-zinc-200 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.href}
                  target={tier.href.startsWith("http") ? "_blank" : undefined}
                  rel={tier.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`press mt-8 inline-flex items-center justify-center gap-1.5 rounded-full font-medium px-6 py-3 text-sm w-full ${
                    tier.highlight
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "border border-white/20 text-white hover:bg-white/[0.06] hover:border-white/30"
                  }`}
                >
                  {tier.cta}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* License calculator */}
        <LicenseCalculator />

        {/* Plan comparison table */}
        <div className="max-w-5xl mx-auto mt-28">
          <Reveal>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight text-center">
              Compare plans in detail
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="glass-card rounded-2xl mt-10 overflow-x-auto">
              <table className="w-full text-sm min-w-[680px]">
                <thead>
                  <tr className="border-b border-white/[0.2]">
                    <th className="text-left px-5 py-4 font-mono text-[11px] tracking-widest text-zinc-500 font-normal">
                      FEATURE
                    </th>
                    <th className="px-3 py-4 font-mono text-[11px] tracking-widest text-zinc-400 font-normal w-[110px]">
                      STUDENT
                    </th>
                    <th className="px-3 py-4 font-mono text-[11px] tracking-widest text-zinc-400 font-normal w-[110px]">
                      STARTER
                    </th>
                    <th className="px-3 py-4 font-mono text-[11px] tracking-widest text-white font-normal w-[110px] bg-white/[0.03]">
                      BUSINESS
                    </th>
                    <th className="px-3 py-4 font-mono text-[11px] tracking-widest text-zinc-400 font-normal w-[110px]">
                      ENTERPRISE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr key={row.feature} className="border-b border-white/[0.05] last:border-0">
                      <td className="px-5 py-3.5 text-zinc-300">{row.feature}</td>
                      <td className="px-3 py-3.5 text-center"><Cell v={row.student} /></td>
                      <td className="px-3 py-3.5 text-center"><Cell v={row.starter} /></td>
                      <td className="px-3 py-3.5 text-center bg-white/[0.03]"><Cell v={row.business} /></td>
                      <td className="px-3 py-3.5 text-center"><Cell v={row.enterprise} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto mt-28">
          <Reveal>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight text-center">
              Frequently asked questions
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Accordion type="single" collapsible className="mt-10">
              {FAQS.map((faq, i) => (
                <AccordionItem
                  key={faq.q}
                  value={`faq-${i}`}
                  className="border-white/[0.2]"
                >
                  <AccordionTrigger className="text-left text-[15px] text-white hover:no-underline hover:text-zinc-200 py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-zinc-400 leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-sm text-zinc-500 text-center mt-12 leading-relaxed">
              Comparing options? See{" "}
              <Link href="/insights/zoho-one-cost-analysis" className="underline underline-offset-4 text-zinc-300 hover:text-white">
                what Zoho One really costs a growing team
              </Link>{" "}
              and{" "}
              <Link href="/insights/hr-payroll-software-india-smb" className="underline underline-offset-4 text-zinc-300 hover:text-white">
                what Indian SMBs actually need from HR and payroll software
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
