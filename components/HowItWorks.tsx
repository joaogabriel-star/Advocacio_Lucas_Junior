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
    <section className="bg-cream py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
            Como Funciona
          </span>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-navy">
            Três passos até sua consultoria
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.n} className="relative pl-4">
              <span className="font-serif text-4xl text-gold/50">
                {step.n}
              </span>
              <h3 className="mt-2 font-serif text-lg font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-charcoal/75">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
