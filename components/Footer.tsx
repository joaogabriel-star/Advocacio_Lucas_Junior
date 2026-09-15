import { site } from "@/lib/site-data";
import { whatsappLink } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer
      className="noise relative overflow-hidden border-t border-paper/10 bg-navy-dark py-10 text-paper/60"
      style={{ "--noise-opacity": 0.03 } as React.CSSProperties}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg text-paper">{site.brand}</p>
          <p className="text-sm">{site.lawyer.credentials}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-accent-light">
            {site.contact.phoneDisplay}
          </a>
          <a href={`mailto:${site.contact.email}`} className="hover:text-accent-light">
            {site.contact.email}
          </a>
          <a
            href={site.contact.instagramPrimary}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-light"
          >
            Instagram
          </a>
          <a
            href={site.contact.linktree}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-light"
          >
            Linktree
          </a>
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-6xl px-4 text-xs text-paper/30">
        © {new Date().getFullYear()} {site.brand}. Todos os direitos
        reservados. {site.contact.city}.
      </div>
    </footer>
  );
}
