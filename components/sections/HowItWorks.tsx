import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

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
    <section className="border-y border-line bg-bone py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center">
        <Reveal className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-navy">
          <Image
            src="/images/lucas-escritorio.jpeg"
            alt="Dr. Lucas Marcelino atendendo no escritório"
            fill
            sizes="(min-width: 768px) 50vw, 90vw"
            className="object-cover object-center"
          />
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Como Funciona
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
              Três passos até sua consultoria
            </h2>
          </Reveal>

          <div className="mt-10 space-y-8">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 80}>
                <div className="flex gap-5 border-t border-line pt-6">
                  <span className="font-display text-3xl font-bold text-gold">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-mist">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
