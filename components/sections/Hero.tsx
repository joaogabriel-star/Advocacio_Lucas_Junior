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
    <section className="relative overflow-hidden bg-navy-dark">
      <div className="relative md:grid md:grid-cols-[1.05fr_1fr] md:items-stretch">
        {/* foto — sangra até a borda, em P&B, com esmaecimento para o navy */}
        <div className="relative order-1 h-[300px] w-full overflow-hidden sm:h-[380px] md:order-2 md:h-auto md:min-h-[620px]">
          <Image
            src="/images/lucas-hero-navy.jpg"
            alt={site.lawyer.fullName}
            fill
            priority
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover object-top grayscale"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/10 to-transparent md:bg-gradient-to-r md:from-navy-dark md:via-navy-dark/5 md:to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-navy-dark/15"
          />
        </div>

        <div className="relative z-10 order-2 px-4 py-10 sm:px-6 md:order-1 md:flex md:items-center md:py-24 md:pl-16 md:pr-10 lg:pl-24">
          <Reveal className="mx-auto w-full max-w-xl md:mx-0">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {positioning.eyebrow}
              </span>
            </div>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] text-paper sm:text-5xl md:text-[3.25rem]">
              {positioning.headline}
            </h1>

            <p className="mt-5 max-w-md text-lg leading-relaxed text-paper/70">
              {positioning.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#agendar" className="!rounded-full">
                Agende sua consulta
              </Button>
              <Button href="#agendar" variant="light" className="!rounded-full">
                Falar no WhatsApp
              </Button>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-3 border-t border-paper/15 pt-6 sm:gap-6">
              {credentials.map((item) => (
                <div key={item.label}>
                  <dt className="font-display text-base font-bold text-paper sm:text-xl">
                    {item.value}
                  </dt>
                  <dd className="mt-1 text-xs text-paper/60 sm:text-sm">
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
