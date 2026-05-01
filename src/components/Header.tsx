export function Header() {
  return (
    <header className="relative border-b-4 border-double border-slop-gold bg-slop-ink/45 backdrop-blur-sm sticky top-0 z-30">
      {/* tape strips */}
      <span className="tape" style={{ top: -10, left: "8%", transform: "rotate(-6deg)" }} />
      <span className="tape" style={{ top: -10, right: "12%", transform: "rotate(8deg)", width: 60 }} />

      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4 flex-wrap">
        <a href="/" className="flex items-center gap-3 group">
          <div>
            <div className="font-bangers text-2xl sm:text-3xl text-slop-gold leading-none tracking-wider drop-shadow-[2px_2px_0_#b91d1d]">
              #NIG<span className="text-slop-cream">SLOP</span>
            </div>
            <div className="font-marker text-[11px] text-slop-copper mt-1 -rotate-1">
              detector ~ v0.1
            </div>
          </div>
        </a>

        <nav className="hidden sm:flex items-center gap-5 font-bangers text-base tracking-wider">
          <a href="#registry" className="text-slop-cream hover:text-slop-gold rotate-2 hover:rotate-0 transition-all inline-block">
            REGISTRY
          </a>
          <a href="#submit" className="text-slop-cream hover:text-slop-ember -rotate-2 hover:rotate-0 transition-all inline-block">
            SUBMIT
          </a>
          <a
            href="https://github.com/6figpsolseeker/degenslop"
            target="_blank"
            rel="noreferrer"
            className="text-slop-cream hover:text-slop-gold rotate-1 hover:rotate-0 transition-all inline-block"
          >
            GITHUB
          </a>
        </nav>
      </div>
    </header>
  );
}
