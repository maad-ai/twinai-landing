import Link from 'next/link';

/**
 * App Store / Google Play badges (official style, inline SVG — no asset downloads).
 * Both link to /coming-soon until the mobile apps ship.
 */
export function StoreBadges({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {/* App Store */}
      <Link
        href="/coming-soon"
        aria-label="Download on the App Store — coming soon"
        className="inline-flex items-center gap-2.5 h-[52px] px-4 rounded-xl bg-black text-white border border-black hover:bg-[#1a1a1a] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7]"
      >
        <svg viewBox="0 0 384 512" className="w-6 h-6 fill-white flex-shrink-0" aria-hidden="true">
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
        </svg>
        <span className="text-left leading-tight">
          <span className="block text-[10px] opacity-80">Download on the</span>
          <span className="block text-[17px] font-600 -mt-0.5">App Store</span>
        </span>
      </Link>

      {/* Google Play */}
      <Link
        href="/coming-soon"
        aria-label="Get it on Google Play — coming soon"
        className="inline-flex items-center gap-2.5 h-[52px] px-4 rounded-xl bg-black text-white border border-black hover:bg-[#1a1a1a] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7]"
      >
        <svg viewBox="0 0 512 512" className="w-6 h-6 flex-shrink-0" aria-hidden="true">
          <path fill="#EA4335" d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" />
          <path fill="#FBBC04" d="m472.2 225.6-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z" />
          <path fill="#34A853" d="m104.6 499 280.8-161.2-60.1-60.1L104.6 499z" />
          <path fill="#4285F4" d="M325.3 234.3 104.6 13 47 0l278.3 278.3 0-44z" opacity="0" />
        </svg>
        <span className="text-left leading-tight">
          <span className="block text-[10px] uppercase opacity-80">Get it on</span>
          <span className="block text-[17px] font-600 -mt-0.5">Google Play</span>
        </span>
      </Link>
    </div>
  );
}
