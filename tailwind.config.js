/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#121212", // Deep Charcoal / Midnight Black
        accent: "#D4AF37",  // Gold
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "Times New Roman", "serif"],
        sans: ["Atkinson Hyperlegible", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      },
      height: {
        'hero-banner': '600px',
      },
    },
  },
  plugins: [],
}
