import { ScrollReveal } from '@/components/ui/ScrollReveal';

const proofs = [
  {
    initials: 'CM',
    name: 'Caryn Marjorie',
    tag: 'Snapchat creator',
    fact: 'Her AI clone "CarynAI" made $71,610 in its first week of beta.',
    source: 'Fortune, May 2023',
  },
  {
    initials: 'AM',
    name: 'Amouranth',
    tag: 'Top Twitch streamer',
    fact: 'Launched an AI version of herself so fans can chat with her anytime.',
    source: 'Forbes, 2023',
  },
  {
    initials: '$',
    name: 'The creator economy',
    tag: 'Market',
    fact: 'Projected to roughly double to ~$480B by 2027 — AI twins are the next unlock.',
    source: 'Goldman Sachs Research',
  },
];

export function TheShift() {
  return (
    <section className="bg-[#F7F8FB] py-20 md:py-24" aria-label="The shift is happening">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="eyebrow text-[#7C3AED] mb-3">The shift is happening</p>
            <h2 className="text-display-lg font-display font-800 text-[#0F0F23]">
              Creators are already cloning themselves.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {proofs.map((p) => (
              <article key={p.name} className="card-light rounded-2xl p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full bg-[#7C3AED]/[0.08] flex items-center justify-center font-display font-700 text-sm text-[#7C3AED] flex-shrink-0"
                    aria-hidden="true"
                  >
                    {p.initials}
                  </div>
                  <div>
                    <p className="font-display font-700 text-[#0F0F23] text-sm leading-tight">
                      {p.name}
                    </p>
                    <p className="text-xs text-[#64748B]">{p.tag}</p>
                  </div>
                </div>
                <p className="text-[15px] text-[#475569] leading-[1.65] flex-1">{p.fact}</p>
                <p className="text-xs text-[#94A3B8] mt-4">{p.source}</p>
              </article>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={140}>
          <p className="text-center text-[15px] text-[#475569] mt-10 max-w-xl mx-auto">
            They needed custom tech and big teams.{' '}
            <span className="text-[#0F0F23] font-600">
              Twiinn gives you the same in minutes — and you keep 85% of the revenue.
            </span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
