import { site } from "@/lib/site-data";

export default function FAQ() {
  return (
    <section id="faq" className="bg-cream py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
            Dúvidas Frequentes
          </span>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-navy">
            Perguntas antes de agendar
          </h2>
        </div>
        <div className="mt-10 divide-y divide-navy/10 rounded-xl border border-navy/10 bg-white">
          {site.faq.map((item) => (
            <details key={item.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-serif text-base font-semibold text-navy">
                {item.q}
                <span className="ml-4 text-gold-dark transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-charcoal/75">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
