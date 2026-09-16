import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site-data";
import { whatsappLink } from "@/lib/whatsapp";
import { Icon } from "./icons";
import MagneticButton from "./MagneticButton";

const navLinks = [
  { href: "#areas", label: "Áreas de Atuação" },
  { href: "#artigo", label: "Artigo" },
  { href: "#sobre", label: "Sobre" },
  { href: "#correspondencia", label: "Correspondência" },
  { href: "#faq", label: "Dúvidas" },
];

const socialLinks = [
  { href: site.contact.instagramPrimary, label: "Instagram", icon: "instagram" as const },
  { href: site.contact.jusbrasil, label: "Jusbrasil", icon: "external" as const },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-b from-navy-dark/95 via-navy-dark/70 to-transparent pb-6 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 pt-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-lm.png"
            alt={site.brand}
            width={124}
            height={52}
            priority
            className="h-11 w-auto"
          />
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
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 border-r border-paper/15 pr-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="text-paper/60 transition-colors hover:text-accent-light"
              >
                <Icon name={s.icon} className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm font-medium text-paper/70 transition-colors hover:text-accent-light lg:inline"
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
