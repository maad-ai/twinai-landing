import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the Twiinn AI team.',
};

const faqs = [
  {
    q: 'How quickly do you respond?',
    a: 'We typically reply within 24 hours on business days.',
  },
  {
    q: 'I want to become a creator on the platform.',
    a: 'Join the waitlist on our homepage — we\'re onboarding early creators now.',
  },
  {
    q: 'Can I partner or collaborate with Twiinn AI?',
    a: 'We\'re open to partnerships! Email us with your proposal and we\'ll get back to you.',
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-[100dvh] pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/20 mb-6">
              <MessageCircle className="w-3.5 h-3.5 text-[#A855F7]" strokeWidth={2} />
              <span className="text-xs font-500 text-[#A855F7] tracking-wide uppercase">
                Get in touch
              </span>
            </div>
            <h1 className="text-display-lg font-display font-800 text-[#0F0F23] mb-4">
              We&apos;d love to hear from you
            </h1>
            <p className="text-lg text-[#475569] max-w-xl mx-auto">
              Have a question about Twiinn AI? Want to partner with us? Reach out and we&apos;ll get back to you quickly.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-3 gap-5 mb-20">
            <a
              href="mailto:contact@twiinn.ai"
              className="card-light rounded-2xl p-6 text-center group hover:border-[#A855F7]/30"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#7C3AED]/[0.08] flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-[#7C3AED]" strokeWidth={1.8} />
              </div>
              <h2 className="font-display font-700 text-[#0F0F23] mb-1 group-hover:text-[#A855F7] transition-colors">
                Email
              </h2>
              <p className="text-[#A855F7] text-sm font-500">contact@twiinn.ai</p>
            </a>

            <div className="card-light rounded-2xl p-6 text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#7C3AED]/[0.08] flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-[#7C3AED]" strokeWidth={1.8} />
              </div>
              <h2 className="font-display font-700 text-[#0F0F23] mb-1">Location</h2>
              <p className="text-[#64748B] text-sm">Montreal, QC, Canada</p>
            </div>

            <div className="card-light rounded-2xl p-6 text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#7C3AED]/[0.08] flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-[#7C3AED]" strokeWidth={1.8} />
              </div>
              <h2 className="font-display font-700 text-[#0F0F23] mb-1">Response time</h2>
              <p className="text-[#64748B] text-sm">Within 24 hours</p>
            </div>
          </div>

          {/* FAQ section */}
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display font-700 text-xl text-[#0F0F23] text-center mb-8">
              Common Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-[#F7F8FB] rounded-xl p-6">
                  <p className="font-display font-600 text-[#0F0F23] mb-2">{faq.q}</p>
                  <p className="text-sm text-[#475569] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-[#475569] mb-4">Ready to get started?</p>
            <a
              href="/#waitlist"
              className="inline-block gradient-btn text-white font-600 px-8 py-3.5 rounded-xl"
            >
              Join the waitlist
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
