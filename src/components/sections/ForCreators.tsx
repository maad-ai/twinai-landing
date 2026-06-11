'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { PhoneFrame } from '@/components/ui/PhoneFrame';
import { TwinSarahK } from '@/components/ui/Avatars';
import { Video, Camera, Music2, Check, Send, ShieldCheck, Eye } from 'lucide-react';

const features = [
  {
    title: 'Train it on your content',
    desc: 'Connect YouTube, TikTok or Instagram. Your twin learns your tone, your advice, your personality — and you approve it before launch.',
  },
  {
    title: 'Fans chat with it 24/7',
    desc: 'Thousands of personalized conversations at once, in your voice — even while you sleep.',
  },
  {
    title: 'Track earnings in your dashboard',
    desc: 'Subscribers, messages, revenue in real time. You keep 85% of every subscription.',
  },
  {
    title: 'Stay in full control',
    desc: 'Set limits, block topics, review conversations. Your twin never says what you wouldn’t.',
  },
];

/* ── Screen 1: training ─────────────────────────── */
function TrainingScreen() {
  return (
    <div className="px-4 pt-2 pb-3 bg-[#F7F8FB] h-[400px]">
      <p className="font-display font-700 text-[17px] text-[#0F0F23] px-1 mb-3">Train your twin</p>
      <div className="space-y-2">
        {[
          { icon: Video, name: 'YouTube', detail: '142 videos', done: true, color: '#FF0000' },
          { icon: Music2, name: 'TikTok', detail: '380 clips', done: true, color: '#0F0F23' },
          { icon: Camera, name: 'Instagram', detail: 'Connect', done: false, color: '#E1306C' },
        ].map((s) => (
          <div key={s.name} className="flex items-center gap-3 bg-white border border-black/[0.05] rounded-xl px-3.5 py-2.5 shadow-sm">
            <s.icon className="w-4.5 h-4.5 w-[18px] h-[18px]" style={{ color: s.color }} strokeWidth={2} />
            <div className="flex-1">
              <p className="text-[13px] font-600 text-[#0F0F23] leading-tight">{s.name}</p>
              <p className="text-[11px] text-[#64748B]">{s.detail}</p>
            </div>
            {s.done ? (
              <span className="w-5 h-5 rounded-full bg-[#16A34A]/10 flex items-center justify-center">
                <Check className="w-3 h-3 text-[#16A34A]" strokeWidth={3} />
              </span>
            ) : (
              <span className="text-[11px] font-600 text-[#7C3AED]">+ Add</span>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white border border-black/[0.05] rounded-xl px-3.5 py-3 mt-3 shadow-sm">
        <div className="flex justify-between text-[12px] mb-1.5">
          <span className="font-600 text-[#0F0F23]">Analyzing your style…</span>
          <span className="text-[#7C3AED] font-600">78%</span>
        </div>
        <div className="w-full h-1.5 bg-black/[0.06] rounded-full overflow-hidden">
          <div className="h-full w-[78%] rounded-full" style={{ background: 'linear-gradient(90deg, #A855F7, #7C3AED)' }} />
        </div>
      </div>

      <p className="text-[11px] font-600 uppercase tracking-[0.08em] text-[#64748B] px-1 mt-4 mb-2">
        Personality detected
      </p>
      <div className="flex flex-wrap gap-1.5 px-1">
        {['Motivational', 'Direct', 'Science-based', 'Funny'].map((t) => (
          <span key={t} className="text-[11px] font-500 px-2.5 py-1 rounded-full bg-[#7C3AED]/[0.08] text-[#7C3AED]">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Screen 2: fan chat ─────────────────────────── */
function ChatScreen() {
  return (
    <div className="bg-[#F7F8FB] h-[400px] flex flex-col">
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white border-b border-black/[0.06]">
        <div className="relative flex-shrink-0">
          <Image src="/influencers/sarah-k.jpg" alt="" width={32} height={32} className="w-8 h-8 rounded-full object-cover" />
          <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full ring-2 ring-white">
            <TwinSarahK size={16} />
          </div>
        </div>
        <div>
          <p className="font-600 text-[#0F0F23] text-[13px] leading-tight">Sarah K.</p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
            <span className="text-[10px] text-[#64748B]">AI Twin &bull; Online</span>
          </div>
        </div>
      </div>
      <div className="px-3.5 py-3 space-y-2.5 flex-1">
        <div className="flex justify-end">
          <div className="rounded-2xl rounded-tr-md px-3 py-2 text-[12px] text-white leading-snug max-w-[80%]" style={{ background: 'linear-gradient(135deg, #A855F7, #7C3AED)' }}>
            I only have 25 min on lunch breaks. Worth training?
          </div>
        </div>
        <div className="flex gap-1.5">
          <div className="flex-shrink-0 mt-0.5"><TwinSarahK size={20} /></div>
          <div className="bg-white border border-black/[0.05] shadow-sm rounded-2xl rounded-tl-md px-3 py-2 text-[12px] text-[#0F0F23] leading-snug max-w-[85%]">
            100% worth it! 25 min of supersets beats an hour of scrolling between sets. Here&apos;s my lunch-break circuit…
          </div>
        </div>
        <div className="flex justify-end">
          <div className="rounded-2xl rounded-tr-md px-3 py-2 text-[12px] text-white leading-snug max-w-[80%]" style={{ background: 'linear-gradient(135deg, #A855F7, #7C3AED)' }}>
            You&apos;re the best 🙌
          </div>
        </div>
        <p className="text-center text-[10px] text-[#94A3B8] pt-1">3:12 AM — your twin never sleeps</p>
      </div>
      <div className="px-3.5 pb-3">
        <div className="flex items-center gap-2 pl-3.5 pr-1 py-1 rounded-full bg-white border border-black/[0.08] shadow-sm">
          <span className="text-[12px] text-[#94A3B8] flex-1">Ask Sarah anything…</span>
          <div className="w-7 h-7 rounded-full gradient-btn flex items-center justify-center">
            <Send className="w-3 h-3 text-white" strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Screen 3: dashboard ────────────────────────── */
function DashboardScreen() {
  const bars = [38, 52, 44, 60, 55, 72, 80];
  return (
    <div className="px-4 pt-2 pb-3 bg-[#F7F8FB] h-[400px]">
      <p className="font-display font-700 text-[17px] text-[#0F0F23] px-1 mb-3">Dashboard</p>

      <div className="bg-white border border-black/[0.05] rounded-xl px-4 py-3 shadow-sm">
        <p className="text-[11px] text-[#64748B] uppercase tracking-[0.08em]">This month</p>
        <div className="flex items-end justify-between">
          <p className="font-display font-800 text-[26px] text-[#0F0F23] leading-tight">$4,200</p>
          <p className="text-[12px] font-600 text-[#16A34A] pb-1">+23% vs last</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-2">
        <div className="bg-white border border-black/[0.05] rounded-xl px-3.5 py-2.5 shadow-sm">
          <p className="font-display font-700 text-[18px] text-[#0F0F23]">312</p>
          <p className="text-[10px] text-[#64748B] uppercase tracking-[0.08em]">Subscribers</p>
        </div>
        <div className="bg-white border border-black/[0.05] rounded-xl px-3.5 py-2.5 shadow-sm">
          <p className="font-display font-700 text-[18px] text-[#0F0F23]">1.2K</p>
          <p className="text-[10px] text-[#64748B] uppercase tracking-[0.08em]">Messages/day</p>
        </div>
      </div>

      <div className="bg-white border border-black/[0.05] rounded-xl px-4 py-3 mt-2 shadow-sm">
        <p className="text-[11px] font-600 text-[#0F0F23] mb-2">Revenue — last 7 days</p>
        <div className="flex items-end gap-1.5 h-[72px]">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t"
              style={{
                height: `${h}%`,
                background: i === bars.length - 1 ? 'linear-gradient(180deg, #A855F7, #7C3AED)' : 'rgba(124,58,237,0.15)',
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between bg-white border border-black/[0.05] rounded-xl px-4 py-2.5 mt-2 shadow-sm">
        <p className="text-[12px] text-[#475569]">Next payout</p>
        <p className="text-[12px] font-600 text-[#0F0F23]">June 30 &bull; $3,570</p>
      </div>
    </div>
  );
}

/* ── Screen 4: control ──────────────────────────── */
function ControlScreen() {
  const topics = [
    { name: 'Training & form', on: true },
    { name: 'Nutrition advice', on: true },
    { name: 'Medical questions', on: false },
    { name: 'Personal life', on: false },
  ];
  return (
    <div className="px-4 pt-2 pb-3 bg-[#F7F8FB] h-[400px]">
      <p className="font-display font-700 text-[17px] text-[#0F0F23] px-1 mb-3">Twin settings</p>

      <div className="flex items-center gap-2.5 bg-[#16A34A]/[0.08] border border-[#16A34A]/20 rounded-xl px-3.5 py-2.5">
        <ShieldCheck className="w-4 h-4 text-[#16A34A]" strokeWidth={2} />
        <p className="text-[12px] font-600 text-[#15803D]">Personality approved by you</p>
      </div>

      <p className="text-[11px] font-600 uppercase tracking-[0.08em] text-[#64748B] px-1 mt-4 mb-2">
        Allowed topics
      </p>
      <div className="space-y-2">
        {topics.map((t) => (
          <div key={t.name} className="flex items-center justify-between bg-white border border-black/[0.05] rounded-xl px-3.5 py-2.5 shadow-sm">
            <p className="text-[13px] font-500 text-[#0F0F23]">{t.name}</p>
            <span
              className={`w-9 h-5 rounded-full relative transition-colors ${t.on ? 'bg-[#16A34A]' : 'bg-black/15'}`}
              aria-hidden="true"
            >
              <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow ${t.on ? 'right-0.5' : 'left-0.5'}`} />
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2.5 bg-white border border-black/[0.05] rounded-xl px-3.5 py-2.5 mt-2 shadow-sm">
        <Eye className="w-4 h-4 text-[#7C3AED]" strokeWidth={2} />
        <p className="text-[12px] text-[#475569] flex-1">Review conversations</p>
        <span className="text-[11px] font-600 text-[#7C3AED]">Open</span>
      </div>
    </div>
  );
}

const screens = [TrainingScreen, ChatScreen, DashboardScreen, ControlScreen];

export function ForCreators() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Only auto-rotate while the section is on screen (and motion is allowed).
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setInterval(() => setActive((a) => (a + 1) % features.length), 4500);
    return () => clearInterval(timer);
  }, [visible, active]);

  const Screen = screens[active];

  return (
    <section
      ref={sectionRef}
      id="creators"
      className="bg-white py-24 md:py-32"
      aria-label="What does Twiinn AI include"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14 md:mb-20">
            <p className="eyebrow text-[#7C3AED] mb-3">For Creators</p>
            <h2 className="text-display-lg font-display font-800 text-[#0F0F23]">
              What does Twiinn AI include?
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
            {/* Phone — screen follows the selected feature */}
            <div className="flex flex-col items-center order-2 lg:order-1">
              <PhoneFrame>
                <div key={active} style={{ animation: 'fadeSlideIn 0.35s var(--ease-out-expo) both' }}>
                  <Screen />
                </div>
              </PhoneFrame>
              {/* Dots */}
              <div className="flex items-center gap-2 mt-6" role="tablist" aria-label="App screens">
                {features.map((f, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={active === i}
                    aria-label={f.title}
                    onClick={() => setActive(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7] ${
                      active === i ? 'bg-[#0F0F23]' : 'bg-black/15 hover:bg-black/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Feature cards — click to switch the phone screen */}
            <div className="space-y-4 order-1 lg:order-2">
              {features.map((f, i) => (
                <button
                  key={f.title}
                  onClick={() => setActive(i)}
                  className={`w-full text-left rounded-2xl p-6 border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7] ${
                    active === i
                      ? 'bg-white border-[#0F0F23]/60 shadow-[var(--shadow-md)]'
                      : 'bg-white border-black/[0.07] shadow-[var(--shadow-sm)] hover:border-black/20'
                  }`}
                >
                  <h3 className="font-display font-700 text-[17px] text-[#0F0F23] mb-1.5">
                    {f.title}
                  </h3>
                  <p className="text-[15px] text-[#475569] leading-[1.65]">{f.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
