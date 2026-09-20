import { Resend } from "resend";
import { site } from "./site-data";

// Escapa os caracteres que poderiam virar HTML/tags dentro do e-mail.
// Todo o conteúdo interpolado abaixo vem de um formulário público — sem
// isso, alguém poderia injetar links, imagens ou marcação maliciosa no
// e-mail que o escritório recebe.
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Remove quebras de linha de campos usados no assunto do e-mail, para
// impedir injeção de cabeçalho (CRLF injection).
function sanitizeHeaderValue(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

const periodLabels: Record<string, string> = {
  MANHA: "Manhã",
  TARDE: "Tarde",
  NOITE: "Noite",
};

type NotifyInput = {
  name: string;
  phone: string;
  email?: string | null;
  area: string;
  message?: string | null;
  type: "CONSULTA_RAPIDA" | "AGENDAMENTO";
  preferredDate?: Date | null;
  preferredPeriod?: string | null;
};

// Envia um aviso por e-mail para o escritório a cada novo pedido pelo site.
// Silenciosamente ignorado se RESEND_API_KEY não estiver configurada — o
// pedido continua sendo salvo no banco normalmente. Não precisa de domínio
// próprio: o remetente padrão (onboarding@resend.dev) já funciona para
// entregar em qualquer caixa, inclusive Gmail.
export async function notifyNewContactRequest(data: NotifyInput) {
  if (!process.env.RESEND_API_KEY) return;

  const resend = new Resend(process.env.RESEND_API_KEY);
  const to = process.env.NOTIFY_EMAIL_TO || site.contact.email;
  const from = process.env.RESEND_FROM || "Site LM Advocacia <onboarding@resend.dev>";

  const kindLabel =
    data.type === "AGENDAMENTO" ? "Novo agendamento" : "Nova dúvida rápida";

  const rows = [
    ["Nome", escapeHtml(data.name)],
    ["Telefone", escapeHtml(data.phone)],
    ["E-mail", escapeHtml(data.email || "—")],
    ["Área", escapeHtml(data.area)],
  ];

  if (data.preferredDate) {
    rows.push([
      "Data preferida",
      `${data.preferredDate.toLocaleDateString("pt-BR")}${
        data.preferredPeriod ? ` (${periodLabels[data.preferredPeriod] ?? data.preferredPeriod})` : ""
      }`,
    ]);
  }

  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#666;font-size:13px;">${label}</td><td style="padding:4px 0;font-size:13px;"><strong>${value}</strong></td></tr>`,
    )
    .join("");

  const html = `
    <div style="font-family:sans-serif;max-width:480px;">
      <h2 style="margin-bottom:4px;">${kindLabel} pelo site</h2>
      <table>${rowsHtml}</table>
      ${
        data.message
          ? `<p style="margin-top:16px;color:#333;"><strong>Caso descrito:</strong><br/>${escapeHtml(data.message)}</p>`
          : ""
      }
    </div>
  `;

  try {
    await resend.emails.send({
      from,
      to,
      subject: `${kindLabel}: ${sanitizeHeaderValue(data.name)}`,
      html,
    });
  } catch (err) {
    // Não deixa uma falha de e-mail derrubar o pedido, que já foi salvo no banco.
    console.error("Falha ao enviar e-mail de notificação:", err);
  }
}
