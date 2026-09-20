import { site } from "@/lib/site-data";
import Reveal from "@/components/ui/Reveal";

export default function Article() {
  const { article } = site;

  return (
    <section id="artigo" className="border-t border-line bg-bone py-14 md:py-16">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {article.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-navy md:text-3xl">
            {article.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mist">
            {article.highlight}
          </p>
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block text-sm font-semibold text-accent underline underline-offset-4 hover:text-accent-dark"
          >
            Quer saber mais? Leia o artigo completo no Jusbrasil
          </a>
        </Reveal>
      </div>
    </section>
  );
}
