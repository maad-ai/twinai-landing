import Image from 'next/image';
import { TwinCoachMike } from '@/components/ui/Avatars';
import { Check, Shield, Moon, Sliders, Send, ArrowRight, ArrowDown } from 'lucide-react';

const trustItems = [
  { icon: Check, text: 'Keep 85%' },
  { icon: Moon, text: 'Works while you sleep' },
  { icon: Shield, text: 'Full control' },
];

function Enter({ delay, children }: { delay: number; children: React.ReactNode }) {
  return (
    <div className="hero-enter" style={{ '--enter-delay': `${delay}ms` } as React.CSSProperties}>
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="hero-bg grain min-h-[100dvh] flex items-center relative overflow-hidden pt-16"
      aria-label="Hero"
    >
      <div className="max-w-[1200px] mx-auto px-6 py-24 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <Enter delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse-glow" aria-hidden="true" />
                <span className="eyebrow text-white/70">
                  Now accepting early creators
                </span>
              </div>
            </Enter>

            <Enter delay={80}>
              <h1 className="text-display-xl font-display font-800 text-white mb-6">
                Your fans can talk to{' '}
                <span className="gradient-text">your AI twin.</span>
              </h1>
            </Enter>

            <Enter delay={160}>
              <p className="text-lg md:text-xl text-[#94A3B8] max-w-xl mb-4 leading-relaxed">
                A chatbot trained on your content that answers like you — your tone, your advice.{' '}
                <span className="text-white font-500">Fans subscribe monthly to talk to it.</span>
              </p>
            </Enter>

            <Enter delay={240}>
              <div className="flex items-center flex-wrap gap-x-6 gap-y-2 mb-10 text-sm text-[#94A3B8]">
                {trustItems.map(({ icon: Icon, text }) => (
                  <span key={text} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-[#4ADE80]" aria-hidden="true" />
                    {text}
                  </span>
                ))}
              </div>
            </Enter>

            <Enter delay={320}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#waitlist"
                  className="gradient-btn group text-white font-600 px-8 py-4 rounded-xl text-base sm:text-lg inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7]"
                >
                  Join the waitlist
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="#demo"
                  className="border border-white/12 bg-white/5 text-white font-500 px-8 py-4 rounded-xl text-base sm:text-lg inline-flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/20 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7]"
                >
                  Watch the demo
                  <ArrowDown className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </Enter>

            <Enter delay={400}>
              <p className="mt-10 text-sm text-[#94A3B8]">
                Founding spots open —{' '}
                <span className="text-white font-600">first 50 creators</span> pay 0% fees for 6
                months.
              </p>
            </Enter>
          </div>

          {/* Right: Chat preview card */}
          <div className="mt-4 lg:mt-0">
            <Enter delay={350}>
              <div className="card-glass rounded-2xl p-1 max-w-md mx-auto lg:max-w-none">
                <div className="rounded-xl overflow-hidden">
                  {/* Chat header */}
                  <div className="flex items-center gap-3 px-4 py-3 bg-[#1A1A3E]/80 border-b border-white/5">
                    {/* Real photo + twin badge */}
                    <div className="relative flex-shrink-0">
                      <Image
                        src="/influencers/coach-mike.jpg"
                        alt=""
                        width={36}
                        height={36}
                        className="w-9 h-9 rounded-full object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full ring-2 ring-[#1A1A3E]">
                        <TwinCoachMike size={20} />
                      </div>
                    </div>
                    <div>
                      <p className="font-700 text-white text-sm">Coach Mike</p>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" aria-hidden="true" />
                        <span className="text-[11px] text-[#94A3B8]">AI Twin &bull; Online</span>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <Sliders className="w-4 h-4 text-[#94A3B8]/50" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Chat messages */}
                  <div className="p-4 space-y-3 bg-[#0F0F23]/60">
                    <div className="flex gap-2">
                      <div className="flex-shrink-0 mt-0.5">
                        <TwinCoachMike size={24} />
                      </div>
                      <div className="bg-white/10 rounded-xl rounded-tl-sm px-3 py-2 text-[13px] text-white/90 max-w-[85%]">
                        Hey! I&apos;m Coach Mike&apos;s AI twin. Trained on 500+ workouts and nutrition guides. Ask me anything!
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-[#A855F7]/15 rounded-xl rounded-tr-sm px-3 py-2 text-[13px] text-white/90 max-w-[80%]">
                        How do I build muscle training only 3 days/week?
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-shrink-0 mt-0.5">
                        <TwinCoachMike size={24} />
                      </div>
                      <div className="bg-white/10 rounded-xl rounded-tl-sm px-3 py-2 text-[13px] text-white/90 max-w-[85%]">
                        3 days is plenty! Full-body split: squats, deadlifts, bench each session. Progressive overload every week...
                      </div>
                    </div>
                  </div>

                  {/* Fake input */}
                  <div className="px-4 py-3 bg-[#0F0F23]/60 border-t border-white/5">
                    <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/8">
                      <span className="text-[13px] text-white/30 flex-1">Ask Coach Mike anything...</span>
                      <div className="w-8 h-8 rounded-lg gradient-btn flex items-center justify-center flex-shrink-0">
                        <Send className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Enter>
          </div>
        </div>
      </div>
    </section>
  );
}
