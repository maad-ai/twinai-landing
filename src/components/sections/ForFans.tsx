import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Crosshair, Zap, MessageCircle } from 'lucide-react';

const benefits = [
  {
    icon: Crosshair,
    title: 'Personalized',
    desc: 'Advice tailored to your situation — not generic tips for a crowd.',
  },
  {
    icon: Zap,
    title: 'Instant',
    desc: 'No waiting for DM replies that never come. Get answers in seconds, anytime.',
  },
  {
    icon: MessageCircle,
    title: 'Always there',
    desc: 'Chat any time — messages included every month, top up only if you’re chatty.',
  },
];

export function ForFans() {
  return (
    <section id="fans" className="bg-white py-20 md:py-24" aria-label="For Fans">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="eyebrow text-[#7C3AED] mb-3">For Fans</p>
          <h2 className="text-display-lg font-display font-800 text-[#0F0F23] mb-6">
            Get personal advice from creators you love.
          </h2>
          <p className="text-lg text-[#475569] max-w-xl mx-auto mb-14 md:mb-20">
            No more generic content. Ask specific questions and get personalized answers — in their
            voice, with their knowledge.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="grid sm:grid-cols-3 max-w-4xl mx-auto sm:divide-x sm:divide-black/[0.06]">
            {benefits.map((item) => (
              <div key={item.title} className="flex flex-col items-center px-6 py-6 sm:py-2">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-[#7C3AED]/[0.08]">
                  <item.icon
                    className="w-6 h-6 text-[#7C3AED]"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-display font-700 text-[#0F0F23] mb-2">{item.title}</h3>
                <p className="text-[15px] text-[#475569] leading-[1.65] max-w-[260px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
