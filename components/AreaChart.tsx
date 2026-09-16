"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site-data";

export default function AreaChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const stats = site.areaStats;
  const max = Math.max(...stats.map((s) => s.value));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-tl-sm rounded-br-sm rounded-tr-2xl rounded-bl-2xl border border-paper/10 bg-navy-surface p-8 md:p-10"
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-light">
            Distribuição de atuação
          </span>
          <h3 className="mt-2 font-display text-2xl font-semibold text-paper">
            Onde o Dr. Lucas mais atua
          </h3>
        </div>
        <a
          href={site.contact.jusbrasil}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-sm font-medium text-accent-light hover:text-accent sm:mt-0"
        >
          Perfil no Jusbrasil →
        </a>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        {stats.map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-4">
            <span className="w-40 shrink-0 text-sm text-paper/80 sm:w-52 sm:text-base">
              {stat.label}
            </span>
            <div className="relative h-3 flex-1 overflow-hidden rounded-full bg-navy-dark">
              <div
                className={`h-full rounded-full ${
                  i === 0
                    ? "bg-gradient-to-r from-accent-dark to-accent-light"
                    : "bg-accent/50"
                }`}
                style={{
                  width: active ? `${(stat.value / max) * 100}%` : "0%",
                  transition: `width 1.1s cubic-bezier(0.22,1,0.36,1) ${i * 120}ms`,
                }}
              />
            </div>
            <span className="w-12 shrink-0 text-right font-display text-sm font-semibold tabular-nums text-paper">
              {stat.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
