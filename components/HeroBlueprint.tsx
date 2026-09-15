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
        {/* Mantido apenas no canto superior direito, longe da coluna de
            texto do hero, como um detalhe de canto — não um elemento central. */}
        <rect
          x="430"
          y="60"
          width="140"
          height="140"
          pathLength={1}
          className={reducedMotion ? "" : "blueprint-line"}
          style={{ animationDelay: "0.3s" }}
          opacity="0.22"
        />
        <path
          d="M430 130h140"
          pathLength={1}
          className={reducedMotion ? "" : "blueprint-line"}
          style={{ animationDelay: "1s" }}
          opacity="0.16"
        />
        {Array.from({ length: 5 }).map((_, i) => (
          <line
            key={i}
            x1={430 + i * 35}
            y1="52"
            x2={430 + i * 35}
            y2="60"
            pathLength={1}
            className={reducedMotion ? "" : "blueprint-line"}
            style={{ animationDelay: `${1.4 + i * 0.06}s` }}
            opacity="0.3"
          />
        ))}
        <circle
          cx="500"
          cy="100"
          r="20"
          pathLength={1}
          className={reducedMotion ? "" : "blueprint-line"}
          style={{ animationDelay: "1.8s" }}
          opacity="0.3"
        />
        <path
          d="M500 85v30M485 100h30"
          pathLength={1}
          className={reducedMotion ? "" : "blueprint-line"}
          style={{ animationDelay: "2s" }}
          opacity="0.3"
        />
      </g>
    </svg>
  );
}
