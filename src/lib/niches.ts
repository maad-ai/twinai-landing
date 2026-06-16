export interface NichePage {
  slug: string;
  /** For metadata + h1 */
  audience: string;
  title: string;
  description: string;
  h1: string;
  sub: string;
  /** Typical monthly price preset for the calculator */
  price: number;
  painPoints: { title: string; desc: string }[];
  fanQuestions: string[];
  faqs: { q: string; a: string }[];
}

export const nichePages: NichePage[] = [
  {
    slug: 'fitness-coaches',
    audience: 'fitness coaches',
    title: 'AI Twin for Fitness Coaches — Coach Every Fan, 24/7',
    description:
      'Turn your training knowledge into an AI twin. Fans subscribe monthly for personalized programming, form advice and nutrition answers — you keep 80%.',
    h1: 'Your coaching, cloned.',
    sub: 'An AI twin trained on your programs, videos and advice answers every fan — form checks, plateaus, meal questions — while you train your real clients. You keep 80%.',
    price: 19.99,
    painPoints: [
      {
        title: 'Your DMs are a part-time job',
        desc: '"How do I break my plateau?" ×50 a day. Your twin answers each one personally, in your style, instantly.',
      },
      {
        title: '1-on-1 coaching doesn\'t scale',
        desc: 'You can coach 20 clients. Your twin can guide thousands of fans at a price they can actually afford.',
      },
      {
        title: 'Free content doesn\'t pay',
        desc: 'Your videos build the audience — the twin converts it into recurring monthly revenue.',
      },
    ],
    fanQuestions: [
      'How do I break my bench plateau?',
      'Build me a 3-day split for fat loss',
      'What should I eat post-workout?',
      'Is my squat depth okay if my knees cave?',
    ],
    faqs: [
      {
        q: 'Can my twin build actual workout plans?',
        a: 'Your twin answers from your published programming and advice. It coaches the way you coach — and you can block anything you don\'t want it to touch, like injury diagnosis.',
      },
      {
        q: 'What about liability for training advice?',
        a: 'You control the limits: block medical topics, review conversations, and approve the personality before going live. The twin always presents itself as an AI.',
      },
      {
        q: 'What do fitness fans usually pay?',
        a: 'Most coaching-style twins price between $14.99 and $29.99/month. You set any price and keep 80%.',
      },
    ],
  },
  {
    slug: 'finance-creators',
    audience: 'finance creators',
    title: 'AI Twin for Finance Creators — Answer Every Money Question',
    description:
      'Your audience has endless money questions. An AI twin trained on your content answers them 24/7 — fans subscribe monthly, you keep 80%.',
    h1: 'Be everyone\'s money mentor.',
    sub: 'Budgeting, investing basics, side-hustle math — your twin answers with your frameworks and your voice, 24/7. Fans subscribe monthly, you keep 80%.',
    price: 49.99,
    painPoints: [
      {
        title: 'Everyone wants personal answers',
        desc: '"Should I invest or pay debt first?" depends on their situation. Your twin asks and answers like you would.',
      },
      {
        title: 'Your expertise is premium',
        desc: 'Finance audiences pay more for access — twins in this niche support the highest price points on Twiinn.',
      },
      {
        title: 'Compliance worries you',
        desc: 'Block personalized investment advice entirely, keep it educational, and review every conversation.',
      },
    ],
    fanQuestions: [
      'Lump sum or DCA my $5K savings?',
      'How do I start investing with $100?',
      'Pay off debt or build an emergency fund first?',
      'Explain index funds like I\'m new',
    ],
    faqs: [
      {
        q: 'Can the twin give personalized investment advice?',
        a: 'Only if you allow it — and we recommend you don\'t. Block the topic and your twin stays educational: frameworks, concepts and your published opinions, with a clear AI label.',
      },
      {
        q: 'Why do finance twins charge more?',
        a: 'Fans treat them like a money mentor on call. $29.99–$49.99/month is common in this niche — you set the price and keep 80%.',
      },
      {
        q: 'Is the twin clearly an AI to my audience?',
        a: 'Always. Every twin is labeled "AI Twin" on its page and in chat — no one is misled into thinking it\'s literally you typing.',
      },
    ],
  },
  {
    slug: 'beauty-creators',
    audience: 'beauty creators',
    title: 'AI Twin for Beauty Creators — Personalized Routines at Scale',
    description:
      'Skin types, budgets, routines — every fan is different. Your AI twin gives personalized beauty advice from your content, 24/7. You keep 80%.',
    h1: 'A routine for every single fan.',
    sub: 'Oily T-zone, sensitive skin, $30 budget — your twin tailors your advice to every fan\'s situation, exactly like your DMs, minus the burnout. You keep 80%.',
    price: 14.99,
    painPoints: [
      {
        title: '"What\'s my routine?" never stops',
        desc: 'The same question with a thousand variations. Your twin handles each skin type, budget and concern personally.',
      },
      {
        title: 'Affiliate links underpay you',
        desc: 'Commissions are pennies. A subscription twin turns your product knowledge into predictable monthly revenue.',
      },
      {
        title: 'Fans want YOUR picks',
        desc: 'The twin recommends from products you\'ve actually reviewed — never random sponsored stuff.',
      },
    ],
    fanQuestions: [
      'Fix my oily T-zone routine',
      'Best retinol for beginners?',
      'Morning routine in 5 minutes?',
      'Is this dupe actually close to the original?',
    ],
    faqs: [
      {
        q: 'Can my twin recommend specific products?',
        a: 'Yes — it draws on products you\'ve covered in your content. It won\'t invent recommendations, and you can review what it says.',
      },
      {
        q: 'What about skin-safety questions?',
        a: 'Block medical topics (acne medication, dermatology) so your twin sticks to routines and product picks, and always suggests a professional for medical concerns.',
      },
      {
        q: 'What do beauty fans usually pay?',
        a: 'Beauty twins typically run $9.99–$19.99/month. You set any price and keep 80%.',
      },
    ],
  },
];

export function getNiche(slug: string): NichePage | undefined {
  return nichePages.find((n) => n.slug === slug);
}
