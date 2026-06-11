import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Twiinn AI privacy policy — how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-[100dvh] pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6 text-[#0F0F23]">
          <h1
            className="font-display font-800 tracking-tight mb-8"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm text-[#94A3B8] mb-10">Last updated: May 30, 2026</p>

          <div className="space-y-8 text-[#475569] leading-relaxed">
            <section>
              <h2 className="font-display font-700 text-xl text-[#0F0F23] mb-3">1. Information We Collect</h2>
              <p>
                Twiinn AI is currently a pre-launch waitlist. We only collect the information you submit on our waitlist form: for creators, your name, email, social handle, follower count, and niche; for fans, just your email. We do not track you across the web, and we do not buy data about you.
              </p>
            </section>

            <section>
              <h2 className="font-display font-700 text-xl text-[#0F0F23] mb-3">2. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Process your waitlist registration</li>
                <li>Send you updates about Twiinn AI launch and features</li>
                <li>Communicate with you about your account</li>
                <li>Improve our services and user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-700 text-xl text-[#0F0F23] mb-3">3. Data Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers who help us operate our platform, subject to strict confidentiality agreements.
              </p>
            </section>

            <section>
              <h2 className="font-display font-700 text-xl text-[#0F0F23] mb-3">4. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="font-display font-700 text-xl text-[#0F0F23] mb-3">5. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal data at any time. To exercise these rights, contact us at{' '}
                <a href="mailto:contact@twiinn.ai" className="text-[#A855F7] hover:underline">
                  contact@twiinn.ai
                </a>.
              </p>
            </section>

            <section>
              <h2 className="font-display font-700 text-xl text-[#0F0F23] mb-3">6. Contact &amp; Privacy Officer</h2>
              <p>
                Twiinn AI is operated from Quebec, Canada. In accordance with Quebec&apos;s Law 25, our designated person responsible for the protection of personal information is Marc-Alexandre Duval. For any privacy question, or to access or delete your data, contact{' '}
                <a href="mailto:contact@twiinn.ai" className="text-[#A855F7] hover:underline">
                  contact@twiinn.ai
                </a>.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
