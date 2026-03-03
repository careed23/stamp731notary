import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // Replace this with your actual Cloudflare Pages URL
  site: 'https://stamp731notary.pages.dev',
  integrations: [tailwind()]
});
