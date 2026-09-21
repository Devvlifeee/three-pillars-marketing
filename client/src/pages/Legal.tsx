/**
 * Three Pillars. Legal pages: Privacy Policy & Terms of Service.
 * A product of buildingit. © 2026 buildingit. All rights reserved.
 * Style: Obsidian Monolith. pure black, silver/white, frosted glass.
 */
import Reveal from "@/components/effects/Reveal";

function LegalShell({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="font-mono text-xs tracking-widest text-zinc-500 mb-4">LEGAL</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              <span className="text-silver">{title}</span>
            </h1>
            <p className="font-mono text-xs text-zinc-600 mt-4 tracking-wider">
              LAST UPDATED: {updated}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-zinc-400 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mb-3">
              {children}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export function Privacy() {
  return (
    <LegalShell title="Privacy Policy" updated="JULY 15, 2026">
      <section>
        <h2>1. Who we are</h2>
        <p>
          Three Pillars is a business management platform operated by buildingit
          ("we", "us"). This policy explains how we collect, use, and protect
          information when you use our website and the Three Pillars platform.
          For any privacy question, contact us at hello@usethreepillars.com.
        </p>
      </section>
      <section>
        <h2>2. Information we collect</h2>
        <p>
          Account information such as your name, work email, and company details
          when you subscribe; business data you enter into the platform (invoices,
          contacts, employee records, and similar operational data); and usage
          data such as pages visited and features used, which helps us improve the
          product.
        </p>
      </section>
      <section>
        <h2>3. How we use information</h2>
        <p>
          We use your information to provide and operate the platform, process
          subscriptions and licensing, provide support, meet legal and tax
          obligations, and improve our services. We do not sell your personal
          data to third parties.
        </p>
      </section>
      <section>
        <h2>4. Data security</h2>
        <p>
          Sensitive tokens are encrypted at rest with AES-256. Access to your
          company's data is scoped per company and governed by role-based
          permissions, with a complete audit trail recorded on every action.
        </p>
      </section>
      <section>
        <h2>5. Data retention & your rights</h2>
        <p>
          We retain your data for as long as your subscription is active and as
          required by applicable law. You may request export or deletion of your
          data by writing to hello@usethreepillars.com.
        </p>
      </section>
      <section>
        <h2>6. Changes</h2>
        <p>
          We may update this policy from time to time. Material changes will be
          announced on this page with a revised "last updated" date.
        </p>
      </section>
    </LegalShell>
  );
}

export function Terms() {
  return (
    <LegalShell title="Terms of Service" updated="JULY 15, 2026">
      <section>
        <h2>1. Agreement</h2>
        <p>
          These terms govern your use of the Three Pillars platform and website,
          operated by buildingit. By creating an account or purchasing a
          subscription, you agree to these terms.
        </p>
      </section>
      <section>
        <h2>2. Subscriptions & licensing</h2>
        <p>
          Three Pillars is licensed per user. Your plan determines the number of
          user licenses and the modules available: Student is free for verified
          students and covers workspace and creative tools for one user; Starter covers essentials for
          up to 5 users, Business includes 100+ core business modules for up to 50
          user licenses, and Enterprise unlocks the complete catalog with
          unlimited licenses. Licenses may be added or removed as your team
          changes; fees are billed per active license.
        </p>
      </section>
      <section>
        <h2>3. Your data</h2>
        <p>
          You retain all rights to the business data you enter into the platform.
          We process it solely to provide the service, as described in our
          Privacy Policy.
        </p>
      </section>
      <section>
        <h2>4. Acceptable use</h2>
        <p>
          You agree not to misuse the platform, including attempting unauthorized
          access, reselling access without authorization, or using the service to
          violate applicable law.
        </p>
      </section>
      <section>
        <h2>5. Availability & support</h2>
        <p>
          We work to keep the platform available around the clock. Business plans
          include priority support; Enterprise plans include a dedicated account
          manager and SLA guarantee as agreed in your order.
        </p>
      </section>
      <section>
        <h2>6. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, buildingit is not liable for
          indirect or consequential damages arising from use of the service. Our
          total liability is limited to the fees paid in the twelve months before
          the claim.
        </p>
      </section>
      <section>
        <h2>7. Contact</h2>
        <p>Questions about these terms: hello@usethreepillars.com.</p>
      </section>
    </LegalShell>
  );
}
