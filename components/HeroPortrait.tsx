import Image from "next/image";

export default function HeroPortrait() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src="/images/dsc00898.jpeg"
        alt="Dr. Lucas Marcelino"
        fill
        priority
        sizes="100vw"
        className="object-cover object-top grayscale contrast-125"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/30 to-transparent" />
      <div
        className="noise absolute inset-0"
        style={{ "--noise-opacity": 0.05 } as React.CSSProperties}
      />
    </div>
  );
}
