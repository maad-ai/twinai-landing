import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

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
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
            {/* Amouranth — big photo card */}
            <article className="card-light rounded-3xl overflow-hidden h-full flex flex-col">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/creators/amouranth.jpg"
                  alt="Amouranth"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="font-display font-700 text-lg text-[#0F0F23] leading-tight">
                  Amouranth
                </p>
                <p className="text-xs text-[#64748B] mb-3">
                  Top Twitch streamer — launched AI Amouranth
                </p>
                <blockquote className="text-[15px] text-[#475569] leading-[1.65] flex-1">
                  “I thrive on taking risks and pushing boundaries.”
                </blockquote>
                <p className="text-sm font-600 text-[#16A34A] mt-4">
                  Her AI made $34,000 in its first 24 hours.
                </p>
                <p className="text-xs text-[#94A3B8] mt-1">Decrypt / NetInfluencer, 2023</p>
              </div>
            </article>

            {/* Caryn Marjorie — big stat card (no freely-licensed photo exists) */}
            <article
              className="rounded-3xl overflow-hidden h-full flex flex-col text-white"
              style={{
                background:
                  'radial-gradient(120% 100% at 50% 0%, #2A1B4D 0%, #0F0F23 70%)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div className="p-6 pt-10 text-center">
                <p className="eyebrow text-[#A855F7]">CarynAI — first week</p>
                <p
                  className="font-display font-800 text-white my-4"
                  style={{ fontSize: 'clamp(2.5rem, 4vw, 3.25rem)', lineHeight: 1 }}
                >
                  $71,610
                </p>
                <p className="text-xs text-[#94A3B8] uppercase tracking-[0.1em]">
                  in 7 days of beta
                </p>
              </div>
              <div className="p-6 pt-2 flex flex-col flex-1 border-t border-white/[0.08] mt-4">
                <p className="font-display font-700 text-lg leading-tight mt-4">Caryn Marjorie</p>
                <p className="text-xs text-[#94A3B8] mb-3">
                  Snapchat creator — launched CarynAI
                </p>
                <blockquote className="text-[15px] text-[#CBD5E1] leading-[1.65] flex-1">
                  “Whether you need somebody to be comforting or loving… CarynAI will always be
                  there for you.”
                </blockquote>
                <p className="text-xs text-[#94A3B8] mt-4">Fortune, 2023</p>
              </div>
            </article>

            {/* Grimes — big photo card */}
            <article className="card-light rounded-3xl overflow-hidden h-full flex flex-col">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/creators/grimes.png"
                  alt="Grimes"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="font-display font-700 text-lg text-[#0F0F23] leading-tight">Grimes</p>
                <p className="text-xs text-[#64748B] mb-3">
                  Musician — opened her AI voice to fans
                </p>
                <blockquote className="text-[15px] text-[#475569] leading-[1.65] flex-1">
                  “I’ll split 50% royalties on any successful AI generated song that uses my
                  voice.”
                </blockquote>
                <p className="text-sm font-600 text-[#16A34A] mt-4">
                  Invited fans to create — and earn — with her AI.
                </p>
                <p className="text-xs text-[#94A3B8] mt-1">Rolling Stone, 2023</p>
              </div>
            </article>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={140}>
          <p className="text-center text-[15px] text-[#475569] mt-10 max-w-xl mx-auto">
            They needed custom tech and big teams.{' '}
            <span className="text-[#0F0F23] font-600">
              Twiinn gives you the same in minutes — and you keep 80% of the revenue.
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
