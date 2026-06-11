import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { TwinSarahK } from '@/components/ui/Avatars';
import { Banknote, Clock, Target, TrendingUp, ShieldCheck } from 'lucide-react';

const benefits = [
  { icon: Banknote, text: 'Keep 85% of every subscription — we handle payments, hosting, and the AI' },
  { icon: Clock, text: 'Your twin answers thousands of fans at once, even while you sleep' },
  { icon: Target, text: 'Fans stay for the relationship — recurring revenue, not one-off sales' },
  { icon: TrendingUp, text: 'If 1% of a 50K audience subscribes at $19.99, that’s ~$8,500/month to you' },
  { icon: ShieldCheck, text: 'Full control — set limits, review conversations, block topics' },
];

const stats = [
  { label: 'Monthly', value: '$4,200' },
  { label: 'Subscribers', value: '312' },
  { label: 'Messages/Day', value: '1.2K' },
];

export function ForCreators() {
  return (
    <section
      id="creators"
      className="section-dark grain relative py-24 md:py-32 border-t border-white/[0.06]"
      aria-label="For Creators"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <ScrollReveal>
            <div>
              <p className="eyebrow text-[#A855F7] mb-3">For Creators</p>
              <h2 className="text-display-lg font-display font-800 text-white mb-6">
                Your audience wants more of you. Give them your twin.
              </h2>
              <ul className="space-y-5" aria-label="Creator benefits">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#A855F7]/10">
                      <item.icon
                        className="w-5 h-5 text-[#A855F7]"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-lg text-[#94A3B8] leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Right: fake dashboard */}
          <ScrollReveal delay={120}>
            <div className="card-glass rounded-2xl p-5 sm:p-8">
              <p className="eyebrow text-[#94A3B8] mb-4">Example creator dashboard</p>

              {/* Creator info — photo + twin */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative flex-shrink-0">
                  <Image
                    src="/influencers/sarah-k.jpg"
                    alt=""
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full ring-2 ring-[#1A1A3E]/80">
                    <TwinSarahK size={28} />
                  </div>
                </div>
                <div>
                  <p className="font-display font-700 text-white">Sarah K.</p>
                  <p className="text-sm text-[#94A3B8]">Fitness Creator &bull; 340K followers</p>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6" aria-label="Dashboard stats">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center p-2 sm:p-3 rounded-xl bg-white/5">
                    <p className="font-display font-800 text-lg sm:text-2xl text-white">
                      {stat.value}
                    </p>
                    <p className="text-[11px] sm:text-xs text-[#94A3B8] mt-1 uppercase tracking-[0.08em] truncate">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Earnings bar */}
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex justify-between text-xs sm:text-sm mb-2 gap-2">
                  <span className="text-[#94A3B8]">This month&apos;s earnings</span>
                  <span className="text-[#4ADE80] font-600 whitespace-nowrap">+23% vs last</span>
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
                Illustrative dashboard — not real earnings data
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
