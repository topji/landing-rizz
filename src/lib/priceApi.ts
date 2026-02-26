export interface DIAQuotation {
  Symbol: string;
  Name: string;
  Address: string;
  Blockchain: string;
  Price: number;
  PriceYesterday: number;
  VolumeYesterdayUSD: number;
  Time: string; // ISO timestamp
  Source: string;
}

export async function fetchDIAQuotation(symbol: string, signal?: AbortSignal): Promise<DIAQuotation | null> {
  const url = `https://api.diadata.org/v1/quotation/${encodeURIComponent(symbol)}`;
  try {
    const response = await fetch(url, { method: 'GET', signal });
    if (!response.ok) return null;
    const data = (await response.json()) as DIAQuotation;
    if (typeof data?.Price !== 'number') return null;
    return data;
  } catch {
    return null;
  }
}

export function computeChangePct(current: number, yesterday: number): number {
  if (!yesterday || !isFinite(yesterday)) return 0;
  return ((current - yesterday) / yesterday) * 100;
}
