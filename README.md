# DegenSlop Detector

A community-maintained, open-source registry of Solana tokens flagged as rugs — coins drained by insiders, snipers, or malicious devs.

Built with Next.js 14 and TailwindCSS.

## Why

Solana memecoin culture moves fast. Rugs move faster. DegenSlop is a public list of contract addresses (CAs) flagged as **SLOP** so traders can check before they ape.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Add a token

Edit [src/data/tokens.ts](src/data/tokens.ts) and append to the `TOKENS` array:

```ts
{
  ca: "4r5UFS4zf6eNwbEqFbLy78ZCose2knhxYxK1fyyEpump",
  ticker: "EXAMPLE",
  name: "Example Token",
  reason: "Dev dumped, snipers held 80% of supply at launch.",
  flaggedAt: "2026-04-28",
}
```

## Contributing

PRs welcome. Open an issue with the CA + evidence (Solscan / Birdeye links, screenshots) before submitting.

## License

MIT — see [LICENSE](LICENSE).

## Disclaimer

This site is informational only and reflects community reports. Always do your own research. Listing a token as SLOP is not a legal accusation — it's a signal based on on-chain behavior and community evidence.
