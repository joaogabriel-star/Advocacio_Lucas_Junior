import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1220",
          light: "#101B30",
          dark: "#05080F",
          surface: "#0E182C",
        },
        ink: "#040609",
        accent: {
          DEFAULT: "#4FA8FF",
          light: "#8CC7FF",
          dark: "#2E7FD1",
        },
        paper: "#F3F5F8",
        mist: "#9AA7BD",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.06)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(4%, -6%) scale(1.08)" },
          "66%": { transform: "translate(-3%, 4%) scale(0.96)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both",
        pulseSoft: "pulseSoft 2.4s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        blob: "blob 16s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
