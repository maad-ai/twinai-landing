import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function Waitlist() {
  return (
    <section id="waitlist" className="bg-white py-24 md:py-32" aria-label="Join the waitlist">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2
              className="font-display font-800 text-[#0F0F23] tracking-tight mb-4"
              style={{ fontSize: 'clamp(1.875rem, 5vw, 3rem)' }}
            >
              Join the <span className="gradient-text">waitlist</span>
            </h2>
            <p className="text-lg text-[#94A3B8] max-w-xl mx-auto">
              Be among the first to launch your AI twin. Early creators get 0% commission for 6
              months.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Creator form */}
          <ScrollReveal delay={100}>
            <div className="card-light rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#A855F7] flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <span className="text-white text-lg">🎤</span>
                </div>
                <div>
                  <h3 className="font-display font-700 text-lg text-[#0F0F23]">I&apos;m a Creator</h3>
                  <p className="text-sm text-[#94A3B8]">Create &amp; monetize your AI twin</p>
                </div>
              </div>

              <form noValidate aria-label="Creator waitlist signup">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="creator-name" className="sr-only">Your name</label>
                    <input
                      id="creator-name"
                      type="text"
                      placeholder="Your name"
                      autoComplete="name"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-black/5 text-[#0F0F23] placeholder:text-[#94A3B8]/60 focus:outline-none focus:border-[#A855F7]/40 focus:bg-[#A855F7]/[0.02] transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="creator-email" className="sr-only">Email address</label>
                    <input
                      id="creator-email"
                      type="email"
                      placeholder="Email address"
                      autoComplete="email"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-black/5 text-[#0F0F23] placeholder:text-[#94A3B8]/60 focus:outline-none focus:border-[#A855F7]/40 focus:bg-[#A855F7]/[0.02] transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="creator-handle" className="sr-only">Social handle</label>
                    <input
                      id="creator-handle"
                      type="text"
                      placeholder="@instagram / @tiktok / @youtube"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-black/5 text-[#0F0F23] placeholder:text-[#94A3B8]/60 focus:outline-none focus:border-[#A855F7]/40 focus:bg-[#A855F7]/[0.02] transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="creator-followers" className="sr-only">Follower count</label>
                      <input
                        id="creator-followers"
                        type="text"
                        placeholder="Followers count"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-black/5 text-[#0F0F23] placeholder:text-[#94A3B8]/60 focus:outline-none focus:border-[#A855F7]/40 focus:bg-[#A855F7]/[0.02] transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="creator-niche" className="sr-only">Your niche</label>
                      <select
                        id="creator-niche"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-black/5 text-[#94A3B8] focus:outline-none focus:border-[#A855F7]/40 transition-all"
                      >
                        <option value="">Your niche</option>
                        <option value="fitness">Fitness</option>
                        <option value="finance">Finance</option>
                        <option value="beauty">Beauty</option>
                        <option value="gaming">Gaming</option>
                        <option value="cooking">Cooking</option>
                        <option value="tech">Tech</option>
                        <option value="lifestyle">Lifestyle</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full gradient-btn text-white font-600 py-3.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7]"
                  >
                    Create My Twin &rarr;
                  </button>
                </div>
              </form>

              <p className="text-xs text-[#94A3B8] mt-4 text-center">
                First 50 creators get{' '}
                <span className="font-600 text-[#FF6B6B]">0% commission for 6 months</span>
              </p>
            </div>
          </ScrollReveal>

          {/* Fan form */}
          <ScrollReveal delay={180}>
            <div className="card-light rounded-2xl p-8 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#A855F7] flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <span className="text-white text-lg">💬</span>
                </div>
                <div>
                  <h3 className="font-display font-700 text-lg text-[#0F0F23]">I&apos;m a Fan</h3>
                  <p className="text-sm text-[#94A3B8]">Chat with AI twins of creators you love</p>
                </div>
              </div>

              <form noValidate aria-label="Fan waitlist signup" className="flex flex-col flex-1">
                <div className="space-y-4 flex-1 flex flex-col">
                  <div>
                    <label htmlFor="fan-email" className="sr-only">Your email address</label>
                    <input
                      id="fan-email"
                      type="email"
                      placeholder="Your email address"
                      autoComplete="email"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-black/5 text-[#0F0F23] placeholder:text-[#94A3B8]/60 focus:outline-none focus:border-[#00D4FF]/40 focus:bg-[#00D4FF]/[0.02] transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white font-600 py-3.5 rounded-xl hover:shadow-lg hover:shadow-[#00D4FF]/20 hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]"
                    style={{ background: 'linear-gradient(135deg, #00D4FF, #A855F7)' }}
                  >
                    Get Early Access &rarr;
                  </button>

                  <div className="flex-1 flex flex-col justify-end">
                    <div className="bg-[#F8FAFC] rounded-xl p-5 mt-4">
                      <p className="text-sm font-600 text-[#0F0F23] mb-3">
                        As an early fan, you&apos;ll get:
                      </p>
                      <ul className="space-y-2.5 text-sm text-[#94A3B8]">
                        {[
                          'First access to new twins',
                          '50% off your first month',
                          'VIP badge on your profile',
                          '3 free messages with any twin',
                        ].map((perk) => (
                          <li key={perk} className="flex items-center gap-2">
                            <span className="text-[#84FF57] flex-shrink-0" aria-hidden="true">&#10003;</span>
                            {perk}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={250}>
          <div className="text-center mt-10">
            <p className="text-[#94A3B8]">
              <span
                className="font-display font-800 text-2xl gradient-text"
                aria-label="27 out of 50"
              >
                27 / 50
              </span>
              <br />
              <span className="text-sm">early creator spots remaining</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
