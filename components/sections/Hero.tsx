import Image from "next/image";
import { site } from "@/lib/site-data";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

// navy-dark (#0D2239) em curva S: derivada ~zero nas duas pontas, então nem
// o lado bone nem a chegada no painel mostram aresta. Rampa linear vira mancha.
const FADE_TO_NAVY =
  "linear-gradient(to right," +
  "rgba(13,34,57,0) 0%," +
  "rgba(13,34,57,0.012) 12%," +
  "rgba(13,34,57,0.05) 24%," +
  "rgba(13,34,57,0.13) 36%," +
  "rgba(13,34,57,0.26) 48%," +
  "rgba(13,34,57,0.43) 60%," +
  "rgba(13,34,57,0.58) 70%," +
  "rgba(13,34,57,0.73) 80%," +
  "rgba(13,34,57,0.85) 88%," +
  "rgba(13,34,57,0.93) 94%," +
  "rgba(13,34,57,0.98) 97.5%," +
  "rgba(13,34,57,1) 100%)";

const credentials = [
  { value: site.oab, label: "Inscrição na Ordem" },
  { value: "+5 anos", label: "Atuação em Direito Imobiliário" },
  { value: "Full service", label: "Todas as áreas do Direito" },
];

export default function Hero() {
  const { positioning } = site;

  return (
    <section className="relative overflow-hidden border-b border-line bg-bone">
      {/*
        Desktop: coluna escura sangrando na borda direita.
        O fundo escuro do estúdio se funde com o painel navy, então a foto
        não vira um retângulo colado sobre o bege — ela é o próprio painel.
      */}
      {/*
        Rampa longa e suave do bone até o navy: quase invisível nos primeiros
        45% (para não sujar o texto) e fechando no navy sólido exatamente onde
        o painel começa — sem linha seca na junção.
      */}
      <span
        aria-hidden
        className="absolute inset-y-0 right-[40%] hidden w-24 md:block lg:w-56 xl:right-[38%] xl:w-80"
        style={{ backgroundImage: FADE_TO_NAVY }}
      />

      <div className="absolute inset-y-0 right-0 hidden w-[40%] md:block xl:w-[38%]">
        <div className="absolute inset-0 bg-navy-dark" />
        <Image
          src="/images/lucas-retrato.avif"
          alt={site.lawyer.fullName}
          fill
          priority
          sizes="40vw"
          className="object-cover object-[50%_20%]"
        />
        {/* unifica a temperatura da foto com o azul da marca */}
        <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
        {/* dissolve a borda esquerda da foto: fecha em navy sólido, igual à rampa */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/55 to-transparent" />
      </div>

      {/* ---------- retrato no mobile: sangra de ponta a ponta ---------- */}
      <Reveal className="md:hidden">
        <div className="relative aspect-[4/5] max-h-[62vh] w-full overflow-hidden bg-navy-dark">
          <Image
            src="/images/lucas-retrato.avif"
            alt={site.lawyer.fullName}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_12%]"
          />
          <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-transparent" />
          <p className="absolute bottom-5 left-4 right-4 font-display text-lg font-bold leading-tight text-paper">
            {site.lawyer.fullName}
            <span className="mt-1 block text-[11px] font-normal uppercase tracking-[0.14em] text-gold-light">
              {site.oab} · Brasília/DF
            </span>
          </p>
        </div>
      </Reveal>

      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-10 sm:px-6 md:py-20 lg:py-28">
        {/* ---------- texto ---------- */}
        <Reveal delay={80} className="max-w-xl md:max-w-[25rem] lg:max-w-[26rem] xl:max-w-lg">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {positioning.eyebrow}
            </span>
          </div>

          <h1 className="mt-6 font-display text-[2.1rem] font-bold leading-[1.12] text-navy sm:text-[2.5rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[2.9rem]">
            {positioning.headline}
          </h1>

          <p className="mt-5 text-[17px] leading-relaxed text-mist">
            {positioning.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#agendar">Agende sua consulta</Button>
            <Button href="#agendar" variant="outline">
              Falar no WhatsApp
            </Button>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6 sm:gap-6">
            {credentials.map((item) => (
              <div key={item.label}>
                <dt className="font-display text-base font-bold text-navy sm:text-xl md:text-[1.05rem] lg:text-xl">
                  {item.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-mist sm:text-sm">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
