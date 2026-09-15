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
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-light">
            Áreas de Atuação
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-paper md:text-4xl">
            Do contrato ao cumprimento de sentença
          </h2>
          <p className="mt-3 text-mist">
            Atuação especializada em Direito Imobiliário, com apoio completo
            em ações e execuções relacionadas ao seu caso.
          </p>
        </Reveal>

        {groups.map((group, gi) => (
          <div key={group} className="mt-14">
            <Reveal delay={gi * 60}>
              <h3 className="mb-6 font-display text-xl text-paper">
                {group}
              </h3>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {site.practiceAreas
                .filter((a) => a.group === group)
                .map((area, i) => (
                  <Reveal
                    key={area.slug}
                    delay={i * 80}
                    className={i % 2 === 1 ? "sm:mt-6" : ""}
                  >
                    <div className="group relative h-full rounded-tl-sm rounded-br-sm rounded-tr-2xl rounded-bl-2xl border border-paper/10 bg-navy-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:bg-navy-light">
                      <span className="absolute right-4 top-4 font-display text-xs tracking-[0.2em] text-paper/20">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-tl-sm rounded-br-sm rounded-tr-lg rounded-bl-lg border border-accent/30 text-accent-light transition-colors group-hover:bg-accent group-hover:text-navy-dark">
                        <Icon name={area.icon as IconName} className="h-5 w-5" />
                      </div>
                      <h4 className="font-display text-lg font-semibold text-paper">
                        {area.title}
                      </h4>
                      <p className="mt-2 text-sm text-mist">
                        {area.description}
                      </p>
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
