// Defina NEXT_PUBLIC_SITE_URL no ambiente de produção com o domínio real
// (ex: https://www.seudominio.com.br) para robots.txt, sitemap.xml e
// metadados Open Graph apontarem para o domínio correto.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.seudominio.com.br";
