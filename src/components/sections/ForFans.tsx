import { ScrollReveal } from '@/components/ui/ScrollReveal';

const benefits = [
  {
    icon: '🎯',
    title: 'Personalized',
    desc: 'Advice tailored to YOUR specific situation — not generic tips for a crowd.',
  },
  {
    icon: '⚡',
    title: 'Instant',
    desc: 'No waiting for DM replies that never come. Get answers in seconds, anytime.',
  },
  {
    icon: '🔓',
    title: 'Unlimited',
    desc: 'Ask as many questions as you want throughout your subscription.',
  },
];

export function ForFans() {
  return (
    <section id="fans" className="bg-white py-24 md:py-32" aria-label="For Fans">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="text-sm font-600 uppercase tracking-widest text-[#00D4FF] mb-3">
            For Fans
          </p>
          <h2
            className="font-display font-800 text-[#0F0F23] tracking-tight mb-6"
            style={{ fontSize: 'clamp(1.875rem, 5vw, 3rem)' }}
          >
            Get personal advice from creators you love.
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-12">
            No more generic content. Ask specific questions and get personalized answers — in their
            voice, with their knowledge.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {benefits.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <article className="card-light rounded-2xl p-6 h-full flex flex-col items-center text-center">
                <span className="text-4xl block mb-3" role="img" aria-label={item.title}>
                  {item.icon}
                </span>
                <h3 className="font-display font-700 text-[#0F0F23] mb-2">{item.title}</h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{item.desc}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
