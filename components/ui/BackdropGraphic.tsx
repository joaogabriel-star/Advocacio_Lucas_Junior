import Image from "next/image";

// Elemento gráfico decorativo de fundo: a imagem entra apenas como sombra
// esmaecida atrás do conteúdo. O esmaecimento das bordas já vem gravado no
// próprio PNG. Puramente estético — aria-hidden e pointer-events-none.
export default function BackdropGraphic({
  src,
  className = "",
  sizes = "(min-width: 768px) 40vw, 70vw",
  opacity = 0.5,
}: {
  src: string;
  className?: string;
  sizes?: string;
  opacity?: number;
}) {
  return (
    <div aria-hidden className={`pointer-events-none absolute ${className}`}>
      <Image
        src={src}
        alt=""
        fill
        sizes={sizes}
        className="object-contain"
        style={{ opacity }}
      />
    </div>
  );
}
