import { z } from "zod";

export const contactRequestSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome completo").max(120),
  phone: z
    .string()
    .trim()
    .min(10, "Informe um telefone válido com DDD")
    .max(20),
  email: z.string().trim().email("E-mail inválido").optional().or(z.literal("")),
  area: z.string().trim().min(1, "Selecione uma área").max(120),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
  type: z.enum(["CONSULTA_RAPIDA", "AGENDAMENTO"]),
  preferredDate: z.string().optional(), // ISO date string, only for AGENDAMENTO
  preferredPeriod: z.enum(["MANHA", "TARDE", "NOITE"]).optional(),
});

export type ContactRequestInput = z.infer<typeof contactRequestSchema>;
