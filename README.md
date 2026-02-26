# Stamp 731 Notary

A premium loan-signing notary website built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/), featuring a black/gold/cream brand aesthetic.

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
