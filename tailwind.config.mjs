import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "var(--darkest)",
        foreground: "var(--white)",
        accent: "var(--accent)",
        white: "var(--white)",
        darkest: "var(--darkest)",
        darker: "var(--darker)",
        dark: "var(--dark)",
        light: "var(--light)",
        lighter: "var(--lighter)",
        lightest: "var(--lightest)",
        blurred: "var(--blurred)",
        accenttransparent: "var(--accent-transparent)",
        blob: "var(--blob)",
      },
    },
    fontFamily: {
      sans: ["'Inter Variable'", ...defaultTheme.fontFamily.sans],
      mono: ["'JetBrains Mono'", ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [],
};
