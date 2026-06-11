import Link from 'next/link';

/* Official Google Play logo — correct colors via gradients (blue left,
   green top, yellow tip, red bottom). Inline SVG, no downloaded assets. */
function PlayLogo({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="gp-blue" x1="22" y1="2" x2="2" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#00A0FF" />
          <stop offset="1" stopColor="#00E3FF" />
        </linearGradient>
        <linearGradient id="gp-yellow" x1="48" y1="24" x2="32" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFE000" />
          <stop offset="1" stopColor="#FF9C00" />
        </linearGradient>
        <linearGradient id="gp-red" x1="40" y1="28" x2="8" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FF3A44" />
          <stop offset="1" stopColor="#C31162" />
        </linearGradient>
        <linearGradient id="gp-green" x1="8" y1="-2" x2="40" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#32A071" />
          <stop offset="1" stopColor="#00F076" />
        </linearGradient>
      </defs>
      <path
        fill="url(#gp-blue)"
        d="M10.44 1.29c-.55.58-.87 1.48-.87 2.65v40.12c0 1.17.32 2.07.87 2.65l.14.14L33.07 24.35v-.7L10.58 1.15l-.14.14z"
      />
      <path
        fill="url(#gp-green)"
        d="M40.7 16.48 14.19 1.18c-1.55-.88-2.92-.77-3.75.11L33.07 24l7.63-7.52z"
      />
      <path
        fill="url(#gp-yellow)"
        d="m40.54 31.85-7.47-7.5v-.7l7.47-7.5.17.1 8.85 5.03c2.53 1.43 2.53 3.78 0 5.22l-8.85 5.02-.17.33z"
      />
      <path
        fill="url(#gp-red)"
        d="M40.7 31.52 33.07 24 10.44 46.71c.83.88 2.2.99 3.75.11L40.7 31.52z"
      />
    </svg>
  );
}

function AppleLogo({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 384 512" className={`${className} fill-white`} aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

interface StoreBadgesProps {
  className?: string;
  /** 'md' for hero/sections, 'sm' for the header */
  size?: 'md' | 'sm';
  /** renders non-clickable, greyed badges (coming-soon page) */
  disabled?: boolean;
}

/**
 * App Store / Google Play badges (official style). Link to /coming-soon
 * until the mobile apps ship.
 */
export function StoreBadges({ className = '', size = 'md', disabled = false }: StoreBadgesProps) {
  const sm = size === 'sm';
  const badgeClass = `inline-flex items-center rounded-xl bg-black text-white border border-black transition-colors duration-200 ${
    sm ? 'gap-2 h-9 px-3' : 'gap-2.5 h-[52px] px-4'
  } ${
    disabled
      ? 'opacity-40 grayscale select-none pointer-events-none'
      : 'hover:bg-[#1a1a1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7]'
  }`;
  const logoClass = sm ? 'w-4 h-4 flex-shrink-0' : 'w-6 h-6 flex-shrink-0';

  const apple = (
    <>
      <AppleLogo className={logoClass} />
      {sm ? (
        <span className="text-[13px] font-600">App Store</span>
      ) : (
        <span className="text-left leading-tight">
          <span className="block text-[10px] opacity-80">Download on the</span>
          <span className="block text-[17px] font-600 -mt-0.5">App Store</span>
        </span>
      )}
    </>
  );

  const play = (
    <>
      <PlayLogo className={logoClass} />
      {sm ? (
        <span className="text-[13px] font-600">Google Play</span>
      ) : (
        <span className="text-left leading-tight">
          <span className="block text-[10px] uppercase opacity-80">Get it on</span>
          <span className="block text-[17px] font-600 -mt-0.5">Google Play</span>
        </span>
      )}
    </>
  );

  return (
    <div className={`flex flex-wrap items-center gap-3 ${sm ? 'gap-2' : ''} ${className}`}>
      {disabled ? (
        <>
          <span className={badgeClass} aria-hidden="true">{apple}</span>
          <span className={badgeClass} aria-hidden="true">{play}</span>
        </>
      ) : (
        <>
          <Link href="/coming-soon" aria-label="Download on the App Store — coming soon" className={badgeClass}>
            {apple}
          </Link>
          <Link href="/coming-soon" aria-label="Get it on Google Play — coming soon" className={badgeClass}>
            {play}
          </Link>
        </>
      )}
    </div>
  );
}
