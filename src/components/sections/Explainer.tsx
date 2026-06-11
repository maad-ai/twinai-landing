import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Bot, MessageCircle, Wallet } from 'lucide-react';

const items = [
  {
    icon: Bot,
    label: 'For Creators',
    text: 'Turn your content into a twin that answers fans while you sleep.',
  },
  {
    icon: MessageCircle,
    label: 'For Fans',
    text: 'Get personalized advice from your favorite creator — anytime, any question.',
  },
  {
    icon: Wallet,
    label: 'How it pays',
    text: 'Fans pay a monthly subscription. Creators keep 85% — we handle payments, hosting, and the AI.',
  },
];

export function Explainer() {
  return (
    <section className="bg-[#F7F8FB] py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {items.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 80}>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-[#7C3AED]/[0.08]">
                  <item.icon
                    className="w-7 h-7 text-[#7C3AED]"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>
                <p className="font-display font-700 text-[#0F0F23] mb-2">{item.label}</p>
                <p className="text-[#475569] text-[15px] leading-[1.65] max-w-xs">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
