import { site } from "@/lib/site-data";

const items = [
  { label: site.lawyer.credentials, sub: "Registro ativo" },
  { label: "+5 anos", sub: "em Direito Imobiliário" },
  { label: "PJe · e-SAJ · eproc · PROJUDI", sub: "Sistemas processuais" },
  { label: "100% online ou presencial", sub: "Atendimento flexível" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-navy/10 bg-white py-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 text-center md:grid-cols-4">
        {items.map((item) => (
          <div key={item.label}>
            <p className="font-serif text-base font-semibold text-navy md:text-lg">
              {item.label}
            </p>
            <p className="text-xs uppercase tracking-wide text-charcoal/60">
              {item.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
