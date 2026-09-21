/**
 * Three Pillars. Security & Compliance page.
 * A product of buildingit. © 2026 buildingit. All rights reserved.
 * Style: Obsidian Monolith. pure black, silver/white, frosted glass.
 */
import Reveal from "@/components/effects/Reveal";
import Starfield from "@/components/effects/Starfield";
import { Link } from "wouter";
import {
  Lock,
  KeyRound,
  ShieldCheck,
  ScrollText,
  Server,
  Database,
  Building2,
  FileCheck2,
  Percent,
  Truck,
  Landmark,
  Users2,
  ArrowRight,
  Fingerprint,
  RefreshCcw,
  EyeOff,
} from "lucide-react";

const PILLARS = [
  {
    icon: Lock,
    title: "Encryption at rest & in transit",
    desc: "All data is encrypted with AES-256 at rest and TLS 1.2+ in transit. OAuth tokens and credentials are stored encrypted, never in plain text.",
  },
  {
    icon: Building2,
    title: "Per-company data isolation",
    desc: "Every company's data is logically isolated. Multi-entity setups keep each branch, subsidiary, and company's records strictly separated.",
  },
  {
    icon: KeyRound,
    title: "Role-based access control",
    desc: "Granular permissions per module and per action. Give your accountant access to books, not to payroll or CRM.",
  },
  {
    icon: ScrollText,
    title: "Complete audit trail",
    desc: "Every create, update, delete, and login is logged with who, what, and when. Exportable for internal reviews and statutory audits.",
  },
  {
    icon: RefreshCcw,
    title: "Automated backups",
    desc: "Continuous, automated backups with point-in-time recovery. Your books survive hardware failures, mistakes, and worst cases.",
  },
  {
    icon: Fingerprint,
    title: "Secure authentication",
    desc: "OAuth 2.0 sign-in with Google and Microsoft accounts, session controls, and automatic token rotation.",
  },
  {
    icon: EyeOff,
    title: "Privacy by default",
    desc: "Your business data is yours. We never sell it, never mine it for advertising, and never share it with third parties.",
  },
  {
    icon: Server,
    title: "Managed cloud infrastructure",
    desc: "Fully managed SaaS, hardened infrastructure, continuous monitoring, and security patches applied without downtime on your side.",
  },
  {
    icon: Database,
    title: "Data export anytime",
    desc: "No lock-in. Export your complete data, ledgers, invoices, contacts, documents, in standard formats whenever you want.",
  },
];

const STATUTORY = [
  { icon: Percent, title: "GST", desc: "GSTR-1, GSTR-3B, HSN summaries, auto-computation" },
  { icon: FileCheck2, title: "e-Invoicing (NIC v1.1)", desc: "IRN-ready JSON, status tracking, bulk operations" },
  { icon: Truck, title: "e-Way Bill", desc: "Integrated generation for goods transport" },
  { icon: Landmark, title: "TDS / TCS", desc: "Auto-deduction, quarterly returns, Form 26Q" },
  { icon: Users2, title: "PF / ESI / PT", desc: "Statutory deductions, ECR generation, challans" },
  { icon: ScrollText, title: "ROC / MCA", desc: "Annual filings, director KYC, compliance calendar" },
];

export default function Security() {
  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 h-[560px] opacity-40 pointer-events-none">
        <Starfield className="w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      </div>

      <div className="container relative z-10">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/[0.04] px-3.5 py-1.5 text-xs text-zinc-300 font-mono tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5 text-zinc-200" />
            SECURITY &amp; COMPLIANCE
          </span>
          <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-tight mt-6">
            <span className="text-silver">Your business runs on trust</span>
          </h1>
          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto leading-relaxed">
            Three Pillars holds your books, payroll, and customer data. That is a
            responsibility we engineer for, with bank-grade security and
            India-first statutory compliance built into the core.
          </p>
        </Reveal>

        {/* Security pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 90}>
              <div className="glass-card rounded-2xl p-6 h-full group">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/[0.2] bg-white/[0.03] text-zinc-300 group-hover:text-zinc-200 group-hover:border-white/30 transition-colors">
                  <p.icon className="w-5 h-5" />
                </span>
                <h2 className="font-display text-lg font-semibold text-white mt-4">{p.title}</h2>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Statutory compliance strip */}
        <Reveal className="mt-24 text-center">
          <p className="font-mono text-xs tracking-widest text-zinc-500 mb-4">STATUTORY COMPLIANCE, BUILT IN, NOT BOLTED ON</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Compliant with how India regulates business
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {STATUTORY.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 90}>
              <div className="glass-card rounded-xl p-5 h-full flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/[0.2] bg-white/[0.03] text-zinc-300 shrink-0">
                  <s.icon className="w-4.5 h-4.5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white">{s.title}</h3>
                  <p className="text-sm text-zinc-400 mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Practices */}
        <Reveal className="mt-24">
          <div className="glass-card rounded-2xl p-8 sm:p-10 max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-white tracking-tight">Our operating principles</h2>
            <div className="mt-6 space-y-5 text-sm text-zinc-400 leading-relaxed">
              <p>
                <span className="text-white font-medium">Least privilege everywhere.</span>{" "}
                Internal access to production systems is restricted, logged, and reviewed. No one reads your data without an auditable reason.
              </p>
              <p>
                <span className="text-white font-medium">Tested before shipped.</span>{" "}
                Changes pass automated test suites and staged rollouts before they reach your company's workspace.
              </p>
              <p>
                <span className="text-white font-medium">Responsible disclosure.</span>{" "}
                Found a vulnerability? Write to{" "}
                <a href="mailto:support@usethreepillars.com" className="text-white underline underline-offset-4 hover:text-zinc-300 transition-colors">
                  support@usethreepillars.com
                </a>{" "}
                and we'll respond within 48 hours.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="text-center mt-16">
          <Link
            href="/contact"
            className="press inline-flex items-center gap-2 rounded-full border border-white/20 text-white font-medium px-7 py-3.5 hover:bg-white/[0.06] hover:border-white/30 transition-colors"
          >
            Have a security question? Talk to us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
