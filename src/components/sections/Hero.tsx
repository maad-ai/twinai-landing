import { ScrollReveal } from '@/components/ui/ScrollReveal';

const avatars = [
  { initials: 'JL', gradient: 'from-[#FF6B6B] to-[#A855F7]' },
  { initials: 'MK', gradient: 'from-[#00D4FF] to-[#A855F7]' },
  { initials: 'AS', gradient: 'from-[#84FF57] to-[#00D4FF]' },
  { initials: 'TR', gradient: 'from-[#FBBF24] to-[#FF6B6B]' },
];

export function Hero() {
  return (
    <section
      className="hero-bg min-h-screen flex items-center relative overflow-hidden pt-16"
      aria-label="Hero"
    >
      {/* Background blobs */}
      <div
        className="absolute top-32 left-16 w-72 h-72 rounded-full blur-3xl animate-float pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,107,107,0.18), transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl animate-float-delay pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(168,85,247,0.14), transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,212,255,0.08), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 py-24 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#84FF57] animate-pulse-glow" aria-hidden="true" />
                <span className="text-xs font-500 text-[#A855F7] tracking-wide uppercase">
                  Now accepting early creators
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <h1 className="font-display font-800 text-white leading-[0.95] tracking-tight mb-6" style={{ fontSize: 'clamp(2.75rem, 7vw, 4.5rem)' }}>
                Your fans can talk to{' '}
                <span className="gradient-text">your AI clone.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <p className="text-lg md:text-xl text-[#94A3B8] max-w-xl mb-4 leading-relaxed">
                Twin AI creates a chatbot trained on your content — it thinks, talks, and advises like you. Fans subscribe monthly.{' '}
                <span className="text-white font-500">You earn 24/7.</span>
              </p>
            </ScrollReveal>

            <ScrollReveal delay={220}>
              <div className="flex items-center flex-wrap gap-x-6 gap-y-2 mb-10 text-sm text-[#94A3B8]">
                <span className="flex items-center gap-2">
                  <span className="text-[#84FF57]" aria-hidden="true">&#10003;</span>
                  Keep 85–90%
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-[#84FF57]" aria-hidden="true">&#10003;</span>
                  Works while you sleep
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-[#84FF57]" aria-hidden="true">&#10003;</span>
                  Full control
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={280}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#waitlist"
                  className="gradient-btn text-white font-600 px-8 py-4 rounded-xl text-center text-base sm:text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7]"
                >
                  Create Your Twin
                </a>
                <a
                  href="#demo"
                  className="border-2 border-[#A855F7]/30 text-white font-500 px-8 py-4 rounded-xl text-center text-base sm:text-lg hover:border-[#A855F7]/60 hover:bg-[#A855F7]/5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7]"
                >
                  See Live Demo ↓
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={340}>
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-3" aria-hidden="true">
                  {avatars.map((a, i) => (
                    <div
                      key={i}
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${a.gradient} border-2 border-[#0F0F23] flex items-center justify-center text-xs font-bold text-white`}
                    >
                      {a.initials}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[#94A3B8]">
                  <span className="text-white font-600">2,400+</span> creators on the waitlist
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Chat preview card */}
          <div className="hidden lg:block">
            <ScrollReveal delay={200}>
              <div className="card-glass rounded-2xl p-1 rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="rounded-xl overflow-hidden">
                  {/* Chat header */}
                  <div className="flex items-center gap-3 px-4 py-3 bg-[#1A1A3E]/80 border-b border-white/5">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#A855F7] flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                      CM
                    </div>
                    <div>
                      <p className="font-display font-700 text-white text-sm">Coach Mike</p>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#84FF57]" aria-hidden="true" />
                        <span className="text-[11px] text-[#94A3B8]">AI Twin &bull; Online</span>
                      </div>
                    </div>
                  </div>

                  {/* Chat messages */}
                  <div className="p-4 space-y-3 bg-[#0F0F23]/60">
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#A855F7] flex-shrink-0 flex items-center justify-center text-[7px] font-bold text-white mt-0.5" aria-hidden="true">
                        CM
                      </div>
                      <div className="bg-white/10 rounded-xl rounded-tl-sm px-3 py-2 text-[13px] text-white/90 max-w-[85%]">
                        Hey! I&apos;m Coach Mike&apos;s AI twin. Trained on 500+ workouts and nutrition guides. Ask me anything!
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-gradient-to-r from-[#A855F7]/20 to-[#00D4FF]/20 rounded-xl rounded-tr-sm px-3 py-2 text-[13px] text-white/90 max-w-[80%]">
                        How do I build muscle training only 3 days/week?
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#A855F7] flex-shrink-0 flex items-center justify-center text-[7px] font-bold text-white mt-0.5" aria-hidden="true">
                        CM
                      </div>
                      <div className="bg-white/10 rounded-xl rounded-tl-sm px-3 py-2 text-[13px] text-white/90 max-w-[85%]">
                        3 days is plenty! Full-body split: squats, deadlifts, bench each session. Progressive overload every week...
                      </div>
                    </div>
                  </div>

                  {/* Fake input */}
                  <div className="px-4 py-2.5 bg-[#0F0F23]/60 border-t border-white/5">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5">
                      <span className="text-[12px] text-white/30 flex-1">Ask Coach Mike anything...</span>
                      <div className="px-2 py-1 rounded bg-gradient-to-r from-[#FF6B6B] to-[#A855F7]">
                        <span className="text-white text-[10px] font-600">Send</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-xs text-[#94A3B8] mt-3 opacity-60">
                Real AI twin conversation preview
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
