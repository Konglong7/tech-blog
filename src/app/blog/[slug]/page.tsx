import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { SmoothScrollProvider } from '@/components/layout/smooth-scroll';
import { getPostBySlug, getAllPosts, getReadingTime } from '@/lib/content';
import { formatDate } from '@/lib/utils';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: { title: post.title, description: post.description, type: 'article' },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <SmoothScrollProvider>
      <Header />
      <main className="min-h-screen pt-28 pb-20">
        <article className="mx-auto max-w-3xl px-6">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors mb-8"
          >
            ← 返回博客
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15] mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-tertiary)] mb-6">
              <span>{post.author}</span>
              <span className="h-3 w-px bg-white/10" />
              <time>{formatDate(post.date)}</time>
              <span className="h-3 w-px bg-white/10" />
              <span>{getReadingTime(post.content)} 分钟阅读</span>
            </div>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag}>#{tag}</Badge>
                ))}
              </div>
            )}
          </header>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

          {/* Article Content */}
          <div className="prose">
            <MDXRemote source={post.content} />
          </div>

          {/* Bottom Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-16 mb-12" />

          {/* Back CTA */}
          <div className="text-center">
            <Link
              href="/blog"
              className="text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors"
            >
              ← 返回所有文章
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
