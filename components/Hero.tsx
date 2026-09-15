import { site } from "@/lib/site-data";
import { whatsappLink } from "@/lib/whatsapp";
import AnimatedHeadline from "./AnimatedHeadline";
import HeroBlueprint from "./HeroBlueprint";
import HeroPortrait from "./HeroPortrait";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-navy-dark text-paper">
      <div className="absolute inset-0">
        <HeroPortrait />
      </div>

      <HeroBlueprint />

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

        <h1 className="mt-1 font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
          <AnimatedHeadline text="Lucas" delay={160} />
          <br />
          <AnimatedHeadline text="Marcelino." delay={420} />
        </h1>

        <Reveal delay={220}>
          <p className="mt-6 max-w-lg text-paper/80">
            Advogado especializado em Direito Imobiliário, contencioso e
            execução patrimonial. Atendimento direto, sem intermediários,
            do primeiro contato ao cumprimento de sentença.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticButton
              href="#agendar"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-navy-dark hover:bg-accent-light"
            >
              Agendar consultoria
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </MagneticButton>
            <MagneticButton
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-6 py-3 text-sm font-semibold hover:border-accent hover:text-accent-light"
            >
              Falar no WhatsApp
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
