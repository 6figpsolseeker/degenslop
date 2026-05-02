export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white bg-black">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 sm:grid-cols-3">
        <div>
          <div className="font-sans text-3xl tracking-normal text-white font-bold">
            NIGSLOP
          </div>
          <p className="mt-3 font-sans text-base text-white leading-relaxed">
            Community wall-of-shame for NIGSLOP devs and Solana NIGSLOP tokens. 100% open source, 0% bagholder cope.
          </p>
        </div>

        <div>
          <div className="font-sans text-xl tracking-normal text-white font-bold mb-3">
            OPEN SOURCE
          </div>
          <ul className="space-y-2 font-sans text-base">
            <li>
              <a
                href="https://github.com/6figpsolseeker/degenslop"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                GitHub repo ↗
              </a>
            </li>
            <li>
              <a
                href="https://github.com/6figpsolseeker/degenslop/blob/main/LICENSE"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                MIT license ↗
              </a>
            </li>
            <li>
              <a
                href="https://github.com/6figpsolseeker/degenslop/issues/new"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                submit a NIGSLOP ↗
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-sans text-xl tracking-normal text-white font-bold mb-3">
            FINE PRINT
          </div>
          <p className="font-sans text-sm text-gray-300 leading-relaxed">
            Informational only. Listings = community signal, not legal accusation. DYOR or get slopped. Not financial advice.
          </p>
        </div>
      </div>

      <div className="border-t border-white">
        <div className="mx-auto max-w-6xl px-4 py-4 font-sans text-sm tracking-normal text-white text-center">
          Built on Solana ★ 100% open source ★ No token paid for inclusion ★ Stay slopless
        </div>
      </div>
    </footer>
  );
}
