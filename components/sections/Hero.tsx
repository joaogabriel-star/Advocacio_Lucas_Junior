import Image from "next/image";
import { site } from "@/lib/site-data";
import { whatsappLink } from "@/lib/whatsapp";
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
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <Reveal>
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
            <Button
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              Falar no WhatsApp
            </Button>
          </div>

          <dl className="mt-10 grid gap-6 border-t border-line pt-6 sm:grid-cols-3">
            {credentials.map((item) => (
              <div key={item.label}>
                <dt className="font-display text-xl font-bold text-navy">
                  {item.value}
                </dt>
                <dd className="mt-1 text-sm text-mist">{item.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120} className="relative mx-auto w-full max-w-sm">
          {/* moldura discreta atrás da foto, no lugar dos efeitos anteriores */}
          <span
            aria-hidden
            className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-md border border-gold/40 md:block"
          />
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-navy">
            <Image
              src="/images/lucas-retrato.jpeg"
              alt={site.lawyer.fullName}
              fill
              priority
              sizes="(min-width: 768px) 384px, 90vw"
              className="object-cover object-[50%_25%]"
            />
          </div>
          <p className="mt-4 text-center font-display text-lg font-bold text-navy">
            {site.lawyer.fullName}
          </p>
          <p className="text-center text-sm text-mist">
            {site.lawyer.credentials} · {site.contact.city}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
