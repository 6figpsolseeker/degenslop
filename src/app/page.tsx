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
        <section className="relative overflow-hidden border-b-4 border-double border-slop-gold">
          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slop-crimson text-slop-cream font-bangers tracking-wider text-sm rotate-3 mb-6 border-2 border-slop-gold shadow-[3px_3px_0_#ff6a00]">
              <span className="h-2 w-2 rounded-full bg-slop-ember animate-ember-flicker" />
              SLOP DETECTED
            </div>

            <h1 className="legible font-bangers text-6xl sm:text-8xl leading-none tracking-wider text-slop-gold drop-shadow-[4px_4px_0_#b91d1d]">
              <span className="inline-block -rotate-2">SOLANA</span>{" "}
              <span className="inline-block rotate-1 text-slop-cream">RUGS</span>
              <br />
              <span className="inline-block -rotate-1 text-slop-ember">GET</span>{" "}
              <span className="scribble inline-block rotate-2 text-slop-gold">SLOPPED.</span>
            </h1>

            <p className="legible-soft mt-10 max-w-2xl font-marker text-xl text-slop-cream leading-snug -rotate-1">
              <span className="text-slop-gold">DegenSlop</span> = an open-source
              wall-of-shame for Solana coins drained by{" "}
              <span className="text-slop-crimson">insiders</span>,{" "}
              <span className="text-slop-ember">snipers</span>, and{" "}
              <span className="text-slop-gold underline decoration-wavy decoration-slop-crimson">
                malicious devs
              </span>
              . check before you ape, anon.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#registry"
                className="px-6 py-3 bg-slop-gold text-slop-ink font-bangers text-xl tracking-wider border-4 border-slop-ink shadow-[5px_5px_0_#b91d1d] -rotate-2 hover:rotate-0 transition-transform"
              >
                SEE THE SLOP →
              </a>
              <a
                href="#submit"
                className="px-6 py-3 bg-slop-crimson text-slop-cream font-bangers text-xl tracking-wider border-4 border-slop-gold shadow-[5px_5px_0_#ff6a00] rotate-2 hover:rotate-0 transition-transform"
              >
                ⚔ REPORT RUG
              </a>
              <a
                href="https://github.com/6figpsolseeker/degenslop"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-slop-forge text-slop-gold font-bangers text-xl tracking-wider border-4 border-slop-gold shadow-[5px_5px_0_#b91d1d] -rotate-1 hover:rotate-0 transition-transform"
              >
                OPEN SOURCE ↗
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 max-w-md gap-3">
              <Stat label="flagged" value={TOKENS.length.toString().padStart(3, "0")} tilt="-rotate-3" color="bg-slop-gold text-slop-ink" />
              <Stat label="chain" value="SOL" tilt="rotate-2" color="bg-slop-crimson text-slop-cream" />
              <Stat label="lic." value="MIT" tilt="-rotate-1" color="bg-slop-forge text-slop-gold" />
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
                every token below = certified slop. receipts attached.
              </p>
            </div>
            <div className="font-bangers text-2xl text-slop-gold rotate-3 border-4 border-slop-gold px-3 py-1 shadow-[3px_3px_0_#b91d1d] bg-slop-bronze">
              {TOKENS.length} entries
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 pt-2">
            {TOKENS.map((t) => (
              <TokenCard key={t.ca} token={t} />
            ))}
          </div>
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
            evidence (solscan, birdeye, screenshot of the dev's discord lies,
            whatever). we'll throw it on the pile.
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
