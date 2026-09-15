import { site } from "./site-data";

export function whatsappLink(message: string = site.whatsappMessage) {
  const encoded = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${site.contact.phoneE164}&text=${encoded}`;
}
