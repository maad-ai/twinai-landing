import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Upload, BrainCircuit, CircleDollarSign } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Upload,
    title: 'Upload your content',
    desc: 'Connect YouTube, TikTok, Instagram, or upload videos and posts directly. Our AI analyzes your speaking style, expertise, and personality.',
  },
  {
    step: '02',
    icon: BrainCircuit,
    title: 'Train and customize',
    desc: 'Your twin learns how you think and talk. Fine-tune its responses, set topics it can discuss, and make it sound authentically you.',
  },
  {
    step: '03',
    icon: CircleDollarSign,
    title: 'Set your price',
    desc: 'Choose your monthly subscription price. Share your twin link. Get paid every month while your twin handles thousands of conversations.',
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-[#F7F8FB] py-24 md:py-32" aria-label="How it works">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <div className="mb-14 md:mb-20 max-w-2xl">
            <h2 className="text-display-lg font-display font-800 text-[#0F0F23]">
              Three steps to your AI twin
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((item) => (
              <article
                key={item.step}
                className="card-light rounded-2xl p-8 relative overflow-hidden group h-full"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-[#7C3AED]/[0.08] transition-transform duration-300 [transition-timing-function:var(--ease-out-expo)] group-hover:scale-110 group-hover:-rotate-3">
                  <item.icon
                    className="w-7 h-7 text-[#7C3AED]"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>
                <p className="eyebrow text-[#64748B] mb-2">Step {item.step}</p>
                <h3 className="font-display font-700 text-xl text-[#0F0F23] mb-3">{item.title}</h3>
                <p className="text-[#475569] text-[15px] leading-[1.65]">{item.desc}</p>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
