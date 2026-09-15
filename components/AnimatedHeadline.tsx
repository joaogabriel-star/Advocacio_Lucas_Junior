export default function AnimatedHeadline({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`inline-block overflow-hidden py-1 ${className}`}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className="char-reveal inline-block"
          style={{ animationDelay: `${delay + i * 32}ms` }}
        >
          {ch === " " ? " " : ch}
        </span>
      ))}
    </span>
  );
}
