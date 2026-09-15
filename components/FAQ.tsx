import { site } from "@/lib/site-data";
import Reveal from "./Reveal";

export default function FAQ() {
  return (
    <section id="faq" className="bg-navy-dark py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-light">
            Dúvidas Frequentes
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-paper">
            Perguntas antes de agendar
          </h2>
        </Reveal>
        <Reveal delay={100} className="mt-10 divide-y divide-paper/10 rounded-2xl border border-paper/10 bg-navy-surface">
          {site.faq.map((item) => (
            <details key={item.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-display text-base font-semibold text-paper">
                {item.q}
                <span className="ml-4 text-accent transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-mist">{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
