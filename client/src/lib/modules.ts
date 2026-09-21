/**
 * Three Pillars. Complete Module Data
 * A product of buildingit. © 2026 buildingit. All rights reserved.
 *
 * 153+ modules across 27 categories.
 * Style: Obsidian Monolith. pure black, silver/white, frosted glass.
 */

export interface ModuleCategory {
  name: string;
  icon: string; // lucide icon name key
  modules: string[];
}

/** URL slug for a category, e.g. "HR & Payroll" → "hr-payroll" */
export function categorySlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function findCategoryBySlug(slug: string): ModuleCategory | undefined {
  return MODULE_CATEGORIES.find((c) => categorySlug(c.name) === slug);
}

export const MODULE_CATEGORIES: ModuleCategory[] = [
  {
    name: "Accounting",
    icon: "Calculator",
    modules: [
      "Chart of Accounts",
      "Journal & Ledger",
      "Banking & Reconciliation",
      "Expenses & Reimbursements",
      "Vendor Payments",
      "Cash Flow & Forecast",
      "Investments & FDs",
      "Budgeting",
      "FP&A & Consolidation",
      "Multi-currency & Forex",
      "Bank Feeds & Reconciliation",
      "Year-End Close",
    ],
  },
  {
    name: "Administration",
    icon: "Settings",
    modules: [
      "Document Management",
      "Users & Roles",
      "Company Settings",
      "Documents",
      "Roles & Permissions",
      "People & Access",
      "Plan & Billing",
      "Licenses & Renewals",
      "API Keys & Webhooks",
      "Multi-Entity & Branches",
    ],
  },
  {
    name: "Analytics",
    icon: "BarChart3",
    modules: ["Financial Reports", "Business Analytics", "BI Dashboards"],
  },
  {
    name: "Automation",
    icon: "Zap",
    modules: ["Data Entry & OCR", "Automation Studio", "App Builder", "SilverBat AI"],
  },
  {
    name: "CRM",
    icon: "Users",
    modules: [
      "CRM & Pipeline",
      "Support Desk",
      "Knowledge Base",
      "Omnichannel Inbox",
      "Scheduling & Appointments",
    ],
  },
  {
    name: "Compliance",
    icon: "ShieldCheck",
    modules: [
      "Governance Risk & Compliance",
      "GST",
      "Clients & Vendors",
      "Compliance Calendar",
      "Global Compliance",
      "e-Invoicing & e-Way Bill",
      "TDS / TCS",
      "Income Tax",
      "PF / ESI / PT",
      "ROC / MCA",
    ],
  },
  {
    name: "Customer Success",
    icon: "HeartHandshake",
    modules: ["Customer Success"],
  },
  {
    name: "E-commerce",
    icon: "ShoppingCart",
    modules: ["Online Store", "Web Orders"],
  },
  {
    name: "Field Service",
    icon: "Wrench",
    modules: ["Field Service", "Maintenance (CMMS)", "Job Costing & SLA"],
  },
  {
    name: "Fixed Assets",
    icon: "Building2",
    modules: ["Fixed Assets"],
  },
  {
    name: "Governance",
    icon: "Scale",
    modules: [
      "Contracts",
      "Audit Log",
      "Custom Reports",
      "Workflows & Automation",
      "Approvals & Workflow",
      "e-Signature",
    ],
  },
  {
    name: "Inventory",
    icon: "Package",
    modules: [
      "Items & Stock",
      "Warehouses & Transfers",
      "Quality Control",
      "Quality Management (eQMS)",
      "Demand & Reorder",
      "Returns / RMA",
      "Vendor Scorecards",
      "Product Information",
      "Asset Library",
      "Warranty & Serial Tracking",
      "Warehouse Mgmt (WMS)",
    ],
  },
  {
    name: "Learning",
    icon: "GraduationCap",
    modules: ["Learning (LMS)"],
  },
  {
    name: "Legal",
    icon: "Gavel",
    modules: ["Contract Lifecycle"],
  },
  {
    name: "Logistics",
    icon: "Truck",
    modules: ["Shipping & Fulfilment", "Fleet & Routes", "Transportation (TMS)"],
  },
  {
    name: "Manufacturing",
    icon: "Factory",
    modules: [
      "Manufacturing",
      "Bill of Materials",
      "Production Orders",
      "Demand & S&OP",
      "Product Lifecycle (PLM)",
      "Shop-Floor (MES)",
    ],
  },
  {
    name: "Marketing",
    icon: "Megaphone",
    modules: [
      "Campaigns",
      "Loyalty & Rewards",
      "Feedback & Surveys",
      "Affiliate / Referrals",
      "Audience Segments",
      "Message Templates",
      "Landing Pages",
      "Lead Forms",
      "Marketing Calendar",
      "Promotions & Coupons",
      "Social Posts",
      "SEO & Web Analytics",
      "Creative Studio",
      "Website",
      "Blog",
      "Community Forum",
      "Broadcasts & Journeys",
      "Marketing Attribution",
      "Events & Webinars",
    ],
  },
  {
    name: "Overview",
    icon: "LayoutDashboard",
    modules: ["Dashboard"],
  },
  {
    name: "People & Payroll",
    icon: "UserCog",
    modules: [
      "Employees",
      "Reimbursements",
      "Salary Structures",
      "Payroll & Payslips",
      "Attendance & Leave",
      "Recruitment",
      "Performance Reviews",
      "Training & Onboarding",
      "Travel & Mileage",
    ],
  },
  {
    name: "Procurement",
    icon: "ClipboardList",
    modules: [
      "Purchase Documents",
      "Procurement & Vendors",
      "RFQ / e-Tendering",
      "Goods Receipt (GRN)",
      "Supplier Relationship",
    ],
  },
  {
    name: "Projects",
    icon: "FolderKanban",
    modules: ["Projects & Tasks", "Billable Hours"],
  },
  {
    name: "Risk & Audit",
    icon: "AlertTriangle",
    modules: ["Risk Register", "Incident Management"],
  },
  {
    name: "Sales & Billing",
    icon: "Receipt",
    modules: [
      "Sales Documents",
      "Point of Sale",
      "Subscriptions & Recurring",
      "CPQ & Revenue Recognition",
      "Quotations & Estimates",
      "Sales Commissions",
      "Payment Links",
      "Usage / Metered Billing",
    ],
  },
  {
    name: "Service Desk",
    icon: "Headphones",
    modules: ["Service Desk", "IT Service Desk", "IT Assets"],
  },
  {
    name: "Treasury",
    icon: "Landmark",
    modules: ["Treasury & Cash", "Loans & EMIs"],
  },
  {
    name: "Verticals",
    icon: "Layers",
    modules: [
      "Patient Management",
      "Property & Lease",
      "Membership",
      "Grants & Fund Accounting",
      "Reservations",
      "Student Information",
      "Donations & Fundraising",
      "ESG & Sustainability",
    ],
  },
  {
    name: "Workspace",
    icon: "AppWindow",
    modules: [
      "Three Sheets",
      "Three Docs",
      "Code Studio",
      "Design Studio",
      "Connections",
      "Workspace Suite",
      "Three Spaces",
      "Three Slides",
      "Three Forms",
      "Three Notes",
      "Three Calendar",
      "Three Tasks",
      "Three Mail",
      "Three Chat",
      "Three Browser",
    ],
  },
];

export const TOTAL_MODULES = MODULE_CATEGORIES.reduce(
  (sum, c) => sum + c.modules.length,
  0
);

export const TOTAL_CATEGORIES = MODULE_CATEGORIES.length;

export const APP_URL = "https://usethreepillars.online";

export const COMPETING_TOOLS = [
  "QuickBooks",
  "Xero",
  "Tally",
  "Zoho",
  "SAP",
  "Oracle",
  "Salesforce",
  "HubSpot",
  "Slack",
  "Notion",
  "Monday",
  "Jira",
  "Asana",
  "Freshworks",
  "Zendesk",
  "Stripe",
  "Shopify",
  "Mailchimp",
  "Google Workspace",
  "Microsoft 365",
];
