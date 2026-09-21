# Three Pillars — Marketing Website: Self-Hosting Guide

Three Pillars — a product of buildingit. © 2026 buildingit. All rights reserved.

This is a full-stack app: **React 19 + Vite + Tailwind 4** frontend, **Express 4 + tRPC 11** backend, **MySQL** database via **Drizzle ORM**.

## 1. Requirements

- Node.js 22+
- pnpm 10+ (`npm i -g pnpm`)
- A MySQL 8 database (or TiDB/MariaDB-compatible)

## 2. Install

```bash
pnpm install
```

## 3. Environment variables

Create a `.env` file in the project root:

```env
# REQUIRED — your own MySQL connection string
DATABASE_URL=mysql://user:password@host:3306/dbname

# REQUIRED — any long random string, used to sign session cookies
JWT_SECRET=change-me-to-a-long-random-string

# Port for the production server (defaults to 3000)
PORT=3000
```

### Variables you can ignore or replace

The hosted version used a few managed services that are injected automatically.
When self-hosting, they behave as follows:

| Variable | Purpose | Self-hosting impact |
|---|---|---|
| `VITE_APP_ID`, `OAUTH_SERVER_URL`, `VITE_OAUTH_PORTAL_URL` | OAuth login | Not needed. The marketing site has **no login-gated pages**; all visitor features (demo requests, notify-me, deck requests) are public and keep working without these. |
| `BUILT_IN_FORGE_API_URL`, `BUILT_IN_FORGE_API_KEY` | Owner push notifications on new leads | Without them, notification calls fail silently by design — leads are **still stored in your database**. Replace `notifyOwner` in `server/_core/notification.ts` with your own email/Slack webhook if you want alerts. |
| `VITE_ANALYTICS_ENDPOINT`, `VITE_ANALYTICS_WEBSITE_ID` | Analytics script | Optional. Remove the analytics `<script>` tag in `client/index.html` or point it at your own Umami instance. |
| `OWNER_OPEN_ID`, `OWNER_NAME` | Marks the owner account as admin | Only relevant if you later add login features. |

## 4. Set up the database

Point `DATABASE_URL` at your database, then create the tables:

```bash
pnpm db:push
```

This creates `users`, `demo_requests`, `notify_subscribers`, and `deck_requests`.

## 5. Run in development

```bash
pnpm dev
# → http://localhost:3000
```

## 6. Build & run in production

```bash
pnpm build        # builds client to dist/ and bundles the server
pnpm start        # NODE_ENV=production node dist/index.js
```

Put it behind any reverse proxy (nginx, Caddy) and point your domain at it.

### Example nginx block

```nginx
server {
    server_name yourdomain.com;
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## 7. Static assets

Images (logo, favicon, OG share card, roadmap art) are served from CDN URLs
created during development. They will keep working as long as the original
project remains published. For full independence, download each asset URL
referenced in the code (search for `manus-storage` / `daily-static` URLs under
`client/`), place the files in `client/public/assets/`, and update the
references to `/assets/<name>`.

## 8. Where the leads live

| Table | Filled by |
|---|---|
| `demo_requests` | Contact page — Book a Demo form |
| `notify_subscribers` | Roadmap page — Notify me form |
| `deck_requests` | Investors page — Request the Deck form |

Query them with any MySQL client, e.g.
`SELECT * FROM demo_requests ORDER BY createdAt DESC;`

## 9. Update the sitemap domain

`client/public/sitemap.xml` and the JSON-LD block in `client/index.html`
reference the original domain. Search-and-replace it with your own domain
before going live.

## 10. Run tests

```bash
pnpm test   # vitest — 9 tests covering the lead-capture API
```
