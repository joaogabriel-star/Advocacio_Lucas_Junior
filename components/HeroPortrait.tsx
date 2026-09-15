import Image from "next/image";

export default function HeroPortrait() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src="/images/dsc00822.jpeg"
        alt="Dr. Lucas Marcelino"
        fill
        priority
        sizes="100vw"
        className="scale-110 object-cover object-[50%_16%] grayscale contrast-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark from-[8%] via-navy-dark/55 via-[42%] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/80 via-navy-dark/10 to-transparent" />
      <div
        className="noise absolute inset-0"
        style={{ "--noise-opacity": 0.05 } as React.CSSProperties}
      />
    </div>
  );
}
