/**
 * Three Pillars. Notify-me / early-access email capture.
 * A product of buildingit. © 2026 buildingit. All rights reserved.
 */
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { CheckCircle2, Loader2, Bell } from "lucide-react";

export default function NotifyForm({ source = "roadmap", className = "" }: { source?: string; className?: string }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const notifyMe = trpc.leads.notifyMe.useMutation({
    onSuccess: () => setDone(true),
    onError: () => toast.error("Could not subscribe. Please check your email and try again."),
  });

  if (done) {
    return (
      <div className={`inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/[0.06] px-5 py-3 text-sm text-zinc-200 ${className}`}>
        <CheckCircle2 className="w-4 h-4" />
        You're on the list, we'll keep you posted.
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email) notifyMe.mutate({ email, source });
      }}
      className={`flex flex-col sm:flex-row items-stretch gap-3 w-full max-w-md ${className}`}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        aria-label="Email address"
        className="flex-1 rounded-full bg-white/[0.03] border border-white/[0.1] px-5 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all duration-200"
      />
      <button
        type="submit"
        disabled={notifyMe.isPending}
        className="press inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium px-6 py-3 text-sm hover:bg-zinc-200 disabled:opacity-60 shrink-0"
      >
        {notifyMe.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Bell className="w-4 h-4" />}
        Notify me
      </button>
    </form>
  );
}
