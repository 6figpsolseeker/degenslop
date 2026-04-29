import { WalletButton } from "./WalletButton";

export function Header() {
  return (
    <header className="relative border-b-4 border-dashed border-slop-warn bg-slop-bg/85 backdrop-blur sticky top-0 z-30">
      {/* tape strips */}
      <span className="tape" style={{ top: -10, left: "8%", transform: "rotate(-6deg)" }} />
      <span className="tape" style={{ top: -10, right: "12%", transform: "rotate(8deg)", width: 60 }} />

      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4 flex-wrap">
        <a href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="h-12 w-12 grid place-items-center bg-slop-puke text-slop-bg font-bangers text-3xl border-4 border-slop-bg shadow-[3px_3px_0_#ff2d6f] -rotate-6 group-hover:rotate-0 transition-transform">
              D
            </div>
            <span className="absolute -top-2 -right-2 text-slop-stamp font-bangers text-xs rotate-12">★</span>
          </div>
          <div>
            <div className="font-bangers text-2xl sm:text-3xl text-slop-warn leading-none tracking-wider drop-shadow-[2px_2px_0_#ff2d6f]">
              DEGEN<span className="text-slop-puke">SLOP</span>
            </div>
            <div className="font-marker text-[11px] text-slop-aqua mt-1 -rotate-1">
              detector ~ v0.1
            </div>
          </div>
        </a>

        <nav className="hidden sm:flex items-center gap-5 font-bangers text-base tracking-wider">
          <a href="#registry" className="text-slop-puke hover:text-slop-warn rotate-2 hover:rotate-0 transition-transform inline-block">
            REGISTRY
          </a>
          <a href="#submit" className="text-slop-danger hover:text-slop-warn -rotate-2 hover:rotate-0 transition-transform inline-block">
            SUBMIT
          </a>
          <a
            href="https://github.com/6figpsolseeker/degenslop"
            target="_blank"
            rel="noreferrer"
            className="text-slop-aqua hover:text-slop-warn rotate-1 hover:rotate-0 transition-transform inline-block"
          >
            GITHUB
          </a>
        </nav>

        <WalletButton />
      </div>
    </header>
  );
}
