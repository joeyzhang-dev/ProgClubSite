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
    server: {
      watch: {
        // Ignore studio directory to prevent conflicts
        ignored: ['**/studio/**', '**/node_modules/**', '**/.git/**'],
        // Reduce CPU usage
        usePolling: false,
      },
    },
    build: {
      // Inline CSS for critical styles
      cssCodeSplit: false,
      // Minify CSS but disable JS minification temporarily for debugging
      minify: false,
    },
    css: {
      // Transform CSS for better browser support
      transformer: 'postcss',
    },
    // Optimize dependency handling
    optimizeDeps: {
      // Prevent dependency conflicts
      force: false,
      include: ['@astrojs/mdx', '@astrojs/tailwind'],
    },
  },
  // Build optimizations
  build: {
    // Inline stylesheets smaller than 4kb
    inlineStylesheets: 'auto',
  },
  // Exclude studio from main site processing
  srcDir: './src',
  publicDir: './public',
});
