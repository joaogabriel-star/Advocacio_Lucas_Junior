import { site } from "@/lib/site-data";
import { whatsappLink } from "@/lib/whatsapp";
import AnimatedHeadline from "@/components/ui/AnimatedHeadline";
import HeroBlueprint from "@/components/hero/HeroBlueprint";
import HeroPortrait from "@/components/hero/HeroPortrait";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-navy-dark text-paper">
      <div className="absolute inset-0">
        <HeroPortrait />
      </div>

      <HeroBlueprint />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-40">
        <div className="md:max-w-[52%]">
          <Reveal delay={80}>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-light">
                Advogado · {site.oab}
              </span>
            </div>
            <p className="mt-5 font-display text-2xl font-medium text-mist md:text-3xl">
              Prazer, eu sou
            </p>
          </Reveal>

          <h1 className="mt-1 font-display text-6xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            <AnimatedHeadline text="Lucas" delay={160} />
            <br />
            <AnimatedHeadline text="Marcelino." delay={420} />
          </h1>

          <Reveal delay={220}>
            <p className="mt-6 max-w-lg text-lg text-paper/80">
              Advogado especializado em Direito Imobiliário, contencioso e
              execução patrimonial. Atendimento direto, sem intermediários,
              do primeiro contato ao cumprimento de sentença.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton
                href="#agendar"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-navy-dark hover:bg-accent-light"
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
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-7 py-3.5 text-base font-semibold hover:border-accent hover:text-accent-light"
              >
                Falar no WhatsApp
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
