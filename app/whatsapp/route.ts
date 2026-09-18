import { NextRequest, NextResponse } from "next/server";
import { site } from "@/lib/site-data";
import { buildWhatsAppRedirectUrl } from "@/lib/whatsapp";

// Redireciona para o WhatsApp sem deixar o número de telefone visível no
// HTML estático das páginas — só existe aqui, no lado servidor.
export async function GET(req: NextRequest) {
  const text = req.nextUrl.searchParams.get("text") || site.whatsappMessage;
  return NextResponse.redirect(buildWhatsAppRedirectUrl(text), {
    status: 302,
    headers: { "Cache-Control": "no-store" },
  });
}
