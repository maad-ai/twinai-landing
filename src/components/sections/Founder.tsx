import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function Founder() {
  return (
    <section className="bg-white py-20 md:py-24" aria-label="A note from the founder">
      <div className="max-w-2xl mx-auto px-6">
        <ScrollReveal>
          <div className="card-light rounded-3xl p-8 sm:p-10" style={{ boxShadow: 'var(--shadow-md)' }}>
            <div className="flex items-center gap-4 mb-6">
              {/* Swap this for a real photo at /founder.jpg when ready */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center font-display font-800 text-white text-lg flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #FF6B6B, #A855F7)' }}
                aria-hidden="true"
              >
                MA
              </div>
              <div>
                <p className="font-display font-700 text-[#0F0F23]">Marc-Alexandre</p>
                <p className="text-sm text-[#64748B]">Founder · building Twiinn solo in Montréal</p>
              </div>
            </div>

            <p className="eyebrow text-[#7C3AED] mb-3">A note from the founder</p>
            <div className="space-y-4 text-[16px] text-[#475569] leading-[1.75]">
              <p>
                I&apos;m building Twiinn because creators give their audience everything — and still
                can&apos;t be there for every fan, every question, every night. Your AI twin can.
              </p>
              <p>
                It&apos;s just me right now, so I read every creator application personally and
                reply within 48 hours. If you have a question before you sign up, email me directly
                at{' '}
                <a href="mailto:contact@twiinn.ai" className="text-[#7C3AED] font-600 hover:underline">
                  contact@twiinn.ai
                </a>{' '}
                — I answer everything.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
