import { site } from "@/lib/site-data";
import Reveal from "./Reveal";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="noise relative overflow-hidden bg-navy-dark py-20 md:py-24"
      style={{ "--noise-opacity": 0.035 } as React.CSSProperties}
    >
      <div className="mx-auto max-w-3xl px-4">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-light">
            Dúvidas Frequentes
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-paper">
            Perguntas antes de agendar
          </h2>
        </Reveal>
        <Reveal delay={100} className="mt-10 divide-y divide-paper/10 rounded-2xl border border-paper/10 bg-navy-surface">
          {site.faq.map((item, i) => (
            <details
              key={item.q}
              className="group border-l-2 border-transparent p-5 transition-colors [&[open]]:border-l-accent"
            >
              <summary className="flex cursor-pointer list-none items-start gap-4 font-display text-lg font-semibold text-paper">
                <span className="mt-0.5 shrink-0 text-xs font-normal tracking-[0.15em] text-accent/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">{item.q}</span>
                <span className="ml-4 shrink-0 text-accent transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 pl-8 text-base text-mist">{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
