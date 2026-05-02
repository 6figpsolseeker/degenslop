"use client";

import { useState } from "react";
import { SlopToken } from "@/data/tokens";
import {
  shortenCA,
  solscanUrl,
  birdeyeUrl,
  dexscreenerUrl,
  pumpFunUrl,
} from "@/lib/utils";

const TILTS = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-3", "rotate-3"];
const STAMPS = ["RUG", "DUMPED", "SLOP", "EXIT", "JEET BAIT"];

function pick<T>(arr: T[], seed: string): T {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return arr[h % arr.length];
}

export function TokenCard({ token }: { token: SlopToken }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(token.ca);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  }

  const isPump = token.ca.toLowerCase().endsWith("pump");
  const tilt = pick(TILTS, token.ca);
  const stampWord = pick(STAMPS, token.ca + "s");

  return (
    <article
      className="relative bg-black border-2 border-white p-6 hover:border-gray-400 transition-colors"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-sans text-xl text-white font-bold tracking-normal">
              {token.ticker ?? "UNKNOWN"}
            </span>
            <span className="px-2 py-1 text-xs font-semibold tracking-wider bg-white text-black">
              SLOP
            </span>
            {isPump && (
              <span className="px-2 py-1 text-xs font-semibold tracking-wider bg-white text-black">
                pump.fun
              </span>
            )}
          </div>
          {token.name && (
            <div className="font-sans text-sm text-gray-300 mt-2 truncate">
              {token.name}
            </div>
          )}
        </div>
        <time className="font-sans text-xs text-gray-400 shrink-0">
          {token.flaggedAt}
        </time>
      </div>

      <button
        onClick={handleCopy}
        title="Click to copy full CA"
        className="mt-4 w-full text-left font-mono text-sm bg-white text-black px-3 py-2 border border-white hover:bg-gray-200 transition-colors flex items-center justify-between gap-2"
      >
        <span className="truncate">{shortenCA(token.ca, 10, 10)}</span>
        <span
          className={`text-xs font-semibold shrink-0 ${
            copied ? "text-green-600" : "text-black"
          }`}
        >
          {copied ? "✓" : "COPY"}
        </span>
      </button>

      <p className="mt-4 font-sans text-base leading-relaxed text-white">
        &ldquo;{token.reason}&rdquo;
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <ExternalLink href={solscanUrl(token.ca)} label="Solscan" />
        <ExternalLink href={birdeyeUrl(token.ca)} label="Birdeye" />
        <ExternalLink href={dexscreenerUrl(token.ca)} label="Dex" />
        {isPump && <ExternalLink href={pumpFunUrl(token.ca)} label="Pump.fun" />}
      </div>

      {token.source && (
        <div className="mt-3 font-sans text-xs text-gray-400 italic">
          Source: {token.source}
        </div>
      )}
    </article>
  );
}

function ExternalLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="px-3 py-1.5 font-sans text-xs tracking-wider bg-white text-black border border-white hover:bg-gray-200 transition-colors inline-block"
    >
      {label} ↗
    </a>
  );
}
