import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suspected Slop — New pairs that are VAMP, bundled, or mass deployer created",
};

const SUSPECTED_TOKENS = [
  {
    ca: "8zA3g7wLHgBaQsZxE2tNqk9dyU3e6CzjR7pK4T8rWq1",
    ticker: "VAMP1",
    name: "Vamp Launch Protocol",
    reason:
      "New pair created on a launchpad with explosive volume spikes and a small number of wallets holding most supply. Bubble map inspection shows large bundled clusters and rapid whale accumulation, signaling a likely rug or dump structure.",
    details:
      "High volume with extreme up/down movement was visible immediately after listing. Multiple large holders bought during the first block, then partially sold into retail momentum. This is a classic mass deployer / VAMP pattern that often leaves late buyers hanging.",
  },
  {
    ca: "9LrU5sP7QbNmHxCw8JkT6dYfV4e2gTzA1pR3vB9qW6",
    ticker: "BNDL",
    name: "Bundle Trap Token",
    reason:
      "Token launched via a trading terminal and is heavily bundled by insiders. Bubble maps show enormous wallet clusters around a few addresses, with most volume driven by in-group transfers rather than broad retail participation.",
    details:
      "Massive bundled position concentration makes the price fragile. Once insiders exit, the order book will crater and retail liquidity will dry up, causing large losses for holders who bought into the volume spike.",
  },
  {
    ca: "5MqR2hK8FvXdPzT7YcNnA6bJwL1eS4uF9gV0oC3xZ5",
    ticker: "DEPLOY",
    name: "Mass Deployer Asset",
    reason:
      "Created through a mass deployer wallet and paired on several terminals. Early trading showed a high number of token holders with nearly identical purchases, indicating coordinated insider distribution.",
    details:
      "This pattern often leads to a rug event because insiders can dump through linked wallets while retail remains unable to exit. The token’s liquidity is shallow, so even moderate seller pressure can wipe out value quickly.",
  },
];

export default function SuspectedSlopPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">New feature</p>
          <h1 className="mt-4 text-5xl sm:text-6xl font-semibold tracking-tight">
            SUSPECTED SLOP
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-300 leading-relaxed">
            Tokens flagged by high volume, volatile movement, and heavy insider/bundle concentration. These are the pairs that look most likely to rug or cause retail investors to lose money.
          </p>
        </div>

        <div className="space-y-8">
          {SUSPECTED_TOKENS.map((token) => (
            <article key={token.ca} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/20">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.4em] text-gray-400">Suspect token</div>
                  <div className="mt-3 text-3xl font-semibold text-white">{token.ticker}</div>
                  <div className="text-sm text-gray-400 mt-1">{token.name}</div>
                </div>
                <div className="rounded-2xl bg-black/80 px-4 py-3 text-sm text-gray-200 border border-white/10">
                  <div className="font-semibold text-white">Token CA</div>
                  <div className="mt-1 break-all">{token.ca}</div>
                </div>
              </div>

              <div className="mt-8 space-y-4 text-sm leading-7 text-gray-300">
                <div>
                  <div className="font-semibold text-white">Why this is suspected</div>
                  <p className="mt-2">{token.reason}</p>
                </div>
                <div>
                  <div className="font-semibold text-white">Risk breakdown</div>
                  <p className="mt-2">{token.details}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
