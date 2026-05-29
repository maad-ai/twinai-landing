'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const faqs = [
  {
    q: 'How does my AI twin learn my personality?',
    a: 'We analyze your content — videos, posts, podcasts — to understand your speaking style, expertise, and personality. You can also connect your social accounts for automatic training, and fine-tune through a brief questionnaire.',
  },
  {
    q: 'How much can I earn?',
    a: 'It depends on your audience size and pricing. A creator with 50K followers charging $14.99/mo could realistically earn $2,000–5,000/month. Creators with 500K+ followers can earn $10K–30K/month.',
  },
  {
    q: "Can my twin say something I wouldn't?",
    a: 'You have full control. Set limits, review conversations, block specific topics, and train your twin to stay on-brand. You approve its entire personality before it goes live.',
  },
  {
    q: "What's the commission structure?",
    a: 'We take a 10–15% platform fee. You keep 85–90% of every subscription. Early creators who join the waitlist get 0% commission for the first 6 months.',
  },
  {
    q: 'What if a fan runs out of messages?',
    a: 'Fans get a set number of messages included in their subscription. If they want more, they can purchase additional message credits. You earn a cut of those too.',
  },
  {
    q: 'When does Twin AI launch?',
    a: "We're building the MVP now. Join the waitlist to be among the first creators when we launch. Early spots are limited to ensure quality onboarding.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section className="bg-[#F8FAFC] py-24 md:py-32" aria-label="Frequently Asked Questions">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <h2
            className="font-display font-800 text-[#0F0F23] tracking-tight text-center mb-12"
            style={{ fontSize: 'clamp(1.875rem, 5vw, 2.5rem)' }}
          >
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="card-light rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-5 py-5 cursor-pointer font-display font-600 text-[#0F0F23] text-left gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7] rounded-xl"
                  onClick={() => toggle(i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span>{faq.q}</span>
                  <span
                    className="text-[#A855F7] text-xl flex-shrink-0 transition-transform duration-300"
                    style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: open === i ? '400px' : '0px',
                    opacity: open === i ? 1 : 0,
                  }}
                >
                  <p className="px-5 pb-5 text-[#94A3B8] leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
