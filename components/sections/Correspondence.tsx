import { site } from "@/lib/site-data";
import { whatsappLink } from "@/lib/whatsapp";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import BackdropGraphic from "@/components/ui/BackdropGraphic";

export default function Correspondence() {
  const { correspondent } = site;

  return (
    <section
      id="correspondencia"
      className="relative overflow-hidden bg-paper py-20 md:py-24"
    >
      <BackdropGraphic
        src="/images/gavel-silhouette.png"
        className="-right-20 top-4 h-[20rem] w-[20rem] md:h-[30rem] md:w-[30rem]"
        sizes="(min-width: 768px) 30rem, 20rem"
        opacity={0.35}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {correspondent.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
            {correspondent.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-mist">
            {correspondent.description}
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div className="rounded-md border border-line bg-bone p-8 md:p-10">
            <h3 className="font-display text-xl font-bold text-navy">
              Serviços prestados
            </h3>
            <ul className="mt-6 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
              {correspondent.services.map((service) => (
                <li
                  key={service}
                  className="border-b border-line py-2.5 text-base text-ink"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-10 text-center">
          <Button
            href={whatsappLink(
              "Olá! Sou advogado(a) e gostaria de contratar correspondência jurídica em Brasília/DF.",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar correspondência
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
