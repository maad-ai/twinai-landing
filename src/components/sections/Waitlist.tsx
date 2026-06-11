'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Mic, MessagesSquare, Check, Loader2, ArrowRight } from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const inputClass =
  'w-full px-4 py-3 rounded-xl bg-[#F1F2F7] border border-black/[0.06] text-[#0F0F23] placeholder:text-[#64748B]/60 focus:outline-none focus:border-[#A855F7]/40 focus:bg-white transition-all';

export function Waitlist() {
  const [creatorStatus, setCreatorStatus] = useState<FormStatus>('idle');
  const [fanStatus, setFanStatus] = useState<FormStatus>('idle');

  async function handleCreatorSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCreatorStatus('loading');

    const form = e.currentTarget;
    const data = {
      type: 'creator',
      name: (form.elements.namedItem('creator-name') as HTMLInputElement).value,
      email: (form.elements.namedItem('creator-email') as HTMLInputElement).value,
      handle: (form.elements.namedItem('creator-handle') as HTMLInputElement).value,
      followers: (form.elements.namedItem('creator-followers') as HTMLInputElement).value,
      niche: (form.elements.namedItem('creator-niche') as HTMLSelectElement).value,
    };

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setCreatorStatus('success');
      } else {
        setCreatorStatus('error');
      }
    } catch {
      setCreatorStatus('error');
    }
  }

  async function handleFanSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFanStatus('loading');

    const form = e.currentTarget;
    const data = {
      type: 'fan',
      email: (form.elements.namedItem('fan-email') as HTMLInputElement).value,
    };

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setFanStatus('success');
      } else {
        setFanStatus('error');
      }
    } catch {
      setFanStatus('error');
    }
  }

  return (
    <section id="waitlist" className="bg-[#F7F8FB] py-24 md:py-32" aria-label="Join the waitlist">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14 md:mb-20">
            <h2 className="text-display-lg font-display font-800 text-[#0F0F23] mb-4">
              Join the waitlist
            </h2>
            <p className="text-lg text-[#475569] max-w-xl mx-auto">
              Be among the first to launch your AI twin.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Creator form */}
          <ScrollReveal delay={80}>
            <div className="card-light rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl bg-[#7C3AED]/[0.08] flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <Mic className="w-5 h-5 text-[#7C3AED]" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-display font-700 text-lg text-[#0F0F23]">I&apos;m a Creator</h3>
                  <p className="text-sm text-[#64748B]">Create &amp; monetize your AI twin</p>
                </div>
              </div>

              {creatorStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#16A34A]/10 flex items-center justify-center mb-4">
                    <Check className="w-7 h-7 text-[#16A34A]" strokeWidth={2.5} />
                  </div>
                  <p className="font-display font-700 text-lg text-[#0F0F23] mb-1">
                    You&apos;re on the list!
                  </p>
                  <p className="text-sm text-[#64748B]">We&apos;ll reach out soon with next steps.</p>
                </div>
              ) : (
                <form onSubmit={handleCreatorSubmit} noValidate aria-label="Creator waitlist signup">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="creator-name" className="sr-only">Your name</label>
                      <input
                        id="creator-name"
                        name="creator-name"
                        type="text"
                        placeholder="Your name"
                        required
                        autoComplete="name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="creator-email" className="sr-only">Email address</label>
                      <input
                        id="creator-email"
                        name="creator-email"
                        type="email"
                        placeholder="Email address"
                        required
                        autoComplete="email"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="creator-handle" className="sr-only">Social handle</label>
                      <input
                        id="creator-handle"
                        name="creator-handle"
                        type="text"
                        placeholder="@instagram / @tiktok / @youtube"
                        className={inputClass}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="creator-followers" className="sr-only">Follower count</label>
                        <input
                          id="creator-followers"
                          name="creator-followers"
                          type="text"
                          placeholder="Follower count"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="creator-niche" className="sr-only">Your niche</label>
                        <select
                          id="creator-niche"
                          name="creator-niche"
                          className="w-full px-4 py-3 rounded-xl bg-[#F1F2F7] border border-black/[0.06] text-[#64748B] focus:outline-none focus:border-[#A855F7]/40 transition-all"
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
                      disabled={creatorStatus === 'loading'}
                      className="w-full gradient-btn text-white font-600 py-3.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                    >
                      {creatorStatus === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Request creator access
                          <ArrowRight
                            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </button>
                  </div>
                  {creatorStatus === 'error' && (
                    <p className="text-sm text-red-600 mt-3 text-center">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              )}

              {creatorStatus !== 'success' && (
                <p className="text-xs text-[#64748B] mt-4 text-center">
                  First 50 creators pay{' '}
                  <span className="font-600 text-[#7C3AED]">0% platform fees for 6 months</span>
                </p>
              )}
            </div>
          </ScrollReveal>

          {/* Fan form */}
          <ScrollReveal delay={140}>
            <div className="card-light rounded-2xl p-8 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl bg-[#7C3AED]/[0.08] flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <MessagesSquare className="w-5 h-5 text-[#7C3AED]" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-display font-700 text-lg text-[#0F0F23]">I&apos;m a Fan</h3>
                  <p className="text-sm text-[#64748B]">Chat with AI twins of creators you love</p>
                </div>
              </div>

              {fanStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center flex-1">
                  <div className="w-14 h-14 rounded-full bg-[#16A34A]/10 flex items-center justify-center mb-4">
                    <Check className="w-7 h-7 text-[#16A34A]" strokeWidth={2.5} />
                  </div>
                  <p className="font-display font-700 text-lg text-[#0F0F23] mb-1">
                    You&apos;re in!
                  </p>
                  <p className="text-sm text-[#64748B]">We&apos;ll notify you when we launch.</p>
                </div>
              ) : (
                <form onSubmit={handleFanSubmit} noValidate aria-label="Fan waitlist signup" className="flex flex-col flex-1">
                  <div className="space-y-4 flex-1 flex flex-col">
                    <div>
                      <label htmlFor="fan-email" className="sr-only">Your email address</label>
                      <input
                        id="fan-email"
                        name="fan-email"
                        type="email"
                        placeholder="Your email address"
                        required
                        autoComplete="email"
                        className={inputClass}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={fanStatus === 'loading'}
                      className="w-full gradient-btn text-white font-600 py-3.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                    >
                      {fanStatus === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Get early access
                          <ArrowRight
                            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </button>

                    {fanStatus === 'error' && (
                      <p className="text-sm text-red-600 text-center">
                        Something went wrong. Please try again.
                      </p>
                    )}

                    <div className="flex-1 flex flex-col justify-end">
                      <div className="bg-[#F1F2F7] rounded-xl p-5 mt-4">
                        <p className="text-sm font-600 text-[#0F0F23] mb-3">
                          As an early fan, you&apos;ll get:
                        </p>
                        <ul className="space-y-2.5 text-sm text-[#475569]">
                          {[
                            'First access to new twins',
                            '50% off your first month',
                            'VIP badge on your profile',
                            '3 free messages with any twin',
                          ].map((perk) => (
                            <li key={perk} className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-[#16A34A] flex-shrink-0" strokeWidth={2.5} aria-hidden="true" />
                              {perk}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
