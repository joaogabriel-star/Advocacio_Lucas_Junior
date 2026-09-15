import Link from "next/link";
import { site } from "@/lib/site-data";
import { whatsappLink } from "@/lib/whatsapp";
import MagneticButton from "./MagneticButton";

const navLinks = [
  { href: "#areas", label: "Áreas de Atuação" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "Dúvidas" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-paper/10 bg-navy-dark/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/40 font-display text-sm font-semibold text-accent-light">
            LM
          </span>
          <span className="hidden flex-col sm:flex">
            <span className="font-display text-base font-semibold leading-tight text-paper">
              {site.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-mist">
              Advocacia &amp; Consultoria
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-paper/70 transition-colors hover:text-accent-light"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm font-medium text-paper/70 transition-colors hover:text-accent-light sm:inline"
          >
            Outras áreas do Direito
          </a>
          <MagneticButton
            href="#agendar"
            strength={8}
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-navy-dark hover:bg-accent-light"
          >
            Agendar
          </MagneticButton>
        </div>
      </div>
    </header>
  );
}
