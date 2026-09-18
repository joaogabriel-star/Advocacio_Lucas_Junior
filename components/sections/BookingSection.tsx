import Image from "next/image";
import BookingForm from "@/components/ui/BookingForm";
import Reveal from "@/components/ui/Reveal";
import BackdropGraphic from "@/components/ui/BackdropGraphic";

export default function BookingSection() {
  return (
    <section
      id="agendar"
      className="relative overflow-hidden border-y border-line bg-bone py-20 md:py-24"
    >
      <BackdropGraphic
        src="/images/gavel-silhouette.png"
        className="-left-20 bottom-0 h-[18rem] w-[18rem] md:h-[26rem] md:w-[26rem]"
        sizes="(min-width: 768px) 26rem, 18rem"
        opacity={0.32}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-line bg-paper">
              <Image
                src="/images/lucas-headshot.jpeg"
                alt="Atendimento LM Advocacia & Consultoria"
                fill
                sizes="64px"
                className="object-cover object-center"
              />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Fale Comigo
            </span>
          </div>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-navy md:text-4xl">
            Quanto antes você falar sobre seu caso, mais opções você tem.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink">
            Prazos processuais não esperam. Agende sua consultoria inicial e
            saia com um diagnóstico claro do seu caso e dos próximos passos,
            sem enrolação e com atendimento direto do Dr. Lucas.
          </p>
          <ul className="mt-6 space-y-3 text-base text-mist">
            <li className="flex gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              Resposta rápida pelo WhatsApp, o mesmo canal que você já usa.
            </li>
            <li className="flex gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              Agendamento com data e período de sua preferência.
            </li>
            <li className="flex gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              Atendimento presencial em Brasília/DF ou 100% online.
            </li>
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <BookingForm />
        </Reveal>
      </div>
    </section>
  );
}
