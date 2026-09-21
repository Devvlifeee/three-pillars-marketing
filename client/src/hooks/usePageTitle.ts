/**
 * Three Pillars, per-route document title & meta description sync.
 * The SPA ships one static <title>; this hook keeps the browser tab and
 * search snippets accurate as visitors (and Googlebot's renderer) navigate.
 */
import { useEffect } from "react";
import { useLocation } from "wouter";

const SITE = "Three Pillars";

type PageMeta = { title: string; description?: string };

const ROUTE_META: Record<string, PageMeta> = {
  "/": {
    title: "Three Pillars, One app. For business and personal.",
    description:
      "Replace your entire software stack with a single platform, for businesses and individuals. 153+ modules covering Billing, Accounting, HR, CRM, Inventory, Compliance and personal Workspace tools. Built by buildingit.",
  },
  "/modules": {
    title: `All Modules | ${SITE}`,
    description:
      "Explore 153+ business modules across 27 categories: accounting, CRM, HR & payroll, inventory, manufacturing, compliance, and more.",
  },
  "/pricing": {
    title: `Pricing | ${SITE}`,
    description:
      "Simple per-user licensing. Free Student plan with workspace and creative tools, free Starter for individuals and small teams, Business at ₹2,499/user/month, and custom Enterprise pricing.",
  },
  "/personal": {
    title: `For Individuals | ${SITE}`,
    description:
      "Three Pillars for personal use: one workspace with in-house tools for notes, tasks, files, finances, and an AI assistant, free to start, premium when you need more.",
  },
  "/about": {
    title: `About | ${SITE}`,
    description:
      "Three Pillars is buildingit's answer to SaaS sprawl: one platform, 153+ modules, one data layer.",
  },
  "/roadmap": {
    title: `Roadmap | ${SITE}`,
    description: "See what is live today and what ships next on the Three Pillars platform.",
  },
  "/compare": {
    title: `Compare | ${SITE}`,
    description:
      "How Three Pillars stacks up against Tally, Zoho, and a stack of point tools, features, pricing, and total cost.",
  },
  "/contact": {
    title: `Contact & Book a Demo | ${SITE}`,
    description: "Book a demo or reach the Three Pillars team at hello@usethreepillars.com.",
  },
  "/updates": {
    title: `What's New | ${SITE}`,
    description: "Product updates and release notes from the Three Pillars team.",
  },
  "/insights": {
    title: `Insights | ${SITE}`,
    description:
      "Articles on GST compliance, e-invoicing, SaaS costs, and running Indian businesses on unified software.",
  },
  "/security": {
    title: `Security | ${SITE}`,
    description:
      "Enterprise-grade security: AES-256 encryption, full audit trails, and role-based access control.",
  },
  "/faq": {
    title: `FAQ | ${SITE}`,
    description: "Frequently asked questions about Three Pillars licensing, modules, and migration.",
  },
  "/migrate": {
    title: `Migrate to Three Pillars | ${SITE}`,
    description:
      "Move from Tally, Zoho, or spreadsheets to Three Pillars with guided data migration.",
  },
  "/investors": {
    title: `Investors | ${SITE}`,
    description: "Investor information for Three Pillars, a product of buildingit.",
  },
  "/privacy": { title: `Privacy Policy | ${SITE}` },
  "/terms": { title: `Terms of Service | ${SITE}` },
};

const toTitleCase = (slug: string) =>
  slug
    .split("-")
    .map(w => (w.length > 2 ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");

function metaForPath(path: string): PageMeta {
  const exact = ROUTE_META[path];
  if (exact) return exact;
  const moduleMatch = path.match(/^\/modules\/([a-z0-9-]+)$/);
  if (moduleMatch) {
    return {
      title: `${toTitleCase(moduleMatch[1])} Modules | ${SITE}`,
      description: `Explore ${toTitleCase(moduleMatch[1]).toLowerCase()} modules on the Three Pillars platform.`,
    };
  }
  const insightMatch = path.match(/^\/insights\/([a-z0-9-]+)$/);
  if (insightMatch) {
    return { title: `${toTitleCase(insightMatch[1])} | ${SITE} Insights` };
  }
  return { title: `${SITE}, One app. For business and personal.` };
}

/** Mount once inside the router (e.g. in Layout) to keep title/description in sync. */
export function usePageTitle(override?: string) {
  const [location] = useLocation();

  useEffect(() => {
    const meta = metaForPath(location);
    document.title = override ?? meta.title;
    if (meta.description) {
      const tag = document.querySelector('meta[name="description"]');
      if (tag) tag.setAttribute("content", meta.description);
    }
  }, [location, override]);
}
