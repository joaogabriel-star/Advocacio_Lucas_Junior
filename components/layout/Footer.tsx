import Image from "next/image";
import { site } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-navy py-12 text-paper/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-start md:justify-between">
        <div>
          <Image
            src="/images/logo-lm.png"
            alt={site.brand}
            width={150}
            height={64}
            className="h-14 w-auto"
          />
          <p className="mt-3 text-sm">{site.lawyer.credentials}</p>
          <p className="mt-1 max-w-xs text-sm">
            Advocacia full service com especialidade em Direito Imobiliário.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <a href="#agendar" className="hover:text-gold-light">
            {site.contact.phoneDisplay}
          </a>
          <a
            href={`mailto:${site.contact.email}`}
            className="hover:text-gold-light"
          >
            {site.contact.email}
          </a>
          <a
            href={site.contact.instagramPrimary}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-light"
          >
            Instagram
          </a>
          <a
            href={site.contact.linktree}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-light"
          >
            Linktree
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-paper/15 px-4 pt-6 text-xs text-paper/50">
        © {new Date().getFullYear()} {site.brand}. Todos os direitos
        reservados. {site.contact.city}.
      </div>
    </footer>
  );
}
