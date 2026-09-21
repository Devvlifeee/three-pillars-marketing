/**
 * Three Pillars. Contact / Book a demo page (stored via leads backend).
 * A product of buildingit. © 2026 buildingit. All rights reserved.
 * Style: Obsidian Monolith. pure black, silver/white, frosted glass.
 */
import { useState } from "react";
import Reveal from "@/components/effects/Reveal";
import { Mail, ArrowUpRight, Building2, Users, CheckCircle2, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    users: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const requestDemo = trpc.leads.requestDemo.useMutation({
    onSuccess: () => setSubmitted(true),
    onError: () => toast.error("Something went wrong. Please try again."),
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    requestDemo.mutate({
      name: form.name,
      email: form.email,
      company: form.company || undefined,
      teamSize: form.users || undefined,
      message: form.message || undefined,
    });
  };

  const inputCls =
    "w-full rounded-xl bg-white/[0.03] border border-white/[0.2] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-white/25 focus:bg-white/[0.05] transition-all duration-200";

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 max-w-5xl mx-auto items-start">
          <Reveal>
            <p className="font-mono text-xs tracking-widest text-zinc-500 mb-4">CONTACT</p>
            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">
              <span className="text-silver">Book a demo</span>
            </h1>
            <p className="text-zinc-400 mt-5 leading-relaxed">
              See how 153+ modules replace your entire stack. Tell us about your
              business and we'll walk you through the platform live.
            </p>
            <div className="mt-10 space-y-4 text-sm">
              <div className="flex items-start gap-3 text-zinc-300">
                <Mail className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" />
                <div>
                  <span className="block font-mono text-[10px] tracking-widest text-zinc-500 uppercase">Sales & general</span>
                  <a href="mailto:hello@usethreepillars.com" className="hover:text-white transition-colors">
                    hello@usethreepillars.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-zinc-300">
                <Mail className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" />
                <div>
                  <span className="block font-mono text-[10px] tracking-widest text-zinc-500 uppercase">Support</span>
                  <a href="mailto:support@usethreepillars.com" className="hover:text-white transition-colors">
                    support@usethreepillars.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-zinc-300">
                <Mail className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" />
                <div>
                  <span className="block font-mono text-[10px] tracking-widest text-zinc-500 uppercase">Investors & corporate</span>
                  <a href="mailto:corporate@buildingit.in" className="hover:text-white transition-colors">
                    corporate@buildingit.in
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <Building2 className="w-4 h-4 text-zinc-500" />
                buildingit, makers of Three Pillars
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <Users className="w-4 h-4 text-zinc-500" />
                Enterprise? Ask about volume licensing.
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            {submitted ? (
              <div className="glass-card rounded-2xl p-10 flex flex-col items-center text-center">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-white/30 bg-white/[0.06] text-zinc-200">
                  <CheckCircle2 className="w-7 h-7" />
                </span>
                <h2 className="font-display text-2xl font-semibold text-white mt-5">Request received</h2>
                <p className="text-zinc-400 text-sm mt-3 leading-relaxed max-w-sm">
                  Thanks, {form.name.split(" ")[0] || "there"}. Our team will reach
                  out to {form.email} within one business day to schedule your demo.
                </p>
              </div>
            ) : (
            <form onSubmit={submit} className="glass-card rounded-2xl p-7 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="c-name" className="block text-xs font-mono tracking-widest text-zinc-500 mb-2">NAME</label>
                  <input id="c-name" required value={form.name} onChange={set("name")} placeholder="Your name" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="c-company" className="block text-xs font-mono tracking-widest text-zinc-500 mb-2">COMPANY</label>
                  <input id="c-company" required value={form.company} onChange={set("company")} placeholder="Company name" className={inputCls} />
                </div>
              </div>
              <div>
                <label htmlFor="c-email" className="block text-xs font-mono tracking-widest text-zinc-500 mb-2">WORK EMAIL</label>
                <input id="c-email" type="email" required value={form.email} onChange={set("email")} placeholder="you@company.com" className={inputCls} />
              </div>
              <div>
                <label htmlFor="c-users" className="block text-xs font-mono tracking-widest text-zinc-500 mb-2">TEAM SIZE</label>
                <select id="c-users" value={form.users} onChange={set("users")} className={inputCls}>
                  <option value="" className="bg-black">Select team size</option>
                  <option value="1-5" className="bg-black">1 to 5 users</option>
                  <option value="6-50" className="bg-black">6 to 50 users</option>
                  <option value="51-200" className="bg-black">51 to 200 users</option>
                  <option value="200+" className="bg-black">200+ users</option>
                </select>
              </div>
              <div>
                <label htmlFor="c-msg" className="block text-xs font-mono tracking-widest text-zinc-500 mb-2">WHAT DO YOU WANT TO REPLACE?</label>
                <textarea id="c-msg" rows={4} value={form.message} onChange={set("message")} placeholder="Tell us about your current tools and what you need…" className={inputCls} />
              </div>
              <button
                type="submit"
                disabled={requestDemo.isPending}
                className="press w-full inline-flex items-center justify-center gap-1.5 rounded-full bg-white text-black font-medium px-6 py-3.5 text-sm hover:bg-zinc-200 disabled:opacity-60"
              >
                {requestDemo.isPending ? (
                  <>
                    Sending…
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Request
                    <ArrowUpRight className="w-4 h-4" />
                  </>
                )}
              </button>
              <p className="text-[11px] text-zinc-600 text-center">
                Your request is sent securely to the Three Pillars team.
              </p>
            </form>
            )}
          </Reveal>
        </div>
      </div>
    </div>
  );
}
