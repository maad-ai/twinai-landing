import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { blogPosts, getPost } from '@/lib/blog';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://twiinn.ai/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `https://twiinn.ai/blog/${post.slug}`,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Twiinn AI', url: 'https://twiinn.ai' },
    publisher: { '@type': 'Organization', name: 'Twiinn AI', url: 'https://twiinn.ai' },
    mainEntityOfPage: `https://twiinn.ai/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      <main className="bg-white min-h-[100dvh] pt-32 pb-24">
        <article className="max-w-2xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-500 text-[#64748B] hover:text-[#0F0F23] transition-colors duration-200 mb-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7] rounded-sm"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            All articles
          </Link>

          <div className="flex items-center gap-3 text-xs text-[#64748B] mb-4">
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

          <h1 className="text-display-lg font-display font-800 text-[#0F0F23] mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed mb-10">{post.description}</p>

          <div className="space-y-8">
            {post.sections.map((section, i) => (
              <section key={i}>
                {section.h2 && (
                  <h2 className="font-display font-700 text-2xl text-[#0F0F23] mb-4">
                    {section.h2}
                  </h2>
                )}
                <div className="space-y-4">
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="text-[16px] text-[#475569] leading-[1.75]">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 card-light rounded-2xl p-8 text-center">
            <h2 className="font-display font-700 text-xl text-[#0F0F23] mb-2">
              Ready to launch your own twin?
            </h2>
            <p className="text-[15px] text-[#475569] mb-6">
              First 50 founding creators pay 0% platform fees for 6 months.
            </p>
            <a
              href="/#waitlist"
              className="gradient-btn group text-white font-600 px-7 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7]"
            >
              Join the waitlist
              <ArrowRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
