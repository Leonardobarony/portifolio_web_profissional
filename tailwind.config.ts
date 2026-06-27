import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0A0E1A",
        "bg-card": "#111827",
        accent: "#00C4CC",
        "accent-hover": "#00A3AA",
        "text-primary": "#F9FAFB",
        "text-muted": "#9CA3AF",
        border: "#1F2937",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        jetbrains: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
