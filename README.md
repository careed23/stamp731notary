# Stamp 731 Notary

A premium loan-signing notary website built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/), featuring a black/gold/cream brand aesthetic.
# Stamp 731 Notary — Marketing Website

A professional marketing website for **Stamp 731 Notary**, built with [Astro](https://astro.build/) and deployed on [Cloudflare Workers](https://workers.cloudflare.com/) as a static site.

## Pages

| Route | Description |
|-------|-------------|
| `/` | **Home** — Hero section, Why Mallory, Our Services, Contact Banner |
| `/about` | **About** — Full Why Mallory section with headshot |
| `/contact` | **Contact** — Netlify Forms contact form |

---

## 🚀 Local Development

### Prerequisites

- Node.js ≥ 22
- npm

### Install dependencies

```bash
npm install
```

### Start dev server

```bash
npm run dev
```

The site will be available at `http://localhost:4321`.

### Build for production

```bash
npm run build
```

Static output goes to `./dist/`.

---

## 🌐 Deploying to Netlify

1. Push this repository to GitHub (or GitLab / Bitbucket).
2. Log in to [Netlify](https://app.netlify.com/) and click **"Add new site" → "Import an existing project"**.
3. Connect your repository.
4. Set the build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**.

### Enable Netlify Forms notifications

After your first deploy, Netlify will automatically detect the `data-netlify="true"` form.

To receive email notifications for each submission:

1. In the Netlify dashboard, navigate to your site.
2. Go to **Site configuration → Forms → Form notifications**.
3. Click **"Add notification" → Email notification**.
4. Set the **email address** to `mallory@stamp731.com`.
5. Save.

> The form uses a honeypot field (`bot-field`) for spam protection — no additional CAPTCHA service is required.

---

## 🖼 Adding Real Images

Replace the placeholder images in `public/images/` with your own:

| File | Used in | Recommended size |
|------|---------|-----------------|
| `public/images/hero.jpg` | Home page hero background | 1920 × 1080 px (or larger) |
| `public/images/contact-banner.jpg` | Home page contact banner overlay | 1920 × 600 px |
| `public/images/headshot.png` | About page profile photo | 400 × 400 px (square) |

The site is designed to work gracefully without these images — each section has a solid dark background fallback.

---

## 🎨 Brand Colours

| Token | Hex | Usage |
|-------|-----|-------|
| Brand Black | `#1a1a1a` | Backgrounds, nav, footer |
| Brand Gold | `#c8a951` | Accents, borders, CTAs |
| Brand Cream | `#f8f4ed` | Section backgrounds |

---

## 🧞 Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run astro ...` | Run Astro CLI commands |
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

