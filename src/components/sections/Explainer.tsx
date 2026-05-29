import { ScrollReveal } from '@/components/ui/ScrollReveal';

const items = [
  {
    icon: '🤖',
    label: 'For Creators',
    text: 'Turn your knowledge into an AI chatbot that earns money for you 24/7.',
  },
  {
    icon: '💬',
    label: 'For Fans',
    text: 'Get personalized advice from your favorite creator — anytime, any question.',
  },
  {
    icon: '💸',
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
                <span className="text-4xl mb-3" role="img" aria-label={item.label}>
                  {item.icon}
                </span>
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
