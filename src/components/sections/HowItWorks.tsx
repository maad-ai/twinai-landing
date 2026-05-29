import { ScrollReveal } from '@/components/ui/ScrollReveal';

const steps = [
  {
    step: '01',
    icon: '🎤',
    title: 'Upload Your Content',
    desc: 'Connect YouTube, TikTok, Instagram, or upload videos and posts directly. Our AI analyzes your speaking style, expertise, and personality.',
    color: '#FF6B6B',
  },
  {
    step: '02',
    icon: '🧠',
    title: 'Train & Customize',
    desc: 'Your twin learns how you think and talk. Fine-tune its responses, set topics it can discuss, and make it sound authentically you.',
    color: '#A855F7',
  },
  {
    step: '03',
    icon: '💰',
    title: 'Set Price & Earn',
    desc: 'Choose your monthly subscription price. Share your twin link. Get paid every month while your twin handles thousands of conversations.',
    color: '#00D4FF',
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-white py-24 md:py-32" aria-label="How it works">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-600 uppercase tracking-widest text-[#A855F7] mb-3">
              How it works
            </p>
            <h2
              className="font-display font-800 text-[#0F0F23] tracking-tight"
              style={{ fontSize: 'clamp(1.875rem, 5vw, 3rem)' }}
            >
              Three steps to your{' '}
              <span className="gradient-text">AI twin</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, i) => (
            <ScrollReveal key={item.step} delay={i * 100}>
              <article className="card-light rounded-2xl p-8 relative overflow-hidden group h-full">
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{
                    background: `linear-gradient(90deg, ${item.color}, #A855F7)`,
                  }}
                  aria-hidden="true"
                />
                <span className="text-5xl mb-4 block" role="img" aria-label={item.title}>
                  {item.icon}
                </span>
                <p className="text-sm font-700 mb-2" style={{ color: item.color }}>
                  STEP {item.step}
                </p>
                <h3 className="font-display font-700 text-xl text-[#0F0F23] mb-3">{item.title}</h3>
                <p className="text-[#94A3B8] leading-relaxed">{item.desc}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
