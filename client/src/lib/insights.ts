/**
 * Three Pillars. Insights articles.
 * A product of buildingit. © 2026 buildingit. All rights reserved.
 *
 * Launch content for the /insights section. Articles are stored as structured
 * blocks (not raw HTML) so the article page can render them with consistent,
 * theme-matched typography.
 */

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "sources"; items: { label: string; url: string }[] };

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readMinutes: number;
  date: string; // ISO date
  featured?: boolean;
  blocks: ArticleBlock[];
}

export const ARTICLES: Article[] = [
  {
    slug: "tally-alternative-2026",
    title: "Looking for a Tally alternative in 2026? Here is an honest comparison",
    excerpt:
      "Tally Prime remains excellent at what it was built for. But if you find yourself running six other tools around it, the problem is not Tally, it is the architecture. Here is how to evaluate the alternatives.",
    category: "Guides",
    readMinutes: 7,
    date: "2026-07-23",
    featured: true,
    blocks: [
      {
        type: "p",
        text: "Tally is the default accounting software of Indian business, and it earned that position. It is fast, dependable, accountants know it, and for pure ledger work it is hard to fault. So why do searches for a Tally alternative keep rising every year? Because the job description of business software changed, and single-purpose desktop accounting did not.",
      },
      { type: "h2", text: "Why businesses start looking" },
      {
        type: "list",
        items: [
          "Single-device, single-location: Tally Prime is licensed per machine (₹18,000 one-time for Silver plus annual AMC around ₹5,400, or a rental plan), and working from anywhere else means remote-desktop workarounds or Tally on cloud hosting at extra monthly cost.",
          "Accounting only: the moment you need CRM, payroll, attendance, e-commerce, or project tracking, you are buying and reconciling separate tools around it.",
          "Collaboration friction: multiple users editing from multiple places is not what a desktop ledger was designed for.",
          "Manual sync: bank feeds, e-commerce orders, and field-team data all arrive by export-import rather than flowing in live.",
        ],
      },
      { type: "h2", text: "The three kinds of alternatives" },
      {
        type: "p",
        text: "The first category is other accounting tools. Zoho Books, Vyapar, Busy and similar. They modernize the ledger (cloud access, cleaner interfaces, mobile apps) but leave the deeper problem untouched: accounting is still an island, and you still assemble the rest of your stack around it tool by tool.",
      },
      {
        type: "p",
        text: "The second category is full ERP suites. NetSuite, SAP Business One, Odoo Enterprise. They solve the integration problem but were priced and engineered for companies with IT departments. Implementation runs into months and lakhs, which is why Indian SMBs rarely get past the demo.",
      },
      {
        type: "p",
        text: "The third category is unified business platforms built for SMBs: one system where accounting, GST compliance, CRM, payroll, inventory, and e-commerce share a single data layer, priced per business rather than per module. This is the category Three Pillars is built in, 150+ tools across 27 categories on one login, with Indian compliance (GST, e-invoicing, e-way bills, TDS, PF/ESI) native rather than bolted on.",
      },
      {
        type: "table",
        headers: ["Criterion", "Tally Prime", "Cloud accounting apps", "Traditional ERP", "Unified platform"],
        rows: [
          ["Works from anywhere", "Add-on/hosting", "Yes", "Yes", "Yes"],
          ["Beyond accounting (CRM, HR, e-commerce)", "No", "Separate apps", "Yes", "Yes"],
          ["Indian compliance built in", "Yes", "Mostly", "Configured", "Yes"],
          ["Setup time", "Days", "Days", "Months", "Days"],
          ["Typical cost shape", "License + AMC per machine", "Per app per month", "Lakhs upfront", "One subscription"],
        ],
      },
      { type: "h2", text: "How to decide" },
      {
        type: "p",
        text: "If your only need is accounting and your accountant is happy, keeping Tally is a defensible choice. The case for switching gets strong when you count the tools running around it. A business paying for Tally plus a CRM, a payroll service, a billing app, and an e-commerce backend is already paying platform money for fragment results, and re-entering the same data between them. At that point the question is not which ledger is best, but why your ledger, your sales pipeline, and your payroll are strangers to each other.",
      },
      {
        type: "quote",
        text: "The best Tally alternative is not a better ledger. It is not needing six other tools around the ledger.",
      },
      {
        type: "p",
        text: "If you do decide to move, migration matters more than marketing. Our step-by-step Tally migration guide covers exporting masters and vouchers, mapping ledgers, and running both systems in parallel for one safe month, read it before you commit to anything.",
      },
    ],
  },
  {
    slug: "gst-billing-software-guide",
    title: "GST billing software in 2026: what it must do, and what it should do",
    excerpt:
      "Any billing tool can print a tax invoice. Fewer handle e-invoicing IRNs, e-way bills, credit notes, and GSTR-1 without manual exports. A practical checklist for choosing GST billing software that will not need replacing.",
    category: "Compliance",
    readMinutes: 6,
    date: "2026-07-23",
    blocks: [
      {
        type: "p",
        text: "Every business registered under GST needs billing software; the only question is whether it merely prints invoices or actually carries the compliance load. The difference becomes visible at month-end, and painfully visible in an audit. Here is a practical standard for what GST billing software must do in 2026, and what separates adequate from excellent.",
      },
      { type: "h2", text: "The non-negotiables" },
      {
        type: "list",
        items: [
          "Correct tax invoice fields: GSTIN, HSN/SAC codes, place of supply, CGST/SGST/IGST split, and rounding that matches the rules, on every invoice, automatically.",
          "E-invoicing readiness: if your turnover exceeds ₹5 crore, every B2B invoice must be registered with the IRP and carry an IRN and QR code. From April 2026 this is mandatory at the ₹5 crore threshold, and businesses above ₹10 crore already face a 30-day reporting window.",
          "E-way bill generation for goods movement above ₹50,000, ideally created from the same screen as the invoice.",
          "Credit and debit notes linked to original invoices, because unlinked adjustments are how returns stop matching.",
          "GSTR-1 data that exports cleanly, or better, files directly, without a spreadsheet intermediary.",
        ],
      },
      { type: "h2", text: "What separates good from adequate" },
      {
        type: "p",
        text: "The must-haves keep you compliant. The should-haves keep you fast. Billing software should pull customer and product details from the same records your inventory and accounts use, so a sale updates stock and ledgers in one motion. It should handle recurring invoices, payment reminders, and UPI/payment links natively. And it should not live on one machine in one office, the owner approving an invoice from a phone at a supplier's warehouse is not an edge case in India; it is Tuesday.",
      },
      {
        type: "quote",
        text: "Compliance failures rarely come from bad intentions. They come from data being retyped between tools that do not talk to each other.",
      },
      { type: "h2", text: "The architecture question" },
      {
        type: "p",
        text: "Standalone GST billing apps, including several free ones, cover the basics honestly. The structural weakness is that billing is where almost every other business record begins. An invoice touches inventory, receivables, customer history, and eventually payroll-funding cash flow. When billing runs on an island, every one of those connections becomes a manual export. This is why Three Pillars treats billing as one module on a shared data layer: the invoice you raise updates stock, books, CRM, and your GST returns in the same second, with e-invoicing and e-way bills built in. Start free, and the compliance engine is the same one larger plans use.",
      },
    ],
  },
  {
    slug: "zoho-one-cost-analysis",
    title: "The real cost of Zoho One for a growing Indian team",
    excerpt:
      "₹1,250 per employee per month sounds reasonable at five people. Run the arithmetic at twenty-five and the all-employee licensing rule changes the conversation entirely.",
    category: "Market Watch",
    readMinutes: 5,
    date: "2026-07-23",
    blocks: [
      {
        type: "p",
        text: "Zoho One is a genuinely impressive product: 45+ applications under one subscription, built by a company Indian software can be proud of. This is not a takedown. It is arithmetic, because the pricing model that looks friendly at five employees behaves very differently at twenty-five, and businesses rarely run the numbers for the team they are becoming.",
      },
      { type: "h2", text: "How the licensing actually works" },
      {
        type: "p",
        text: "Zoho One's headline plan is All-Employee pricing: as of 2026, roughly ₹1,250 per employee per month on annual billing (₹1,800 month-to-month), excluding GST. The key word is all. The plan requires a license for every employee in the company, not every user of the software. The warehouse staff who only mark orders packed, the delivery riders, the part-time accountant: everyone counts. The alternative Flexible-User plan removes that rule but costs several times more per user, which is its own arithmetic problem.",
      },
      {
        type: "table",
        headers: ["Team size", "Zoho One All-Employee (annual, approx.)", "What that buys"],
        rows: [
          ["5 employees", "₹75,000 / year", "45+ apps, 5 licenses"],
          ["15 employees", "₹2,25,000 / year", "Same apps, 15 licenses"],
          ["25 employees", "₹3,75,000 / year", "Same apps, 25 licenses"],
          ["50 employees", "₹7,50,000 / year", "Same apps, 50 licenses"],
        ],
      },
      {
        type: "p",
        text: "The subscription scales linearly with headcount whether or not software usage does. Hiring your twenty-sixth employee, a driver, say, raises your software bill by ₹15,000 a year even if they never open a single app.",
      },
      { type: "h2", text: "The second cost: assembly" },
      {
        type: "p",
        text: "Forty-five applications under one login is not the same as one platform. Zoho's apps began life as separate products, and stitching CRM to Books to People to Inventory still involves configuration, sync rules, and occasionally the marketplace. Many businesses end up hiring Zoho consultants for the assembly, a cost that never appears on the pricing page.",
      },
      { type: "h2", text: "A different pricing philosophy" },
      {
        type: "p",
        text: "Three Pillars prices the platform per business, not per head: plans from free to ₹1,999 per month flat, with modules, billing, GST compliance, CRM, payroll, e-commerce and the rest of the 27 categories, sharing one data layer by design rather than by integration. At five employees the difference is modest; at twenty-five it funds a salary. Our full comparison page puts the numbers side by side, including where Zoho remains the better fit.",
      },
    ],
  },
  {
    slug: "hr-payroll-software-india-smb",
    title: "HR and payroll software for Indian SMBs: what you actually need",
    excerpt:
      "PF, ESI, TDS, professional tax, attendance, and payslips, payroll in India is a compliance exercise wearing an HR costume. What a small business genuinely needs, and what is enterprise theatre.",
    category: "Guides",
    readMinutes: 6,
    date: "2026-07-23",
    blocks: [
      {
        type: "p",
        text: "Somewhere between the tenth and the twentieth employee, payroll stops being a spreadsheet job. Not because the arithmetic gets harder, but because the compliance does: PF contributions, ESI where applicable, TDS on salaries, professional tax that differs by state, gratuity accruals, and payslips employees can actually access. Getting any of these wrong compounds monthly. The question is what software a business this size actually needs, because the market mostly sells them enterprise HR systems they do not.",
      },
      { type: "h2", text: "The genuine requirements" },
      {
        type: "list",
        items: [
          "Statutory engine: PF, ESI, TDS, and professional tax computed correctly by state and salary structure, with challan-ready outputs each month.",
          "Attendance that feeds payroll: leave, late marks, and overtime flowing into salary computation without a monthly spreadsheet reconciliation.",
          "Payslips and declarations: employees see payslips, submit investment declarations, and apply for leave themselves instead of emailing HR.",
          "Full-and-final settlements and gratuity handled by the system, because exits are exactly when manual arithmetic goes wrong.",
          "An audit trail: who changed which salary, when, and who approved it.",
        ],
      },
      { type: "h2", text: "What is theatre at this size" },
      {
        type: "p",
        text: "Nine-box talent grids, OKR cascades, succession planning modules, engagement pulse surveys, at 500 employees these have their place. At 30, they are dashboards nobody opens, sold on the theory that you will grow into them. You are not buying software for the company you might be in a decade; you are buying the removal of this month's compliance risk.",
      },
      {
        type: "quote",
        text: "For an Indian SMB, payroll software is compliance software. Everything else is decoration until the statutory engine is right.",
      },
      { type: "h2", text: "The integration dividend" },
      {
        type: "p",
        text: "The quiet cost of standalone HR tools is that payroll is not actually standalone. Salaries are your largest expense, so payroll belongs in your books the moment it is processed, not exported at month-end. Attendance connects to project costing; reimbursements connect to expense records; new hires connect to asset registers. On Three Pillars, the HR and payroll modules sit on the same data layer as accounting and everything else, so a processed payroll posts itself to the ledger and a new joiner exists everywhere at once. One subscription, no per-employee meter running against your hiring plans.",
      },
    ],
  },
  {
    slug: "real-cost-of-saas-sprawl",
    title: "The real cost of SaaS sprawl for Indian businesses",
    excerpt:
      "The subscription fees are the smallest part of the bill. The real costs hide in re-entered data, broken syncs, and decisions made on numbers that never agree.",
    category: "Perspective",
    readMinutes: 6,
    date: "2026-07-20",
    blocks: [
      {
        type: "p",
        text: "Walk into any growing business in India today and count the software subscriptions. A ledger tool for accounting. A CRM for the sales team. A chat app, a project board, a payroll service, an e-commerce backend, a marketing platform, and a folder of spreadsheets holding it all together. Twenty tools is not the exception anymore, it is the norm.",
      },
      {
        type: "p",
        text: "Each tool looked cheap when it was added. That is precisely how sprawl happens: no single decision ever feels expensive. But the total cost of a sprawling stack is not the sum of its subscription fees. The fees are the visible tip. The real costs sit below the waterline.",
      },
      { type: "h2", text: "The four hidden costs" },
      {
        type: "p",
        text: "The first is duplicate data entry. When your billing tool does not talk to your inventory, someone types the same invoice twice. Multiply that by every order, every day, across every pair of disconnected tools, and you are paying salaries for work a connected system would do automatically.",
      },
      {
        type: "p",
        text: "The second is reconciliation. When reports come from five different tools, they disagree, not occasionally, but structurally, because each tool counts things its own way. Month-end becomes an investigation. Managers spend days establishing what the numbers even are before anyone can discuss what they mean.",
      },
      {
        type: "p",
        text: "The third is renewal creep. Subscriptions renew silently, usually at a higher price, often for seats nobody uses anymore. Few businesses audit this; the money simply leaks.",
      },
      {
        type: "p",
        text: "The fourth, and largest, is decision latency. When data lives in silos, questions that should take seconds take days. By the time the answer arrives, the moment to act on it has often passed.",
      },
      {
        type: "quote",
        text: "The most expensive part of a 20-tool stack is not the 20 bills. It is everything your team does to compensate for the gaps between them.",
      },
      { type: "h2", text: "What consolidation actually changes" },
      {
        type: "p",
        text: "Moving to a single platform is not about a smaller bill, although that usually happens too. It is about eliminating the gaps. When billing, inventory, payroll, CRM, and compliance run on one data layer, a sale recorded once updates everything it touches. Reports agree because they read from the same source. There is nothing to reconcile, because nothing diverged.",
      },
      {
        type: "p",
        text: "This is the thesis Three Pillars is built on: one platform, one login, one data layer, with every module your business needs, from billing to payroll to e-commerce, working from the same living records. The subscription math is favorable. The operational math is transformative.",
      },
    ],
  },
  {
    slug: "gst-einvoicing-deadlines-explained",
    title: "GST e-invoicing in 2026: thresholds, the 30-day rule, and the August API change",
    excerpt:
      "E-invoicing becomes mandatory for businesses above ₹5 crore turnover from April 2026, a 30-day reporting window already applies at ₹10 crore, and the IRP APIs change on 1 August 2026. Here is the verified timeline.",
    category: "Compliance",
    readMinutes: 5,
    date: "2026-07-18",
    blocks: [
      {
        type: "p",
        text: "When GST e-invoicing launched in October 2020, it applied only to businesses with aggregate turnover above ₹500 crore. Most businesses reasonably ignored it. That was a mistake in hindsight, because the threshold has done nothing but fall since.",
      },
      {
        type: "table",
        headers: ["Effective date", "Turnover threshold"],
        rows: [
          ["October 2020", "₹500 crore"],
          ["January 2021", "₹100 crore"],
          ["April 2021", "₹50 crore"],
          ["April 2022", "₹20 crore"],
          ["October 2022", "₹10 crore"],
          ["August 2023", "₹5 crore"],
          ["April 2026", "Mandatory for AATO above ₹5 crore (FY 2025-26)"],
        ],
      },
      {
        type: "p",
        text: "The direction of travel is unambiguous. From 1 April 2026, e-invoicing is mandatory for every business whose aggregate annual turnover in FY 2025-26 exceeded ₹5 crore. Each revision has pulled hundreds of thousands of additional businesses into the mandate, and the compliance conversation has shifted from whether smaller businesses will be included to when.",
      },
      { type: "h2", text: "The 30-day reporting window is already live" },
      {
        type: "p",
        text: "Since 1 April 2025, businesses with turnover of ₹10 crore and above cannot report invoices older than 30 days on the Invoice Registration Portal. Per the GSTN advisory of 27 March 2025, an invoice dated 1 April simply cannot be registered after 30 April, the portal rejects it. The penalty exposure for an invoice issued without an IRN where the mandate applies is ₹10,000 per invoice or 100% of the tax due, whichever is higher, and your buyer can lose the input tax credit on it.",
      },
      { type: "h2", text: "What compliance actually requires" },
      {
        type: "p",
        text: "E-invoicing is not simply generating a PDF invoice. Every B2B invoice must be registered with the Invoice Registration Portal (IRP), which validates it and returns a unique Invoice Reference Number (IRN) and a signed QR code. An invoice without an IRN, where the mandate applies, is not a valid tax document. Buyers can lose input tax credit on it, which makes your compliance failure your customer's problem, a fast way to lose accounts.",
      },
      { type: "h2", text: "1 August 2026: the IRP APIs change" },
      {
        type: "p",
        text: "On 17 June 2026, GSTN issued an advisory announcing changes to the e-Invoice and e-Way Bill APIs that go live in production on 1 August 2026. The Ship-to GSTIN becomes mandatory in Bill-to/Ship-to transactions (with 'URP' for unregistered recipients), new validations and error codes arrive, and a Voluntary Closure of e-Way Bill facility is introduced. Every ERP vendor, GSP, and ASP has been told to test against the sandbox before the deadline. If your billing software vendor is slow to update, your invoices start failing on 1 August.",
      },
      {
        type: "p",
        text: "Doing this manually, invoice by invoice, does not scale. The businesses that handle e-invoicing well are the ones whose billing software registers invoices with the IRP automatically at the moment of creation, reconciles IRNs against GST returns, and flags failures immediately.",
      },
      { type: "h2", text: "Prepare before the threshold reaches you" },
      {
        type: "p",
        text: "If your turnover is near ₹5 crore, treat the mandate as inevitable rather than hypothetical. Moving your billing onto a system with e-invoicing built in, before you are legally required to, turns a compliance scramble into a non-event. Three Pillars ships GST e-invoicing, e-way bills, and return preparation as native modules on the same data layer as your billing, so compliance happens as a side effect of doing business, not as a separate chore.",
      },
      {
        type: "sources",
        items: [
          {
            label: "GSTN advisory (27 Mar 2025): 30-day reporting window for AATO ≥ ₹10 crore, einvoice.gst.gov.in",
            url: "https://einvoice2.gst.gov.in/Documents/advisory270325.pdf",
          },
          {
            label: "GSTN advisory (17 Jun 2026): e-Invoice & e-Way Bill API changes effective 1 Aug 2026, tutorial.gst.gov.in",
            url: "https://tutorial.gst.gov.in/downloads/news/advisory_einvoice_api_ewb_by_irn_approved.pdf",
          },
          {
            label: "GST e-invoice portal: notified threshold history, einvoice1.gst.gov.in",
            url: "https://einvoice1.gst.gov.in/",
          },
        ],
      },
    ],
  },
  {
    slug: "gst-2-0-what-changed",
    title: "GST 2.0: what the two-slab reform actually changed for businesses",
    excerpt:
      "The 56th GST Council collapsed four tax slabs into two, exempted individual insurance, and set a hard new compliance regime in motion. A plain-language summary of what is now in force.",
    category: "Policy Watch",
    readMinutes: 6,
    date: "2026-07-16",
    blocks: [
      {
        type: "p",
        text: "On 3 September 2025, the 56th GST Council meeting approved the biggest restructuring of GST since its launch in 2017, widely called GST 2.0. The four-tier rate structure (5%, 12%, 18%, 28%) was rationalised into two main slabs: a merit rate of 5% and a standard rate of 18%, with a special 40% de-merit rate reserved for a small list of luxury and sin goods. The 12% and 28% slabs were abolished. Most changes took effect on 22 September 2025.",
      },
      { type: "h2", text: "The headline rate changes" },
      {
        type: "list",
        items: [
          "All individual life and health insurance policies are now fully exempt from GST.",
          "Cement moved from 28% to 18%, a direct cost cut for construction and infrastructure.",
          "Small cars and motorcycles up to 350cc moved from 28% to 18%.",
          "A long list of everyday food items moved to 5% or NIL.",
          "Refunds for inverted duty structures are now 90% provisional and risk-based, mirroring the treatment of zero-rated exports.",
        ],
      },
      { type: "h2", text: "The part most businesses missed: compliance got stricter" },
      {
        type: "p",
        text: "The rate cuts made headlines; the compliance architecture matters more for day-to-day operations. The Invoice Management System (IMS), live since October 2024, treats inaction on an invoice as deemed acceptance. From 1 April 2026, mismatches between GSTR-2B and GSTR-3B hard-block filing, the era of filing first and reconciling later is over. A three-year time bar on filing old returns is now enforced at portal level, permanently locking periods older than three years.",
      },
      {
        type: "quote",
        text: "GST 2.0 traded lower rates for tighter discipline. The businesses that struggle in 2026 will not struggle with the tax, they will struggle with the reconciliation.",
      },
      { type: "h2", text: "The dispute backlog finally has a home" },
      {
        type: "p",
        text: "The GST Appellate Tribunal (GSTAT) became operational for appeals by the end of September 2025 and began hearings in December 2025, with 30 June 2026 set as the limitation date for backlog appeals. For businesses carrying years-old disputes, there is now an actual forum, and an actual deadline.",
      },
      { type: "h2", text: "What this means in practice" },
      {
        type: "p",
        text: "Every rate change ripples through pricing, contracts, and open purchase orders, and every tightened deadline raises the cost of running compliance on spreadsheets. When your billing, inventory, and GST filings share one data layer, as they do in Three Pillars, a rate change is a configuration update, and reconciliation is continuous rather than a month-end scramble. The regulatory environment is moving toward systems that are always in sync. Standalone tools were not built for that.",
      },
      {
        type: "sources",
        items: [
          {
            label: "Press release, 56th GST Council meeting (3 Sep 2025), gstcouncil.gov.in",
            url: "https://gstcouncil.gov.in/sites/default/files/2025-09/press_release_press_information_bureau_0.pdf",
          },
          {
            label: "GST Council, official website",
            url: "https://gstcouncil.gov.in/",
          },
        ],
      },
    ],
  },
  {
    slug: "market-watch-zoho-erp-tally-cloud",
    title: "Market watch: Zoho launches ERP, Tally moves to Oracle Cloud",
    excerpt:
      "India's two business-software giants both made major moves this year. What Zoho ERP and TallyPrime's cloud migration signal about where the market is heading, and what it means for growing businesses.",
    category: "Market Watch",
    readMinutes: 6,
    date: "2026-07-12",
    blocks: [
      {
        type: "p",
        text: "If you want to know where Indian business software is heading, watch what the incumbents are building. In the span of a few months, Zoho launched a full ERP product, refreshed its flagship suite around AI, and crossed one million customer organisations, while Tally, the tool on which much of Indian accounting runs, moved its cloud platform onto Oracle's infrastructure. These are not small bets. They are the market's biggest players agreeing, publicly, on the same thesis.",
      },
      { type: "h2", text: "Zoho: ERP ambitions and an AI-first suite" },
      {
        type: "p",
        text: "In January 2026, Zoho launched Zoho ERP from Kumbakonam, a rural Tamil Nadu town, positioning it as a homegrown, compliance-ready alternative to global ERP vendors. It followed the November 2025 release of Zoho One 25, a major refresh of its 45+ app suite built around Ask Zia, a cross-application AI assistant, plus unified admin controls, audit logs, and anomaly detection. Underneath sits Zia LLM, the proprietary large language model Zoho announced in July 2025 alongside prebuilt AI agents and a no-code agent builder. In February 2026, Zoho marked its 30th anniversary and announced it now serves more than one million organisations.",
      },
      { type: "h2", text: "Tally: the ledger goes to the cloud" },
      {
        type: "p",
        text: "In February 2026, Tally Solutions announced that TallyPrime Cloud Access had migrated to Oracle Cloud Infrastructure, citing a 30% reduction in IT infrastructure costs and improved availability for its roughly three million customers. Managing director Tejas Goenka said the company plans to explore cloud and AI capabilities to deliver more actionable insights. For a product family that made its name as fast, offline desktop software, this is a significant admission: the future of even the most traditional ledger is connected, always-on, and intelligent.",
      },
      {
        type: "quote",
        text: "The incumbents have conceded the argument. Business software is consolidating into unified, AI-assisted, cloud-native platforms. The only question left is who builds the cleanest version of that future.",
      },
      { type: "h2", text: "What this means for a growing business" },
      {
        type: "p",
        text: "Both moves validate the direction, and both carry the weight of history. Zoho One remains a bundle of 45+ separately-born apps stitched together, with an AI assistant reaching across boundaries that still exist underneath. Tally is lifting a desktop-era architecture into the cloud rather than starting from a unified data layer. Three Pillars starts from the other end: one system, one data layer, with billing, CRM, payroll, inventory, compliance, and 153+ modules born connected, and SilverBat AI operating on all of it natively. When the giants are retrofitting toward the place you started from, that is worth paying attention to.",
      },
      {
        type: "sources",
        items: [
          {
            label: "Zoho press releases: Zoho ERP launch (23 Jan 2026), one million customers (18 Feb 2026), Zia LLM (17 Jul 2025), zoho.com",
            url: "https://www.zoho.com/press.html",
          },
          {
            label: "Announcing Zoho One 25 (18 Nov 2025). Zoho blog",
            url: "https://www.zoho.com/blog/one/a-refreshed-zoho-one-experience.html",
          },
          {
            label: "Tally Solutions migrates TallyPrime to Oracle Cloud Infrastructure (23 Feb 2026). IBS Intelligence",
            url: "https://ibsintelligence.com/ibsi-news/tally-solutions-migrates-tallyprime-to-oracle-cloud-infrastructure/",
          },
        ],
      },
    ],
  },
  {
    slug: "tally-migration-guide",
    title: "Moving beyond Tally: a practical migration guide",
    excerpt:
      "Tally earned its place in Indian business history. But if your team has outgrown it, here is how to migrate without losing your books, your history, or your sanity.",
    category: "Guides",
    readMinutes: 7,
    date: "2026-07-08",
    blocks: [
      {
        type: "p",
        text: "For millions of Indian businesses, Tally is where the books live. It is fast, familiar to every accountant in the country, and it works offline. Nobody migrates away from Tally because Tally failed. They migrate because the business now needs things a desktop ledger was never designed to do: multi-user access from anywhere, live dashboards, CRM and payroll and inventory in the same system, and automation that acts on the books rather than just recording them.",
      },
      { type: "h2", text: "What actually needs to move" },
      {
        type: "p",
        text: "A migration has four layers, and they are not equally hard. Masters, your ledgers, customers, suppliers, and item catalog, are structured and export cleanly. Opening balances are a snapshot and move easily once masters exist. Transaction history is bulkier but mechanical. The genuinely tricky layer is process: the informal workflows your team built around Tally, which need to be mapped to their equivalents in the new system.",
      },
      {
        type: "list",
        items: [
          "Step 1. Export masters from Tally (ledgers, stock items, parties) and import them first. Validate counts before proceeding.",
          "Step 2. Choose a cutover date, ideally a quarter or financial-year boundary, and bring in opening balances as of that date.",
          "Step 3. Import historical transactions if you need in-system history; otherwise archive Tally read-only and keep it for reference.",
          "Step 4. Run parallel for two to four weeks: enter transactions in both systems and compare outputs until the new books match.",
          "Step 5. Cut over, revoke write access to the old system, and keep the archive.",
        ],
      },
      { type: "h2", text: "The mistakes that hurt" },
      {
        type: "p",
        text: "Three mistakes account for most failed migrations. Migrating mid-quarter, which splits a reporting period across two systems and guarantees reconciliation pain. Skipping the parallel run, which means the first error you find is in production. And migrating the mess, importing years of duplicate parties and dead stock items instead of cleaning masters first. A migration is the best data-hygiene opportunity your business will ever get; do not waste it.",
      },
      {
        type: "p",
        text: "Three Pillars was built with this exact journey in mind: its migration tooling imports Tally masters and Excel data, its accounting module speaks the vocabulary your accountant already knows, and because billing, inventory, GST, and payroll share one data layer, the system you land on does considerably more than the one you left.",
      },
    ],
  },
  {
    slug: "why-ai-copilots-need-unified-data",
    title: "Why an AI copilot is only as good as the data it can see",
    excerpt:
      "Bolting AI onto twenty disconnected tools gives you twenty half-blind assistants. Real usefulness starts when one AI can see the whole business.",
    category: "AI",
    readMinutes: 5,
    date: "2026-07-01",
    blocks: [
      {
        type: "p",
        text: "Every software vendor now ships an AI assistant. Your CRM has one. Your accounting tool has one. Your project board has one. Each is impressive in a demo and strangely useless in practice, and the reason is structural: each assistant can only see the sliver of your business that lives inside its own tool.",
      },
      {
        type: "p",
        text: "Ask the CRM's AI which customers are overdue on payments and it cannot answer, invoices live in the accounting tool. Ask the accounting AI which overdue customers have open support tickets, and it has never heard of your helpdesk. The questions that matter in a business are almost always cross-domain. Siloed AI cannot answer cross-domain questions.",
      },
      {
        type: "quote",
        text: "The intelligence of an AI copilot is capped by the completeness of the data underneath it. Twenty tools means twenty ceilings.",
      },
      { type: "h2", text: "What changes when the data layer is unified" },
      {
        type: "p",
        text: "When billing, CRM, inventory, payroll, marketing, and compliance run on one data layer, an AI copilot operating on that layer sees the business the way an owner does, whole. It can chase payments because it knows the invoices and the customer conversations. It can draft a campaign for last quarter's best customers because sales history and marketing live in the same system. It can prepare payroll because attendance and salary structures are not in different vendors' databases.",
      },
      {
        type: "p",
        text: "This is the design decision behind SilverBat, the AI copilot inside Three Pillars. SilverBat is not a chatbot bolted onto one module; it operates across every module, on the same living records, with the same permission boundaries as the person asking. One brain, all your data, which is exactly the point.",
      },
      { type: "h2", text: "A note on security" },
      {
        type: "p",
        text: "Unifying data raises the stakes on protecting it, which is why a unified platform must be engineered with encryption, access control, and audit trails at the core rather than as add-ons. Paradoxically, one well-secured platform is easier to defend than twenty vendors with twenty security postures, your attack surface shrinks to something you can actually audit.",
      },
    ],
  },
  {
    slug: "choosing-software-that-scales",
    title: "How to choose business software you will not outgrow in two years",
    excerpt:
      "Most software decisions are made for the business you are today. The expensive ones are the decisions that ignore the business you are becoming.",
    category: "Guides",
    readMinutes: 6,
    date: "2026-06-24",
    blocks: [
      {
        type: "p",
        text: "There is a pattern to how growing businesses buy software. At five people, you pick whatever is cheapest and fastest to start. At twenty-five, the cracks show: tools that do not talk to each other, permissions that do not exist, reports assembled by hand. At fifty, you rip everything out and start over, at ten times the cost and disruption of choosing well the first time.",
      },
      { type: "h2", text: "Five questions that predict the future" },
      {
        type: "list",
        items: [
          "Does the data connect? If the answer involves the word 'integration', the honest answer is no. Connected-by-design beats connected-by-plumbing.",
          "Can it add capabilities without adding vendors? Growth means needing payroll, then e-commerce, then automation. Each new vendor multiplies complexity.",
          "Does it handle Indian compliance natively? GST, e-invoicing, e-way bills, TDS, PF and ESI are not optional features here; retrofitted compliance is permanent friction.",
          "Do permissions scale? At five people everyone sees everything. At fifty, roles, approvals, and audit trails stop being bureaucracy and start being survival.",
          "What does seat fifty cost? Per-tool pricing that looks harmless at five seats often becomes the largest line item in the budget by fifty. Do the arithmetic early.",
        ],
      },
      { type: "h2", text: "Buy the trajectory, not the snapshot" },
      {
        type: "p",
        text: "The common thread in all five questions is trajectory. A tool that fits today's snapshot but not tomorrow's shape is a liability wearing a friendly price tag. The reverse is also true: a platform with room to grow, more modules, more seats, more automation, same data layer, turns each stage of growth into a configuration change rather than a re-platforming project.",
      },
      {
        type: "p",
        text: "That is the standard we hold Three Pillars to. Start with billing on the free plan, switch on CRM when the sales team forms, add payroll at your first payday, open the e-commerce module when you go online, all without a migration, because everything was on one platform from day one. The best software decision is the one you only have to make once.",
      },
    ],
  },
];

export const getArticle = (slug: string) =>
  ARTICLES.find((a) => a.slug === slug);
