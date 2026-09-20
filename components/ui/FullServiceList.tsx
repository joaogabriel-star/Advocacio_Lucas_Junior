"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

type Area = { title: string; brief: string };

// No celular mostra só as 3 primeiras áreas, com um botão pra expandir
// o restante. No tablet/desktop mostra todas direto, sem botão.
export default function FullServiceList({ areas }: { areas: readonly Area[] }) {
  const [expanded, setExpanded] = useState(false);
  const visibleCount = 3;

  return (
    <div className="mt-8">
      <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((area, i) => (
          <Reveal
            key={area.title}
            delay={i * 50}
            className={i >= visibleCount && !expanded ? "hidden md:block" : ""}
          >
            <div className="border-t border-line pt-5">
              <h4 className="font-display text-lg font-bold text-navy">
                {area.title}
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-mist">
                {area.brief}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {areas.length > visibleCount && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-6 text-sm font-semibold text-accent underline underline-offset-4 hover:text-accent-dark md:hidden"
        >
          {expanded ? "Ver menos" : `Ver mais ${areas.length - visibleCount} áreas`}
        </button>
      )}
    </div>
  );
}
