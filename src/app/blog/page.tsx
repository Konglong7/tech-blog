import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BlogCard } from '@/components/blog/blog-card';
import { ScrollReveal } from '@/components/effects/scroll-reveal';
import { Badge } from '@/components/ui/badge';
import { SmoothScrollProvider } from '@/components/layout/smooth-scroll';
import { getAllPosts, getAllTags } from '@/lib/content';
import Link from 'next/link';

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <SmoothScrollProvider>
      <Header />
      <main className="min-h-screen pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          {/* Page Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">所有文章</h1>
            <p className="text-[var(--color-text-secondary)] text-lg">
              共 {posts.length} 篇文章
            </p>
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <ScrollReveal>
              <div className="flex flex-wrap gap-2 mb-12">
                {tags.map((tag) => (
                  <Badge key={tag} className="hover:bg-white/[0.08] hover:border-white/20 cursor-pointer">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </ScrollReveal>
          )}

          {/* Post List */}
          <div className="space-y-6">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.05}>
                <BlogCard post={post} />
              </ScrollReveal>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[var(--color-text-tertiary)]">暂无文章，敬请期待...</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
