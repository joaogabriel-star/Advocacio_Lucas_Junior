import Image from "next/image";
import { site } from "@/lib/site-data";
import { whatsappLink } from "@/lib/whatsapp";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section
      id="sobre"
      className="noise relative overflow-hidden bg-navy-dark py-20 md:py-28"
      style={{ "--noise-opacity": 0.035 } as React.CSSProperties}
    >
      {/* balança da justiça como elemento gráfico de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 bottom-0 top-0 w-[70%] sm:w-1/2 lg:w-[42%]"
      >
        <Image
          src="/images/justice-scale.jpg"
          alt=""
          fill
          sizes="(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 70vw"
          className="object-contain object-bottom opacity-[0.12] grayscale invert mix-blend-screen [mask-image:radial-gradient(120%_100%_at_80%_80%,black,transparent_75%)] sm:opacity-25"
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <Reveal className="group relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-tl-sm rounded-br-sm rounded-tr-2xl rounded-bl-2xl border border-paper/10 bg-navy-surface">
          <Image
            src="/images/dsc00820.jpeg"
            alt={site.lawyer.fullName}
            fill
            sizes="(min-width: 768px) 320px, 80vw"
            className="object-cover object-top grayscale transition-all duration-700 ease-out group-hover:grayscale-0"
          />
        </Reveal>
        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-light">
              Sobre o Advogado
            </span>
            <h2 className="mt-3 font-display text-4xl font-semibold text-paper md:text-5xl">
              {site.lawyer.fullName}
            </h2>
            <p className="mt-1 text-base text-accent-light">
              {site.lawyer.credentials}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-5 text-lg text-paper/80">{site.lawyer.bio}</p>
          </Reveal>
          <Reveal delay={180}>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {site.lawyer.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-base text-mist">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={260}>
            <MagneticButton
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-navy-dark hover:bg-accent-light"
            >
              Conversar com o Dr. Lucas
            </MagneticButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
