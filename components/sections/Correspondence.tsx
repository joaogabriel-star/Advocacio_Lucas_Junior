import { site } from "@/lib/site-data";
import { whatsappLink } from "@/lib/whatsapp";
import { Icon } from "@/components/ui/icons";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";
import { DotGrid, Glow } from "@/components/ui/Decor";

export default function Correspondence() {
  const { correspondent } = site;

  return (
    <section
      id="correspondencia"
      className="noise relative overflow-hidden bg-navy-dark py-20 md:py-28"
      style={{ "--noise-opacity": 0.035 } as React.CSSProperties}
    >
      <Glow className="-right-24 top-1/4 h-80 w-80 bg-accent/10" />
      <DotGrid className="left-6 bottom-10 h-44 w-44 opacity-[0.10] [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-light">
            {correspondent.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-paper md:text-5xl">
            {correspondent.title}
          </h2>
          <p className="mt-4 text-lg text-mist">{correspondent.description}</p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div className="rounded-tl-sm rounded-br-sm rounded-tr-2xl rounded-bl-2xl border border-paper/10 bg-navy-surface p-8 md:p-10">
            <h3 className="font-display text-xl font-semibold text-paper">
              Serviços prestados
            </h3>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {correspondent.services.map((service, i) => (
                <Reveal key={service} delay={i * 20}>
                  <li className="flex items-center gap-2.5 text-base text-paper/85">
                    <Icon
                      name="check"
                      className="h-4 w-4 shrink-0 text-accent"
                    />
                    <span>{service}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-10 text-center">
          <MagneticButton
            href={whatsappLink(
              "Olá! Sou advogado(a) e gostaria de contratar correspondência jurídica em Brasília/DF.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-navy-dark hover:bg-accent-light"
          >
            Solicitar correspondência
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
