// Rate limit simples em memória por processo. Suficiente para o volume de
// tráfego de um site institucional de escritório individual; não persiste
// entre instâncias serverless distintas — para tráfego alto, trocar por
// Redis/Upstash.
const hits = new Map<string, number[]>();

export function rateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now();
  const timestamps = (hits.get(key) || []).filter((t) => now - t < windowMs);

  if (timestamps.length >= limit) {
    hits.set(key, timestamps);
    return false;
  }

  timestamps.push(now);
  hits.set(key, timestamps);
  return true;
}
