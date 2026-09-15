import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1B33",
          light: "#132a4d",
          dark: "#070f1e",
        },
        gold: {
          DEFAULT: "#C6973B",
          light: "#DCB868",
          dark: "#9C7526",
        },
        cream: "#F5F1E7",
        charcoal: "#3A3A3A",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.06)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out both",
        pulseSoft: "pulseSoft 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
