import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, Smartphone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mobile App — Coming Soon',
  description:
    'The Twiinn AI mobile app is coming to the App Store and Google Play. Join the waitlist to be notified at launch.',
  robots: { index: false, follow: true },
};

export default function ComingSoonPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-[100dvh] flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(70% 50% at 50% 0%, rgba(168,85,247,0.07) 0%, transparent 65%)',
          }}
          aria-hidden="true"
        />
        <div className="max-w-xl mx-auto px-6 py-32 text-center relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-[#7C3AED]/[0.08] flex items-center justify-center mx-auto mb-8">
            <Smartphone className="w-8 h-8 text-[#7C3AED]" strokeWidth={1.8} aria-hidden="true" />
          </div>

          <p className="eyebrow text-[#7C3AED] mb-3">Mobile app</p>
          <h1 className="text-display-lg font-display font-800 text-[#0F0F23] mb-5">
            Coming soon to the App&nbsp;Store &amp; Google&nbsp;Play.
          </h1>
          <p className="text-lg text-[#475569] mb-10 leading-relaxed">
            We&apos;re launching on the web first — the mobile apps follow right after. Join the
            waitlist and you&apos;ll be the first to know.
          </p>

          <a
            href="/#waitlist"
            className="gradient-btn group text-white font-600 px-8 py-4 rounded-xl text-lg inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7]"
          >
            Join the waitlist
            <ArrowRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>

          {/* Greyed-out badges */}
          <div className="flex items-center justify-center gap-3 mt-12 opacity-40 grayscale select-none" aria-hidden="true">
            <div className="inline-flex items-center gap-2.5 h-[52px] px-4 rounded-xl bg-black text-white">
              <svg viewBox="0 0 384 512" className="w-6 h-6 fill-white" aria-hidden="true">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              <span className="text-left leading-tight">
                <span className="block text-[10px] opacity-80">Download on the</span>
                <span className="block text-[17px] font-600 -mt-0.5">App Store</span>
              </span>
            </div>
            <div className="inline-flex items-center gap-2.5 h-[52px] px-4 rounded-xl bg-black text-white">
              <svg viewBox="0 0 512 512" className="w-6 h-6" aria-hidden="true">
                <path fill="#EA4335" d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" />
                <path fill="#FBBC04" d="m472.2 225.6-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z" />
                <path fill="#34A853" d="m104.6 499 280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <span className="text-left leading-tight">
                <span className="block text-[10px] uppercase opacity-80">Get it on</span>
                <span className="block text-[17px] font-600 -mt-0.5">Google Play</span>
              </span>
            </div>
          </div>
          <p className="text-xs text-[#94A3B8] mt-3">Not available yet — launching after web.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
