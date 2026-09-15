import BookingForm from "./BookingForm";
import Reveal from "./Reveal";

export default function BookingSection() {
  return (
    <section id="agendar" className="bg-navy-surface py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-light">
            Fale Comigo
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-paper md:text-4xl">
            Quanto antes você falar sobre seu caso, mais opções você tem.
          </h2>
          <p className="mt-4 text-paper/75">
            Prazos processuais não esperam. Agende sua consultoria inicial e
            saia com um diagnóstico claro do seu caso e dos próximos passos —
            sem enrolação, com atendimento direto do Dr. Lucas.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-mist">
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
