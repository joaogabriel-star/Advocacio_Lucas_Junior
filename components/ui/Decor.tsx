// Elementos gráficos decorativos reutilizáveis (grade de pontos e brilhos).
// Todos são puramente estéticos: aria-hidden e pointer-events-none.

export function DotGrid({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`dot-grid pointer-events-none absolute text-accent ${className}`}
    />
  );
}

export function Glow({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-[120px] ${className}`}
    />
  );
}
