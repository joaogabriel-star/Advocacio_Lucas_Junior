import { site } from "@/lib/site-data";
import { Icon, IconName } from "./icons";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";

export default function PracticeAreas() {
  const groups = Array.from(
    new Set(site.practiceAreas.map((a) => a.group)),
  );

  return (
    <section
      id="areas"
      className="noise relative overflow-hidden bg-navy-dark py-20 md:py-28"
      style={{ "--noise-opacity": 0.035 } as React.CSSProperties}
    >
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-light">
            Áreas de Atuação
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-paper md:text-5xl">
            Do contrato ao cumprimento de sentença
          </h2>
          <p className="mt-4 text-lg text-mist">
            Atuação especializada em Direito Imobiliário, com apoio completo
            em ações e execuções relacionadas ao seu caso.
          </p>
        </Reveal>

        {groups.map((group, gi) => (
          <div key={group} className="mt-16">
            <Reveal delay={gi * 60}>
              <h3 className="mb-8 font-display text-2xl text-paper">
                {group}
              </h3>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {site.practiceAreas
                .filter((a) => a.group === group)
                .map((area, i) => (
                  <Reveal key={area.slug} delay={i * 80}>
                    <div className="group relative h-full rounded-tl-sm rounded-br-sm rounded-tr-2xl rounded-bl-2xl border border-paper/10 bg-navy-surface p-8 transition-all hover:-translate-y-1 hover:border-accent/40 hover:bg-navy-light">
                      <span className="absolute right-5 top-5 font-display text-sm tracking-[0.2em] text-paper/20">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-tl-sm rounded-br-sm rounded-tr-lg rounded-bl-lg bg-accent/15 text-accent-light transition-colors group-hover:bg-accent group-hover:text-navy-dark">
                        <Icon name={area.icon as IconName} className="h-7 w-7" />
                      </div>
                      <h4 className="font-display text-2xl font-semibold text-paper">
                        {area.title}
                      </h4>
                      <p className="mt-3 text-base font-medium text-paper/90">
                        {area.brief}
                      </p>
                      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr]">
                        <p className="overflow-hidden text-base text-mist opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <span className="block pt-3">{area.description}</span>
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
            </div>
          </div>
        ))}

        <Reveal className="mt-14 rounded-2xl border border-accent/20 bg-navy-surface p-8 text-center">
          <p className="text-mist">{site.otherAreasNote}</p>
          <MagneticButton
            href="#agendar"
            className="mt-4 inline-block rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-navy-dark hover:bg-accent-light"
          >
            Falar sobre meu caso
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
