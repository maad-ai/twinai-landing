'use client';

import { useState, useEffect, useRef, type ComponentType } from 'react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Send, RotateCw } from 'lucide-react';
import { TwinCoachMike, TwinSarahGlow, TwinAlexCapital } from '@/components/ui/Avatars';

interface CreatorProfile {
  name: string;
  niche: string;
  photo: string;
  TwinAvatar: ComponentType<{ size?: number }>;
  tagColor: string;
}

interface DemoConversation {
  creator: CreatorProfile;
  messages: { from: 'user' | 'twin'; text: string }[];
}

const demoConversations: DemoConversation[] = [
  {
    creator: {
      name: 'Coach Mike',
      niche: 'Fitness',
      photo: '/influencers/coach-mike.jpg',
      TwinAvatar: TwinCoachMike,
      tagColor: 'text-[#E11D48] bg-[#E11D48]/10',
    },
    messages: [
      {
        from: 'user',
        text: "Hey Mike! I've been stuck at 185lbs on bench for 3 weeks. Any tips?",
      },
      {
        from: 'twin',
        text: "Plateaus are normal! Try pause reps — lower the bar, hold 2s at chest, then press. 3x5 at 170lbs. Also, are you sleeping 7+ hours? Recovery is where gains happen.",
      },
      { from: 'user', text: 'Only getting like 6 hours honestly...' },
      {
        from: 'twin',
        text: "That's your bottleneck. Muscles grow during deep sleep. No screens 30min before bed, magnesium supplement, aim for 7.5hrs. You'll break 185 within 2 weeks.",
      },
    ],
  },
  {
    creator: {
      name: 'Sarah Glow',
      niche: 'Skincare',
      photo: '/influencers/sarah-glow.jpg',
      TwinAvatar: TwinSarahGlow,
      tagColor: 'text-[#0E7490] bg-[#0E7490]/10',
    },
    messages: [
      { from: 'user', text: 'My skin gets super oily by noon even after moisturizing. Help?' },
      {
        from: 'twin',
        text: 'Classic over-stripping issue! Your skin overproduces oil when dehydrated. What cleanser are you using? If it has sulfates, that\'s likely the culprit.',
      },
      { from: 'user', text: "I'm using a foaming cleanser from the drugstore" },
      {
        from: 'twin',
        text: 'Most foaming ones strip natural oils. Try CeraVe Hydrating or La Roche-Posay Toleriane. Add niacinamide serum before moisturizer — regulates sebum in ~2 weeks.',
      },
    ],
  },
  {
    creator: {
      name: 'Alex Capital',
      niche: 'Investing',
      photo: '/influencers/alex-capital.jpg',
      TwinAvatar: TwinAlexCapital,
      tagColor: 'text-[#16A34A] bg-[#16A34A]/10',
    },
    messages: [
      {
        from: 'user',
        text: 'I have $5K saved. Should I invest it all at once or dollar-cost average?',
      },
      {
        from: 'twin',
        text: 'Statistically, lump sum beats DCA ~65% of the time. But if $5K feels like a lot, DCA over 3–5 months helps you sleep at night. Best strategy = one you\'ll stick with.',
      },
      { from: 'user', text: 'What would you put it in?' },
      {
        from: 'twin',
        text: 'For a beginner: 70% VTI/VOO, 20% VXUS, 10% BND. Boring? Yes. Boring makes money. Keep meme stocks to play money only.',
      },
    ],
  },
];

export function InteractiveDemo() {
  const [activeCreator, setActiveCreator] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [started, setStarted] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const convo = demoConversations[activeCreator];
  const { TwinAvatar } = convo.creator;

  // Autoplay only once the section is actually on screen.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStarted(true);
      setVisibleMessages(demoConversations[0].messages.length);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setVisibleMessages(0);
    setIsTyping(false);
  }, [activeCreator]);

  useEffect(() => {
    if (!started || visibleMessages >= convo.messages.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisibleMessages(convo.messages.length);
      return;
    }

    const nextMsg = convo.messages[visibleMessages];
    const delay = nextMsg.from === 'twin' ? 1800 : 800;

    if (nextMsg.from === 'twin') {
      const typingTimer = setTimeout(() => setIsTyping(true), 400);
      const msgTimer = setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages((v) => v + 1);
      }, delay);
      return () => {
        clearTimeout(typingTimer);
        clearTimeout(msgTimer);
      };
    }

    const timer = setTimeout(() => setVisibleMessages((v) => v + 1), delay);
    return () => clearTimeout(timer);
  }, [started, visibleMessages, convo.messages]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [visibleMessages, isTyping]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F7F8FB] py-24 md:py-32"
      id="demo"
      aria-label="Interactive demo"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14 md:mb-20">
            <h2 className="text-display-lg font-display font-800 text-[#0F0F23] mb-4">
              This is what a <span className="text-[#7C3AED]">Twin</span> feels like
            </h2>
            <p className="text-lg text-[#475569] max-w-xl mx-auto">
              Three sample twins, three niches. Pick one and watch it answer.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto">
          {/* Creator selector */}
          <ScrollReveal delay={80}>
            <div className="flex gap-3 mb-5 justify-center flex-wrap" role="tablist" aria-label="Select a creator">
              {demoConversations.map((c, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={activeCreator === i}
                  onClick={() => setActiveCreator(i)}
                  className={`flex items-center gap-2.5 px-4 py-2 rounded-full border transition-all duration-200 text-sm font-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7] ${
                    activeCreator === i
                      ? 'border-[#7C3AED] bg-[#7C3AED]/[0.08] text-[#7C3AED] shadow-sm'
                      : 'border-black/10 text-[#64748B] hover:border-[#7C3AED]/30 hover:text-[#0F0F23]'
                  }`}
                >
                  <Image
                    src={c.creator.photo}
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  {c.creator.name}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            {/* Chat window */}
            <div className="card-light rounded-2xl overflow-hidden" role="tabpanel" aria-label={`Chat with ${convo.creator.name}`}>
              {/* Chat header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-black/5 bg-white">
                {/* Photo + twin badge */}
                <div className="relative flex-shrink-0">
                  <Image
                    src={convo.creator.photo}
                    alt=""
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full ring-2 ring-white">
                    <TwinAvatar size={20} />
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="font-display font-700 text-[#0F0F23] text-sm">{convo.creator.name}</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse-glow flex-shrink-0" aria-hidden="true" />
                    <span className="text-xs text-[#64748B]">AI Twin &bull; Online 24/7</span>
                  </div>
                </div>
                <div className={`ml-auto px-3 py-1 rounded-full text-xs font-600 flex-shrink-0 ${convo.creator.tagColor}`}>
                  {convo.creator.niche}
                </div>
              </div>

              {/* Messages */}
              <div
                ref={chatRef}
                className="p-5 space-y-4 min-h-[320px] max-h-[400px] overflow-y-auto bg-gradient-to-b from-[#F7F8FB] to-white"
                aria-live="polite"
                aria-label="Conversation"
              >
                {convo.messages.slice(0, visibleMessages).map((msg, i) => (
                  <div
                    key={`${activeCreator}-${i}`}
                    className={`flex gap-2 ${msg.from === 'user' ? 'justify-end' : ''}`}
                    style={{ animation: 'fadeSlideIn 0.35s var(--ease-out-expo) both' }}
                  >
                    {msg.from === 'twin' && (
                      <div className="flex-shrink-0 mt-1">
                        <TwinAvatar size={28} />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                        msg.from === 'user'
                          ? 'bg-[#7C3AED]/[0.08] text-[#0F0F23] rounded-tr-sm'
                          : 'bg-white text-[#0F0F23] shadow-sm border border-black/5 rounded-tl-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex gap-2" aria-label={`${convo.creator.name} is typing`}>
                    <div className="flex-shrink-0 mt-1">
                      <TwinAvatar size={28} />
                    </div>
                    <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm border border-black/5">
                      <div className="flex gap-1.5">
                        {[0, 150, 300].map((d) => (
                          <span
                            key={d}
                            className="w-2 h-2 rounded-full bg-[#94A3B8]/40 animate-typing"
                            style={{ animationDelay: `${d}ms` }}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {started && visibleMessages >= convo.messages.length && (
                  <div className="text-center pt-4">
                    <button
                      onClick={() => {
                        setVisibleMessages(0);
                        setIsTyping(false);
                      }}
                      className="inline-flex items-center gap-1.5 text-sm text-[#7C3AED] font-500 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7] rounded-sm"
                    >
                      <RotateCw className="w-3.5 h-3.5" aria-hidden="true" />
                      Replay conversation
                    </button>
                  </div>
                )}
              </div>

              {/* Fake input */}
              <div className="px-5 py-3 border-t border-black/5 bg-white">
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#F1F2F7] border border-black/5" aria-hidden="true">
                  <span className="text-sm text-[#64748B]/60 flex-1">Type a message...</span>
                  <div className="w-9 h-9 rounded-lg gradient-btn flex items-center justify-center flex-shrink-0">
                    <Send className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-[#64748B] mt-4">
              Scripted demo for illustration — Coach Mike, Sarah Glow, and Alex Capital are sample
              personas.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
