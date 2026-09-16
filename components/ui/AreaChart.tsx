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
      className="rounded-md border border-line bg-bone p-8 md:p-10"
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Distribuição de atuação
          </span>
          <h3 className="mt-2 font-display text-2xl font-bold text-navy">
            Onde o Dr. Lucas mais atua
          </h3>
        </div>
        <a
          href={site.contact.jusbrasil}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-sm font-semibold text-accent hover:underline sm:mt-0"
        >
          Perfil no Jusbrasil →
        </a>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-4"
          >
            <div className="flex items-center justify-between sm:w-52 sm:shrink-0">
              <span className="text-sm text-ink sm:text-base">
                {stat.label}
              </span>
              <span className="font-display text-sm font-bold tabular-nums text-navy sm:hidden">
                {stat.value}%
              </span>
            </div>
            <div className="relative h-3 flex-1 overflow-hidden rounded-full bg-line">
              <div
                className={`h-full rounded-full ${
                  i === 0 ? "bg-accent" : "bg-accent/40"
                }`}
                style={{
                  width: active ? `${(stat.value / max) * 100}%` : "0%",
                  transition: `width 1.1s cubic-bezier(0.22,1,0.36,1) ${i * 120}ms`,
                }}
              />
            </div>
            <span className="hidden w-12 shrink-0 text-right font-display text-sm font-bold tabular-nums text-navy sm:block">
              {stat.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
