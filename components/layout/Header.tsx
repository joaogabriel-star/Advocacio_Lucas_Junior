import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site-data";
import { whatsappLink } from "@/lib/whatsapp";
import { Icon } from "@/components/ui/icons";
import MobileMenu from "@/components/layout/MobileMenu";

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
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      {/* faixa de contato no topo, padrão de escritório */}
      <div className="hidden border-b border-line bg-navy text-paper md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-xs">
          <span>{site.contact.city} · Atendimento presencial e online</span>
          <div className="flex items-center gap-5">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-light"
            >
              {site.contact.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              className="hover:text-gold-light"
            >
              {site.contact.email}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-lm-dark.png"
            alt={site.brand}
            width={124}
            height={52}
            priority
            className="h-11 w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-7 text-sm md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-ink transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 md:gap-4">
          <div className="hidden items-center gap-3 border-r border-line pr-4 md:flex">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="text-mist transition-colors hover:text-accent"
              >
                <Icon name={s.icon} className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
          <a
            href="#agendar"
            className="hidden rounded-md bg-accent px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-accent-dark sm:inline-block"
          >
            Agende sua consulta
          </a>
          <MobileMenu
            navLinks={navLinks}
            socialLinks={socialLinks}
            whatsappHref={whatsappLink()}
          />
        </div>
      </div>
    </header>
  );
}
