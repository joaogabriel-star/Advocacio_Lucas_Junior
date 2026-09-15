import Image from "next/image";

// A foto é um retrato vertical: num hero full-bleed largo o recorte só mostra
// ~38% da altura (rosto), por isso no desktop ela vira uma coluna à direita,
// onde a proporção alta permite enquadrar do peito para cima. No mobile o
// container já é estreito e alto, então o fundo full-bleed funciona.
export default function HeroPortrait() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Mobile: fundo full-bleed */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/images/dsc00822.jpeg"
          alt="Dr. Lucas Marcelino"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_20%] grayscale contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark from-[8%] via-navy-dark/55 via-[42%] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/80 via-navy-dark/10 to-transparent" />
      </div>

      {/* Desktop: coluna à direita, sangrando até o topo da página */}
      <div className="absolute inset-y-0 right-0 hidden w-[52%] md:block lg:w-[48%]">
        <Image
          src="/images/dsc00822.jpeg"
          alt="Dr. Lucas Marcelino"
          fill
          priority
          sizes="50vw"
          className="object-cover object-[50%_18%] grayscale contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/25 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-navy-dark to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-dark to-transparent" />
      </div>

      <div
        className="noise absolute inset-0"
        style={{ "--noise-opacity": 0.05 } as React.CSSProperties}
      />
    </div>
  );
}
