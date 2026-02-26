# Stamp 731 Notary — Marketing Website

A professional marketing website for **Stamp 731 Notary**, built with [Astro](https://astro.build/) and deployed on [Cloudflare Workers](https://workers.cloudflare.com/) as a static site.

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, services grid, contact CTA |
| `/why-mallory` | Why choose Mallory — 6 feature tiles + bio |
| `/contact` | Contact page — info + contact form |

## Theme

Gold (`#c9a84c`) / Cream (`#fdf8f0`) / Black (`#1a1a1a`) palette with card shadows and responsive layout.

## 🚀 Local Development

```bash
npm install
npm run dev        # starts dev server at http://localhost:4321
```

## 🏗️ Production Build

```bash
npm run build      # outputs to ./dist/
```

## ☁️ Cloudflare Deployment

This project is configured for [Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/) via `@astrojs/cloudflare`.

### Deploy via Wrangler CLI

```bash
npm run build && npm run deploy
# or
wrangler deploy
```

### Deploy via Cloudflare Dashboard (Cloudflare Pages)

1. Push your branch to GitHub.
2. In the [Cloudflare Dashboard](https://dash.cloudflare.com/), go to **Workers & Pages → Create application → Pages → Connect to Git**.
3. Select the repo and set the following build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click **Save and Deploy**.

## 📁 Assets

Placeholder assets are in `/public/assets/`. Replace these with real images before going live:

| File | Purpose |
|---|---|
| `public/assets/logo.svg` | Site logo (nav + footer) |
| `public/assets/hero-bg.jpg` | Homepage hero background (1200×600+ recommended) |
| `public/assets/mallory-placeholder.png` | Mallory's headshot on Why Mallory page |

## 🧞 Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build via Wrangler |
| `npm run deploy` | Deploy to Cloudflare |

