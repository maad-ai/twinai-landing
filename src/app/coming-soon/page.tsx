import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StoreBadges } from '@/components/ui/StoreBadges';
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
          <div className="flex justify-center mt-12">
            <StoreBadges disabled />
          </div>
          <p className="text-xs text-[#94A3B8] mt-3">Not available yet — launching after web.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
