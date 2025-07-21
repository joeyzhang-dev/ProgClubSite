// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://proggsu.vercel.app",
  integrations: [
    mdx(), 
    sitemap(), 
    tailwind({
      // Disable Tailwind's base styles to reduce CSS size
      applyBaseStyles: false,
    })
  ],
  markdown: {
    shikiConfig: {
      theme: "github-dark-high-contrast",
    },
  },
  vite: {
    build: {
      // Inline CSS for critical styles
      cssCodeSplit: false,
      // Minify CSS
      minify: true,
    },
    css: {
      // Transform CSS for better browser support
      transformer: 'postcss',
    },
  },
  // Build optimizations
  build: {
    // Inline stylesheets smaller than 4kb
    inlineStylesheets: 'auto',
  },
});
