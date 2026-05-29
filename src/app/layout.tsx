import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0F0F23',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://twin.ai'),
  title: {
    default: 'Twin AI — Your Voice. Their World. 24/7.',
    template: '%s | Twin AI',
  },
  description:
    'Create an AI twin of yourself. Let your audience connect with you even when you\'re offline. Fans subscribe monthly — you keep 85–90% and earn 24/7.',
  keywords: [
    'AI clone',
    'creator monetization',
    'AI chatbot creator',
    'influencer AI',
    'fan engagement',
    'passive income creator',
    'twin AI',
  ],
  authors: [{ name: 'Twin AI', url: 'https://twin.ai' }],
  creator: 'Twin AI',
  publisher: 'Twin AI',
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
    url: 'https://twin.ai',
    siteName: 'Twin AI',
    title: 'Twin AI — Your fans can talk to your AI clone.',
    description:
      'Create an AI twin of yourself. Fans subscribe monthly to chat with it. You keep 85–90% and earn 24/7.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Twin AI — AI-powered creator monetization platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twin AI — Your fans can talk to your AI clone.',
    description:
      'Create an AI twin of yourself. Fans subscribe monthly to chat with it. You keep 85–90%.',
    images: ['/og-image.png'],
    creator: '@twinai',
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
      className={`${jakarta.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#0F0F23]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#A855F7] focus:text-white focus:font-600 focus:text-sm"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
