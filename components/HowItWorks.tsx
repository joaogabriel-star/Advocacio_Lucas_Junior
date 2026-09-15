import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Você conta seu caso",
    description:
      "Envie uma mensagem pelo WhatsApp ou preencha o formulário de agendamento com os detalhes da sua situação.",
  },
  {
    n: "02",
    title: "Avaliação inicial",
    description:
      "O Dr. Lucas analisa o caso e retorna com o melhor caminho jurídico e uma data para a consultoria.",
  },
  {
    n: "03",
    title: "Consultoria e estratégia",
    description:
      "Reunião presencial ou online para definir os próximos passos com transparência sobre prazos e custos.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-navy-surface py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-light">
            Como Funciona
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-paper">
            Três passos até sua consultoria
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 100} className="relative pl-2">
              <span className="font-display text-5xl font-semibold text-accent/25">
                {step.n}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-paper">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-mist">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
