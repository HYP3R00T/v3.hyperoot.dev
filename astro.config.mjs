import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import rehypeExternalLinks from "rehype-external-links";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  markdown: {
    shikiConfig: {
      theme: "css-variables",
      defaultColor: false,
    },
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
        },
      ],
    ],
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon({
      iconDir: "./src/assets/icons",
    }),
  ],
});
