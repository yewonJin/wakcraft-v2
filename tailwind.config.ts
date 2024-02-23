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
        noob: "url('/images/tier/noob.webp')",
        noob2: "url('/images/tier/noob2.webp')",
        gyeruik: "url('/images/tier/gyeruik.webp')",
        pro: "url('/images/tier/pro.webp')",
        gukbap: "url('/images/tier/gukbap.webp')",
        gukbap2: "url('/images/tier/gukbap2.webp')",
        hacker: "url('/images/tier/hacker.webp')",
        hacker2: "url('/images/tier/hacker2.webp')",
        navercafe: "url('/images/naver_cafe.png')",
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
      color: {
        rose: "rgb(var(--color-rose))",
        green: "rgb(var(--color-green))",
        blue: "rgb(var(--color-blue))",
        yellow: "rgb(var(--color-yellow))",
        neutral: "rgb(var(--color-neutral))",
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
