export function getWebApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Twiinn AI',
    url: 'https://twiinn.ai',
    description:
      'Create an AI twin of yourself. Let your audience connect with you — even when you\'re offline. Monetize your influence 24/7.',
    applicationCategory: 'SocialNetworkingApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '9.99',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingDuration: 'P1M',
        billingIncrement: 1,
      },
    },
  };
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Twiinn AI',
    url: 'https://twiinn.ai',
    logo: 'https://twiinn.ai/logo.png',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@twiinn.ai',
      contactType: 'customer support',
    },
  };
}

export function getFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does my AI twin learn my personality?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We analyze your content — videos, posts, podcasts — to understand your speaking style, expertise, and personality. You can also connect your social accounts for automatic training.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much can I earn with Twiinn AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your earnings = subscribers × your price × 80%. If 1% of a 50K audience subscribes at $14.99/month, that is about $6,000/month to you. It scales with audience size and engagement.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can my twin say something I would not?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You have full control. Set limits, review conversations, block specific topics, and train your twin to stay on-brand. You approve its entire personality before it goes live.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Twiinn AI commission structure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We take a flat 20% platform fee — you keep 80% of every subscription and message credit. Founding creators pay 0% for their first 6 months.',
        },
      },
      {
        '@type': 'Question',
        name: 'When does Twiinn AI launch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are onboarding our first creators now. Waitlist members get access in signup order — creators first, then fans.',
        },
      },
    ],
  };
}
