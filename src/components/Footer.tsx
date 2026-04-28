export function Footer() {
  return (
    <footer className="mt-24 border-t border-slop-border bg-slop-bg/60">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 sm:grid-cols-3 text-sm">
        <div>
          <div className="font-mono font-bold text-base text-slop-accent">
            DEGENSLOP
          </div>
          <p className="mt-2 text-slop-muted text-xs leading-relaxed">
            A community-maintained registry of Solana rug tokens. 100% open source.
          </p>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-slop-muted mb-2">
            Open Source
          </div>
          <ul className="space-y-1.5">
            <li>
              <a
                href="https://github.com/6figpsolseeker/degenslop"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slop-accent transition-colors"
              >
                GitHub repository ↗
              </a>
            </li>
            <li>
              <a
                href="https://github.com/6figpsolseeker/degenslop/blob/main/LICENSE"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slop-accent transition-colors"
              >
                MIT License ↗
              </a>
            </li>
            <li>
              <a
                href="https://github.com/6figpsolseeker/degenslop/issues/new"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slop-accent transition-colors"
              >
                Submit a token ↗
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-slop-muted mb-2">
            Disclaimer
          </div>
          <p className="text-xs text-slop-muted leading-relaxed">
            Informational only. Listings reflect community reports. DYOR. Listing
            a token as SLOP is a community signal, not a legal accusation.
          </p>
        </div>
      </div>
      <div className="border-t border-slop-border">
        <div className="mx-auto max-w-6xl px-4 py-4 text-[10px] font-mono uppercase tracking-widest text-slop-muted text-center">
          Built on Solana // Open Source // No tokens were paid for inclusion
        </div>
      </div>
    </footer>
  );
}
