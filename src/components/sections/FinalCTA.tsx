import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section
      className="cta-spotlight grain relative py-28 md:py-40 border-t border-white/[0.06]"
      aria-label="Call to action"
    >
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-display-lg font-display font-800 text-white mb-4">
            Ready to clone yourself?
          </h2>
          <p className="text-lg text-[#94A3B8] mb-8 max-w-lg mx-auto">
            Founding creators keep{' '}
            <span className="text-white font-600">100% of revenue</span> for their first 6 months.
          </p>
          <a
            href="#waitlist"
            className="gradient-btn group text-white font-600 px-10 py-4 rounded-xl text-lg inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7]"
          >
            Join the waitlist
            <ArrowRight
              className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
