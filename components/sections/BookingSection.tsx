import BookingForm from "@/components/ui/BookingForm";
import Reveal from "@/components/ui/Reveal";
import { DotGrid, Glow } from "@/components/ui/Decor";

export default function BookingSection() {
  return (
    <section
      id="agendar"
      className="relative overflow-hidden bg-navy-surface py-20 md:py-28"
    >
      <Glow className="-left-24 bottom-0 h-80 w-80 bg-accent/10" />
      <DotGrid className="right-8 top-12 h-40 w-40 opacity-[0.10] [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-light">
            Fale Comigo
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-paper md:text-5xl">
            Quanto antes você falar sobre seu caso, mais opções você tem.
          </h2>
          <p className="mt-4 text-lg text-paper/75">
            Prazos processuais não esperam. Agende sua consultoria inicial e
            saia com um diagnóstico claro do seu caso e dos próximos passos,
            sem enrolação e com atendimento direto do Dr. Lucas.
          </p>
          <ul className="mt-6 space-y-3 text-base text-mist">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Resposta rápida pelo WhatsApp, o mesmo canal que você já usa.
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Agendamento com data e período de sua preferência.
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
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
