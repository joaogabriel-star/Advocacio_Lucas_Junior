import { site } from "@/lib/site-data";
import { whatsappLink } from "@/lib/whatsapp";
import { Icon } from "@/components/ui/icons";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function Article() {
  const { article } = site;

  return (
    <section id="artigo" className="bg-paper py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <Reveal className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
            <Icon name="quote" className="h-5 w-5" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {article.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-6 font-display text-3xl font-bold text-navy md:text-4xl">
            {article.title}
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-6 text-lg leading-relaxed text-ink">
            {article.lead}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 border-l-2 border-gold pl-5 font-display text-2xl font-bold leading-snug text-navy md:text-3xl">
            {article.highlight}
          </p>
        </Reveal>

        {article.paragraphs.map((p, i) => (
          <Reveal key={i} delay={80}>
            <p className="mt-6 text-lg leading-relaxed text-mist">{p}</p>
          </Reveal>
        ))}

        <Reveal delay={100} className="mt-10 flex flex-wrap items-center gap-5">
          <Button
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buscar orientação agora
          </Button>
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-dark hover:underline"
          >
            Ler o artigo completo no Jusbrasil
            <Icon name="external" className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
