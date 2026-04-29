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
      className={`relative bg-white border-4 border-black shadow-[6px_6px_0_#ff2d6f] p-5 ${tilt} hover:rotate-0 transition-transform group`}
    >
      {/* washi tape on top */}
      <span className="tape" style={{ top: -12, left: "20%", transform: "rotate(-8deg)" }} />

      {/* rubber stamp overlay */}
      <div
        className="absolute top-3 right-3 stamp text-xl pointer-events-none opacity-80 group-hover:opacity-100 -rotate-12"
        aria-hidden
      >
        {stampWord}
      </div>

      <div className="flex items-start justify-between gap-3 pr-20">
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bangers text-2xl text-black tracking-wide">
              {token.ticker ?? "UNKNOWN"}
            </span>
            <span className="px-2 py-0.5 text-[11px] font-bangers tracking-wider bg-slop-danger text-black border-2 border-black rotate-3">
              SLOP
            </span>
            {isPump && (
              <span className="px-2 py-0.5 text-[10px] font-bangers tracking-wider bg-slop-puke text-black border-2 border-black -rotate-3">
                pump.fun
              </span>
            )}
          </div>
          {token.name && (
            <div className="font-marker text-sm text-black mt-1 truncate -rotate-1">
              {token.name}
            </div>
          )}
        </div>
      </div>

      <time className="absolute bottom-3 right-3 font-marker text-[10px] text-black/60 -rotate-3">
        {token.flaggedAt}
      </time>

      <button
        onClick={handleCopy}
        title="Click to copy full CA"
        className="mt-4 w-full text-left font-mono text-xs bg-white border-2 border-dashed border-black px-3 py-2.5 flex items-center justify-between gap-2 hover:border-slop-stamp transition-colors text-black"
      >
        <span className="truncate">{shortenCA(token.ca, 10, 10)}</span>
        <span className="text-[10px] font-bangers tracking-wider shrink-0 text-black">
          {copied ? "COPIED!" : "COPY"}
        </span>
      </button>

      <p className="mt-3 font-marker text-base leading-snug text-black">
        &ldquo;{token.reason}&rdquo;
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <ExternalLink href={solscanUrl(token.ca)} label="solscan" tilt="-rotate-2" />
        <ExternalLink href={birdeyeUrl(token.ca)} label="birdeye" tilt="rotate-1" />
        <ExternalLink href={dexscreenerUrl(token.ca)} label="dex" tilt="-rotate-1" />
        {isPump && <ExternalLink href={pumpFunUrl(token.ca)} label="pump" tilt="rotate-2" />}
      </div>

      {token.source && (
        <div className="mt-3 font-marker text-[11px] text-black/60 italic">
          ~ src: {token.source}
        </div>
      )}
    </article>
  );
}

function ExternalLink({
  href,
  label,
  tilt,
}: {
  href: string;
  label: string;
  tilt: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`px-2.5 py-1 font-bangers text-sm tracking-wider bg-white border-2 border-black text-black ${tilt} hover:rotate-0 transition-transform inline-block shadow-[2px_2px_0_#ffd029]`}
    >
      {label} ↗
    </a>
  );
}
