import Image from "next/image";
import { site } from "@/lib/site-data";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const credentials = [
  { value: site.oab, label: "Inscrição na Ordem" },
  { value: "+5 anos", label: "Atuação em Direito Imobiliário" },
  { value: "Full service", label: "Todas as áreas do Direito" },
];

export default function Hero() {
  const { positioning } = site;

  return (
    <section className="border-b border-line bg-bone">
      <div className="md:grid md:grid-cols-2 md:items-stretch">
        {/* foto — recorte sem fundo escuro, integrado ao tom bone do site */}
        <div className="group relative aspect-square w-full overflow-hidden bg-bone md:order-2 md:aspect-auto md:min-h-[600px]">
          <span
            aria-hidden
            className="pointer-events-none absolute right-[8%] top-[10%] hidden h-32 w-32 rounded-full border border-gold/30 md:block"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-[10%] left-[8%] hidden h-20 w-20 border border-gold/40 md:block"
          />
          <Image
            src="/images/lucas-hero-novo.jpg"
            alt={site.lawyer.fullName}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03] md:object-center"
          />
        </div>

        <div className="relative z-10 px-4 py-12 md:order-1 md:flex md:items-center md:justify-end md:py-24">
          <Reveal className="mx-auto w-full max-w-xl md:mx-0 md:ml-auto md:pr-12">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {positioning.eyebrow}
              </span>
            </div>

            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-navy md:text-5xl">
              {positioning.headline}
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-mist">
              {positioning.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#agendar">Agende sua consulta</Button>
              <Button href="#agendar" variant="outline">
                Falar no WhatsApp
              </Button>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-3 border-t border-line pt-6 sm:gap-6">
              {credentials.map((item) => (
                <div key={item.label}>
                  <dt className="font-display text-base font-bold text-navy sm:text-xl">
                    {item.value}
                  </dt>
                  <dd className="mt-1 text-xs text-mist sm:text-sm">
                    {item.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
