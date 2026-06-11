import { ScrollReveal } from '@/components/ui/ScrollReveal';

const tiers = [
  { price: '$9.99', earn: '~$8.50/sub', tag: 'Casual' },
  { price: '$19.99', earn: '~$17.00/sub', tag: 'Standard' },
  { price: '$49.99', earn: '~$42.50/sub', tag: 'Premium' },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-[#F7F8FB] py-24 md:py-32" aria-label="Pricing">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="eyebrow text-[#7C3AED] mb-3">Pricing</p>
          <h2 className="text-display-lg font-display font-800 text-[#0F0F23] mb-6">
            You set the price. You keep 85%.
          </h2>
          <p className="text-lg text-[#475569] max-w-xl mx-auto mb-4">
            Fans subscribe monthly to chat with your AI twin. Choose any price point. We handle
            payments, hosting, and AI — you just earn.
          </p>
          <p className="eyebrow text-[#94A3B8] mb-12">Example price points</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto px-2">
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.tag} delay={i * 80}>
              <article className="card-light rounded-2xl p-6 h-full flex flex-col justify-between">
                <p className="text-sm text-[#64748B] mb-1">{tier.tag}</p>
                <p className="font-display font-800 text-3xl text-[#0F0F23] mb-1">{tier.price}</p>
                <p className="text-sm text-[#64748B] mb-1">/month per subscriber</p>
                <p className="text-sm font-600 text-[#16A34A]">
                  You earn {tier.earn}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <p className="text-sm text-[#475569] mt-10 max-w-lg mx-auto">
            Founding creators pay{' '}
            <span className="text-[#0F0F23] font-600">
              0% platform fees for their first 6 months.
            </span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
