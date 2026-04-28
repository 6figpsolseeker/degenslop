import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TokenCard } from "@/components/TokenCard";
import { TOKENS } from "@/data/tokens";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slop-border">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slop-danger/40 bg-slop-danger/10 text-slop-danger font-mono text-[10px] uppercase tracking-widest mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-slop-danger animate-pulse-slow" />
              Live Registry
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.05]">
              Solana rug tokens,
              <br />
              <span className="text-slop-accent">on blast.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-gray-400 leading-relaxed">
              <span className="text-gray-200 font-semibold">DegenSlop</span> is an
              open-source registry of Solana coins drained by insiders, snipers,
              and malicious devs. Check before you ape.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#registry"
                className="px-5 py-2.5 rounded-lg bg-slop-accent text-slop-bg font-mono font-bold text-sm uppercase tracking-wider hover:bg-[#b8ff3d] transition-colors"
              >
                View Registry →
              </a>
              <a
                href="https://github.com/6figpsolseeker/degenslop"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-lg border border-slop-border text-gray-200 font-mono font-bold text-sm uppercase tracking-wider hover:border-slop-accent hover:text-slop-accent transition-colors"
              >
                Open Source ↗
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 max-w-md gap-4">
              <Stat label="Flagged" value={TOKENS.length.toString().padStart(3, "0")} />
              <Stat label="Chain" value="SOL" />
              <Stat label="License" value="MIT" />
            </div>
          </div>
        </section>

        {/* Registry */}
        <section id="registry" className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black">The Registry</h2>
              <p className="text-slop-muted text-sm mt-1">
                Every token below has been flagged. Receipts in each card.
              </p>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-slop-muted">
              {TOKENS.length} entries
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TOKENS.map((t) => (
              <TokenCard key={t.ca} token={t} />
            ))}
          </div>
        </section>

        {/* Submit */}
        <section
          id="submit"
          className="mx-auto max-w-6xl px-4 py-16 border-t border-slop-border"
        >
          <h2 className="text-2xl sm:text-3xl font-black">Submit a SLOP</h2>
          <p className="mt-2 text-slop-muted max-w-2xl">
            Found a rug? Open a GitHub issue with the contract address, evidence
            (Solscan / Birdeye links, screenshots), and a one-line summary of
            why it qualifies.
          </p>
          <a
            href="https://github.com/6figpsolseeker/degenslop/issues/new"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 px-5 py-2.5 rounded-lg bg-slop-accent text-slop-bg font-mono font-bold text-sm uppercase tracking-wider hover:bg-[#b8ff3d] transition-colors"
          >
            Open Issue on GitHub ↗
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slop-border bg-slop-panel p-4">
      <div className="font-mono text-[10px] uppercase tracking-widest text-slop-muted">
        {label}
      </div>
      <div className="mt-1 font-mono text-2xl font-black text-slop-accent">
        {value}
      </div>
    </div>
  );
}
