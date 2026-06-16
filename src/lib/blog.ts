export interface BlogSection {
  h2?: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readTime: string;
  category: string;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'ai-twins-creator-economy-next-revenue-stream',
    title: 'AI twins are the creator economy’s next revenue stream',
    description:
      'CarynAI made $71,610 in a week. Amouranth’s AI made $34,000 in 24 hours. Here’s why AI twins are becoming the most interesting monetization channel for creators.',
    date: '2026-06-09',
    readTime: '5 min read',
    category: 'Industry',
    sections: [
      {
        paragraphs: [
          'In May 2023, Snapchat creator Caryn Marjorie launched an AI version of herself. Fans paid by the minute to chat with it. In its first week of beta, CarynAI generated $71,610 — a number first reported by Fortune that made every creator on the internet pay attention.',
          'A few weeks later, Twitch’s most-watched female streamer Amouranth launched her own AI companion. It reportedly earned $34,000 in its first 24 hours. Then Meta started paying celebrities — reportedly millions of dollars — to license their likenesses for AI personas.',
          'The signal is hard to miss: fans don’t just want to watch creators. They want to talk to them. And AI finally makes that possible at scale.',
        ],
      },
      {
        h2: 'Why chat beats content for monetization',
        paragraphs: [
          'Content is one-to-many: you post a video, everyone sees the same thing. Chat is one-to-one: every fan gets an answer to their question, about their situation. That personal access is what fans have always paid the most for — it’s why Cameo, paid DMs, and Discord communities exist.',
          'The problem was always scale. A creator with 500K followers physically cannot answer 500 DMs a day. An AI twin trained on your content can — in your tone, with your advice, 24/7.',
        ],
      },
      {
        h2: 'The catch with the first wave',
        paragraphs: [
          'Caryn Marjorie and Amouranth needed custom tech partners and big teams to launch their AIs. They were also early — the tooling was rough, and Caryn later lost control of her own clone when the company behind it imploded. The lesson: creators need to own their twin, control what it says, and keep the majority of the revenue.',
          'That’s exactly what we’re building at Twiinn: you train your twin on your own content, you approve its personality before it goes live, you set the price — and you keep 80% of every subscription. The first 50 founding creators pay 0% platform fees for six months.',
        ],
      },
    ],
  },
  {
    slug: 'how-much-can-your-ai-twin-earn',
    title: 'How much can your AI twin earn? The honest math',
    description:
      'No invented "average creator earnings" — just the formula: subscribers × your price × 80%, and what it takes to hit each milestone.',
    date: '2026-06-10',
    readTime: '4 min read',
    category: 'Monetization',
    sections: [
      {
        paragraphs: [
          'Most platforms promise vague riches. We’d rather show you the formula, because it’s simple: your earnings = subscribers × your monthly price × 80% (we take a flat 20% — the same as OnlyFans — and founding creators pay 0% for their first six months).',
        ],
      },
      {
        h2: 'Three realistic scenarios',
        paragraphs: [
          'Say you charge $14.99/month. If 0.5% of a 50K audience subscribes — that’s 250 fans — you earn about $3,000/month. At 1% (500 fans), it’s $6,000/month. With a 500K audience converting at just 0.5%, you’re at $30,000/month.',
          'Conversion depends on one thing above all: how much your audience already asks you questions. Fitness coaches, finance educators, skincare experts and tech reviewers see the highest demand, because fans have specific, personal questions that generic content can’t answer.',
        ],
      },
      {
        h2: 'How to pick your price',
        paragraphs: [
          'Price against access, not content. Your videos are free; your twin is personal. $9.99 works for entertainment-driven audiences, $14.99–$19.99 for advice-driven niches, and $49.99+ for expertise people would otherwise pay a consultant for.',
          'You can change your price anytime, and fans keep whatever messages they’ve already paid for. Start lower, prove the value, raise it for new subscribers.',
        ],
      },
    ],
  },
  {
    slug: 'train-ai-twin-that-sounds-like-you',
    title: '5 ways to train an AI twin that actually sounds like you',
    description:
      'A twin that sounds generic gets cancelled subscriptions. Here’s what actually makes an AI twin feel like the real you.',
    date: '2026-06-11',
    readTime: '4 min read',
    category: 'Guides',
    sections: [
      {
        paragraphs: [
          'Fans can tell within three messages whether they’re talking to "you" or to a generic chatbot wearing your name. The difference is training. Here’s what matters most, in order.',
        ],
      },
      {
        h2: '1. Feed it your real answers, not your highlights',
        paragraphs: [
          'Your polished videos show what you know. Your comment replies, Q&As and DMs show how you talk. Both matter, but the second is what makes a twin feel human — that’s where your phrasing, humor and tough-love style live.',
        ],
      },
      {
        h2: '2. Define what it should refuse',
        paragraphs: [
          'The fastest way to lose trust is a twin that answers things you never would — medical diagnoses, financial guarantees, personal gossip. List your no-go topics explicitly. A twin that says "that’s not something I talk about — but here’s what I can tell you" sounds more like you, not less.',
        ],
      },
      {
        h2: '3. Give it your catchphrases and your enemies',
        paragraphs: [
          'Every creator has verbal signatures: the phrase you always open with, the advice you repeat in every video, the popular take you famously disagree with. Write them down. Five catchphrases and three strong opinions do more for authenticity than a hundred hours of footage.',
        ],
      },
      {
        h2: '4. Review the first week of conversations',
        paragraphs: [
          'On Twiinn you can review what your twin says and correct it. The first week is where you catch the 5% of answers that feel off — fix those, and the twin compounds in quality from there.',
        ],
      },
      {
        h2: '5. Tell fans what the twin is great at',
        paragraphs: [
          'A twin pitched as "ask me anything" disappoints; one pitched as "your 24/7 training partner — programming, form checks, nutrition" delights. Set the expectation, then over-deliver inside it.',
        ],
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
