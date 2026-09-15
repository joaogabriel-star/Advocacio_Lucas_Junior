import { site } from "@/lib/site-data";

const items = [
  site.lawyer.credentials,
  "Direito Imobiliário",
  "PJe · e-SAJ · eproc · PROJUDI",
  "Atendimento online ou presencial",
  "+5 anos de atuação",
];

export default function TrustBar() {
  const loop = [...items, ...items];

  return (
    <section className="overflow-hidden border-y border-paper/10 bg-navy-surface py-4">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-sm uppercase tracking-[0.15em] text-mist"
          >
            {item}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
