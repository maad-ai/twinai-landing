import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const proofs = [
  {
    photo: null,
    initials: 'CM',
    name: 'Caryn Marjorie',
    tag: 'Snapchat creator — launched CarynAI',
    quote:
      '“Whether you need somebody to be comforting or loving… CarynAI will always be there for you.”',
    fact: 'Her AI made $71,610 in its first week.',
    source: 'Fortune, 2023',
  },
  {
    photo: '/creators/amouranth.jpg',
    initials: 'AM',
    name: 'Amouranth',
    tag: 'Top Twitch streamer — launched AI Amouranth',
    quote: '“I thrive on taking risks and pushing boundaries.”',
    fact: 'Her AI made $34,000 in its first 24 hours.',
    source: 'Decrypt / NetInfluencer, 2023',
  },
  {
    photo: '/creators/grimes.png',
    initials: 'G',
    name: 'Grimes',
    tag: 'Musician — opened her AI voice to fans',
    quote: '“I’ll split 50% royalties on any successful AI generated song that uses my voice.”',
    fact: 'Invited fans to create — and earn — with her AI.',
    source: 'Rolling Stone, 2023',
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
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {proofs.map((p) => (
              <article key={p.name} className="card-light rounded-2xl p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  {p.photo ? (
                    <Image
                      src={p.photo}
                      alt={p.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                  ) : (
                    <div
                      className="w-12 h-12 rounded-full bg-[#7C3AED]/[0.08] flex items-center justify-center font-display font-700 text-sm text-[#7C3AED] flex-shrink-0"
                      aria-hidden="true"
                    >
                      {p.initials}
                    </div>
                  )}
                  <div>
                    <p className="font-display font-700 text-[#0F0F23] text-sm leading-tight">
                      {p.name}
                    </p>
                    <p className="text-xs text-[#64748B] leading-snug">{p.tag}</p>
                  </div>
                </div>
                <blockquote className="text-[15px] text-[#475569] leading-[1.65] flex-1">
                  {p.quote}
                </blockquote>
                <p className="text-sm font-600 text-[#16A34A] mt-4">{p.fact}</p>
                <p className="text-xs text-[#94A3B8] mt-1">{p.source}</p>
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
          <p className="text-center text-xs text-[#94A3B8] mt-6 max-w-2xl mx-auto">
            Public statements about their own AI projects — not endorsements of Twiinn. Photos:
            Berktopian Adventures (CC BY 3.0), Jordan Uhl (CC BY 2.0), via Wikimedia Commons.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
