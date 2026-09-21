/*
 * Three Pillars. Home page.
 * A product of buildingit. (c) 2026 buildingit. All rights reserved.
 * Style: Obsidian Monolith. Pure black, silver gradients, frosted glass, starfield.
 */
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import {
  SilverBatOutline,
  SilverBatOutlineIcon,
  SilverBatSmall,
} from "@/components/SilverBatOutline";
import {
  ShieldCheck,
  FileCheck2,
  Truck,
  Percent,
  Users2,
  Landmark,
  Server,
  Building2,
  Lock,
  KeyRound,
  ScrollText,
  Webhook,
  Mail,
  HardDrive,
  FileText,
  Table2,
  Presentation,
  ListTodo,
  CalendarDays,
  CheckCircle2,
  Calculator,
  Settings,
  BarChart3,
  Zap,
  Users,
  HeartHandshake,
  ShoppingCart,
  Wrench,
  Scale,
  Package,
  GraduationCap,
  Gavel,
  Factory,
  Megaphone,
  LayoutDashboard,
  UserCog,
  ClipboardList,
  FolderKanban,
  AlertTriangle,
  Receipt,
  Headphones,
  Layers,
  AppWindow,
  type LucideIcon,
} from "lucide-react";
import Starfield from "@/components/effects/Starfield";
import Reveal from "@/components/effects/Reveal";
import CountUp from "@/components/effects/CountUp";
import { Logo } from "@/components/Layout";
import { MODULE_CATEGORIES, COMPETING_TOOLS, APP_URL } from "@/lib/modules";

const COMPLIANCE_BG = "/manus-storage/india-compliance-grid_f5582c7c.png";

const ICONS: Record<string, LucideIcon> = {
  Calculator, Settings, BarChart3, Zap, Users, ShieldCheck, HeartHandshake,
  ShoppingCart, Wrench, Building2, Scale, Package, GraduationCap, Gavel,
  Truck, Factory, Megaphone, LayoutDashboard, UserCog, ClipboardList,
  FolderKanban, AlertTriangle, Receipt, Headphones, Landmark, Layers, AppWindow,
};

/* Section eyebrow label */
function Eyebrow({ children }: { children: string }) {
  return (
    <p className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.25em] text-zinc-500 mb-5 uppercase">
      <span className="inline-block w-6 h-px bg-zinc-600" />
      {children}
    </p>
  );
}

/* Section: Hero */
const HERO_WORDS = ["Billing", "Accounting", "CRM", "HR & Payroll", "Inventory", "Manufacturing", "Compliance", "Workspace"];

function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % HERO_WORDS.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-16">
      <Starfield className="absolute inset-0 w-full h-full opacity-60" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />

      <div className="container relative z-10 grid lg:grid-cols-[1.15fr_1fr] gap-16 items-center py-20">
        {/* Left: message */}
        <div>
          <Reveal delay={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.04] backdrop-blur-md px-4 py-1.5 text-xs font-mono tracking-widest text-zinc-300">
              <span className="live-dot inline-block w-1.5 h-1.5 rounded-full bg-zinc-100" />
              NOW LIVE
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.04] mt-7">
              <span className="text-white">Run your business and your life on </span>
              <span className="text-silver">one platform.</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="text-zinc-400 text-base sm:text-lg max-w-xl mt-7 leading-relaxed">
              Three Pillars replaces the pile of disconnected tools you juggle
              today, whether you are running a company, freelancing, or
              organising your own work. One login, one data layer, one bill.
            </p>
          </Reveal>

          <Reveal delay={330}>
            <div className="flex items-center gap-2.5 mt-6 h-8">
              <span className="text-sm text-zinc-500">Including</span>
              <span
                key={wordIndex}
                className="inline-flex items-center rounded-md border border-white/25 bg-white/[0.04] px-3 py-1 text-sm text-white font-medium animate-in fade-in slide-in-from-bottom-1 duration-300"
              >
                {HERO_WORDS[wordIndex]}
              </span>
              <span className="text-sm text-zinc-500">and much more</span>
            </div>
          </Reveal>

          <Reveal delay={440}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-9">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex items-center gap-2 rounded-full bg-white text-black font-medium px-7 py-3.5 hover:bg-zinc-200"
              >
                Launch Three Pillars
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="/pricing"
                className="press inline-flex items-center gap-2 rounded-full border border-white/20 text-white font-medium px-7 py-3.5 hover:bg-white/[0.06] hover:border-white/30 transition-colors"
              >
                View Pricing
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Right: stat monolith */}
        <Reveal delay={300} className="hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-8 bg-white/[0.02] rounded-[2rem] blur-2xl pointer-events-none" />
            <div className="relative glass-card rounded-3xl p-8 shadow-[0_0_100px_rgba(255,255,255,0.05)]">
              <div className="flex items-center justify-between">
                <Logo size={40} />
                <span className="font-mono text-[11px] tracking-[0.2em] text-zinc-500 uppercase">The platform</span>
              </div>
              <div className="mt-8">
                <p className="font-display font-semibold leading-none">
                  <span className="text-silver text-[6.5rem] tracking-tighter">
                    <CountUp end={153} duration={2000} suffix="+" />
                  </span>
                </p>
                <p className="text-zinc-400 text-sm mt-2">business modules, ready on day one</p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8 pt-7 border-t border-white/[0.07]">
                {[
                  { n: "27", l: "categories" },
                  { n: "15", l: "native tools" },
                  { n: "6", l: "compliance engines" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="font-display text-2xl font-bold text-white">{s.n}</p>
                    <p className="text-[11px] text-zinc-500 mt-1 uppercase tracking-wider">{s.l}</p>
                  </div>
                ))}
              </div>
              <div className="mt-7 rounded-xl border border-white/25 bg-white/[0.05] px-4 py-3 flex items-center gap-2.5">
                <SilverBatSmall className="w-5 shrink-0" />
                <p className="text-[13px] text-zinc-300">Includes SilverBat, an AI copilot that does the work for you</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Section: mobile stat strip (shown where the monolith is hidden) */
function StatStrip() {
  const stats = [
    { n: "153+", l: "Modules" },
    { n: "27", l: "Categories" },
    { n: "15", l: "Native tools" },
    { n: "6", l: "Compliance engines" },
  ];
  return (
    <section className="lg:hidden border-y border-white/[0.18] bg-white/[0.015]">
      <div className="container grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/[0.06]">
        {stats.map((s) => (
          <div key={s.l} className="py-6 text-center">
            <p className="font-display text-2xl font-bold text-silver">{s.n}</p>
            <p className="text-[11px] text-zinc-500 mt-1 uppercase tracking-wider">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Section: SaaS Sprawl */
const CHIP_STYLES = [
  "border-white/[0.14] bg-white/[0.05] text-zinc-300",
  "border-white/[0.10] bg-white/[0.03] text-zinc-400",
  "border-white/[0.18] bg-white/[0.06] text-zinc-200",
];
const CHIP_TILT = [-3, 2, -1.5, 3, -2, 1, 2.5, -1];

function SaasSprawl() {
  return (
    <section className="relative py-28">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
          <div>
            <Reveal>
              <Eyebrow>The problem</Eyebrow>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
                Your stack is working against you.
              </h2>
              <p className="text-zinc-400 mt-5 max-w-lg leading-relaxed">
                The average business runs on more than 20 different tools. Every new
                app means another password, another silo, another renewal to track,
                and another integration that breaks quietly at month end.
              </p>
              <ul className="mt-8 space-y-3.5">
                {[
                  "Reports from different apps never agree",
                  "Teams re-enter the same records twice",
                  "Renewal costs creep up unnoticed every year",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                    <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-2.5 max-w-lg">
              {COMPETING_TOOLS.slice(0, 16).map((tool, i) => (
                <Reveal key={tool} delay={(i % 8) * 50} as="span">
                  <span
                    className={`inline-block rounded-full border px-4 py-1.5 text-[13px] font-medium hover:text-white hover:border-white/30 hover:bg-white/[0.08] hover:!rotate-0 hover:scale-105 transition-all duration-200 cursor-default ${CHIP_STYLES[i % 3]}`}
                    style={{ transform: `rotate(${CHIP_TILT[i % 8]}deg)` }}
                  >
                    {tool}
                  </span>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200} className="flex flex-col items-center w-full">
              <div className="relative w-full flex flex-col items-center mt-8">
                {/* converging funnel lines */}
                <svg viewBox="0 0 400 90" className="w-full max-w-md h-[90px]" fill="none" aria-hidden>
                  {[40, 120, 200, 280, 360].map((x) => (
                    <path
                      key={x}
                      d={`M ${x} 0 C ${x} 55, 200 35, 200 90`}
                      stroke="url(#funnel-grad)"
                      strokeWidth="1"
                    />
                  ))}
                  <defs>
                    <linearGradient id="funnel-grad" x1="0" y1="0" x2="0" y2="90" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="rgba(255,255,255,0.06)" />
                      <stop offset="1" stopColor="rgba(255,255,255,0.45)" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="absolute top-1/2 -translate-y-1/2 font-mono text-[11px] tracking-[0.3em] text-zinc-400 uppercase bg-black px-3">
                  becomes
                </span>
              </div>
            </Reveal>

            <Reveal delay={300} className="w-full max-w-lg">
              <div className="relative mt-2">
                <div className="absolute -inset-6 bg-white/[0.03] rounded-[2.5rem] blur-3xl pointer-events-none" />
                <div className="relative glass-card rounded-3xl px-8 sm:px-12 py-10 sm:py-12 text-center shadow-[0_0_100px_rgba(255,255,255,0.08)] border-white/[0.12]">
                  <div className="flex justify-center">
                    <Logo size={72} />
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl font-semibold text-silver-strong tracking-tight mt-6">
                    Three Pillars
                  </h3>
                  <p className="text-zinc-300 text-base mt-2">The whole stack, collapsed into one system.</p>
                  <div className="flex items-center justify-center gap-6 mt-7 pt-6 border-t border-white/[0.2]">
                    {[
                      { n: "1", l: "app to open" },
                      { n: "1", l: "monthly bill" },
                      { n: "1", l: "place for your data" },
                    ].map((s) => (
                      <div key={s.l} className="text-center">
                        <p className="font-display text-2xl font-bold text-white">{s.n}</p>
                        <p className="text-[11px] text-zinc-400 uppercase tracking-wider mt-0.5">{s.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Section: One Data Layer. Every business domain feeds one core; SilverBat AI works across all of it. */

/* Section: Connected Ecosystem. Every module orbits one SilverBat-powered core inside a security ring. */
const ECOSYSTEM_MODULES = [
  { label: "Workspace", icon: AppWindow },
  { label: "Creative Studio", icon: Presentation },
  { label: "Database", icon: HardDrive },
  { label: "Marketing", icon: Megaphone },
  { label: "CRM", icon: HeartHandshake },
  { label: "Email", icon: Mail },
  { label: "Chats", icon: Headphones },
  { label: "Tax & GST", icon: Landmark },
  { label: "Salary & Payroll", icon: Users },
  { label: "Automation", icon: Zap },
  { label: "E-Commerce", icon: ShoppingCart },
  { label: "Billing", icon: Receipt },
];

function ConnectedEcosystem() {
  // Backplane geometry: 6 modules on each side rail, circuit traces route
  // orthogonally (out → across → into the core) like a motherboard, not an orbit.
  const left = ECOSYSTEM_MODULES.slice(0, 6);
  const right = ECOSYSTEM_MODULES.slice(6);
  // Row Y positions (percent of viewBox height) for 6 rows
  const rowY = [8, 24.8, 41.6, 58.4, 75.2, 92];

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-25">
        <Starfield className="w-full h-full" />
      </div>
      <div className="container relative z-10">
        <Reveal className="text-center">
          <Eyebrow>One connected ecosystem</Eyebrow>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Everything connects. Everything flows.
          </h2>
          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto leading-relaxed">
            Workspace, creative studio, marketing, CRM, email, chats, tax,
            salary, automation, e-commerce: every module runs on the same
            living data, with SilverBat AI working across all of it, inside one
            secure perimeter.
          </p>
        </Reveal>

        {/* Desktop / tablet backplane visual: two module rails wired into the SilverBat core */}
        <Reveal delay={150}>
          <div className="hidden sm:block relative max-w-[880px] mx-auto mt-14">
            {/* security perimeter: rectangular chassis frame, like a sealed unit */}
            <div className="absolute -inset-5 rounded-[2rem] border border-dashed border-white/[0.22]" />
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black px-3 flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-zinc-400" />
              <span className="font-mono text-[10px] tracking-[0.25em] text-zinc-400 uppercase">
                one secure perimeter
              </span>
            </div>

            <div className="relative grid grid-cols-[1fr_1.15fr_1fr] gap-0 items-stretch py-2">
              {/* left rail */}
              <div className="flex flex-col justify-between gap-3 py-1">
                {left.map((m, i) => (
                  <Reveal key={m.label} delay={i * 60}>
                    <div className="glass-card rounded-xl border-white/[0.25] px-3.5 py-2.5 flex items-center gap-2.5 bg-black/80 hover:border-white/45 hover:translate-x-0.5 transition-all duration-200">
                      <m.icon className="w-4 h-4 text-zinc-300 shrink-0" />
                      <span className="text-xs font-medium text-zinc-200 whitespace-nowrap">{m.label}</span>
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white/60 shrink-0 motion-reduce:animate-none animate-pulse" />
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* center column: circuit traces + SilverBat core */}
              <div className="relative">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" fill="none" aria-hidden>
                  <defs>
                    <linearGradient id="trace-l" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="rgba(255,255,255,0.1)" />
                      <stop offset="1" stopColor="rgba(255,255,255,0.5)" />
                    </linearGradient>
                    <linearGradient id="trace-r" x1="1" y1="0" x2="0" y2="0">
                      <stop offset="0" stopColor="rgba(255,255,255,0.1)" />
                      <stop offset="1" stopColor="rgba(255,255,255,0.5)" />
                    </linearGradient>
                  </defs>
                  {rowY.map((y, i) => {
                    const yEnd = 50 + (y - 50) * 0.22;
                    return (
                      <g key={`l-${i}`}>
                        <path d={`M 0 ${y} H 22 L 34 ${yEnd} H 38`} stroke="url(#trace-l)" strokeWidth="0.45" vectorEffect="non-scaling-stroke" />
                        <path d={`M 100 ${y} H 78 L 66 ${yEnd} H 62`} stroke="url(#trace-r)" strokeWidth="0.45" vectorEffect="non-scaling-stroke" />
                        {/* solder pads where traces meet the core */}
                        <circle cx="38" cy={yEnd} r="0.9" fill="rgba(255,255,255,0.55)" />
                        <circle cx="62" cy={yEnd} r="0.9" fill="rgba(255,255,255,0.55)" />
                      </g>
                    );
                  })}
                  {/* data packets: small dashes travelling the traces */}
                  <g className="motion-reduce:hidden">
                    {rowY.map((y, i) => {
                      const yEnd = 50 + (y - 50) * 0.22;
                      return (
                        <g key={`p-${i}`}>
                          <circle r="0.8" fill="rgba(255,255,255,0.95)">
                            <animateMotion
                              path={`M 0 ${y} H 22 L 34 ${yEnd} H 38`}
                              dur="2.8s"
                              begin={`${i * 0.45}s`}
                              repeatCount="indefinite"
                            />
                            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="2.8s" begin={`${i * 0.45}s`} repeatCount="indefinite" />
                          </circle>
                          <circle r="0.8" fill="rgba(255,255,255,0.95)">
                            <animateMotion
                              path={`M 100 ${y} H 78 L 66 ${yEnd} H 62`}
                              dur="2.8s"
                              begin={`${i * 0.45 + 0.22}s`}
                              repeatCount="indefinite"
                            />
                            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="2.8s" begin={`${i * 0.45 + 0.22}s`} repeatCount="indefinite" />
                          </circle>
                        </g>
                      );
                    })}
                  </g>
                </svg>

                {/* SilverBat core: the exact bat mark, free-floating, no box */}
                <div className="relative h-full min-h-[430px] flex flex-col items-center justify-center text-center pointer-events-none">
                  <div className="absolute w-56 h-56 bg-white/[0.07] rounded-full blur-3xl" />
                  <img
                   src="/silverbat-logo.png"
                    alt="SilverBat AI"
                    className="relative w-36 h-auto drop-shadow-[0_0_40px_rgba(200,190,235,0.45)]"
                  />
                  <p className="relative font-display text-xl font-bold text-silver-strong mt-6">SilverBat AI</p>
                  <p className="relative text-[11px] text-zinc-400 mt-1 leading-snug">
                    all your data, one brain
                  </p>
                </div>
              </div>

              {/* right rail */}
              <div className="flex flex-col justify-between gap-3 py-1">
                {right.map((m, i) => (
                  <Reveal key={m.label} delay={i * 60 + 120}>
                    <div className="glass-card rounded-xl border-white/[0.25] px-3.5 py-2.5 flex items-center gap-2.5 bg-black/80 hover:border-white/45 hover:-translate-x-0.5 transition-all duration-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0 motion-reduce:animate-none animate-pulse" />
                      <m.icon className="w-4 h-4 text-zinc-300 shrink-0" />
                      <span className="text-xs font-medium text-zinc-200 whitespace-nowrap">{m.label}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Mobile fallback: compact grid feeding into the core */}
        <div className="sm:hidden mt-12">
          <div className="grid grid-cols-2 gap-2.5">
            {ECOSYSTEM_MODULES.map((m, i) => (
              <Reveal key={m.label} delay={i * 40}>
                <div className="glass-card rounded-xl border-white/[0.22] px-3.5 py-3 flex items-center gap-2.5">
                  <m.icon className="w-4 h-4 text-zinc-300 shrink-0" />
                  <span className="text-[13px] font-medium text-zinc-200">{m.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="flex justify-center my-3" aria-hidden>
            <div className="w-px h-8 bg-gradient-to-b from-white/10 to-white/40" />
          </div>
          <Reveal>
            <div className="glass-card rounded-2xl border-white/[0.28] px-6 py-7 text-center">
              <div className="flex justify-center">
                <img
                  src="/silverbat-logo.png"
                  alt="SilverBat AI"
                  className="w-20 h-auto drop-shadow-[0_0_25px_rgba(200,190,235,0.4)]"
                />
              </div>
              <p className="font-display text-lg font-bold text-silver-strong mt-2">SilverBat AI</p>
              <p className="text-xs text-zinc-400 mt-1">all your data, one brain, one secure perimeter</p>
            </div>
          </Reveal>
        </div>

        {/* what the connectedness buys you */}
        <Reveal delay={250}>
          <div className="grid sm:grid-cols-3 gap-3.5 max-w-4xl mx-auto mt-14">
            {[
              {
                icon: Layers,
                t: "All data together",
                d: "A campaign in Marketing knows what CRM knows. Payroll knows what attendance knows. Nothing is ever out of date.",
              },
              {
                icon: SilverBatOutlineIcon,
                t: "SilverBat sees everything",
                d: "Ask it to draft a campaign, chase a payment, or prepare payroll. It acts across every module, not just one.",
              },
              {
                icon: ShieldCheck,
                t: "More secure by design",
                d: "One encrypted platform with one access control, instead of your data scattered across 20 vendors' servers.",
              },
            ].map((c) => (
              <div key={c.t} className="glass-card rounded-2xl border-white/[0.18] p-6">
                <c.icon className="w-5 h-5 text-zinc-200" />
                <h3 className="font-display text-base font-semibold text-white mt-3">{c.t}</h3>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* what one data layer means day to day (folded in from the old One Data Layer section) */}
        <Reveal delay={300}>
          <div className="max-w-4xl mx-auto mt-10">
            <div className="rounded-2xl border border-white/[0.22] bg-white/[0.03] px-8 py-7">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { n: "Enter once", l: "no duplicate data entry" },
                  { n: "Report anywhere", l: "numbers always agree" },
                  { n: "Audit anytime", l: "full history of every change" },
                ].map((s) => (
                  <div key={s.n}>
                    <p className="font-display text-sm sm:text-lg font-semibold text-white">{s.n}</p>
                    <p className="text-[11px] sm:text-xs text-zinc-500 mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Section: Module Universe */
function ModuleUniverse() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = gridRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x, y });
  };

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <Starfield className="w-full h-full" />
      </div>
      <div className="container relative z-10">
        <Reveal className="text-center">
          <Eyebrow>The answer</Eyebrow>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            The Module Universe
          </h2>
          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto leading-relaxed">
            Not a marketplace of loosely connected add-ons. Every module here is
            built on the same core, switches on instantly, and works with the
            others from the first click.
          </p>
        </Reveal>

        <div
          ref={gridRef}
          onMouseMove={onMouseMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
          style={{ perspective: "1200px" }}
        >
          {MODULE_CATEGORIES.map((cat, i) => {
            const Icon = ICONS[cat.icon] || Package;
            const depth = ((i % 5) - 2) * 0.35 + 1;
            return (
              <Reveal key={cat.name} delay={(i % 5) * 70}>
                <Link
                  href={`/modules?cat=${encodeURIComponent(cat.name)}`}
                  className="glass-card group rounded-xl p-4 flex flex-col gap-3 h-full"
                  style={{
                    transform: `translate(${tilt.x * 8 * depth}px, ${tilt.y * 8 * depth}px)`,
                    transition: "transform 400ms cubic-bezier(0.23,1,0.32,1)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/[0.2] bg-white/[0.03] text-zinc-300 group-hover:text-white group-hover:border-white/20 transition-colors">
                      <Icon className="w-4.5 h-4.5" />
                    </span>
                    <span className="font-mono text-[11px] text-zinc-600 group-hover:text-zinc-400 transition-colors">
                      {String(cat.modules.length).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                    {cat.name}
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200} className="text-center mt-12">
          <Link
            href="/modules"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
          >
            View complete module catalog
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* Section: SilverBat AI */
function SilverBat() {
  const abilities = [
    { icon: FileText, label: "Raises invoices", detail: "GST calculated, IRN ready" },
    { icon: Users, label: "Follows up leads", detail: "Drafts and sends reminders" },
    { icon: Table2, label: "Answers from your data", detail: "Revenue, dues, stock, payroll" },
    { icon: ListTodo, label: "Chains multi-step work", detail: "One request, many modules" },
  ];
  return (
    <section className="relative py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <Reveal>
              <Eyebrow>Your copilot</Eyebrow>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
                SilverBat AI Copilot
              </h2>
              <p className="text-zinc-400 mt-5 leading-relaxed max-w-lg">
                Not just a chatbot. Tell SilverBat the outcome you want and it
                proposes a complete action chain: create the customer, raise the
                invoice, record the payment, send the reminder. You approve it once
                and it carries out every step.
              </p>
            </Reveal>

            <div className="flex items-center gap-0 mt-10">
              {["Plan", "Confirm", "Execute"].map((step, i) => (
                <Reveal key={step} delay={i * 150} className="flex items-center">
                  <div className="glass-card rounded-xl px-5 py-3 flex items-center gap-2.5">
                    <span className="text-xs text-zinc-500">{i + 1}</span>
                    <span className="text-sm font-medium text-white">{step}</span>
                  </div>
                  {i < 2 && <ArrowRight className="w-4 h-4 text-zinc-600 mx-2 shrink-0" />}
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={150}>
            <div className="relative glass-card rounded-2xl p-8 shadow-[0_0_80px_rgba(255,255,255,0.05)]">
              {/* Radiating rings behind the core */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden rounded-2xl" aria-hidden>
                <span className="absolute w-[420px] h-[420px] rounded-full border border-white/[0.05]" />
                <span className="absolute w-[300px] h-[300px] rounded-full border border-white/[0.07]" />
                <span className="absolute w-[190px] h-[190px] rounded-full border border-white/[0.1]" />
              </div>

              {/* AI core */}
              <div className="relative flex flex-col items-center text-center pb-8">
                <SilverBatOutline className="w-20 drop-shadow-[0_0_30px_rgba(220,215,240,0.35)]" />
                <p className="mt-4 text-white font-display font-bold text-lg tracking-tight">SilverBat</p>
                <p className="text-xs text-zinc-400 tracking-[0.2em] uppercase mt-1">Sees everything. Skips nothing.</p>
              </div>

              {/* Capabilities */}
              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3">
                {abilities.map(a => (
                  <div key={a.label} className="silver-card rounded-xl p-4 flex items-start gap-3 bg-black/40">
                    <span className="w-9 h-9 rounded-lg border border-white/25 bg-white/[0.06] flex items-center justify-center shrink-0">
                      <a.icon className="w-4 h-4 text-zinc-200" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-white">{a.label}</span>
                      <span className="block text-xs text-zinc-400 mt-0.5">{a.detail}</span>
                    </span>
                  </div>
                ))}
              </div>

              <p className="relative mt-6 text-center text-xs text-zinc-500">
                You stay in control. SilverBat plans, you confirm, it executes.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* Section: Workspace */
const BUILT_IN_TOOLS = [
  "Three Sheets", "Three Docs", "Code Studio", "Design Studio", "Connections",
  "Workspace Suite", "Three Spaces", "Three Slides", "Three Forms", "Three Notes",
  "Three Calendar", "Three Tasks", "Three Mail", "Three Chat", "Three Browser",
];

function Workspace() {
  const googleApps = [
    { name: "Gmail", icon: Mail },
    { name: "Drive", icon: HardDrive },
    { name: "Docs", icon: FileText },
    { name: "Sheets", icon: Table2 },
    { name: "Slides", icon: Presentation },
    { name: "Tasks", icon: ListTodo },
    { name: "Calendar", icon: CalendarDays },
  ];
  const msApps = [
    { name: "Outlook", icon: Mail },
    { name: "OneDrive", icon: HardDrive },
    { name: "Word", icon: FileText },
    { name: "Excel", icon: Table2 },
    { name: "PowerPoint", icon: Presentation },
    { name: "To Do", icon: ListTodo },
  ];

  return (
    <section className="relative py-28">
      <div className="container">
        <Reveal>
          <Eyebrow>Workspace</Eyebrow>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight max-w-xl">
            Your entire workspace, unified.
          </h2>
          <p className="text-zinc-400 mt-5 max-w-xl leading-relaxed">
            Connect Google Workspace and Microsoft 365 at login. Access your files,
            emails, tasks, and calendar without ever leaving Three Pillars.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5 mt-14">
          {[
            { title: "Google Workspace", apps: googleApps },
            { title: "Microsoft 365", apps: msApps },
          ].map((provider, pi) => (
            <Reveal key={provider.title} delay={pi * 150}>
              <div className="glass-card rounded-2xl p-7 h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-lg font-semibold text-white">{provider.title}</h3>
                  <span className="inline-flex items-center gap-1.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Connects at login
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {provider.apps.map((app) => (
                    <span
                      key={app.name}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/[0.2] bg-white/[0.02] px-3.5 py-2 text-sm text-zinc-300 hover:border-white/20 hover:text-white transition-all duration-200"
                    >
                      <app.icon className="w-4 h-4 text-zinc-500" />
                      {app.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 glass-card rounded-2xl p-7">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <h3 className="font-display text-lg font-semibold text-white">
                Built-in workspace tools
              </h3>
              <span className="text-xs text-zinc-500 font-mono tracking-wider">
                15 NATIVE TOOLS · NO EXTRA SUBSCRIPTIONS
              </span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {BUILT_IN_TOOLS.map((tool, i) => (
                <span
                  key={tool}
                  className="inline-flex items-center rounded-full border border-white/[0.2] bg-white/[0.02] px-4 py-1.5 text-sm text-zinc-400 hover:text-white hover:border-white/25 hover:bg-white/[0.05] hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                  style={{ transitionDelay: `${(i % 6) * 15}ms` }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Section: Industries */
const INDUSTRIES = [
  {
    icon: Factory,
    name: "Manufacturers",
    desc: "BOM, work orders, production planning, and quality checks tied straight into inventory and accounting.",
  },
  {
    icon: ShoppingCart,
    name: "Retail & Distribution",
    desc: "POS billing, e-Way Bills, multi-warehouse stock, and reorder automation in one flow.",
  },
  {
    icon: Users,
    name: "Agencies & Services",
    desc: "Projects, timesheets, client CRM, and retainer billing without switching tools.",
  },
  {
    icon: GraduationCap,
    name: "Education",
    desc: "Admissions, fee collection, staff payroll, and parent communication in a single system.",
  },
  {
    icon: HeartHandshake,
    name: "Healthcare",
    desc: "Appointments, billing with GST, inventory of consumables, and staff rosters.",
  },
  {
    icon: Building2,
    name: "Real Estate & Construction",
    desc: "Project costing, vendor bills, TDS handling, and site-wise profitability.",
  },
];

function Industries() {
  return (
    <section className="relative py-28">
      <div className="container">
        <Reveal>
          <Eyebrow>Who it's for</Eyebrow>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight max-w-xl">
            Built for how India does business.
          </h2>
          <p className="text-zinc-400 mt-5 max-w-xl leading-relaxed">
            Vertical modules mean the platform speaks your industry's language on
            day one, with no expensive customization projects.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 3) * 90}>
              <div className="glass-card rounded-2xl p-6 h-full group">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/[0.2] bg-white/[0.03] text-zinc-300 group-hover:text-white group-hover:border-white/20 transition-colors">
                  <ind.icon className="w-5 h-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-white mt-4">{ind.name}</h3>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{ind.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Section: India-First Compliance */
const COMPLIANCE_CARDS = [
  {
    icon: Percent,
    title: "GST Compliance",
    desc: "GSTR-1, GSTR-3B, HSN summary, auto-computation",
  },
  {
    icon: FileCheck2,
    title: "NIC v1.1 e-Invoicing",
    desc: "Generate IRN-ready JSON, track status, bulk operations",
  },
  {
    icon: Truck,
    title: "e-Way Bill",
    desc: "Integrated e-Way bill generation for goods transport",
  },
  {
    icon: Landmark,
    title: "TDS / TCS",
    desc: "Auto-deduction, quarterly returns, Form 26Q",
  },
  {
    icon: Users2,
    title: "PF / ESI / PT",
    desc: "Statutory deductions, ECR generation, challan filing",
  },
  {
    icon: ScrollText,
    title: "ROC / MCA",
    desc: "Annual filings, director KYC, compliance calendar",
  },
];

function Compliance() {
  return (
    <section className="relative py-28 overflow-hidden">
      <img
        src={COMPLIANCE_BG}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-[0.08]"
        style={{ filter: "invert(1)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
      <div className="container relative z-10">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/[0.06] px-3.5 py-1.5 text-xs text-zinc-200 font-medium">
            India-First
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight mt-6">
            Built for Indian compliance.
          </h2>
          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto leading-relaxed">
            Not an afterthought. GST, e-Invoicing (NIC v1.1), TDS, PF/ESI, and ROC
            compliance are built into the core, never bolted on as plugins.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {COMPLIANCE_CARDS.map((card, i) => (
            <Reveal key={card.title} delay={(i % 3) * 120}>
              <div className="glass-card rounded-2xl p-6 h-full group">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-white/[0.15] bg-white/[0.03] text-zinc-300 group-hover:text-white group-hover:border-white/40 transition-colors">
                  <card.icon className="w-5 h-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-white mt-4">{card.title}</h3>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{card.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Section: Enterprise Security */
const SECURITY_CARDS = [
  {
    icon: Server,
    title: "Cloud SaaS",
    desc: "Fully managed cloud with no servers for you to maintain",
  },
  {
    icon: Building2,
    title: "Multi-Entity",
    desc: "Multiple companies, branches, subsidiaries",
  },
  {
    icon: Lock,
    title: "AES-256 Encryption",
    desc: "OAuth tokens and sensitive data encrypted at rest",
  },
  {
    icon: KeyRound,
    title: "Role-Based Access",
    desc: "Granular permissions per module",
  },
  {
    icon: ScrollText,
    title: "Audit Trail",
    desc: "Complete audit log of every action",
  },
  {
    icon: Webhook,
    title: "API & Webhooks",
    desc: "Full API access and webhook integrations",
  },
];

function Security() {
  return (
    <section className="relative py-28">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-14 items-start">
          <Reveal>
            <Eyebrow>Trust</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Enterprise-grade security.
            </h2>
            <p className="text-zinc-400 mt-5 leading-relaxed">
              Bank-grade protection without a security team of your own. Your data
              is encrypted, isolated per company, and monitored around the clock.
            </p>
            <div className="mt-8 glass-card rounded-xl p-5 text-[13px] text-zinc-400">
              <p className="text-white text-sm font-medium">Get started in minutes</p>
              <p className="mt-2 text-zinc-300">Subscribe · Add user licenses · Go live</p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {SECURITY_CARDS.map((card, i) => (
              <Reveal key={card.title} delay={(i % 2) * 120 + Math.floor(i / 2) * 80}>
                <div className="glass-card rounded-xl p-5 h-full group">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/[0.2] bg-white/[0.03] text-zinc-300 group-hover:text-white transition-colors shrink-0">
                      <card.icon className="w-4.5 h-4.5" />
                    </span>
                    <h3 className="text-sm font-semibold text-white">{card.title}</h3>
                  </div>
                  <p className="text-sm text-zinc-400 mt-3 leading-relaxed">{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Section: Final CTA */
function FinalCta() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <Starfield className="w-full h-full" />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-white/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="container relative z-10 text-center">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl mx-auto">
            <span className="text-silver">Ready to replace your entire software stack?</span>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-zinc-400 mt-6 max-w-xl mx-auto leading-relaxed">
            Start free, bring your team when you are ready, and keep your books,
            people, and stock in a system that finally talks to itself.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="press inline-flex items-center gap-2 rounded-full bg-white text-black font-medium px-7 py-3.5 hover:bg-zinc-200"
            >
              Get Started Free
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              href="/modules"
              className="press inline-flex items-center gap-2 rounded-full border border-white/20 text-white font-medium px-7 py-3.5 hover:bg-white/[0.06] hover:border-white/30 transition-colors"
            >
              Explore Modules
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <StatStrip />
      <div className="hairline" />
      <SaasSprawl />
      <div className="hairline" />
      <ConnectedEcosystem />
      <div className="hairline" />
      <ModuleUniverse />
      <div className="hairline" />
      <SilverBat />
      <div className="hairline" />
      <Workspace />
      <div className="hairline" />
      <Industries />
      <div className="hairline" />
      <Compliance />
      <div className="hairline" />
      <Security />
      <div className="hairline" />
      <FinalCta />
    </>
  );
}
