import Link from "next/link";
import { site } from "@/lib/site-data";
import { whatsappLink } from "@/lib/whatsapp";

const navLinks = [
  { href: "#areas", label: "Áreas de Atuação" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "Dúvidas" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40">
      <div className="bg-gold text-navy-dark">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 text-sm">
          <p className="font-medium">
            Precisa de ajuda com outras matérias do Direito?
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-full border border-navy-dark/70 px-3 py-1 font-semibold transition-colors hover:bg-navy-dark hover:text-gold"
          >
            Falar com um Advogado
          </a>
        </div>
      </div>
      <div className="bg-navy text-cream">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-semibold tracking-wide text-gold">
              LM
            </span>
            <span className="hidden flex-col sm:flex">
              <span className="font-serif text-lg leading-tight">
                {site.name}
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-gold-light">
                Advocacia &amp; Consultoria
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cream/90 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#agendar"
            className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy-dark transition-transform hover:scale-105"
          >
            Agendar Consultoria
          </a>
        </div>
      </div>
    </header>
  );
}
