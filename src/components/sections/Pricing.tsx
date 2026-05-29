import { ScrollReveal } from '@/components/ui/ScrollReveal';

const tiers = [
  { price: '$9.99', earn: '~$8.50/sub', tag: 'Casual', featured: false },
  { price: '$19.99', earn: '~$17.00/sub', tag: 'Popular', featured: true },
  { price: '$49.99', earn: '~$42.50/sub', tag: 'Premium', featured: false },
];

export function Pricing() {
  return (
    <section id="pricing" className="hero-bg py-24 md:py-32" aria-label="Pricing">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="text-sm font-600 uppercase tracking-widest text-[#FBBF24] mb-3">
            Pricing
          </p>
          <h2
            className="font-display font-800 text-white tracking-tight mb-6"
            style={{ fontSize: 'clamp(1.875rem, 5vw, 3rem)' }}
          >
            You set the price.{' '}
            <span className="gradient-text">You keep 85–90%.</span>
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-12">
            Fans subscribe monthly to chat with your AI twin. Choose any price point. We handle
            payments, hosting, and AI — you just earn.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.tag} delay={i * 80}>
              <article
                className={`rounded-2xl p-6 h-full flex flex-col justify-between ${
                  tier.featured
                    ? 'border-2 border-[#A855F7]/50 scale-105 bg-gradient-to-b from-[#A855F7]/20 to-[#00D4FF]/10'
                    : 'card-glass'
                }`}
              >
                {tier.featured && (
                  <p className="text-xs font-700 uppercase tracking-wider text-[#A855F7] mb-2">
                    Most Popular
                  </p>
                )}
                <p className="text-sm text-[#94A3B8] mb-1">{tier.tag}</p>
                <p className="font-display font-800 text-3xl text-white mb-1">{tier.price}</p>
                <p className="text-sm text-[#94A3B8] mb-1">/month per subscriber</p>
                <p className="text-sm font-600 text-[#84FF57]">
                  You earn {tier.earn}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <p className="text-sm text-[#94A3B8] mt-10 max-w-lg mx-auto">
            Early creators get{' '}
            <span className="text-[#FF6B6B] font-600">0% commission for the first 6 months.</span>{' '}
            Limited spots available.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
