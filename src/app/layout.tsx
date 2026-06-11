import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://twiinn.ai'),
  title: {
    default: 'Twiinn AI — Let fans talk to your AI twin',
    template: '%s | Twiinn AI',
  },
  description:
    'Create an AI twin of yourself. Let your audience connect with you even when you\'re offline. Fans subscribe monthly — you keep 85% and earn 24/7.',
  keywords: [
    'AI clone',
    'creator monetization',
    'AI chatbot creator',
    'influencer AI',
    'fan engagement',
    'passive income creator',
    'twin AI',
  ],
  authors: [{ name: 'Twiinn AI', url: 'https://twiinn.ai' }],
  creator: 'Twiinn AI',
  publisher: 'Twiinn AI',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://twiinn.ai',
    siteName: 'Twiinn AI',
    title: 'Twiinn AI — Your fans can talk to your AI twin.',
    description:
      'Create an AI twin of yourself. Fans subscribe monthly to chat with it. You keep 85% and earn 24/7.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Twiinn AI — AI-powered creator monetization platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twiinn AI — Your fans can talk to your AI twin.',
    description:
      'Create an AI twin of yourself. Fans subscribe monthly to chat with it. You keep 85%.',
    images: ['/og-image.png'],
    creator: '@twiinnai',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-screen bg-white text-[#0F0F23]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#A855F7] focus:text-white focus:font-600 focus:text-sm"
        >
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
