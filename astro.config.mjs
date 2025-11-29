// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://rodrigoibarra.rocks",
  integrations: [mdx(), sitemap()],
  adapter: netlify(),
  server: {
    host: true,
  },
});
