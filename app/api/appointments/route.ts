import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { contactRequestSchema } from "@/lib/validation";

export async function POST(req: NextRequest) {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      {
        error:
          "Banco de dados ainda não configurado neste ambiente. Defina DATABASE_URL para ativar o agendamento pelo site.",
      },
      { status: 503 },
    );
  }

  const body = await req.json().catch(() => null);
  const parsed = contactRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;

  const created = await prisma.contactRequest.create({
    data: {
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      area: data.area,
      message: data.message || null,
      type: data.type,
      preferredDate: data.preferredDate ? new Date(data.preferredDate) : null,
      preferredPeriod: data.preferredPeriod ?? null,
      source: "site",
    },
  });

  return NextResponse.json({ id: created.id }, { status: 201 });
}

// Listagem simples para o próprio Lucas conferir os pedidos recebidos.
// Protegida por chave de administrador (ADMIN_API_KEY) via header x-admin-key.
export async function GET(req: NextRequest) {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: "Banco não configurado" }, { status: 503 });
  }

  const adminKey = req.headers.get("x-admin-key");
  if (!process.env.ADMIN_API_KEY || adminKey !== process.env.ADMIN_API_KEY) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const requests = await prisma.contactRequest.findMany({
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return NextResponse.json({ requests });
}
