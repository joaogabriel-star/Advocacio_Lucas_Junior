import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site-data";
import { siteUrl } from "@/lib/site-url";
import WhatsAppFloatingButton from "@/components/layout/WhatsAppFloatingButton";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${site.brand} | Advogado Especialista em Direito Imobiliário em Brasília`,
  description:
    "Advocacia full service em Brasília/DF, com especialidade em Direito Imobiliário: usucapião, locação e despejo, leilões, incorporações e vícios construtivos. Agende sua consultoria.",
  openGraph: {
    title: `${site.brand}`,
    description:
      "Advocacia full service com especialidade em Direito Imobiliário em Brasília/DF. Agende sua consultoria.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-paper font-sans text-ink antialiased">
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
