import { ScrollReveal } from '@/components/ui/ScrollReveal';

const benefits = [
  { emoji: '💸', text: 'Keep 85–90% of every subscription — we only take 10–15%' },
  { emoji: '🕐', text: 'Your twin works 24/7 — answer thousands of fans simultaneously' },
  { emoji: '🎯', text: 'Deeper connections = better retention than any other monetization' },
  { emoji: '📈', text: 'Average creator earns $2K–8K/month (depends on audience size)' },
  { emoji: '🔒', text: 'Full control — set limits, review conversations, block topics' },
];

const stats = [
  { label: 'Monthly', value: '$4,200', color: '#84FF57' },
  { label: 'Subscribers', value: '312', color: '#00D4FF' },
  { label: 'Messages/Day', value: '1.2K', color: '#FF6B6B' },
];

export function ForCreators() {
  return (
    <section
      id="creators"
      className="hero-bg py-24 md:py-32"
      aria-label="For Creators"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <ScrollReveal>
            <div>
              <p className="text-sm font-600 uppercase tracking-widest text-[#FF6B6B] mb-3">
                For Creators
              </p>
              <h2
                className="font-display font-800 text-white tracking-tight mb-6"
                style={{ fontSize: 'clamp(1.875rem, 5vw, 3rem)' }}
              >
                Your audience wants more of you.{' '}
                <span className="gradient-text">Give them your twin.</span>
              </h2>
              <ul className="space-y-5" aria-label="Creator benefits">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0" role="img" aria-hidden="true">
                      {item.emoji}
                    </span>
                    <span className="text-lg text-[#94A3B8] leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Right: fake dashboard */}
          <ScrollReveal delay={150}>
            <div className="card-glass rounded-2xl p-8">
              <p className="text-xs font-600 uppercase tracking-widest text-[#94A3B8] mb-4">
                Example creator dashboard
              </p>

              {/* Creator info */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#A855F7] flex items-center justify-center text-xl font-bold text-white flex-shrink-0"
                  aria-hidden="true"
                >
                  SK
                </div>
                <div>
                  <p className="font-display font-700 text-white">Sarah K.</p>
                  <p className="text-sm text-[#94A3B8]">Fitness Creator &bull; 340K followers</p>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-4 mb-6" aria-label="Dashboard stats">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-xl bg-white/5">
                    <p
                      className="font-display font-800 text-2xl"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs text-[#94A3B8] mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Earnings bar */}
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#94A3B8]">This month&apos;s earnings</span>
                  <span className="text-[#84FF57] font-600">+23% vs last month</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full w-[72%] rounded-full"
                    style={{ background: 'linear-gradient(90deg, #FF6B6B, #A855F7)' }}
                    role="progressbar"
                    aria-valuenow={72}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label="72% of monthly goal"
                  />
                </div>
              </div>

              <p className="text-xs text-[#94A3B8] text-center mt-4 italic">
                * Example projection based on average engagement rates
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
