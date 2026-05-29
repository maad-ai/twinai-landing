import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function FinalCTA() {
  return (
    <section className="hero-bg py-20 md:py-28" aria-label="Call to action">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <ScrollReveal>
          <h2
            className="font-display font-800 text-white tracking-tight mb-4"
            style={{ fontSize: 'clamp(1.875rem, 5vw, 3.25rem)' }}
          >
            Ready to clone yourself?
          </h2>
          <p className="text-lg text-[#94A3B8] mb-8 max-w-lg mx-auto">
            Join 2,400+ creators already on the waitlist. The future of fan engagement starts here.
          </p>
          <a
            href="#waitlist"
            className="inline-block gradient-btn text-white font-600 px-10 py-4 rounded-xl text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7]"
          >
            Create Your Twin &rarr;
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
