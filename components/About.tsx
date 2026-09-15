import { site } from "@/lib/site-data";
import { whatsappLink } from "@/lib/whatsapp";

export default function About() {
  return (
    <section id="sobre" className="bg-navy py-16 text-cream md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div className="reveal mx-auto flex aspect-[3/4] w-full max-w-xs items-center justify-center rounded-2xl border border-gold/30 bg-gradient-to-br from-navy-light to-navy-dark">
          {/* Substitua por uma foto profissional real do Dr. Lucas. */}
          <span className="font-serif text-6xl text-gold-light">LM</span>
        </div>
        <div className="reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Sobre o Advogado
          </span>
          <h2 className="mt-2 font-serif text-3xl font-semibold md:text-4xl">
            {site.lawyer.fullName}
          </h2>
          <p className="mt-1 text-sm text-gold-light">
            {site.lawyer.credentials}
          </p>
          <p className="mt-5 text-cream/85">{site.lawyer.bio}</p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {site.lawyer.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-sm text-cream/80">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-dark transition-transform hover:scale-105"
          >
            Conversar com o Dr. Lucas
          </a>
        </div>
      </div>
    </section>
  );
}
