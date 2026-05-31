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
      email: 'contact@maad-ai.com',
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
          text: 'A creator with 50K followers charging $14.99/month could realistically earn $2,000–5,000/month. Creators with 500K+ followers can earn $10K–30K/month.',
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
          text: 'We take a 10–15% platform fee. You keep 85–90% of every subscription. Early creators who join the waitlist get 0% commission for the first 6 months.',
        },
      },
      {
        '@type': 'Question',
        name: 'When does Twiinn AI launch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are building the MVP now. Join the waitlist to be among the first creators when we launch.',
        },
      },
    ],
  };
}
