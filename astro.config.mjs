import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import rehypeExternalLinks from "rehype-external-links";
import icon from "astro-icon";
import AutoImport from "astro-auto-import";

import mdx from "@astrojs/mdx";

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
    AutoImport({
      imports: [
        // Import a component’s default export
        // generates:
        // import A from './src/components/A.astro';
        // "./src/components/A.astro",
      ],
    }),
    mdx(),
  ],
});
