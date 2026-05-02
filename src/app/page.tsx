"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TokenCard } from "@/components/TokenCard";
import { TOKENS } from "@/data/tokens";

export default function Home() {
  const [page, setPage] = useState(0);
  const PAGE_SIZE = 9;
  const pageCount = Math.ceil(TOKENS.length / PAGE_SIZE);
  const currentPageTokens = TOKENS.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b-4 border-double border-white bg-black">
          <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
            <h1 className="font-sans text-6xl sm:text-7xl leading-tight tracking-normal text-white font-bold">
              NIGSLOP<br />
              TOKEN RUGS<br />
              DETECTED.
            </h1>

            <p className="mt-8 max-w-2xl font-sans text-lg text-white leading-relaxed">
              An open-source registry for NIGSLOP tokens drained by insiders, snipers, and NIGSLOP devs. 
              Check before you ape, anon.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#registry"
                className="px-6 py-3 bg-white text-black font-semibold text-base tracking-wide border border-white hover:bg-gray-100 transition-colors"
              >
                SEE THE NIGSLOP →
              </a>
              <a
                href="#submit"
                className="px-6 py-3 bg-transparent text-white font-semibold text-base tracking-wide border-2 border-white hover:bg-white hover:text-black transition-colors"
              >
                REPORT RUG
              </a>
              <a
                href="https://github.com/6figpsolseeker/degenslop"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-transparent text-white font-semibold text-base tracking-wide border-2 border-white hover:bg-white hover:text-black transition-colors"
              >
                OPEN SOURCE ↗
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-bold text-white">{TOKENS.length.toString().padStart(3, "0")}</div>
                <div className="text-sm text-gray-300 mt-2">FLAGGED</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white">SOL</div>
                <div className="text-sm text-gray-300 mt-2">CHAIN</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white">MIT</div>
                <div className="text-sm text-gray-300 mt-2">LICENSE</div>
              </div>
            </div>
          </div>
        </section>

        {/* Registry */}
        <section id="registry" className="relative mx-auto max-w-6xl px-4 py-20">
          <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
            <div>
              <h2 className="legible font-bangers text-5xl sm:text-6xl text-slop-gold tracking-wider drop-shadow-[3px_3px_0_#b91d1d]">
                <span className="scribble">THE SLOP PILE</span>
              </h2>
              <p className="legible-soft font-marker text-lg text-slop-cream mt-3 -rotate-1">
                every token below = certified NIGSLOP. receipts attached.
              </p>
            </div>
            <div className="font-bangers text-2xl text-slop-gold rotate-3 border-4 border-slop-gold px-3 py-1 shadow-[3px_3px_0_#b91d1d] bg-slop-bronze">
              {TOKENS.length} entries
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 pt-2">
            {currentPageTokens.map((t) => (
              <TokenCard key={t.ca} token={t} />
            ))}
          </div>

          {pageCount > 1 && (
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={() => setPage((currentPage) => Math.max(currentPage - 1, 0))}
                disabled={page === 0}
                className="inline-flex items-center justify-center rounded border-4 border-slop-ink bg-slop-gold px-6 py-3 text-slop-ink font-bangers text-lg tracking-wider shadow-[5px_5px_0_#b91d1d] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slop-ember transition-colors"
              >
                ← Previous
              </button>

              <div className="font-bangers text-lg text-slop-cream">
                Page {page + 1} of {pageCount}
              </div>

              <button
                type="button"
                onClick={() => setPage((currentPage) => Math.min(currentPage + 1, pageCount - 1))}
                disabled={page === pageCount - 1}
                className="inline-flex items-center justify-center rounded border-4 border-slop-ink bg-slop-crimson px-6 py-3 text-slop-cream tracking-wider shadow-[5px_5px_0_#ff6a00] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slop-gold transition-colors"
              >
                Next →
              </button>
            </div>
          )}
        </section>

        {/* Submit */}
        <section
          id="submit"
          className="relative mx-auto max-w-6xl px-4 py-20 border-t-4 border-double border-slop-gold"
        >
          <h2 className="legible font-bangers text-5xl sm:text-6xl text-slop-ember tracking-wider drop-shadow-[3px_3px_0_#b91d1d]">
            <span className="scribble scribble-yellow">FOUND A RUG?</span>
          </h2>
          <p className="legible-soft mt-6 font-marker text-lg text-slop-cream max-w-2xl leading-snug -rotate-1">
            crack open a github issue. drop the contract address. paste the
            evidence (solscan, birdeye, screenshot of the devs discord lies,
            whatever). we will throw it on the pile.
          </p>
          <a
            href="https://github.com/6figpsolseeker/degenslop/issues/new"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 px-6 py-3 bg-slop-gold text-slop-ink font-bangers text-2xl tracking-wider border-4 border-slop-ink shadow-[5px_5px_0_#b91d1d] -rotate-2 hover:rotate-0 transition-transform"
          >
            OPEN AN ISSUE ↗
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Stat({
  label,
  value,
  tilt,
  color,
}: {
  label: string;
  value: string;
  tilt: string;
  color: string;
}) {
  return (
    <div
      className={`${color} p-3 border-4 border-slop-ink shadow-[4px_4px_0_#b91d1d] ${tilt}`}
    >
      <div className="font-marker text-[12px] tracking-wide opacity-90">
        {label}
      </div>
      <div className="font-bangers text-3xl tracking-wider">{value}</div>
    </div>
  );
}
