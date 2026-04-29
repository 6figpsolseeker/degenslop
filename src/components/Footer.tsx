export function Footer() {
  return (
    <footer className="relative mt-24 border-t-4 border-dashed border-slop-stamp bg-white/85">
      {/* tape */}
      <span className="tape" style={{ top: -12, left: "30%", transform: "rotate(4deg)" }} />
      <span className="tape" style={{ top: -12, right: "10%", transform: "rotate(-7deg)", width: 60 }} />

      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 sm:grid-cols-3">
        <div className="-rotate-1">
          <div className="font-bangers text-3xl tracking-wider text-black drop-shadow-[2px_2px_0_#ff2d6f]">
            DEGEN<span className="text-black">SLOP</span>
          </div>
          <p className="mt-3 font-marker text-base text-black leading-snug">
            community wall-of-shame for solana rug tokens. 100% open source,
            0% bagholder cope.
          </p>
        </div>

        <div className="rotate-1">
          <div className="font-bangers text-xl tracking-wider text-black mb-3 scribble">
            OPEN SOURCE
          </div>
          <ul className="space-y-2 font-marker text-base">
            <li>
              <a
                href="https://github.com/6figpsolseeker/degenslop"
                target="_blank"
                rel="noreferrer"
                className="text-black hover:underline transition-all"
              >
                github repo ↗
              </a>
            </li>
            <li>
              <a
                href="https://github.com/6figpsolseeker/degenslop/blob/main/LICENSE"
                target="_blank"
                rel="noreferrer"
                className="text-black hover:underline transition-all"
              >
                MIT license ↗
              </a>
            </li>
            <li>
              <a
                href="https://github.com/6figpsolseeker/degenslop/issues/new"
                target="_blank"
                rel="noreferrer"
                className="text-black hover:underline transition-all"
              >
                submit a slop ↗
              </a>
            </li>
          </ul>
        </div>

        <div className="-rotate-1">
          <div className="font-bangers text-xl tracking-wider text-black mb-3 scribble scribble-pink">
            FINE PRINT
          </div>
          <p className="font-marker text-sm text-black leading-snug">
            informational only. listings = community signal, not legal accusation.
            DYOR or get slopped. not financial advice (obviously).
          </p>
        </div>
      </div>

      <div className="border-t-2 border-dashed border-slop-warn">
        <div className="mx-auto max-w-6xl px-4 py-4 font-bangers text-sm tracking-wider text-black text-center">
          built on solana ★ 100% open source ★ no token paid for inclusion ★
          stay slopless
        </div>
      </div>
    </footer>
  );
}
