import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
export default defineConfig({
  // Replace this with your actual Cloudflare Pages URL
  site: 'https://stamp731notary.pages.dev',
  integrations: [tailwind()],
  adapter: cloudflare(),
  output: 'server'
});
