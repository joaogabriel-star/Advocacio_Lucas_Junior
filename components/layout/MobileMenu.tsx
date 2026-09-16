"use client";

import { useEffect, useState } from "react";
import { Icon, IconName } from "@/components/ui/icons";

type NavLink = { href: string; label: string };
type SocialLink = { href: string; label: string; icon: IconName };

export default function MobileMenu({
  navLinks,
  socialLinks,
  whatsappHref,
}: {
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  whatsappHref: string;
}) {
  const [open, setOpen] = useState(false);

  // Trava o scroll da página enquanto o menu está aberto e fecha no Esc.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-paper/80 transition-colors hover:text-accent-light"
      >
        <Icon name="menu" className="h-6 w-6" />
      </button>

      <div
        className={`fixed inset-0 z-50 ${open ? "visible" : "invisible"}`}
        aria-hidden={!open}
      >
        {/* fundo escurecido */}
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          aria-label="Fechar menu"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 h-full w-full bg-ink/70 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* gaveta lateral */}
        <div
          className={`absolute right-0 top-0 flex h-full w-4/5 max-w-xs flex-col bg-navy-light p-6 shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-light">
              Menu
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-paper/80 transition-colors hover:text-accent-light"
            >
              <Icon name="close" className="h-6 w-6" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-paper/10 py-3.5 text-lg text-paper/80 transition-colors hover:text-accent-light"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto space-y-5 pt-6">
            <div className="flex items-center gap-5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-paper/70 transition-colors hover:text-accent-light"
                >
                  <Icon name={s.icon} className="h-6 w-6" />
                </a>
              ))}
            </div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block rounded-full border border-paper/20 py-3 text-center text-sm font-semibold text-paper transition-colors hover:border-accent hover:text-accent-light"
            >
              Falar no WhatsApp
            </a>
            <a
              href="#agendar"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-accent py-3 text-center text-sm font-semibold text-navy-dark transition-colors hover:bg-accent-light"
            >
              Agendar consultoria
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
