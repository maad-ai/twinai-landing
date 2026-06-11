'use client';

import { useState, useRef } from 'react';
import { track } from '@vercel/analytics';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ArrowRight, Share2, Check } from 'lucide-react';

const quickPicks = [
  { label: 'Casual', price: 9.99 },
  { label: 'Standard', price: 19.99 },
  { label: 'Premium', price: 49.99 },
];

const subOptions = [100, 250, 500, 1000, 2500];

const money = (n: number, decimals = 0) =>
  n.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

export function Pricing() {
  const [price, setPrice] = useState(19.99);
  const [subs, setSubs] = useState(250);
  const [shared, setShared] = useState(false);
  const interacted = useRef(false);

  const perSub = price * 0.85;
  const monthly = perSub * subs;

  function onInteract() {
    if (!interacted.current) {
      interacted.current = true;
      track('calculator_interacted');
    }
  }

  async function shareMath() {
    const url = `https://twiinn.ai/earn?p=${price}&s=${subs}`;
    track('calculator_share', { price, subs });
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'My AI twin could earn $' + money(monthly) + '/month',
          url,
        });
        return;
      }
    } catch {
      /* user cancelled share — fall through to copy */
    }
    try {
      await navigator.clipboard.writeText(url);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    } catch {
      window.open(url, '_blank', 'noopener');
    }
  }

  return (
    <section id="pricing" className="bg-[#F7F8FB] py-24 md:py-32" aria-label="Pricing">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="eyebrow text-[#7C3AED] mb-3">Pricing</p>
          <h2 className="text-display-lg font-display font-800 text-[#0F0F23] mb-6">
            You set the price. You keep 85%.
          </h2>
          <p className="text-lg text-[#475569] max-w-xl mx-auto mb-12">
            Any price you want — $5 or $100/month, it&apos;s your call. We handle payments,
            hosting, and AI. Drag the slider and see what your twin could earn.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div
            className="card-light rounded-3xl p-8 sm:p-10 max-w-2xl mx-auto text-left"
            style={{ boxShadow: 'var(--shadow-md)' }}
          >
            {/* Price slider */}
            <div className="flex items-end justify-between mb-2">
              <label htmlFor="price-slider" className="text-sm font-600 text-[#0F0F23]">
                Your monthly price
              </label>
              <p className="font-display font-800 text-3xl text-[#0F0F23] leading-none">
                ${price.toFixed(2)}
                <span className="text-sm font-500 text-[#64748B]">/mo</span>
              </p>
            </div>
            <input
              id="price-slider"
              type="range"
              min={4.99}
              max={99.99}
              step={5}
              value={price}
              onChange={(e) => {
                setPrice(parseFloat(e.target.value));
                onInteract();
              }}
              className="w-full h-2 rounded-full appearance-none cursor-pointer bg-black/[0.08] accent-[#7C3AED]"
              aria-valuetext={`$${price.toFixed(2)} per month`}
            />
            <div className="flex justify-between text-xs text-[#94A3B8] mt-1.5 mb-5">
              <span>$4.99</span>
              <span>$99.99</span>
            </div>

            {/* Quick picks */}
            <div className="flex flex-wrap gap-2 mb-8">
              {quickPicks.map((q) => (
                <button
                  key={q.label}
                  onClick={() => {
                    setPrice(q.price);
                    onInteract();
                  }}
                  className={`text-sm font-600 px-4 py-2 rounded-full border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7] ${
                    price === q.price
                      ? 'bg-[#7C3AED] border-[#7C3AED] text-white'
                      : 'bg-white border-black/10 text-[#475569] hover:border-[#7C3AED]/40'
                  }`}
                >
                  {q.label} ${q.price}
                </button>
              ))}
            </div>

            {/* Subscriber count */}
            <p className="text-sm font-600 text-[#0F0F23] mb-2.5">Subscribers</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {subOptions.map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setSubs(s);
                    onInteract();
                  }}
                  className={`text-sm font-600 px-4 py-2 rounded-full border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7] ${
                    subs === s
                      ? 'bg-[#0F0F23] border-[#0F0F23] text-white'
                      : 'bg-white border-black/10 text-[#475569] hover:border-black/30'
                  }`}
                >
                  {money(s)}
                </button>
              ))}
            </div>

            {/* Result */}
            <div className="rounded-2xl bg-[#F7F8FB] border border-black/[0.05] px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0">
              <div className="flex-1">
                <p className="text-xs text-[#64748B] uppercase tracking-[0.08em] mb-1">
                  You keep per subscriber
                </p>
                <p className="font-display font-700 text-xl text-[#0F0F23]">
                  ${perSub.toFixed(2)}
                  <span className="text-sm font-500 text-[#64748B]"> /mo</span>
                </p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-black/[0.08]" aria-hidden="true" />
              <div className="flex-1 sm:pl-6">
                <p className="text-xs text-[#64748B] uppercase tracking-[0.08em] mb-1">
                  Your estimated monthly revenue
                </p>
                <p className="font-display font-800 text-3xl text-[#16A34A] leading-none">
                  ${money(monthly)}
                  <span className="text-sm font-600 text-[#16A34A]/70"> /mo</span>
                </p>
              </div>
            </div>
            <p className="text-xs text-[#94A3B8] mt-4 text-center">
              Estimate: price × subscribers × 85%. Actual results depend on your audience.
            </p>

            {/* CTA at the emotional peak */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <a
                href="#waitlist"
                onClick={() => track('calculator_cta_click', { price, subs })}
                className="gradient-btn group flex-1 text-white font-600 px-6 py-3.5 rounded-xl text-center inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7]"
              >
                Claim your founding spot
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={shareMath}
                className="flex-1 sm:flex-none font-600 px-6 py-3.5 rounded-xl border border-black/10 bg-white text-[#0F0F23] inline-flex items-center justify-center gap-2 hover:bg-black/[0.03] hover:border-black/20 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7]"
              >
                {shared ? (
                  <>
                    <Check className="w-4 h-4 text-[#16A34A]" /> Link copied
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" /> Share my math
                  </>
                )}
              </button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={140}>
          <p className="text-sm text-[#475569] mt-10 max-w-lg mx-auto">
            Founding creators pay{' '}
            <span className="text-[#0F0F23] font-600">
              0% platform fees for their first 6 months
            </span>{' '}
            — they keep 100%.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
