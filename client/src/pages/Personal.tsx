/**
 * Three Pillars. For Individuals page: personal use of the platform.
 * A product of buildingit. © 2026 buildingit. All rights reserved.
 * Style: Obsidian Monolith. pure black, silver/white, frosted glass.
 */
import { Link } from "wouter";
import Reveal from "@/components/effects/Reveal";
import { APP_URL } from "@/lib/modules";
import {
  ArrowRight,
  ArrowUpRight,
  NotebookPen,
  CalendarCheck,
  Wallet,
  FolderLock,
  Sparkles,
  Palette,
  Mail,
  FileText,
  Layers,
  ShieldCheck,
  IndianRupee,
  UserRound,
  Briefcase,
  GraduationCap,
  Home as HomeIcon,
} from "lucide-react";

const PERSONAL_TOOLS = [
  {
    icon: NotebookPen,
    title: "Notes & Docs",
    desc: "Write, organise, and share documents in a distraction-free editor that lives beside everything else you do.",
  },
  {
    icon: CalendarCheck,
    title: "Tasks & Planner",
    desc: "Personal to-dos, reminders, and a calendar that also understands your projects and deadlines.",
  },
  {
    icon: Wallet,
    title: "Personal Finances",
    desc: "Track spending, plan budgets, and raise professional invoices when you freelance. All in rupees, all in one ledger.",
  },
  {
    icon: FolderLock,
    title: "Private Drive",
    desc: "Your files, photos, and records stored encrypted, searchable, and available on every device you sign in from.",
  },
  {
    icon: Sparkles,
    title: "SilverBat AI",
    desc: "An AI copilot that drafts, summarises, answers, and automates across every tool in your workspace.",
  },
  {
    icon: Palette,
    title: "Creative Canvas",
    desc: "Design flyers, social posts, and edits on a built-in canvas, with no separate design subscription needed.",
  },
  {
    icon: Mail,
    title: "Mail & Chat",
    desc: "A unified inbox and messaging so conversations, files, and follow-ups stay attached to the work they belong to.",
  },
  {
    icon: FileText,
    title: "Forms & Sheets",
    desc: "Collect information, run calculations, and keep lightweight databases without juggling three different apps.",
  },
];

const PERSONAS = [
  {
    icon: UserRound,
    title: "Freelancers",
    desc: "Invoice clients, track payments, manage projects, and keep GST-ready records. The moment a side gig becomes serious, the business modules are already there.",
  },
  {
    icon: GraduationCap,
    title: "Students",
    desc: "Notes, planners, documents, and an AI study companion in one place, free to start, with no feature walls mid-semester.",
  },
  {
    icon: Briefcase,
    title: "Professionals",
    desc: "A private workspace for your career: documents, finances, files, and plans that stay yours, separate from your employer's stack.",
  },
  {
    icon: HomeIcon,
    title: "Households",
    desc: "Budgets, bills, documents, and shared lists for the whole family, organised in one secure home instead of a dozen scattered apps.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Start free",
    desc: "Create your account and get the personal workspace with notes, tasks, finances, drive, and AI at no cost.",
  },
  {
    n: "02",
    title: "Go premium when ready",
    desc: "Unlock more storage, advanced AI, and the full tool catalog with a single affordable subscription. No per-app bills.",
  },
  {
    n: "03",
    title: "Grow without switching",
    desc: "If you start a business tomorrow, billing, CRM, and compliance are one click away. Same login, same data, same platform.",
  },
];

export default function Personal() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="container">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.04] px-4 py-1.5 text-xs font-mono tracking-widest text-zinc-300">
            FOR INDIVIDUALS
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.06] mt-6 max-w-3xl">
            <span className="text-white">One workspace for </span>
            <span className="text-silver">everything you do.</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mt-6 leading-relaxed">
            Three Pillars is not just for companies. It is a personal platform
            with in-house tools for your notes, tasks, files, finances, and
            creativity. Free to start, premium when you want more, and ready
            to grow into a full business stack the day you are.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-9">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="press inline-flex items-center gap-2 rounded-full bg-white text-black font-medium px-7 py-3 hover:bg-zinc-200 transition-colors"
            >
              Start Free
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              href="/pricing"
              className="press inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-7 py-3 hover:bg-white/[0.06] transition-colors"
            >
              See Pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* In-house tools grid */}
      <section className="container mt-24">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Your in-house tools, all included.
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl leading-relaxed">
            Instead of a browser full of scattered apps and subscriptions,
            Three Pillars ships the tools built in, designed together, sharing
            one login and one data layer.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {PERSONAL_TOOLS.map((t, i) => (
            <Reveal key={t.title} delay={i * 60}>
              <div className="glass-card rounded-2xl border border-white/[0.14] bg-white/[0.03] p-6 h-full">
                <t.icon className="w-5 h-5 text-zinc-200" />
                <h3 className="text-white font-medium mt-4">{t.title}</h3>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="container mt-24">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Built for how you work and live.
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-4 mt-10">
          {PERSONAS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="glass-card rounded-2xl border border-white/[0.14] bg-white/[0.03] p-7 h-full">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/[0.14] bg-white/[0.04]">
                    <p.icon className="w-5 h-5 text-zinc-200" />
                  </span>
                  <h3 className="text-white font-medium text-lg">{p.title}</h3>
                </div>
                <p className="text-sm text-zinc-400 mt-4 leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Free -> premium path */}
      <section className="container mt-24">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Free to start. Premium when you need more.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="rounded-2xl border border-white/[0.14] bg-white/[0.03] p-7 h-full">
                <span className="font-mono text-xs tracking-widest text-zinc-500">{s.n}</span>
                <h3 className="text-white font-medium mt-3">{s.title}</h3>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Trust strip */}
      <section className="container mt-24">
        <Reveal>
          <div className="rounded-2xl border border-white/[0.14] bg-white/[0.03] p-8 grid sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-zinc-200 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-white font-medium text-sm">Private by default</h3>
                <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                  Your personal data is encrypted and yours alone, never mixed
                  with anyone else's workspace.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <IndianRupee className="w-5 h-5 text-zinc-200 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-white font-medium text-sm">One honest price</h3>
                <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                  One subscription replaces the stack of app fees, priced in
                  rupees for India, not converted from dollars.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Layers className="w-5 h-5 text-zinc-200 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-white font-medium text-sm">Grows with you</h3>
                <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                  Personal today, business tomorrow. 153+ modules are on the
                  same platform whenever you need them.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Final CTA */}
      <section className="container mt-24">
        <Reveal>
          <div className="rounded-3xl border border-white/[0.14] bg-white/[0.03] p-10 sm:p-14 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Your platform. Personal or business.
            </h2>
            <p className="text-zinc-400 mt-4 max-w-xl mx-auto leading-relaxed">
              Start with the free personal workspace today, and bring your
              whole business aboard whenever you are ready.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex items-center gap-2 rounded-full bg-white text-black font-medium px-7 py-3 hover:bg-zinc-200 transition-colors"
              >
                Start Free
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="/modules"
                className="press inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-7 py-3 hover:bg-white/[0.06] transition-colors"
              >
                Explore All Modules
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
