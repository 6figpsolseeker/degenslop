export type SlopToken = {
  ca: string;
  ticker?: string;
  name?: string;
  reason: string;
  flaggedAt: string; // YYYY-MM-DD
  source?: string;
};

export const TOKENS: SlopToken[] = [
  {
    ca: "4r5UFS4zf6eNwbEqFbLy78ZCose2knhxYxK1fyyEpump",
    ticker: "SLOP-001",
    name: "Pump.fun Rug",
    reason:
      "Flagged by community submission. Insider/sniper concentration at launch with malicious dev behavior.",
    flaggedAt: "2026-04-28",
    source: "Community submission",
  },
];
