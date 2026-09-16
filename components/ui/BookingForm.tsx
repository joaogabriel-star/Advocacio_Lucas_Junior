"use client";

import { useState } from "react";
import { site } from "@/lib/site-data";
import { whatsappLink } from "@/lib/whatsapp";

type Mode = "CONSULTA_RAPIDA" | "AGENDAMENTO";
type Status = "idle" | "loading" | "success" | "error";

const periods = [
  { value: "MANHA", label: "Manhã" },
  { value: "TARDE", label: "Tarde" },
  { value: "NOITE", label: "Noite" },
];

export default function BookingForm() {
  const [mode, setMode] = useState<Mode>("AGENDAMENTO");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      phone: String(form.get("phone") || ""),
      email: String(form.get("email") || ""),
      area: String(form.get("area") || ""),
      message: String(form.get("message") || ""),
      type: mode,
      preferredDate: mode === "AGENDAMENTO" ? String(form.get("preferredDate") || "") : undefined,
      preferredPeriod: mode === "AGENDAMENTO" ? (form.get("preferredPeriod") as string) || undefined : undefined,
      website: String(form.get("website") || ""),
    };

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(
          data.error ||
            "Não foi possível enviar agora. Tente pelo WhatsApp enquanto isso.",
        );
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg(
        "Não foi possível enviar agora. Tente pelo WhatsApp enquanto isso.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-md border border-line bg-paper p-8 text-center">
        <h3 className="font-display text-2xl font-bold text-navy">Pedido recebido!</h3>
        <p className="mt-2 text-mist">
          Retornaremos em breve para confirmar. Se preferir uma resposta mais
          rápida, fale agora pelo WhatsApp.
        </p>
        <a
          href={whatsappLink(
            "Olá! Acabei de solicitar um agendamento pelo site.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block rounded-md bg-accent px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent-dark"
        >
          Confirmar pelo WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-md border border-line bg-paper p-6 shadow-sm md:p-8">
      <div className="mb-6 flex rounded-md border border-line bg-bone p-1 text-sm font-semibold">
        <button
          type="button"
          onClick={() => setMode("AGENDAMENTO")}
          className={`flex-1 rounded py-2 transition-colors ${
            mode === "AGENDAMENTO" ? "bg-accent text-paper" : "text-mist hover:text-ink"
          }`}
        >
          Agendar consultoria
        </button>
        <button
          type="button"
          onClick={() => setMode("CONSULTA_RAPIDA")}
          className={`flex-1 rounded py-2 transition-colors ${
            mode === "CONSULTA_RAPIDA" ? "bg-accent text-paper" : "text-mist hover:text-ink"
          }`}
        >
          Só tenho uma dúvida
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Nome completo" name="name" required placeholder="Seu nome" />
          <Field
            label="Telefone / WhatsApp"
            name="phone"
            required
            placeholder="(61) 90000-0000"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="E-mail (opcional)"
            name="email"
            type="email"
            placeholder="voce@email.com"
          />
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-mist">
              Área do caso
            </label>
            <select
              name="area"
              required
              className="w-full rounded-md border border-line bg-paper px-3 py-2 text-sm text-ink placeholder:text-mist/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            >
              <option value="">Selecione</option>
              {site.practiceAreas.map((a) => (
                <option key={a.slug} value={a.title}>
                  {a.title}
                </option>
              ))}
              <option value="Outro assunto jurídico">
                Outro assunto jurídico
              </option>
            </select>
          </div>
        </div>

        {mode === "AGENDAMENTO" && (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-mist">
                Data preferida
              </label>
              <input
                type="date"
                name="preferredDate"
                min={new Date().toISOString().split("T")[0]}
                required
                className="w-full rounded-md border border-line bg-paper px-3 py-2 text-sm text-ink placeholder:text-mist/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-mist">
                Período
              </label>
              <select
                name="preferredPeriod"
                required
                className="w-full rounded-md border border-line bg-paper px-3 py-2 text-sm text-ink placeholder:text-mist/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              >
                {periods.map((p) => (
                  <option key={p.value} value={p.value}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-mist">
            Conte um pouco do seu caso
          </label>
          <textarea
            name="message"
            rows={3}
            placeholder="Ex: recebi uma notificação de despejo e preciso de orientação..."
            className="w-full rounded-md border border-line bg-paper px-3 py-2 text-sm text-ink placeholder:text-mist/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>

        {status === "error" && (
          <p className="rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-md bg-accent py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent-dark disabled:opacity-60"
        >
          {status === "loading"
            ? "Enviando..."
            : mode === "AGENDAMENTO"
              ? "Solicitar agendamento"
              : "Enviar pergunta"}
        </button>
        <p className="text-center text-xs text-mist">
          Resposta mais rápida?{" "}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent underline"
          >
            Fale direto no WhatsApp
          </a>
        </p>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-mist">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-line bg-paper px-3 py-2 text-sm text-ink placeholder:text-mist/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
      />
    </div>
  );
}
