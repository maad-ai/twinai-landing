import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the Twiinn AI team.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-[100dvh] pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1
            className="font-display font-800 text-[#0F0F23] tracking-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Get in touch
          </h1>
          <p className="text-lg text-[#94A3B8] mb-12 max-w-xl">
            Have a question about Twiinn AI? Want to partner with us? We&apos;d love to hear from you.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href="mailto:contact@maad-ai.com"
              className="card-light rounded-2xl p-8 flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B6B] to-[#A855F7] flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" strokeWidth={1.8} />
              </div>
              <div>
                <h2 className="font-display font-700 text-lg text-[#0F0F23] mb-1 group-hover:text-[#A855F7] transition-colors">
                  Email
                </h2>
                <p className="text-[#94A3B8] text-sm">contact@maad-ai.com</p>
                <p className="text-[#94A3B8] text-xs mt-2">We reply within 24h</p>
              </div>
            </a>

            <div className="card-light rounded-2xl p-8 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D4FF] to-[#A855F7] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" strokeWidth={1.8} />
              </div>
              <div>
                <h2 className="font-display font-700 text-lg text-[#0F0F23] mb-1">Location</h2>
                <p className="text-[#94A3B8] text-sm">Montreal, QC</p>
                <p className="text-[#94A3B8] text-xs mt-2">Canada</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
