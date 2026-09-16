import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Fundos claros: branco puro e um off-white de papel para alternar seções.
        paper: "#FFFFFF",
        bone: "#F6F4F0",
        mistBg: "#EEF1F5",
        // Azul institucional sóbrio — títulos, footer e superfícies escuras pontuais.
        navy: {
          DEFAULT: "#12304F",
          dark: "#0D2239",
          light: "#1D4470",
        },
        // Azul corporativo de links, botões e destaques.
        accent: {
          DEFAULT: "#1D5C9E",
          dark: "#143F6E",
          light: "#2E7AC4",
        },
        // Dourado discreto para filetes e olho de seção (tom tradicional).
        gold: {
          DEFAULT: "#A88B5B",
          light: "#C4AA7E",
        },
        ink: "#1C2530",
        mist: "#5A6675",
        line: "#E2E6EC",
      },
      fontFamily: {
        // Títulos em Inria Serif (a mesma do Google Sites do escritório), com
        // Georgia/Times como fallback. Corpo em sans neutra do sistema.
        display: [
          "var(--font-display)",
          "Georgia",
          "'Times New Roman'",
          "Times",
          "serif",
        ],
        sans: ["Arial", "Helvetica", "'Segoe UI'", "sans-serif"],
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
      },
      animation: {
        fadeUp: "fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both",
        pulseSoft: "pulseSoft 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
