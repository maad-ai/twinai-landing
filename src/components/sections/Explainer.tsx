import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Bot, MessageCircle, Wallet } from 'lucide-react';

const items = [
  {
    icon: Bot,
    iconColor: '#FF6B6B',
    label: 'For Creators',
    text: 'Turn your knowledge into an AI chatbot that earns money for you 24/7.',
  },
  {
    icon: MessageCircle,
    iconColor: '#A855F7',
    label: 'For Fans',
    text: 'Get personalized advice from your favorite creator — anytime, any question.',
  },
  {
    icon: Wallet,
    iconColor: '#00D4FF',
    label: 'The Model',
    text: 'Fans pay a monthly sub. Creators keep 85–90%. We take a 10–15% platform fee.',
  },
];

export function Explainer() {
  return (
    <section className="bg-white py-16 border-b border-black/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {items.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 100}>
              <div className="flex flex-col items-center">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: `${item.iconColor}12` }}
                >
                  <item.icon
                    className="w-7 h-7"
                    style={{ color: item.iconColor }}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>
                <p className="font-display font-700 text-[#0F0F23] mb-2">{item.label}</p>
                <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
