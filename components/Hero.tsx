import { site } from "@/lib/site-data";
import { whatsappLink } from "@/lib/whatsapp";
import HeroPortrait from "./HeroPortrait";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-navy-dark text-paper">
      <div className="absolute inset-0">
        <HeroPortrait />
      </div>

      <div
        className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-accent/20 blur-[100px] animate-blob"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-40">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
            {site.contact.city} · {site.lawyer.credentials}
          </span>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-6 font-display text-lg text-mist md:text-xl">
            Seja bem-vindo(a). Eu sou
          </p>
        </Reveal>

        <Reveal delay={140}>
          <h1 className="mt-1 font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            Lucas
            <br />
            Marcelino.
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-6 max-w-lg text-paper/80">
            Advogado especializado em Direito Imobiliário, contencioso e
            execução patrimonial. Atendimento direto, sem intermediários,
            do primeiro contato ao cumprimento de sentença.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#agendar"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-navy-dark transition-transform hover:-translate-y-0.5 hover:bg-accent-light"
            >
              Agendar consultoria
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent-light"
            >
              Falar no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
