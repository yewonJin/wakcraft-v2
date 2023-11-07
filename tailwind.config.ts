import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      backround: {
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
