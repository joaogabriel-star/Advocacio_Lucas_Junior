import BookingForm from "./BookingForm";

export default function BookingSection() {
  return (
    <section id="agendar" className="bg-navy py-16 text-cream md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Fale Comigo
          </span>
          <h2 className="mt-2 font-serif text-3xl font-semibold md:text-4xl">
            Quanto antes você falar sobre seu caso, mais opções você tem.
          </h2>
          <p className="mt-4 text-cream/85">
            Prazos processuais não esperam. Agende sua consultoria inicial e
            saia com um diagnóstico claro do seu caso e dos próximos passos —
            sem enrolação, com atendimento direto do Dr. Lucas.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-cream/80">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              Resposta rápida pelo WhatsApp, o mesmo canal que você já usa.
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              Agendamento com data e período de sua preferência.
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              Atendimento presencial em Brasília/DF ou 100% online.
            </li>
          </ul>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}
