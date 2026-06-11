import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight } from 'lucide-react';

export const dynamic = 'force-dynamic';

function parse(sp: Record<string, string | string[] | undefined>) {
  const p = Math.min(Math.max(parseFloat((sp.p as string) || '19.99') || 19.99, 1), 999);
  const s = Math.min(Math.max(parseInt((sp.s as string) || '250', 10) || 250, 1), 1_000_000);
  return { price: p, subs: s, monthly: p * 0.85 * s };
}

const money = (n: number) => n.toLocaleString('en-US', { maximumFractionDigits: 0 });

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}): Promise<Metadata> {
  const sp = await searchParams;
  const { price, subs, monthly } = parse(sp);
  const ogUrl = `https://twiinn.ai/api/og?p=${price}&s=${subs}`;
  const title = `An AI twin could earn $${money(monthly)}/month`;
  const description = `${money(subs)} subscribers at $${price.toFixed(2)}/mo, keeping 85%. See what your AI twin could earn on Twiinn.`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://twiinn.ai/earn?p=${price}&s=${subs}`,
      images: [{ url: ogUrl, width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [ogUrl] },
  };
}

export default async function EarnPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const { price, subs, monthly } = parse(sp);

  return (
    <>
      <Header />
      <main className="bg-white min-h-[100dvh] flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(70% 50% at 50% 0%, rgba(168,85,247,0.07) 0%, transparent 65%)',
          }}
          aria-hidden="true"
        />
        <div className="max-w-2xl mx-auto px-6 py-32 text-center relative z-10">
          <p className="eyebrow text-[#7C3AED] mb-3">The math</p>
          <h1 className="text-display-lg font-display font-800 text-[#0F0F23] mb-2">
            An AI twin could earn
          </h1>
          <p className="font-display font-800 leading-none my-4">
            <span className="gradient-text" style={{ fontSize: 'clamp(3.5rem, 12vw, 6rem)' }}>
              ${money(monthly)}
            </span>
            <span className="text-2xl text-[#64748B] font-600"> /month</span>
          </p>
          <p className="text-lg text-[#475569] mb-10">
            {money(subs)} subscribers at ${price.toFixed(2)}/mo, keeping 85% — while you sleep.
          </p>
          <a
            href="/#waitlist"
            className="gradient-btn group text-white font-600 px-8 py-4 rounded-xl text-lg inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7]"
          >
            Clone yourself — join the waitlist
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <p className="text-xs text-[#94A3B8] mt-6 max-w-md mx-auto">
            Estimate: subscribers × price × 85%. Actual results depend on your audience.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
