import { WalletButton } from "./WalletButton";

export function Header() {
  return (
    <header className="border-b border-slop-border bg-slop-bg/80 backdrop-blur sticky top-0 z-30">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-slop-accent text-slop-bg grid place-items-center font-mono font-black text-lg">
            D
          </div>
          <div>
            <div className="font-mono font-bold text-base leading-none">
              DEGENSLOP
            </div>
            <div className="font-mono text-[10px] text-slop-muted uppercase tracking-widest mt-1">
              Detector // v0.1
            </div>
          </div>
        </div>
        <nav className="hidden sm:flex items-center gap-6 font-mono text-xs uppercase tracking-wider text-slop-muted">
          <a href="#registry" className="hover:text-slop-accent transition-colors">
            Registry
          </a>
          <a href="#submit" className="hover:text-slop-accent transition-colors">
            Submit
          </a>
          <a
            href="https://github.com/6figpsolseeker/degenslop"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slop-accent transition-colors"
          >
            GitHub
          </a>
        </nav>
        <WalletButton />
      </div>
    </header>
  );
}
