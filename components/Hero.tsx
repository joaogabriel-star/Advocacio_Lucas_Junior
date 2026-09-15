import { site } from "@/lib/site-data";
import { whatsappLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-cream">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] dot-grid text-gold"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gold/20 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="reveal flex flex-col justify-center gap-6">
          <span className="w-fit rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-gold-light">
            Direito Imobiliário &amp; Contencioso
          </span>
          <h1 className="font-serif text-4xl font-semibold leading-tight md:text-5xl">
            Segurança jurídica para o seu patrimônio, do início ao cumprimento
            de sentença.
          </h1>
          <p className="max-w-md text-cream/85">
            Atendimento estratégico e transparente em ações imobiliárias,
            locação, despejo, cobranças e execuções — presencial ou 100%
            online, em todo o Brasil.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#agendar"
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-dark shadow-lg shadow-gold/20 transition-transform hover:scale-105"
            >
              Agendar Consultoria
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:border-gold hover:text-gold"
            >
              Falar agora no WhatsApp
            </a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs text-cream/70">
            <span>{site.lawyer.credentials}</span>
            <span>+5 anos em Direito Imobiliário</span>
            <span>Atendimento presencial e online</span>
          </div>
        </div>
        <div className="reveal flex items-center justify-center" style={{ animationDelay: "120ms" }}>
          <div className="relative w-full max-w-sm rounded-2xl border border-gold/25 bg-navy-light/60 p-6 shadow-2xl backdrop-blur">
            <p className="font-serif text-lg text-gold-light">
              Será um prazer atendê-lo(a).
            </p>
            <p className="mt-3 text-sm text-cream/80">
              {site.lawyer.fullName} — {site.lawyer.credentials}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-cream/75">
              {site.lawyer.highlights.slice(0, 3).map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <a
              href="#agendar"
              className="mt-6 block rounded-lg bg-gold py-2.5 text-center text-sm font-semibold text-navy-dark transition-transform hover:scale-[1.02]"
            >
              Quero agendar minha consultoria
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
