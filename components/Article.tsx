import { site } from "@/lib/site-data";
import { whatsappLink } from "@/lib/whatsapp";
import { Icon } from "./icons";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";

export default function Article() {
  const { article } = site;

  return (
    <section
      id="artigo"
      className="noise relative overflow-hidden bg-navy-surface py-20 md:py-28"
      style={{ "--noise-opacity": 0.03 } as React.CSSProperties}
    >
      {/* brilho sutil ao fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-3xl px-4">
        <Reveal className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-tl-sm rounded-br-sm rounded-tr-lg rounded-bl-lg bg-accent/15 text-accent-light">
            <Icon name="quote" className="h-5 w-5" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-light">
            {article.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-6 font-display text-4xl font-semibold text-paper md:text-5xl">
            {article.title}
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-6 text-lg leading-relaxed text-paper/85">
            {article.lead}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 border-l-2 border-accent pl-5 font-display text-2xl font-semibold leading-snug text-paper md:text-3xl">
            {article.highlight}
          </p>
        </Reveal>

        {article.paragraphs.map((p, i) => (
          <Reveal key={i} delay={80}>
            <p className="mt-6 text-lg leading-relaxed text-mist">{p}</p>
          </Reveal>
        ))}

        <Reveal delay={100} className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-navy-dark hover:bg-accent-light"
          >
            Buscar orientação agora
          </MagneticButton>
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-light hover:text-accent"
          >
            Ler o artigo completo no Jusbrasil
            <Icon name="external" className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
