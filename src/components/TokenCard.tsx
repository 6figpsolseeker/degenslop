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

  return (
    <article className="relative overflow-hidden rounded-xl border border-slop-border bg-slop-panel p-5 shadow-lg hover:border-slop-danger/60 transition-colors group">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slop-danger/40 to-transparent" />

      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-base font-bold text-slop-danger">
              {token.ticker ?? "UNKNOWN"}
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-slop-danger/15 text-slop-danger border border-slop-danger/30">
              SLOP
            </span>
            {isPump && (
              <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-slop-warn/10 text-slop-warn border border-slop-warn/30">
                pump.fun
              </span>
            )}
          </div>
          {token.name && (
            <div className="text-sm text-slop-muted mt-1 truncate">{token.name}</div>
          )}
        </div>
        <time className="font-mono text-[10px] text-slop-muted whitespace-nowrap">
          {token.flaggedAt}
        </time>
      </div>

      <button
        onClick={handleCopy}
        title="Click to copy full CA"
        className="mt-4 w-full text-left font-mono text-xs bg-slop-bg border border-slop-border rounded-lg px-3 py-2.5 flex items-center justify-between gap-2 hover:border-slop-accent/40 transition-colors"
      >
        <span className="truncate">{shortenCA(token.ca, 10, 10)}</span>
        <span
          className={`text-[10px] uppercase tracking-wider shrink-0 ${
            copied ? "text-slop-accent" : "text-slop-muted"
          }`}
        >
          {copied ? "Copied" : "Copy"}
        </span>
      </button>

      <p className="mt-3 text-sm leading-relaxed text-gray-300">{token.reason}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <ExternalLink href={solscanUrl(token.ca)} label="Solscan" />
        <ExternalLink href={birdeyeUrl(token.ca)} label="Birdeye" />
        <ExternalLink href={dexscreenerUrl(token.ca)} label="DexScreener" />
        {isPump && <ExternalLink href={pumpFunUrl(token.ca)} label="pump.fun" />}
      </div>

      {token.source && (
        <div className="mt-3 text-[10px] font-mono uppercase tracking-wider text-slop-muted">
          Source: {token.source}
        </div>
      )}
    </article>
  );
}

function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="px-2.5 py-1 rounded font-mono text-[11px] uppercase tracking-wider bg-slop-bg border border-slop-border text-gray-300 hover:border-slop-accent hover:text-slop-accent transition-colors"
    >
      {label} ↗
    </a>
  );
}
