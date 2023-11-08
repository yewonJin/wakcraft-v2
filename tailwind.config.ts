import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/images/main-bg.webp')",
        noob: "url('/images/tier/noob.webp')",
        noob2: "url('/images/tier/noob2.webp')",
        gyeruik: "url('/images/tier/gyeruik.webp')",
        pro: "url('/images/tier/pro.webp')",
        gukbap: "url('/images/tier/gukbap.webp')",
        gukbap2: "url('/images/tier/gukbap2.webp')",
        hacker: "url('/images/tier/hacker.webp')",
        hacker2: "url('/images/tier/hacker2.webp')",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s",
      },
    },
    colors: {
      background: {
        primary: "rgb(var(--background-primary))",
        secondary: "rgb(var(--background-secondary))",
        tertiary: "rgb(var(--background-tertiary))",
      },
      text: {
        primary: "rgb(var(--text-primary))",
        secondary: "rgb(var(--text-secondary))",
        tertiary: "rgb(var(--text-tertiary))",
      },
    },
  },
  plugins: [],
};
export default config;
