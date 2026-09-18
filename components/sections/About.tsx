import Image from "next/image";
import { site } from "@/lib/site-data";
import { whatsappLink } from "@/lib/whatsapp";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section
      id="sobre"
      className="border-y border-line bg-bone py-20 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[0.85fr_1.15fr] md:items-center">
        <Reveal className="mx-auto w-full max-w-xs">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-navy">
            <Image
              src="/images/lucas-perfil.jpeg"
              alt={site.lawyer.fullName}
              fill
              sizes="(min-width: 768px) 320px, 80vw"
              className="object-cover object-center"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Sobre o Advogado
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
              {site.lawyer.fullName}
            </h2>
            <p className="mt-1 text-base text-accent">
              {site.lawyer.credentials}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-5 text-lg leading-relaxed text-ink">
              {site.lawyer.bio}
            </p>
          </Reveal>
          <Reveal delay={180}>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {site.lawyer.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-base text-mist">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={260}>
            <Button
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8"
            >
              Conversar com o Dr. Lucas
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
