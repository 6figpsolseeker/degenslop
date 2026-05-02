export function Header() {
  return (
    <header className="relative border-b border-white bg-black sticky top-0 z-30">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4 flex-wrap">
        <a href="/" className="flex items-center gap-3 group">
          <div>
            <div className="font-sans text-2xl sm:text-3xl text-white font-bold leading-none tracking-normal">
              #NIGSLOP
            </div>
            <div className="font-sans text-[11px] text-gray-400 mt-1">
              detector ~ v0.1
            </div>
          </div>
        </a>

        <nav className="hidden sm:flex items-center gap-8 font-sans text-sm tracking-normal">
          <a href="/suspected-slop" className="text-white hover:text-gray-300 transition-colors">
            SUSPECTED SLOP
          </a>
          <a href="#registry" className="text-white hover:text-gray-300 transition-colors">
            REGISTRY
          </a>
          <a href="#submit" className="text-white hover:text-gray-300 transition-colors">
            SUBMIT
          </a>
          <a
            href="https://github.com/6figpsolseeker/degenslop"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            GITHUB
          </a>
        </nav>
      </div>
    </header>
  );
}
