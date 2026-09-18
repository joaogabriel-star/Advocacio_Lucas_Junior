import { site } from "./site-data";

export function whatsappLink(message: string = site.whatsappMessage) {
  const encoded = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${site.contact.phoneE164}&text=${encoded}`;
}

const periodLabels: Record<string, string> = {
  MANHA: "Manhã",
  TARDE: "Tarde",
  NOITE: "Noite",
};

// Monta a mensagem de WhatsApp com os dados que a pessoa já digitou no
// formulário, para quem prefere falar direto em vez de enviar o pedido pelo site.
export function whatsappLinkFromForm(data: {
  name?: string;
  phone?: string;
  email?: string;
  area?: string;
  message?: string;
  preferredDate?: string;
  preferredPeriod?: string;
}) {
  const lines = ["Olá! Vim pelo site e gostaria de falar sobre meu caso."];

  if (data.name) lines.push(`Nome: ${data.name}`);
  if (data.phone) lines.push(`Telefone: ${data.phone}`);
  if (data.email) lines.push(`E-mail: ${data.email}`);
  if (data.area) lines.push(`Área: ${data.area}`);
  if (data.preferredDate) {
    const [y, m, d] = data.preferredDate.split("-");
    const dateLabel = y && m && d ? `${d}/${m}/${y}` : data.preferredDate;
    const periodLabel = data.preferredPeriod
      ? ` (${periodLabels[data.preferredPeriod] ?? data.preferredPeriod})`
      : "";
    lines.push(`Data preferida: ${dateLabel}${periodLabel}`);
  }
  if (data.message) lines.push(`Caso: ${data.message}`);

  return whatsappLink(lines.join("\n"));
}
