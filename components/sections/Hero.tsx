import Image from "next/image";
import { site } from "@/lib/site-data";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

// navy-dark (#0D2239) em curva "smootherstep" (6t^5-15t^4+10t^3): 1ª e 2ª
// derivadas nulas nas duas pontas, não só a 1ª — zero aceleração perceptível
// na entrada e na chegada. 22 paradas para não deixar salto entre elas.
const FADE_TO_NAVY =
  "linear-gradient(to right," +
  "rgba(13,34,57,0) 0%," +
  "rgba(13,34,57,0.0009) 4.5%," +
  "rgba(13,34,57,0.0065) 9.1%," +
  "rgba(13,34,57,0.0205) 13.6%," +
  "rgba(13,34,57,0.0449) 18.2%," +
  "rgba(13,34,57,0.081) 22.7%," +
  "rgba(13,34,57,0.1289) 27.3%," +
  "rgba(13,34,57,0.188) 31.8%," +
  "rgba(13,34,57,0.2567) 36.4%," +
  "rgba(13,34,57,0.3333) 40.9%," +
  "rgba(13,34,57,0.4152) 45.5%," +
  "rgba(13,34,57,0.5) 50%," +
  "rgba(13,34,57,0.5848) 54.5%," +
  "rgba(13,34,57,0.6667) 59.1%," +
  "rgba(13,34,57,0.7433) 63.6%," +
  "rgba(13,34,57,0.812) 68.2%," +
  "rgba(13,34,57,0.8711) 72.7%," +
  "rgba(13,34,57,0.919) 77.3%," +
  "rgba(13,34,57,0.9551) 81.8%," +
  "rgba(13,34,57,0.9795) 86.4%," +
  "rgba(13,34,57,0.9935) 90.9%," +
  "rgba(13,34,57,0.9991) 95.5%," +
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
        className="absolute inset-y-0 right-[40%] hidden w-40 md:block lg:w-80 xl:right-[38%] xl:w-[30rem]"
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
