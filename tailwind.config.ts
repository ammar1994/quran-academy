import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1F3B33",
        parchment: "#F6F1E7",
        gold: "#C9A227",
        sage: "#7C9885",
        clay: "#8C4A2F"
      },
      fontFamily: {
        display: ["var(--font-amiri)", "serif"],
        body: ["var(--font-tajawal)", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
