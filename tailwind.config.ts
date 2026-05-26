import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/i18n/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F8F4EA",
        "warm-white": "#FFFDF8",
        champagne: "#E8D7B5",
        taupe: "#8F8172",
        "soft-gold": "#B9965E",
        charcoal: "#1E1E1B",
        "charcoal-soft": "#3B3832"
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "Avenir Next", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(30, 30, 27, 0.10)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.06)" }
        }
      },
      animation: {
        "fade-up": "fade-up 900ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "slow-zoom": "slow-zoom 18s ease-out both"
      }
    }
  },
  plugins: []
} satisfies Config;

export default config;
