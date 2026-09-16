import { site } from "@/lib/site-data";
import Reveal from "@/components/ui/Reveal";

export default function FAQ() {
  return (
    <section id="faq" className="bg-paper py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Dúvidas Frequentes
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
            Perguntas antes de agendar
          </h2>
        </Reveal>
        <Reveal
          delay={100}
          className="mt-10 divide-y divide-line rounded-md border border-line"
        >
          {site.faq.map((item) => (
            <details key={item.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-start gap-4 font-display text-lg font-bold text-navy">
                <span className="flex-1">{item.q}</span>
                <span className="ml-4 shrink-0 text-xl leading-none text-accent transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-base leading-relaxed text-mist">
                {item.a}
              </p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
