import Reveal from "@/components/ui/Reveal";
import StepNumeral from "@/components/ui/StepNumeral";
import { DotGrid, Glow } from "@/components/ui/Decor";

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
    <section
      className="noise relative overflow-hidden bg-navy-surface py-20 md:py-24"
      style={{ "--noise-opacity": 0.03 } as React.CSSProperties}
    >
      <Glow className="-left-24 top-0 h-72 w-72 bg-accent/10" />
      <DotGrid className="right-6 top-10 h-40 w-40 opacity-[0.12] [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-light">
            Como Funciona
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-paper">
            Três passos até sua consultoria
          </h2>
        </Reveal>
        <div className="relative mt-14 grid gap-10 md:grid-cols-3">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent md:block"
          />
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 100} className="relative pl-2">
              <StepNumeral n={step.n} speed={0.08 + i * 0.05} />
              <h3 className="mt-3 font-display text-xl font-semibold text-paper">
                {step.title}
              </h3>
              <p className="mt-2 text-base text-mist">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
