import { site } from "@/lib/site-data";
import { Icon, IconName } from "./icons";

export default function PracticeAreas() {
  const groups = Array.from(
    new Set(site.practiceAreas.map((a) => a.group)),
  );

  return (
    <section id="areas" className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
            Áreas de Atuação
          </span>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-navy md:text-4xl">
            Do contrato ao cumprimento de sentença
          </h2>
          <p className="mt-3 text-charcoal/80">
            Atuação especializada em Direito Imobiliário, com apoio completo
            em ações e execuções relacionadas ao seu caso.
          </p>
        </div>

        {groups.map((group) => (
          <div key={group} className="mt-12">
            <h3 className="mb-5 font-serif text-xl text-navy">{group}</h3>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {site.practiceAreas
                .filter((a) => a.group === group)
                .map((area) => (
                  <div
                    key={area.slug}
                    className="group rounded-xl border border-navy/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                      <Icon name={area.icon as IconName} className="h-5 w-5" />
                    </div>
                    <h4 className="font-serif text-lg font-semibold text-navy">
                      {area.title}
                    </h4>
                    <p className="mt-2 text-sm text-charcoal/75">
                      {area.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ))}

        <div className="mt-12 rounded-xl border border-gold/30 bg-navy/5 p-6 text-center">
          <p className="text-sm text-charcoal/80">{site.otherAreasNote}</p>
          <a
            href="#agendar"
            className="mt-3 inline-block rounded-full bg-navy px-5 py-2 text-sm font-semibold text-gold transition-transform hover:scale-105"
          >
            Falar sobre meu caso
          </a>
        </div>
      </div>
    </section>
  );
}
