"use client";

import { useScrollParallax } from "@/lib/useScrollParallax";

export default function StepNumeral({
  n,
  speed = 0.12,
}: {
  n: string;
  speed?: number;
}) {
  const ref = useScrollParallax<HTMLSpanElement>(speed);

  return (
    <span
      ref={ref}
      className="block font-display text-5xl font-semibold text-accent/25"
    >
      {n}
    </span>
  );
}
