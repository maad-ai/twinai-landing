import Image from 'next/image';
import { TwinCoachMike } from '@/components/ui/Avatars';
import { StoreBadges } from '@/components/ui/StoreBadges';
import { Check, Shield, Moon, Send, ArrowRight } from 'lucide-react';

const trustItems = [
  { icon: Check, text: 'Keep 85%' },
  { icon: Moon, text: 'Works while you sleep' },
  { icon: Shield, text: 'Full control' },
];

const learnings = ['Full-body split', 'Pause reps at 170lbs', 'Sleep 7.5 hrs'];

function Enter({ delay, children }: { delay: number; children: React.ReactNode }) {
  return (
    <div className="hero-enter" style={{ '--enter-delay': `${delay}ms` } as React.CSSProperties}>
      {children}
    </div>
  );
}

/* Realistic iPhone frame with a clean, light chat UI inside */
function PhoneMockup() {
  return (
    <div className="relative">
      {/* Side buttons */}
      <div className="absolute -left-[2px] top-[110px] w-[3px] h-8 rounded-l bg-[#2A2A2E]" aria-hidden="true" />
      <div className="absolute -left-[2px] top-[160px] w-[3px] h-14 rounded-l bg-[#2A2A2E]" aria-hidden="true" />
      <div className="absolute -left-[2px] top-[224px] w-[3px] h-14 rounded-l bg-[#2A2A2E]" aria-hidden="true" />
      <div className="absolute -right-[2px] top-[180px] w-[3px] h-20 rounded-r bg-[#2A2A2E]" aria-hidden="true" />

      {/* Titanium frame */}
      <div
        className="relative w-[300px] sm:w-[320px] rounded-[3.2rem] p-[3px]"
        style={{
          background: 'linear-gradient(145deg, #5a5a60, #2c2c30 40%, #444449 80%, #2c2c30)',
          boxShadow: '0 4px 8px rgba(15,15,35,0.06), 0 32px 64px -24px rgba(15,15,35,0.35)',
        }}
      >
        {/* Black bezel */}
        <div className="rounded-[3rem] bg-black p-[8px]">
          {/* Screen */}
          <div className="relative rounded-[2.5rem] overflow-hidden bg-white">
            {/* Dynamic Island */}
            <div
              className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[96px] h-[26px] bg-black rounded-full z-20"
              aria-hidden="true"
            />

            {/* Status bar */}
            <div className="flex items-center justify-between px-7 pt-3 pb-1 text-[#0F0F23]" aria-hidden="true">
              <span className="text-[13px] font-600 tracking-tight">9:41</span>
              <span className="flex items-center gap-1.5">
                {/* Signal */}
                <svg viewBox="0 0 18 12" className="w-[17px] h-[11px] fill-[#0F0F23]">
                  <rect x="0" y="8" width="3" height="4" rx="0.8" />
                  <rect x="5" y="5.5" width="3" height="6.5" rx="0.8" />
                  <rect x="10" y="3" width="3" height="9" rx="0.8" />
                  <rect x="15" y="0" width="3" height="12" rx="0.8" />
                </svg>
                {/* WiFi */}
                <svg viewBox="0 0 16 12" className="w-[15px] h-[11px] fill-[#0F0F23]">
                  <path d="M8 9.5a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4zM8 5.4c1.8 0 3.5.7 4.7 1.9l-1.6 1.6a4.5 4.5 0 0 0-6.2 0L3.3 7.3A6.6 6.6 0 0 1 8 5.4zM8 1.2c3 0 5.7 1.2 7.7 3.1L14 6A8.7 8.7 0 0 0 2 6L.3 4.3C2.3 2.4 5 1.2 8 1.2z" />
                </svg>
                {/* Battery */}
                <svg viewBox="0 0 25 12" className="w-[24px] h-[11px]">
                  <rect x="0.5" y="0.5" width="21" height="11" rx="3" fill="none" stroke="#0F0F23" strokeOpacity="0.4" />
                  <rect x="2" y="2" width="17" height="8" rx="1.8" fill="#0F0F23" />
                  <path d="M23.5 4v4a2.2 2.2 0 0 0 0-4z" fill="#0F0F23" fillOpacity="0.4" />
                </svg>
              </span>
            </div>

            {/* Chat header — clean, light */}
            <div className="flex items-center gap-3 px-5 pt-2 pb-3 bg-white border-b border-black/[0.06]">
              <div className="relative flex-shrink-0">
                <Image
                  src="/influencers/coach-mike.jpg"
                  alt=""
                  width={38}
                  height={38}
                  className="w-[38px] h-[38px] rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full ring-2 ring-white">
                  <TwinCoachMike size={20} />
                </div>
              </div>
              <div>
                <p className="font-600 text-[#0F0F23] text-[15px] leading-tight">Coach Mike</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" aria-hidden="true" />
                  <span className="text-[11px] text-[#64748B]">AI Twin &bull; Online</span>
                </div>
              </div>
            </div>

            {/* Messages — light, iMessage-clean */}
            <div className="px-4 py-4 space-y-3 min-h-[390px] bg-[#F7F8FB]">
              <div className="flex gap-2">
                <div className="flex-shrink-0 mt-0.5">
                  <TwinCoachMike size={24} />
                </div>
                <div className="bg-white border border-black/[0.05] shadow-sm rounded-2xl rounded-tl-md px-3.5 py-2.5 text-[13px] text-[#0F0F23] leading-snug max-w-[85%]">
                  Hey! I&apos;m Coach Mike&apos;s AI twin. Trained on 500+ workouts. Ask me anything!
                </div>
              </div>
              <div className="flex justify-end">
                <div
                  className="rounded-2xl rounded-tr-md px-3.5 py-2.5 text-[13px] text-white leading-snug max-w-[80%]"
                  style={{ background: 'linear-gradient(135deg, #A855F7, #7C3AED)' }}
                >
                  How do I build muscle training only 3 days/week?
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex-shrink-0 mt-0.5">
                  <TwinCoachMike size={24} />
                </div>
                <div className="bg-white border border-black/[0.05] shadow-sm rounded-2xl rounded-tl-md px-3.5 py-2.5 text-[13px] text-[#0F0F23] leading-snug max-w-[85%]">
                  3 days is plenty! Full-body split: squats, deadlifts, bench. Pause reps at 170lbs — and sleep 7.5 hrs, that&apos;s where gains happen.
                </div>
              </div>
            </div>

            {/* Input — clean pill */}
            <div className="px-4 pb-6 pt-2 bg-[#F7F8FB]">
              <div className="flex items-center gap-3 pl-4 pr-1.5 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-sm">
                <span className="text-[13px] text-[#94A3B8] flex-1">Ask Coach Mike anything...</span>
                <div className="w-8 h-8 rounded-full gradient-btn flex items-center justify-center flex-shrink-0">
                  <Send className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                </div>
              </div>
              {/* Home indicator */}
              <div className="w-[100px] h-1 rounded-full bg-black/20 mx-auto mt-3" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating callouts — what fans LEARN from the chat (Cal AI-style chips),
          fully OUTSIDE the phone so the conversation stays readable */}
      <div
        className="absolute left-full ml-4 top-[170px] hidden md:flex flex-col items-start gap-2 w-max"
        aria-hidden="true"
      >
        <p className="text-[10px] font-600 uppercase tracking-[0.1em] text-[#64748B] pl-1">
          What fans learn
        </p>
        {learnings.map((l, i) => (
          <div
            key={l}
            className="flex items-center gap-1.5 bg-white rounded-full pl-2.5 pr-3 py-1 border border-black/[0.06] text-[12px] font-500 text-[#0F0F23]"
            style={{ boxShadow: 'var(--shadow-md)', marginLeft: `${[0, 14, 6][i]}px` }}
          >
            <Check className="w-3 h-3 text-[#16A34A]" strokeWidth={2.5} />
            {l}
          </div>
        ))}
      </div>

      {/* Earnings chip */}
      <div
        className="absolute -left-4 sm:-left-12 bottom-24 bg-white rounded-2xl px-3.5 py-2.5 border border-black/[0.06]"
        style={{ boxShadow: 'var(--shadow-md)' }}
      >
        <p className="text-[10px] text-[#64748B] uppercase tracking-[0.08em]">This month</p>
        <p className="font-display font-800 text-lg text-[#0F0F23] leading-tight">$4,200</p>
        <p className="text-[10px] text-[#16A34A] font-600">Example earnings</p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden pt-16 bg-white"
      aria-label="Hero"
    >
      {/* Soft brand tint, light-from-top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(80% 50% at 50% 0%, rgba(168,85,247,0.07) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Copy */}
          <div>
            <Enter delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C3AED]/[0.06] border border-[#7C3AED]/15 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse-glow" aria-hidden="true" />
                <span className="eyebrow text-[#7C3AED]">
                  For creators — early access open
                </span>
              </div>
            </Enter>

            <Enter delay={80}>
              <h1 className="text-display-xl font-display font-800 text-[#0F0F23] mb-6">
                Clone yourself.{' '}
                <span className="gradient-text">Get paid 24/7.</span>
              </h1>
            </Enter>

            <Enter delay={160}>
              <p className="text-lg md:text-xl text-[#475569] max-w-xl mb-4 leading-relaxed">
                Twiinn builds an AI twin trained on your content. Your fans subscribe monthly to
                chat with it —{' '}
                <span className="text-[#0F0F23] font-600">you keep 85%.</span>
              </p>
            </Enter>

            <Enter delay={240}>
              <div className="flex items-center flex-wrap gap-x-6 gap-y-2 mb-10 text-sm text-[#475569]">
                {trustItems.map(({ icon: Icon, text }) => (
                  <span key={text} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-[#16A34A]" aria-hidden="true" />
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
                  className="border border-black/10 bg-white text-[#0F0F23] font-500 px-8 py-4 rounded-xl text-base sm:text-lg inline-flex items-center justify-center gap-2 hover:bg-black/[0.03] hover:border-black/20 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7]"
                >
                  Watch the demo
                </a>
              </div>
            </Enter>

            <Enter delay={400}>
              <StoreBadges className="mt-8" />
            </Enter>

            <Enter delay={460}>
              <p className="mt-8 text-sm text-[#64748B]">
                Founding spots open —{' '}
                <span className="text-[#0F0F23] font-600">first 50 creators</span> pay 0% fees for
                6 months.
              </p>
            </Enter>
          </div>

          {/* Right: the product (right padding reserves room for the callout chips) */}
          <div className="mt-6 lg:mt-0 flex justify-center lg:justify-end lg:pr-44 xl:pr-48">
            <Enter delay={350}>
              <PhoneMockup />
            </Enter>
          </div>
        </div>
      </div>
    </section>
  );
}
