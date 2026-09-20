// Roda "prisma db push" durante o build, só quando DATABASE_URL existe.
// Mantém o schema do banco sincronizado automaticamente a cada deploy,
// sem depender de rodar o comando manualmente. Em ambiente sem banco
// configurado (ex: build local sem .env), simplesmente pula esta etapa.
const { execSync } = require("node:child_process");

if (!process.env.DATABASE_URL) {
  console.log("[db-push] DATABASE_URL não definida — pulando sincronização do schema.");
  process.exit(0);
}

console.log("[db-push] Sincronizando schema do banco...");
try {
  execSync("npx prisma db push --skip-generate --accept-data-loss", {
    stdio: "inherit",
  });
} catch (err) {
  console.error("[db-push] Falha ao sincronizar o schema do banco:", err.message);
  process.exit(1);
}
