'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { PhoneFrame } from '@/components/ui/PhoneFrame';
import { TwinSarahK } from '@/components/ui/Avatars';
import {
  Video,
  Camera,
  Music2,
  Check,
  Send,
  ShieldCheck,
  Eye,
  Bot,
  MessageCircle,
  BarChart3,
  Settings as SettingsIcon,
  Plus,
  Bell,
} from 'lucide-react';

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
    desc: 'Subscribers, messages, revenue in real time. You keep 80% of every subscription.',
  },
  {
    title: 'Stay in full control',
    desc: 'Set limits, block topics, review conversations. Your twin never says what you wouldn’t.',
  },
];

/* ── Shared in-app chrome ───────────────────────── */

function AppHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between px-5 pt-1 pb-3">
      <div className="flex items-center gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="" width={18} height={22} className="w-[18px] h-auto" />
        <p className="font-display font-800 text-[17px] text-[#0F0F23] tracking-tight">{title}</p>
      </div>
      <span className="w-8 h-8 rounded-full bg-black/[0.04] flex items-center justify-center">
        <Bell className="w-4 h-4 text-[#0F0F23]" strokeWidth={2} />
      </span>
    </div>
  );
}

const tabs = [
  { icon: Bot, label: 'Twin' },
  { icon: MessageCircle, label: 'Chats' },
  { icon: BarChart3, label: 'Earnings' },
  { icon: SettingsIcon, label: 'Settings' },
];

function TabBar({ active }: { active: number }) {
  return (
    <div className="flex items-center justify-around bg-white border-t border-black/[0.06] px-3 pt-2 pb-1">
      {tabs.map((t, i) => (
        <span key={t.label} className="flex flex-col items-center gap-0.5 w-14">
          <t.icon
            className={`w-[18px] h-[18px] ${i === active ? 'text-[#7C3AED]' : 'text-[#94A3B8]'}`}
            strokeWidth={i === active ? 2.4 : 2}
          />
          <span
            className={`text-[9px] font-600 ${i === active ? 'text-[#7C3AED]' : 'text-[#94A3B8]'}`}
          >
            {t.label}
          </span>
        </span>
      ))}
    </div>
  );
}

function ScreenShell({
  tab,
  children,
  fab = false,
}: {
  tab: number;
  children: React.ReactNode;
  fab?: boolean;
}) {
  return (
    <div className="bg-[#F7F8FB] h-[510px] flex flex-col relative">
      <div className="flex-1 overflow-hidden">{children}</div>
      {fab && (
        <span className="absolute bottom-[62px] right-4 w-11 h-11 rounded-full bg-[#0F0F23] flex items-center justify-center shadow-lg">
          <Plus className="w-5 h-5 text-white" strokeWidth={2.5} />
        </span>
      )}
      <TabBar active={tab} />
    </div>
  );
}

/* Circular progress ring (Cal AI style) */
function Ring({ pct, size = 64 }: { pct: number; size?: number }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox="0 0 64 64" width={size} height={size} className="-rotate-90">
        <circle cx="32" cy="32" r={r} fill="none" stroke="rgba(15,15,35,0.07)" strokeWidth="6" />
        <circle
          cx="32"
          cy="32"
          r={r}
          fill="none"
          stroke="#7C3AED"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={`${(pct / 100) * c} ${c}`}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[13px] font-700 text-[#0F0F23]">
        {pct}%
      </span>
    </div>
  );
}

/* ── Screen 1: training ─────────────────────────── */
function TrainingScreen() {
  return (
    <ScreenShell tab={0} fab>
      <AppHeader title="Twiinn" />
      <div className="px-4 space-y-2.5">
        {/* Ring + status card */}
        <div className="flex items-center gap-4 bg-white border border-black/[0.04] rounded-2xl px-4 py-3.5 shadow-sm">
          <Ring pct={78} />
          <div>
            <p className="text-[14px] font-700 text-[#0F0F23] leading-tight">Twin training</p>
            <p className="text-[11px] text-[#64748B] mt-0.5">522 pieces of content learned</p>
            <p className="text-[11px] font-600 text-[#7C3AED] mt-1">Analyzing your style…</p>
          </div>
        </div>

        {/* Sources */}
        <div className="bg-white border border-black/[0.04] rounded-2xl px-4 py-2 shadow-sm divide-y divide-black/[0.04]">
          {[
            { icon: Video, name: 'YouTube', detail: '142 videos synced', done: true, color: '#FF0000' },
            { icon: Music2, name: 'TikTok', detail: '380 clips synced', done: true, color: '#0F0F23' },
            { icon: Camera, name: 'Instagram', detail: 'Tap to connect', done: false, color: '#E1306C' },
          ].map((s) => (
            <div key={s.name} className="flex items-center gap-3 py-2.5">
              <span className="w-8 h-8 rounded-xl bg-black/[0.04] flex items-center justify-center">
                <s.icon className="w-4 h-4" style={{ color: s.color }} strokeWidth={2} />
              </span>
              <div className="flex-1">
                <p className="text-[13px] font-600 text-[#0F0F23] leading-tight">{s.name}</p>
                <p className="text-[11px] text-[#64748B]">{s.detail}</p>
              </div>
              {s.done ? (
                <span className="w-5 h-5 rounded-full bg-[#16A34A]/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-[#16A34A]" strokeWidth={3} />
                </span>
              ) : (
                <span className="text-[11px] font-700 text-[#7C3AED]">Add</span>
              )}
            </div>
          ))}
        </div>

        {/* Personality */}
        <div className="bg-white border border-black/[0.04] rounded-2xl px-4 py-3.5 shadow-sm">
          <p className="text-[11px] font-600 uppercase tracking-[0.08em] text-[#64748B] mb-2">
            Personality detected
          </p>
          <div className="flex flex-wrap gap-1.5">
            {['Motivational', 'Direct', 'Science-based', 'Funny'].map((t) => (
              <span
                key={t}
                className="text-[11px] font-600 px-2.5 py-1 rounded-full bg-[#7C3AED]/[0.08] text-[#7C3AED]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}

/* ── Screen 2: fan chat ─────────────────────────── */
function ChatScreen() {
  return (
    <ScreenShell tab={1}>
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white border-b border-black/[0.06]">
        <div className="relative flex-shrink-0">
          <Image
            src="/influencers/sarah-k.jpg"
            alt=""
            width={34}
            height={34}
            className="w-[34px] h-[34px] rounded-full object-cover"
          />
          <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full ring-2 ring-white">
            <TwinSarahK size={16} />
          </div>
        </div>
        <div className="flex-1">
          <p className="font-600 text-[#0F0F23] text-[14px] leading-tight">Sarah K.</p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
            <span className="text-[10px] text-[#64748B]">AI Twin &bull; Online</span>
          </div>
        </div>
        <span className="text-[10px] font-600 text-[#7C3AED] bg-[#7C3AED]/[0.08] rounded-full px-2 py-0.5">
          Subscribed
        </span>
      </div>

      <div className="px-3.5 py-3 space-y-2.5">
        <p className="text-center text-[10px] text-[#94A3B8]">Today, 3:12 AM</p>
        <div className="flex justify-end">
          <div
            className="rounded-2xl rounded-tr-md px-3 py-2 text-[12px] text-white leading-snug max-w-[80%]"
            style={{ background: 'linear-gradient(135deg, #A855F7, #7C3AED)' }}
          >
            I only have 25 min on lunch breaks. Worth training?
          </div>
        </div>
        <div className="flex gap-1.5">
          <div className="flex-shrink-0 mt-0.5">
            <TwinSarahK size={20} />
          </div>
          <div className="bg-white border border-black/[0.05] shadow-sm rounded-2xl rounded-tl-md px-3 py-2 text-[12px] text-[#0F0F23] leading-snug max-w-[85%]">
            100% worth it! 25 min of supersets beats an hour of scrolling between sets 💪
          </div>
        </div>
        <div className="flex gap-1.5">
          <div className="flex-shrink-0 mt-0.5">
            <TwinSarahK size={20} />
          </div>
          <div className="bg-white border border-black/[0.05] shadow-sm rounded-2xl rounded-tl-md px-3 py-2 text-[12px] text-[#0F0F23] leading-snug max-w-[85%]">
            Try this: A1 goblet squats &times;12, A2 push-ups &times;15, B1 rows &times;12, B2 plank 45s. 4 rounds, 90s rest.
          </div>
        </div>
        <div className="flex justify-end">
          <div
            className="rounded-2xl rounded-tr-md px-3 py-2 text-[12px] text-white leading-snug max-w-[80%]"
            style={{ background: 'linear-gradient(135deg, #A855F7, #7C3AED)' }}
          >
            You&apos;re the best 🙌
          </div>
        </div>
        <p className="text-center text-[10px] text-[#94A3B8] pt-0.5">Your twin never sleeps</p>
      </div>

      {/* Quick replies + input */}
      <div className="px-3.5 mt-auto pb-3">
        <div className="flex gap-1.5 mb-2 overflow-hidden">
          {['Meal plan?', 'Form check', 'Supplements'].map((q) => (
            <span
              key={q}
              className="text-[11px] font-500 text-[#7C3AED] bg-white border border-[#7C3AED]/20 rounded-full px-2.5 py-1 whitespace-nowrap"
            >
              {q}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 pl-3.5 pr-1 py-1 rounded-full bg-white border border-black/[0.08] shadow-sm">
          <span className="text-[12px] text-[#94A3B8] flex-1">Ask Sarah anything…</span>
          <div className="w-7 h-7 rounded-full gradient-btn flex items-center justify-center">
            <Send className="w-3 h-3 text-white" strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}

/* ── Screen 3: earnings (Cal AI "Progress" style) ── */
function DashboardScreen() {
  return (
    <ScreenShell tab={2}>
      <AppHeader title="Earnings" />
      <div className="px-4 space-y-2.5">
        {/* Two ring cards */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-white border border-black/[0.04] rounded-2xl px-3 py-3 shadow-sm flex flex-col items-center text-center">
            <Ring pct={72} size={56} />
            <p className="text-[11px] text-[#64748B] mt-1.5">Monthly goal</p>
            <p className="text-[13px] font-700 text-[#0F0F23]">$4,200</p>
          </div>
          <div className="bg-white border border-black/[0.04] rounded-2xl px-3 py-3 shadow-sm flex flex-col items-center text-center justify-center">
            <p className="font-display font-800 text-[24px] text-[#0F0F23] leading-none">312</p>
            <p className="text-[11px] text-[#64748B] mt-1.5">Subscribers</p>
            <p className="text-[11px] font-600 text-[#16A34A]">+18 this week</p>
          </div>
        </div>

        {/* Segmented control */}
        <div className="flex bg-black/[0.05] rounded-full p-0.5">
          {['7D', '30D', '90D', 'All time'].map((s, i) => (
            <span
              key={s}
              className={`flex-1 text-center text-[11px] font-600 py-1.5 rounded-full ${
                i === 1 ? 'bg-white text-[#0F0F23] shadow-sm' : 'text-[#64748B]'
              }`}
            >
              {s}
            </span>
          ))}
        </div>

        {/* Revenue chart with annotation bubble */}
        <div className="bg-white border border-black/[0.04] rounded-2xl px-4 pt-3 pb-2 shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <p className="text-[12px] font-700 text-[#0F0F23]">Revenue</p>
            <span className="text-[10px] font-600 text-[#16A34A] bg-[#16A34A]/[0.08] rounded-full px-2 py-0.5">
              +23% vs last
            </span>
          </div>
          <svg viewBox="0 0 260 96" className="w-full">
            <defs>
              <linearGradient id="rev-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#A855F7" stopOpacity="0.25" />
                <stop offset="1" stopColor="#A855F7" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 78 C 25 74, 40 66, 60 62 S 95 58, 115 48 S 150 40, 175 34 S 215 22, 250 14 L 250 96 L 0 96 Z"
              fill="url(#rev-fill)"
            />
            <path
              d="M0 78 C 25 74, 40 66, 60 62 S 95 58, 115 48 S 150 40, 175 34 S 215 22, 250 14"
              fill="none"
              stroke="#7C3AED"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="250" cy="14" r="4" fill="#7C3AED" stroke="#fff" strokeWidth="2" />
            {/* Annotation bubble */}
            <g transform="translate(186, 0)">
              <rect x="0" y="0" width="52" height="20" rx="6" fill="#0F0F23" />
              <text x="26" y="13.5" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">
                $4,200
              </text>
            </g>
          </svg>
          <p className="text-[10px] font-600 text-[#16A34A] text-center pb-1">
            Great month! Your twin answered 8,400 questions 🎉
          </p>
        </div>

        {/* Payout */}
        <div className="flex items-center justify-between bg-white border border-black/[0.04] rounded-2xl px-4 py-3 shadow-sm">
          <div>
            <p className="text-[12px] font-600 text-[#0F0F23]">Next payout</p>
            <p className="text-[11px] text-[#64748B]">June 30</p>
          </div>
          <p className="text-[14px] font-700 text-[#0F0F23]">$3,570</p>
        </div>
      </div>
    </ScreenShell>
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
    <ScreenShell tab={3}>
      <AppHeader title="Settings" />
      <div className="px-4 space-y-2.5">
        <div className="flex items-center gap-2.5 bg-[#16A34A]/[0.08] border border-[#16A34A]/20 rounded-2xl px-4 py-3">
          <ShieldCheck className="w-4 h-4 text-[#16A34A]" strokeWidth={2} />
          <p className="text-[12px] font-600 text-[#15803D]">Personality approved by you</p>
        </div>

        <div className="bg-white border border-black/[0.04] rounded-2xl px-4 py-1 shadow-sm divide-y divide-black/[0.04]">
          <p className="text-[11px] font-600 uppercase tracking-[0.08em] text-[#64748B] pt-3 pb-2">
            Allowed topics
          </p>
          {topics.map((t) => (
            <div key={t.name} className="flex items-center justify-between py-2.5">
              <p className="text-[13px] font-500 text-[#0F0F23]">{t.name}</p>
              <span
                className={`w-9 h-5 rounded-full relative ${t.on ? 'bg-[#16A34A]' : 'bg-black/15'}`}
                aria-hidden="true"
              >
                <span
                  className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow ${
                    t.on ? 'right-0.5' : 'left-0.5'
                  }`}
                />
              </span>
            </div>
          ))}
        </div>

        <div className="bg-white border border-black/[0.04] rounded-2xl px-4 py-1 shadow-sm divide-y divide-black/[0.04]">
          <div className="flex items-center gap-2.5 py-3">
            <Eye className="w-4 h-4 text-[#7C3AED]" strokeWidth={2} />
            <p className="text-[13px] text-[#0F0F23] font-500 flex-1">Review conversations</p>
            <span className="text-[11px] font-700 text-[#7C3AED]">Open</span>
          </div>
          <div className="flex items-center gap-2.5 py-3">
            <MessageCircle className="w-4 h-4 text-[#7C3AED]" strokeWidth={2} />
            <p className="text-[13px] text-[#0F0F23] font-500 flex-1">Monthly price</p>
            <span className="text-[11px] font-700 text-[#0F0F23]">$14.99</span>
          </div>
        </div>

        <p className="text-center text-[11px] text-[#94A3B8] pt-1">
          Your twin never says what you wouldn&apos;t.
        </p>
      </div>
    </ScreenShell>
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
              <PhoneFrame width="w-[290px] sm:w-[300px]">
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
