import { site } from "@/lib/site-data";
import AreaChart from "@/components/ui/AreaChart";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import BackdropGraphic from "@/components/ui/BackdropGraphic";

export default function PracticeAreas() {
  const { positioning } = site;

  return (
    <section
      id="areas"
      className="relative overflow-hidden bg-paper py-20 md:py-24"
    >
      <BackdropGraphic
        src="/images/gavel-silhouette.png"
        className="left-1/2 top-0 h-[22rem] w-[30rem] -translate-x-1/2 md:h-[30rem] md:w-[46rem]"
        sizes="(min-width: 768px) 46rem, 30rem"
        opacity={0.35}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Áreas de Atuação
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
            Do contrato ao cumprimento de sentença
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-mist">
            O escritório atende todas as áreas do Direito. A especialidade e a
            maior parte dos casos, porém, estão no Direito Imobiliário.
          </p>
        </Reveal>

        {/* Especialidade — cartões maiores, em destaque */}
        <div className="mt-14">
          <Reveal className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <h3 className="font-display text-2xl font-bold text-navy">
              {positioning.specialtyLabel}: Direito Imobiliário
            </h3>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
            {site.practiceAreas.map((area, i) => (
              <Reveal key={area.slug} delay={i * 60}>
                <details className="group h-full border-t-2 border-navy bg-bone p-4 transition-colors open:border-gold sm:p-7">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-2 sm:gap-4">
                    <div>
                      <h4 className="font-display text-sm font-bold text-navy sm:text-xl">
                        {area.title}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-ink sm:mt-3 sm:text-base">
                        {area.brief}
                      </p>
                    </div>
                    <span className="mt-1 shrink-0 text-lg leading-none text-accent transition-transform group-open:rotate-45 sm:text-xl">
                      +
                    </span>
                  </summary>
                  <p className="mt-2 text-xs leading-relaxed text-mist sm:mt-3 sm:text-base">
                    {area.description}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Full service — lista compacta das demais áreas */}
        <div className="mt-16">
          <Reveal className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <h3 className="font-display text-2xl font-bold text-navy">
              {positioning.fullServiceLabel}
            </h3>
          </Reveal>

          <div className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.fullServiceAreas.map((area, i) => (
              <Reveal key={area.title} delay={i * 50}>
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
        </div>

        {/* gráfico de distribuição de atuação — só no computador, ocupa espaço demais no celular */}
        <Reveal className="mt-16 hidden md:block">
          <AreaChart />
        </Reveal>

        <Reveal className="mt-12 border-t border-line pt-8 text-center">
          <p className="mx-auto max-w-2xl text-mist">{site.otherAreasNote}</p>
          <Button href="#agendar" className="mt-5">
            Falar sobre meu caso
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
