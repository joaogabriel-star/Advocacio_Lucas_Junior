# LM Advocacia & Consultoria — Site

Site institucional do **Dr. Lucas Marcelino (OAB/DF 80487)**, construído em
Next.js 14 (App Router) + TypeScript + Tailwind CSS, com back-end de
agendamento (API Route + Prisma) pronto para conectar a um banco Postgres.

## Rodando localmente

```bash
npm install
cp .env.example .env   # preencha DATABASE_URL quando tiver o banco
npm run dev
```

Sem `DATABASE_URL` definida, o site funciona normalmente — só o
agendamento pelo formulário retorna um aviso (o botão de WhatsApp continua
funcionando 100% do tempo, independente do banco).

## Ativando o banco de dados (agendamento)

1. Crie um banco Postgres gratuito/barato — recomendado: **Neon**
   (neon.tech) ou a integração **Vercel Postgres** (que é Neon por trás),
   direto pelo dashboard da Vercel: Project → Storage → Create Database.
2. Copie a `DATABASE_URL` gerada.
3. Localmente: cole em `.env` e rode `npm run db:push` (cria a tabela
   `ContactRequest` a partir de `prisma/schema.prisma`).
4. Na Vercel: Project → Settings → Environment Variables → adicione
   `DATABASE_URL` (e `ADMIN_API_KEY`, uma senha forte à sua escolha) →
   redeploy.

Depois disso o formulário "Agendar consultoria" grava de verdade no banco.
Para consultar os pedidos recebidos:

```bash
curl -H "x-admin-key: SEU_ADMIN_API_KEY" https://seu-site.vercel.app/api/appointments
```

(Isso é deliberadamente simples — é uma listagem JSON, não um painel
visual. Se/quando fizer sentido, dá pra evoluir para uma tela de admin
com login de verdade — ver "Roadmap" abaixo.)

## Estrutura do projeto

```
app/
  page.tsx              — monta a landing page
  layout.tsx            — fontes, metadata, SEO
  api/appointments/     — API de agendamento (POST cria, GET lista)
components/             — cada seção do site é um componente isolado
lib/
  site-data.ts          — TODO o conteúdo textual do site (edite aqui)
  prisma.ts             — cliente Prisma singleton
  validation.ts         — validação (zod) do formulário
  whatsapp.ts           — helper do link do WhatsApp
prisma/schema.prisma    — modelo do banco de dados
```

Para trocar textos, telefone, e-mail ou áreas de atuação, **edite só
`lib/site-data.ts`** — todo o site lê desse arquivo.

## Roadmap (o que fica pronto para crescer)

- [x] Site institucional responsivo
- [x] Formulário de agendamento com validação e persistência
- [ ] Painel de administração com login (hoje é só uma rota JSON protegida
      por chave)
- [ ] Confirmação por e-mail/WhatsApp automática ao agendar
- [ ] Verificação de horários já ocupados (hoje o cliente escolhe
      livremente data/período; não há bloqueio de conflito)
- [ ] Autenticação de verdade (NextAuth) se o painel crescer

## Deploy

Deploy contínuo pela Vercel a partir do branch principal do repositório
(ver seção de hospedagem enviada na conversa).
