import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site-data";
import { siteUrl } from "@/lib/site-url";
import CustomCursor from "@/components/layout/CustomCursor";
import WhatsAppFloatingButton from "@/components/layout/WhatsAppFloatingButton";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    <html lang="pt-BR" className={`${display.variable} ${inter.variable}`}>
      <body className="bg-navy-dark font-sans text-paper antialiased">
        <CustomCursor />
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
