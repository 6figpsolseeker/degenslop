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
        <section className="relative overflow-hidden border-b-4 border-dashed border-slop-puke">
          {/* big splatter background */}
          <svg
            aria-hidden
            className="absolute -top-20 -right-32 w-[600px] opacity-25 pointer-events-none"
            viewBox="0 0 200 200"
            fill="#ff2d6f"
          >
            <path d="M40 100 Q 30 40 90 50 Q 110 20 140 60 Q 180 50 170 100 Q 200 130 150 150 Q 140 190 100 160 Q 50 180 60 140 Q 10 130 40 100 Z" />
          </svg>
          <svg
            aria-hidden
            className="absolute bottom-0 -left-20 w-[400px] opacity-20 pointer-events-none"
            viewBox="0 0 200 200"
            fill="#a3ff12"
          >
            <path d="M50 90 Q 40 50 80 60 Q 100 30 130 70 Q 170 60 160 100 Q 180 130 140 140 Q 130 180 90 150 Q 60 170 70 130 Q 30 120 50 90 Z" />
          </svg>

          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slop-stamp text-black font-bangers tracking-wider text-sm rotate-3 mb-6 border-2 border-black shadow-[3px_3px_0_#ffd029]">
              <span className="h-2 w-2 rounded-full bg-black animate-pulse-slow" />
              SLOP DETECTED
            </div>

            <h1 className="font-bangers text-6xl sm:text-8xl leading-none tracking-wider text-black drop-shadow-[4px_4px_0_#ff2d6f]">
              <span className="inline-block -rotate-2">SOLANA</span>{" "}
              <span className="inline-block rotate-1 text-black">RUGS</span>
              <br />
              <span className="inline-block -rotate-1 text-black">GET</span>{" "}
              <span className="scribble inline-block rotate-2 text-black">SLOPPED.</span>
            </h1>

            <p className="mt-10 max-w-2xl font-marker text-xl text-black leading-snug -rotate-1">
              <span className="text-black">DegenSlop</span> = an open-source
              wall-of-shame for Solana coins drained by{" "}
              <span className="text-black">insiders</span>,{" "}
              <span className="text-black">snipers</span>, and{" "}
              <span className="text-black underline decoration-wavy decoration-slop-stamp">
                malicious devs
              </span>
              . check before you ape, anon.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#registry"
                className="px-6 py-3 bg-slop-puke text-black font-bangers text-xl tracking-wider border-4 border-black shadow-[5px_5px_0_#ff2d6f] -rotate-2 hover:rotate-0 transition-transform"
              >
                SEE THE SLOP →
              </a>
              <a
                href="#submit"
                className="px-6 py-3 bg-slop-stamp text-black font-bangers text-xl tracking-wider border-4 border-black shadow-[5px_5px_0_#a3ff12] rotate-2 hover:rotate-0 transition-transform"
              >
                ⚠ REPORT RUG
              </a>
              <a
                href="https://github.com/6figpsolseeker/degenslop"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-slop-aqua text-black font-bangers text-xl tracking-wider border-4 border-black shadow-[5px_5px_0_#ffd029] -rotate-1 hover:rotate-0 transition-transform"
              >
                OPEN SOURCE ↗
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 max-w-md gap-3">
              <Stat label="flagged" value={TOKENS.length.toString().padStart(3, "0")} tilt="-rotate-3" color="bg-slop-puke" />
              <Stat label="chain" value="SOL" tilt="rotate-2" color="bg-slop-warn" />
              <Stat label="lic." value="MIT" tilt="-rotate-1" color="bg-slop-aqua" />
            </div>
          </div>
        </section>

        {/* Registry */}
        <section id="registry" className="relative mx-auto max-w-6xl px-4 py-20">
          <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
            <div>
              <h2 className="font-bangers text-5xl sm:text-6xl text-black tracking-wider drop-shadow-[3px_3px_0_#ff2d6f]">
                <span className="scribble scribble-pink">THE SLOP PILE</span>
              </h2>
              <p className="font-marker text-lg text-black mt-3 -rotate-1">
                every token below = certified slop. receipts attached.
              </p>
            </div>
            <div className="font-bangers text-2xl text-black rotate-3 border-4 border-black px-3 py-1 shadow-[3px_3px_0_#ff2d6f] bg-white">
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
          className="relative mx-auto max-w-6xl px-4 py-20 border-t-4 border-dashed border-slop-warn"
        >
          <h2 className="font-bangers text-5xl sm:text-6xl text-black tracking-wider drop-shadow-[3px_3px_0_#a3ff12]">
            <span className="scribble scribble-yellow">FOUND A RUG?</span>
          </h2>
          <p className="mt-6 font-marker text-lg text-black max-w-2xl leading-snug -rotate-1">
            crack open a github issue. drop the contract address. paste the
            evidence (solscan, birdeye, screenshot of the dev's discord lies,
            whatever). we'll throw it on the pile.
          </p>
          <a
            href="https://github.com/6figpsolseeker/degenslop/issues/new"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 px-6 py-3 bg-slop-warn text-black font-bangers text-2xl tracking-wider border-4 border-black shadow-[5px_5px_0_#ff2d6f] -rotate-2 hover:rotate-0 transition-transform"
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
      className={`${color} text-black p-3 border-4 border-black shadow-[4px_4px_0_#ff2d6f] ${tilt}`}
    >
      <div className="font-marker text-[12px] tracking-wide opacity-90">
        {label}
      </div>
      <div className="font-bangers text-3xl tracking-wider">{value}</div>
    </div>
  );
}
