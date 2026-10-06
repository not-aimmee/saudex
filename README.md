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

The build writes the static site to `dist/`, including a pre-rendered HTML page
for every route in `routes.json`, the eligible routes in the sitemap, `llms.txt`,
and a dedicated `404.html`. The route manifest is shared by the client router
and sitemap generator; set `sitemap` to `false` for routes that should not be
listed and `noIndex` to `true` for routes that should not be indexed.

`wrangler.jsonc` configures Cloudflare to return `404.html` with a not-found
status for unknown URLs. Configure the Cloudflare build to run `npm ci` followed
by `npm run build`, publish `dist/`, and provide the three `VITE_EMAILJS_*`
variables as build-time environment variables to enable contact forms.
