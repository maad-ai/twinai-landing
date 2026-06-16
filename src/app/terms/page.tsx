import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Twiinn AI terms of service — the rules and guidelines for using our platform.',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-[100dvh] pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6 text-[#0F0F23]">
          <h1
            className="font-display font-800 tracking-tight mb-8"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Terms of Service
          </h1>
          <p className="text-sm text-[#94A3B8] mb-10">Last updated: May 30, 2026</p>

          <div className="space-y-8 text-[#475569] leading-relaxed">
            <section>
              <h2 className="font-display font-700 text-xl text-[#0F0F23] mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using Twiinn AI, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="font-display font-700 text-xl text-[#0F0F23] mb-3">2. Description of Service</h2>
              <p>
                Twiinn AI is a platform that allows creators to build AI-powered chatbots trained on their content. Fans can subscribe monthly to interact with these AI twins. Creators retain 80% of subscription revenue.
              </p>
            </section>

            <section>
              <h2 className="font-display font-700 text-xl text-[#0F0F23] mb-3">3. User Accounts</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials. You must provide accurate and complete information when creating an account.
              </p>
            </section>

            <section>
              <h2 className="font-display font-700 text-xl text-[#0F0F23] mb-3">4. Creator Responsibilities</h2>
              <p>
                Creators are responsible for the content their AI twin is trained on. Creators must not upload content that violates intellectual property rights, promotes hate speech, or contains illegal material.
              </p>
            </section>

            <section>
              <h2 className="font-display font-700 text-xl text-[#0F0F23] mb-3">5. Payments and Commission</h2>
              <p>
                Twiinn AI retains a flat 20% platform fee on all subscriptions — you keep 80%. Founding creators pay 0% for their first 6 months. Payouts are processed monthly to your connected payment account.
              </p>
            </section>

            <section>
              <h2 className="font-display font-700 text-xl text-[#0F0F23] mb-3">6. Limitation of Liability</h2>
              <p>
                Twiinn AI is provided &quot;as is&quot; without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.
              </p>
            </section>

            <section>
              <h2 className="font-display font-700 text-xl text-[#0F0F23] mb-3">7. Contact</h2>
              <p>
                For any questions about these Terms, please contact us at{' '}
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
