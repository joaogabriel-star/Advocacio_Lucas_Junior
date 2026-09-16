// Botão/CTA padrão do site. Retângulo de cantos suaves, sem efeitos de
// movimento — o tom é institucional, não interativo-tecnológico.

type Variant = "primary" | "outline" | "light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-colors";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-paper hover:bg-accent-dark",
  outline:
    "border border-accent text-accent hover:bg-accent hover:text-paper",
  light:
    "border border-paper/40 text-paper hover:border-paper hover:bg-paper/10",
};

export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
