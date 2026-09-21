# Round 19 research — real facts for Insights articles

## Government / GST (verified from official sources)

### 56th GST Council (3 Sep 2025) — "GST 2.0" [source: gstcouncil.gov.in press release PDF]
- 4-tier structure rationalised to 2 rates: Standard 18%, Merit 5%, special de-merit 40%; 12% slab abolished
- Effective 22 Sep 2025 (services + most goods); tobacco products transitioned later (1 Feb 2026 per Notif. 19/2025-CTR)
- GST exemption on all individual life & health insurance policies
- Cement 28% -> 18%; small cars & bikes <=350cc 28% -> 18%; many food items -> 5% or NIL
- GSTAT operational for appeals end Sep 2025, hearings by end Dec 2025; backlog appeal limitation 30.06.2026
- 90% provisional refunds for inverted duty structure (risk-based, like zero-rated)
- URL: https://gstcouncil.gov.in/sites/default/files/2025-09/press_release_press_information_bureau_0.pdf

### E-invoicing threshold timeline (verified)
- Oct 2020: ₹500 cr; Jan 2021: ₹100 cr; Apr 2021: ₹50 cr; Apr 2022: ₹20 cr; Oct 2022: ₹10 cr; Aug 2023: ₹5 cr (einvoice1.gst.gov.in notifications)
- From 1 Apr 2026: e-invoicing mandatory for AATO > ₹5 crore in FY 2025-26 (per CBIC; cross-check validraft + accountune)
- From 1 Apr 2025: AATO ≥ ₹10 crore cannot report e-invoices older than 30 days on IRP (GSTN advisory 27.03.2025, einvoice2.gst.gov.in/Documents/advisory270325.pdf)
- Penalty for missing IRN: ₹10,000/invoice or 100% of tax (whichever higher)

### GSTN Advisory 17 Jun 2026 (official PDF, tutorial.gst.gov.in)
- From 1 Aug 2026: e-Invoice API + e-Way Bill by IRN API changes in production
- Ship-to GSTIN mandatory in Bill-to/Ship-to transactions (ShipDtls.Gstin conditionally mandatory); "URP" for unregistered
- New validations/error codes (5002, 2323, 2325, 3039...)
- Voluntary Closure of e-Way Bill facility introduced (supplier/recipient/transporter/driver via mobile)
- ERP vendors/GSPs/ASPs must test in sandbox before 1 Aug 2026
- URL: https://tutorial.gst.gov.in/downloads/news/advisory_einvoice_api_ewb_by_irn_approved.pdf

### Other compliance changes in force 2026 (validraft.in summary — cross-verified points only)
- IMS (Invoice Management System): no action = deemed acceptance; live since Oct 2024, enforced hard from Apr 2026
- ITC "zero mismatch": GSTR-2B vs GSTR-3B mismatches hard-block filing from 1 Apr 2026
- 3-year return filing time-bar enforced at portal level (older periods permanently locked)
- Budget 2026: Sec 13 IGST (intermediary services place of supply = recipient location -> zero-rated exports), Sec 15/34 post-sale discounts via credit note, Sec 54 provisional refunds 90% within 7 days
- 57th GST Council expected mid-2026

## Still needed: competitor news (Zoho, Tally, etc.)

## Competitor news (verified)

### Zoho (zoho.com/press.html — official)
- 23 Jan 2026: Zoho launches "Zoho ERP" from Kumbakonam (rural TN), takes on global ERP players — direct competitor move
- 18 Feb 2026: Zoho marks 30 years, surpasses 1 million customer organisations
- 18-19 Nov 2025: "Zoho One 25" (ZO25) — AI-powered refresh: Spaces UI, Ask Zia cross-app AI assistant, Zia Hubs (unstructured data intel), audit logs/anomaly detection, 5 new apps (Vani, Thrive, LandingPage, Log360 Cloud, RPA)
- 17 Jul 2025: Zoho launches proprietary Zia LLM, ASR models, MCP server, prebuilt AI agents, no-code agent builder
- 13 May 2026: Zoho invests ₹70 crore in ONDC
- 10 Jun 2026: Zoho unveils "Nathu La" designed-in-India server (tech sovereignty, inference cost cut)
- 13 Jan 2026: first data centres in UAE
- Dec 2024: Zoho Finance suite grew 50% in India; first to integrate IMS on GST portal
- Blog URL ZO25: https://www.zoho.com/blog/one/a-refreshed-zoho-one-experience.html
- Press: https://www.zoho.com/press.html

### Tally Solutions (via IBS Intelligence, 23 Feb 2026)
- TallyPrime Cloud Access migrated to Oracle Cloud Infrastructure (OCI); claims 30% IT infra cost reduction
- ~3 million customers globally (2.7M+ in India per Tally); founded 1986
- Tejas Goenka (MD) quote: plans to explore cloud + AI capabilities
- Feb 2026: Tally promoting ₹750/month plan w/ AI-powered document processing
- URL: https://ibsintelligence.com/ibsi-news/tally-solutions-migrates-tallyprime-to-oracle-cloud-infrastructure/

## Editorial angle for Insights
- New category "Market Watch" / "Industry & Policy Updates": real dated items with source links
- Rewrite existing GST article with verified GST 2.0 + e-invoicing facts
- New article: "GST compliance calendar 2026" (1 Apr 2026 ₹5cr e-invoicing, 1 Aug 2026 API changes, IMS deemed acceptance)
- New article: competitor landscape update — what Zoho ERP launch and Tally's cloud move mean for SMBs (respectful, factual tone, positions Three Pillars)

## insights.ts structure (client/src/lib/insights.ts)
- ArticleBlock union: p / h2 / quote / list / table {headers, rows}
- Article: slug, title, excerpt, category, readMinutes, date (ISO), featured?, blocks
- 5 existing articles: real-cost-of-saas-sprawl (featured, Perspective), gst-einvoicing-deadlines-explained (Compliance), tally-migration (?), ai-copilots-unified-data (?), choosing-software (?)
- Plan: 
  1. Rewrite gst-einvoicing article w/ verified facts: threshold table already correct (500cr->5cr Aug 2023); ADD: 1 Apr 2026 mandatory >₹5cr AATO FY25-26, 30-day IRN window for ≥₹10cr (from 1 Apr 2025), penalty ₹10k/invoice or 100% tax, GSTN 17 Jun 2026 advisory (Ship-to GSTIN mandatory + EWB voluntary closure, production 1 Aug 2026) w/ source links
  2. NEW article: "GST 2.0 explained" — 56th Council 3 Sep 2025, 2-slab 5/18 + 40% demerit, effective 22 Sep 2025, insurance exemption, GSTAT, IMS deemed acceptance, ITC hard block Apr 2026, 3-yr filing bar, Budget 2026 Sec13/15/34/54 changes. Category: Policy Watch
  3. NEW article: "Market watch: Zoho ERP, Tally on Oracle Cloud" — Zoho ERP launch 23 Jan 2026 Kumbakonam; Zoho One 25 (Nov 2025) AI refresh Ask Zia; Zoho 1M customers 30 yrs (Feb 2026); Zia LLM Jul 2025; Tally OCI migration Feb 2026 30% cost cut, ~3M customers, ₹750/mo plan AI doc processing. Respectful factual tone + what it means for SMBs + Three Pillars positioning. Category: Market Watch
  4. Add source links support: maybe new block type {type:"source", label, url} or append "Sources" list block with URLs as plain text links — need link rendering in InsightArticle.tsx (check renderer).
- Note: article dates must be ≤ today (22 Jul 2026)
