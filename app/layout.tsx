import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site-data";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${site.brand} | Advocacia Imobiliária em Brasília`,
  description:
    "Escritório de advocacia especializado em Direito Imobiliário, ações de locação, despejo, execuções e cobranças em Brasília/DF. Agende sua consultoria.",
  openGraph: {
    title: `${site.brand}`,
    description:
      "Suporte jurídico de excelência para assuntos imobiliários e condominiais. Agende sua consultoria.",
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
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans text-navy antialiased">
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
