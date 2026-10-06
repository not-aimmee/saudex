# Saudex Global

The Saudex Global website is a React, TypeScript, and Vite application for the
company's freight forwarding, import-export, customs, warehousing, distribution,
and supply-chain services.

## Requirements

- Node.js 20.19 or newer in the 20.x line, or 22.12 or newer
- npm

## Local development

```sh
npm ci
```

Copy `.env.example` to `.env.local` before starting the dev server
(`Copy-Item .env.example .env.local` in PowerShell).

```sh
npm run dev
```

Set the EmailJS values in `.env.local` to enable the contact forms. The EmailJS
public key is intended for browser use; never put private credentials in a
`VITE_` variable.

## Build and checks

```sh
npm run lint
npm run build
npm run preview
```

The build writes the static site to `dist/`, including the canonical sitemap and
SEO landing pages. `wrangler.jsonc` configures Cloudflare's SPA fallback so
client-side routes return the application shell. Configure the Cloudflare
deployment to run `npm run build` and publish `dist/`.
