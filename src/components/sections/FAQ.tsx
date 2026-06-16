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
    a: 'Your earnings = subscribers × your price × 80%. If 1% of a 50K audience subscribes at $14.99/month, that’s about $6,000/month to you. It scales with audience size and engagement — no guarantees.',
  },
  {
    q: "Can my twin say something I wouldn't?",
    a: 'You have full control. Set limits, review conversations, block specific topics, and train your twin to stay on-brand. You approve its entire personality before it goes live.',
  },
  {
    q: "What's the commission structure?",
    a: 'We take a flat 20% platform fee — you keep 80% of every subscription and message credit. Founding creators pay 0% for their first 6 months.',
  },
  {
    q: 'What if a fan runs out of messages?',
    a: 'Fans get a set number of messages included in their subscription. If they want more, they can purchase additional message credits. You earn a cut of those too.',
  },
  {
    q: 'When does Twiinn AI launch?',
    a: 'We’re onboarding our first creators now. Waitlist members get access in signup order — creators first, then fans.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section className="bg-white py-20 md:py-24" aria-label="Frequently Asked Questions">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-display-lg font-display font-800 text-[#0F0F23] text-center mb-12">
            Questions, answered.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="card-light rounded-xl overflow-hidden transition-colors duration-200 hover:border-[#A855F7]/25"
              >
                <button
                  className="w-full flex items-center justify-between px-5 py-5 cursor-pointer font-display font-600 text-[#0F0F23] text-left gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7] rounded-xl"
                  onClick={() => toggle(i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span>{faq.q}</span>
                  <span
                    className="text-[#7C3AED] text-xl flex-shrink-0 transition-transform duration-300 [transition-timing-function:var(--ease-out-expo)]"
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
                  className="grid transition-[grid-template-rows] duration-300 [transition-timing-function:var(--ease-out-expo)]"
                  style={{ gridTemplateRows: open === i ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p
                      className="px-5 pb-5 text-[#475569] leading-relaxed transition-opacity duration-200"
                      style={{ opacity: open === i ? 1 : 0 }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
