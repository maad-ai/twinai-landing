export function Footer() {
  return (
    <footer className="bg-[#0F0F23] py-12 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display font-800 text-xl text-white tracking-tight mb-1">
              twin<span className="gradient-text">.ai</span>
            </p>
            <p className="text-xs text-[#94A3B8]">Your Voice. Their World. 24/7.</p>
          </div>

          <nav className="flex items-center gap-6 text-sm text-[#94A3B8]" aria-label="Footer navigation">
            <a href="#" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm">
              Terms
            </a>
            <a href="mailto:hello@twin.ai" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm">
              Contact
            </a>
          </nav>

          <p className="text-sm text-[#94A3B8]">&copy; 2026 Twin AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
