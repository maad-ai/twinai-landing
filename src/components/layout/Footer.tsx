export function Footer() {
  return (
    <footer className="bg-[#0F0F23] py-12 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Twiinn AI" width={32} height={38} className="w-8 h-auto mb-2" />
            <p className="text-xs text-[#94A3B8]">Your Voice. Their World. 24/7.</p>
          </div>

          <nav className="flex items-center gap-6 text-sm text-[#94A3B8]" aria-label="Footer navigation">
            <a href="/privacy" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm">
              Terms
            </a>
            <a href="/contact" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm">
              Contact
            </a>
          </nav>

          <p className="text-sm text-[#94A3B8]">&copy; 2026 Twiinn AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
