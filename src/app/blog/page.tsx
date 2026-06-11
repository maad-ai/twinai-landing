import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { blogPosts } from '@/lib/blog';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Guides and insights on AI twins, creator monetization, and the creator economy — from the team building Twiinn AI.',
  alternates: { canonical: 'https://twiinn.ai/blog' },
};

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <Header />
      <main className="bg-white min-h-[100dvh] pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-14">
            <p className="eyebrow text-[#7C3AED] mb-3">Blog</p>
            <h1 className="text-display-lg font-display font-800 text-[#0F0F23] mb-4">
              The AI twin playbook.
            </h1>
            <p className="text-lg text-[#475569] max-w-xl">
              Honest guides on cloning yourself, pricing your twin, and earning from your
              audience — no hype, real math.
            </p>
          </div>

          <div className="space-y-6">
            {posts.map((post) => (
              <article key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="card-light card-hover rounded-2xl p-7 block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7]"
                >
                  <div className="flex items-center gap-3 text-xs text-[#64748B] mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#7C3AED]/[0.08] text-[#7C3AED] font-600">
                      {post.category}
                    </span>
                    <time dateTime={post.date}>
                      {new Date(`${post.date}T00:00:00`).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-display font-700 text-xl text-[#0F0F23] mb-2 group-hover:text-[#7C3AED] transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="text-[15px] text-[#475569] leading-[1.65] mb-4">
                    {post.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-600 text-[#7C3AED]">
                    Read article
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
