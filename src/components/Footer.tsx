export function Footer() {
  return (
    <footer className="relative mt-24 border-t-4 border-double border-slop-gold bg-slop-ink/55 backdrop-blur-sm">
      {/* tape */}
      <span className="tape" style={{ top: -12, left: "30%", transform: "rotate(4deg)" }} />
      <span className="tape" style={{ top: -12, right: "10%", transform: "rotate(-7deg)", width: 60 }} />

      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 sm:grid-cols-3">
        <div className="-rotate-1">
          <div className="font-bangers text-3xl tracking-wider text-slop-gold drop-shadow-[2px_2px_0_#b91d1d]">
            NIG<span className="text-slop-cream">SLOP</span>
          </div>
          <p className="mt-3 font-marker text-base text-slop-cream leading-snug">
            community wall-of-shame for NIGGER devs , solana NIGSLOP tokens. 100% open source,
            0% bagholder cope.
          </p>
        </div>

        <div className="rotate-1">
          <div className="font-bangers text-xl tracking-wider text-slop-gold mb-3 scribble">
            OPEN SOURCE
          </div>
          <ul className="space-y-2 font-marker text-base">
            <li>
              <a
                href="https://github.com/6figpsolseeker/degenslop"
                target="_blank"
                rel="noreferrer"
                className="text-slop-cream hover:text-slop-ember transition-colors"
              >
                github repo ↗
              </a>
            </li>
            <li>
              <a
                href="https://github.com/6figpsolseeker/degenslop/blob/main/LICENSE"
                target="_blank"
                rel="noreferrer"
                className="text-slop-cream hover:text-slop-ember transition-colors"
              >
                MIT license ↗
              </a>
            </li>
            <li>
              <a
                href="https://github.com/6figpsolseeker/degenslop/issues/new"
                target="_blank"
                rel="noreferrer"
                className="text-slop-cream hover:text-slop-ember transition-colors"
              >
                submit a NIGSLOP ↗
              </a>
            </li>
          </ul>
        </div>

        <div className="-rotate-1">
          <div className="font-bangers text-xl tracking-wider text-slop-crimson mb-3 scribble scribble-pink">
            FINE PRINT
          </div>
          <p className="font-marker text-sm text-slop-cream/85 leading-snug">
            informational only. listings = community signal, not legal accusation.
            DYOR or get slopped. not financial advice (obviously).
          </p>
        </div>
      </div>

      <div className="border-t-2 border-dashed border-slop-copper">
        <div className="mx-auto max-w-6xl px-4 py-4 font-bangers text-sm tracking-wider text-slop-gold text-center">
          built on solana ★ 100% open source ★ no token paid for inclusion ★
          stay slopless
        </div>
      </div>
    </footer>
  );
}
