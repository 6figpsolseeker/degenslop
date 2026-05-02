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
          <div className="relative mx-auto max-w-6xl px-4 pt-8 pb-32 sm:pt-10">
            <h1 className="font-sans text-6xl sm:text-7xl leading-tight tracking-normal text-white font-bold">
              NIGSLOP<br />
              TOKEN RUGS<br />
              DETECTED.
            </h1>

            <div className="mt-24 flex flex-wrap gap-4">
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

            <div className="mt-14 flex flex-wrap gap-8">
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

        {/* Definition cutout */}
        <section className="relative bg-black px-4 py-24">
          <div className="mx-auto max-w-6xl rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-sm">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-6">
                <h2 className="text-5xl sm:text-6xl font-serif text-white font-semibold tracking-tight">
                  NIGSLOP
                </h2>
                <p className="text-lg text-gray-400 italic">/noun/</p>
                <p className="text-xl sm:text-2xl text-white leading-relaxed">
                  A term used to describe crypto KOLs, coins, or projects built on hype,
                  narratives, or fake empty promises rather than genuine value.
                </p>
                <p className="text-base text-gray-400 italic">
                  Example: The chart looked exciting, but the research exposed it as pure NIGSLOP.
                </p>
              </div>

              <div className="rounded-[32px] border border-white/15 overflow-hidden bg-black min-h-[360px]">
                <img
                  src="/nigslop-definition.png"
                  alt="Nigslop definition"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Registry */}
        <section id="registry" className="relative bg-black px-4 py-20 border-t border-white border-b border-white">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10">
              <h2 className="font-sans text-5xl sm:text-6xl text-white font-bold tracking-normal">
                THE SLOP PILE
              </h2>
              <p className="font-sans text-lg text-white mt-3 leading-relaxed">
                Every token below = certified NIGSLOP. Receipts attached.
              </p>
            </div>
            <div className="font-sans text-lg text-white font-semibold mb-10">
              {TOKENS.length} entries
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
                  className="px-6 py-3 bg-white text-black font-semibold border border-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
                >
                  ← Previous
                </button>

                <div className="font-sans text-lg text-white font-semibold">
                  Page {page + 1} of {pageCount}
                </div>

                <button
                  type="button"
                  onClick={() => setPage((currentPage) => Math.min(currentPage + 1, pageCount - 1))}
                  disabled={page === pageCount - 1}
                  className="px-6 py-3 bg-white text-black font-semibold border border-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Submit */}
        <section
          id="submit"
          className="relative bg-black px-4 py-20 border-t border-white"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="font-sans text-5xl sm:text-6xl text-white font-bold tracking-normal">
              FOUND A RUG?
            </h2>
            <p className="mt-6 font-sans text-lg text-white max-w-2xl leading-relaxed">
              Open a GitHub issue. Drop the contract address. Paste the evidence (Solscan, Birdeye, screenshot of the dev&apos;s Discord lies, whatever). We will throw it on the pile.
            </p>
            <a
              href="https://github.com/6figpsolseeker/degenslop/issues/new"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8 px-6 py-3 bg-white text-black font-semibold border border-white hover:bg-gray-100 transition-colors"
            >
              OPEN AN ISSUE ↗
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
