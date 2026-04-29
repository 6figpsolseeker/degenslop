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
  {
    ca: "nnJpF9wLXbXWLXddZTrpN7Vh5s2sJYefg7tnQukXkHU",
    ticker: "SLOP-002",
    name: "Slop Pile Entry",
    reason: "Added to the slop pile from user-submitted token address.",
    flaggedAt: "2026-04-29",
    source: "Community submission",
  },
  {
    ca: "XgX6w7QgGnLrifAieGByV9Nj6CPsfHzvo1bzP95pump",
    ticker: "SLOP-003",
    name: "Slop Pile Entry",
    reason: "Added to the slop pile from user-submitted token address.",
    flaggedAt: "2026-04-29",
    source: "Community submission",
  },
  {
    ca: "GMuUo2MfSPKbgxrCgseyErJd6LgSYqWbTChm3FWpump",
    ticker: "SLOP-004",
    name: "Slop Pile Entry",
    reason: "Added to the slop pile from user-submitted token address.",
    flaggedAt: "2026-04-29",
    source: "Community submission",
  },
  {
    ca: "8ommoj922QjtNUpG4sup1QXPz73E9qEN4dqH7jfDpump",
    ticker: "SLOP-005",
    name: "Slop Pile Entry",
    reason: "Added to the slop pile from user-submitted token address.",
    flaggedAt: "2026-04-29",
    source: "Community submission",
  },
  {
    ca: "3Z9piFo9GdZxBX3nPkvZErGNeHQHMtsFfVzLdj6ipump",
    ticker: "SLOP-006",
    name: "Slop Pile Entry",
    reason: "Added to the slop pile from user-submitted token address.",
    flaggedAt: "2026-04-29",
    source: "Community submission",
  },
  {
    ca: "DA8Z59c4h9AfPi8qXDdLS5xw92aqR1aPEDVamjAepump",
    ticker: "SLOP-007",
    name: "Slop Pile Entry",
    reason: "Added to the slop pile from user-submitted token address.",
    flaggedAt: "2026-04-29",
    source: "Community submission",
  },
];
