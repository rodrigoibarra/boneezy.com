// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import vue from "@astrojs/vue";
import { fileURLToPath } from "url";

// https://astro.build/config
export default defineConfig({
  site: "https://rodrigoibarra.rocks",
  integrations: [mdx(), sitemap(), vue()],
  adapter: netlify(),
  server: {
    host: true,
  },
  vite: {
    resolve: {
      alias: {
        "@components": fileURLToPath(
          new URL("./src/components", import.meta.url),
        ),
        "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
        "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
        "@images": fileURLToPath(new URL("./src/images", import.meta.url)),
        "@scripts": fileURLToPath(new URL("./src/scripts", import.meta.url)),
        "@lib": fileURLToPath(new URL("./src/lib", import.meta.url)),
      },
    },
  },
});
