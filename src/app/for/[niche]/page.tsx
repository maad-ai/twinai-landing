import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { InteractiveDemo } from '@/components/sections/InteractiveDemo';
import { Pricing } from '@/components/sections/Pricing';
import { TheShift } from '@/components/sections/TheShift';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { nichePages, getNiche } from '@/lib/niches';
import { ArrowRight, Check } from 'lucide-react';

export function generateStaticParams() {
  return nichePages.map((n) => ({ niche: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ niche: string }>;
}): Promise<Metadata> {
  const { niche } = await params;
  const page = getNiche(niche);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `https://twiinn.ai/for/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://twiinn.ai/for/${page.slug}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  };
}

export default async function NichePage({
  params,
}: {
  params: Promise<{ niche: string }>;
}) {
  const { niche } = await params;
  const page = getNiche(niche);
  if (!page) notFound();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const others = nichePages.filter((n) => n.slug !== page.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative min-h-[70dvh] flex items-center overflow-hidden pt-16 bg-white">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(80% 50% at 50% 0%, rgba(168,85,247,0.07) 0%, transparent 65%)',
            }}
            aria-hidden="true"
          />
          <div className="max-w-3xl mx-auto px-6 py-20 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C3AED]/[0.06] border border-[#7C3AED]/15 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse-glow" aria-hidden="true" />
              <span className="eyebrow text-[#7C3AED]">For {page.audience}</span>
            </div>
            <h1 className="text-display-xl font-display font-800 text-[#0F0F23] mb-6">
              {page.h1}
            </h1>
            <p className="text-lg md:text-xl text-[#475569] max-w-2xl mx-auto mb-10 leading-relaxed">
              {page.sub}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#waitlist"
                className="gradient-btn group text-white font-600 px-8 py-4 rounded-xl text-base sm:text-lg inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7]"
              >
                Join the waitlist
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#demo"
                className="border border-black/10 bg-white text-[#0F0F23] font-500 px-8 py-4 rounded-xl text-base sm:text-lg inline-flex items-center justify-center gap-2 hover:bg-black/[0.03] hover:border-black/20 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7]"
              >
                Watch the demo
              </a>
            </div>

            {/* What fans ask */}
            <div className="mt-12">
              <p className="text-[10px] font-600 uppercase tracking-[0.12em] text-[#64748B] mb-3">
                What your fans will ask
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {page.fanQuestions.map((q) => (
                  <span
                    key={q}
                    className="text-sm font-500 text-[#7C3AED] bg-[#7C3AED]/[0.06] border border-[#7C3AED]/15 rounded-full px-3.5 py-1.5"
                  >
                    {q}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="bg-[#F7F8FB] py-20 md:py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <ScrollReveal>
              <h2 className="text-display-lg font-display font-800 text-[#0F0F23] text-center mb-14">
                Why {page.audience} clone themselves
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {page.painPoints.map((p) => (
                  <article key={p.title} className="card-light rounded-2xl p-7 h-full">
                    <h3 className="font-display font-700 text-[17px] text-[#0F0F23] mb-2">
                      {p.title}
                    </h3>
                    <p className="text-[15px] text-[#475569] leading-[1.65]">{p.desc}</p>
                  </article>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Demo + proof + calculator preset to the niche's typical price */}
        <InteractiveDemo />
        <TheShift />
        <Pricing initialPrice={page.price} />

        {/* Niche FAQ */}
        <section className="bg-white py-20 md:py-24" aria-label={`FAQ for ${page.audience}`}>
          <div className="max-w-3xl mx-auto px-6">
            <ScrollReveal>
              <h2 className="text-display-lg font-display font-800 text-[#0F0F23] text-center mb-12">
                Questions from {page.audience}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div className="space-y-4">
                {page.faqs.map((f) => (
                  <div key={f.q} className="card-light rounded-2xl p-6">
                    <p className="font-display font-700 text-[#0F0F23] mb-2 flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#16A34A] mt-1 flex-shrink-0" aria-hidden="true" />
                      {f.q}
                    </p>
                    <p className="text-[15px] text-[#475569] leading-[1.65] pl-6">{f.a}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA + cross-links */}
        <section className="cta-spotlight grain relative py-24 md:py-32 border-t border-white/[0.06]">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="text-display-lg font-display font-800 text-white mb-4">
              Ready to clone yourself?
            </h2>
            <p className="text-lg text-[#94A3B8] mb-8 max-w-lg mx-auto">
              Founding creators keep <span className="text-white font-600">100% of revenue</span>{' '}
              for their first 6 months.
            </p>
            <a
              href="/#waitlist"
              className="gradient-btn group text-white font-600 px-10 py-4 rounded-xl text-lg inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7]"
            >
              Join the waitlist
              <ArrowRight
                className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <p className="text-sm text-[#94A3B8] mt-10">
              Also for{' '}
              {others.map((o, i) => (
                <span key={o.slug}>
                  <Link href={`/for/${o.slug}`} className="text-white font-600 hover:underline">
                    {o.audience}
                  </Link>
                  {i < others.length - 1 ? ' and ' : ''}
                </span>
              ))}
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
