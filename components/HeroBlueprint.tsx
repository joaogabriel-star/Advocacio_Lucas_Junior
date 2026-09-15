"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

// Motivo autoral do hero: uma planta baixa arquitetônica sendo "desenhada"
// lentamente em traço fino, referenciando o Direito Imobiliário sem recorrer
// a ícones óbvios (casinha, martelo etc). Some para dentro do fundo navy.
export default function HeroBlueprint() {
  const groupRef = useRef<SVGGElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const el = groupRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const offset = Math.min(window.scrollY, 640);
        el.style.transform = `translateY(${offset * 0.1}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [reducedMotion]);

  return (
    <svg
      viewBox="0 0 600 800"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 h-full w-full mix-blend-screen"
      aria-hidden="true"
    >
      <g
        ref={groupRef}
        fill="none"
        stroke="#4FA8FF"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect
          x="70"
          y="90"
          width="430"
          height="600"
          pathLength={1}
          className={reducedMotion ? "" : "blueprint-line"}
          style={{ animationDelay: "0.1s" }}
          opacity="0.32"
        />
        <path
          d="M70 300h430"
          pathLength={1}
          className={reducedMotion ? "" : "blueprint-line"}
          style={{ animationDelay: "0.95s" }}
          opacity="0.22"
        />
        <path
          d="M290 300v390"
          pathLength={1}
          className={reducedMotion ? "" : "blueprint-line"}
          style={{ animationDelay: "1.3s" }}
          opacity="0.22"
        />
        <path
          d="M70 520h220"
          pathLength={1}
          className={reducedMotion ? "" : "blueprint-line"}
          style={{ animationDelay: "1.6s" }}
          opacity="0.18"
        />
        <path
          d="M290 300a95 95 0 0 1 95 95"
          pathLength={1}
          className={reducedMotion ? "" : "blueprint-line"}
          style={{ animationDelay: "2s" }}
          opacity="0.28"
        />
        <path
          d="M290 300v95"
          pathLength={1}
          className={reducedMotion ? "" : "blueprint-line"}
          style={{ animationDelay: "2.1s" }}
          opacity="0.18"
        />
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={i}
            x1={70 + i * 53.75}
            y1="82"
            x2={70 + i * 53.75}
            y2="90"
            pathLength={1}
            className={reducedMotion ? "" : "blueprint-line"}
            style={{ animationDelay: `${2.3 + i * 0.04}s` }}
            opacity="0.35"
          />
        ))}
        <circle
          cx="440"
          cy="130"
          r="24"
          pathLength={1}
          className={reducedMotion ? "" : "blueprint-line"}
          style={{ animationDelay: "2.7s" }}
          opacity="0.35"
        />
        <path
          d="M440 113v34M423 130h34"
          pathLength={1}
          className={reducedMotion ? "" : "blueprint-line"}
          style={{ animationDelay: "2.9s" }}
          opacity="0.35"
        />
        <text
          x="90"
          y="710"
          fontSize="11"
          letterSpacing="2"
          fill="#4FA8FF"
          stroke="none"
          opacity={reducedMotion ? 0.3 : 0}
          className={reducedMotion ? "" : "blueprint-caption"}
        >
          PLANTA · ESC 1:100
        </text>
      </g>
    </svg>
  );
}
