// Placeholder editorial do retrato do Dr. Lucas em preto e branco.
// Para trocar pela foto real: salve a imagem em public/hero-portrait.jpg
// e substitua o bloco <svg> abaixo por:
//   <Image src="/hero-portrait.jpg" alt="Dr. Lucas Marcelino" fill
//     className="object-cover object-top grayscale contrast-125" priority />
export default function HeroPortrait() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <svg
        viewBox="0 0 600 800"
        preserveAspectRatio="xMidYMax slice"
        className="h-full w-full text-navy-light"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="glow" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#16223b" />
            <stop offset="100%" stopColor="#05080f" />
          </radialGradient>
          <linearGradient id="silhouette" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1b2942" />
            <stop offset="100%" stopColor="#0a1220" />
          </linearGradient>
        </defs>
        <rect width="600" height="800" fill="url(#glow)" />
        <ellipse cx="300" cy="255" rx="108" ry="128" fill="url(#silhouette)" />
        <path
          d="M120 800c0-135 80-235 180-235s180 100 180 235z"
          fill="url(#silhouette)"
        />
        <path
          d="M300 20c-88 0-118 214-38 214 20 32 56 32 76 0 80 0 50-214-38-214Z"
          fill="none"
          stroke="#233150"
          strokeWidth="1.5"
          opacity="0.5"
        />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/30 to-transparent" />
      <div className="noise absolute inset-0" />
    </div>
  );
}
