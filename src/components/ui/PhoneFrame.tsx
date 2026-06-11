import type { ReactNode } from 'react';

/**
 * Realistic iPhone frame (titanium edge, Dynamic Island, status bar,
 * side buttons, home indicator). Children render as the screen content.
 */
export function PhoneFrame({
  children,
  width = 'w-[300px] sm:w-[320px]',
}: {
  children: ReactNode;
  width?: string;
}) {
  return (
    <div className="relative">
      {/* Side buttons */}
      <div className="absolute -left-[2px] top-[110px] w-[3px] h-8 rounded-l bg-[#2A2A2E]" aria-hidden="true" />
      <div className="absolute -left-[2px] top-[160px] w-[3px] h-14 rounded-l bg-[#2A2A2E]" aria-hidden="true" />
      <div className="absolute -left-[2px] top-[224px] w-[3px] h-14 rounded-l bg-[#2A2A2E]" aria-hidden="true" />
      <div className="absolute -right-[2px] top-[180px] w-[3px] h-20 rounded-r bg-[#2A2A2E]" aria-hidden="true" />

      {/* Titanium frame */}
      <div
        className={`relative ${width} rounded-[3.2rem] p-[3px]`}
        style={{
          background: 'linear-gradient(145deg, #5a5a60, #2c2c30 40%, #444449 80%, #2c2c30)',
          boxShadow: '0 4px 8px rgba(15,15,35,0.06), 0 32px 64px -24px rgba(15,15,35,0.35)',
        }}
      >
        {/* Black bezel */}
        <div className="rounded-[3rem] bg-black p-[8px]">
          {/* Screen */}
          <div className="relative rounded-[2.5rem] overflow-hidden bg-white">
            {/* Dynamic Island */}
            <div
              className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[96px] h-[26px] bg-black rounded-full z-20"
              aria-hidden="true"
            />

            {/* Status bar */}
            <div className="flex items-center justify-between px-7 pt-3 pb-1 text-[#0F0F23]" aria-hidden="true">
              <span className="text-[13px] font-600 tracking-tight">9:41</span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 18 12" className="w-[17px] h-[11px] fill-[#0F0F23]">
                  <rect x="0" y="8" width="3" height="4" rx="0.8" />
                  <rect x="5" y="5.5" width="3" height="6.5" rx="0.8" />
                  <rect x="10" y="3" width="3" height="9" rx="0.8" />
                  <rect x="15" y="0" width="3" height="12" rx="0.8" />
                </svg>
                <svg viewBox="0 0 16 12" className="w-[15px] h-[11px] fill-[#0F0F23]">
                  <path d="M8 9.5a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4zM8 5.4c1.8 0 3.5.7 4.7 1.9l-1.6 1.6a4.5 4.5 0 0 0-6.2 0L3.3 7.3A6.6 6.6 0 0 1 8 5.4zM8 1.2c3 0 5.7 1.2 7.7 3.1L14 6A8.7 8.7 0 0 0 2 6L.3 4.3C2.3 2.4 5 1.2 8 1.2z" />
                </svg>
                <svg viewBox="0 0 25 12" className="w-[24px] h-[11px]">
                  <rect x="0.5" y="0.5" width="21" height="11" rx="3" fill="none" stroke="#0F0F23" strokeOpacity="0.4" />
                  <rect x="2" y="2" width="17" height="8" rx="1.8" fill="#0F0F23" />
                  <path d="M23.5 4v4a2.2 2.2 0 0 0 0-4z" fill="#0F0F23" fillOpacity="0.4" />
                </svg>
              </span>
            </div>

            {children}

            {/* Home indicator */}
            <div className="pb-2.5 pt-1 bg-transparent">
              <div className="w-[100px] h-1 rounded-full bg-black/20 mx-auto" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
