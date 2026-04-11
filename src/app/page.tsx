import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/hero/hero';
import { BentoGrid } from '@/components/blog/bento-grid';
import { AnimatedHeading } from '@/components/effects/animated-heading';
import { SectionDivider } from '@/components/effects/section-divider';
import { ScrollReveal } from '@/components/effects/scroll-reveal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SmoothScrollProvider } from '@/components/layout/smooth-scroll';
import { getLatestPosts } from '@/lib/content';
import Link from 'next/link';

const techStack = ['React', 'Vue', 'TypeScript', 'Next.js', 'Node.js', 'Python', 'Go', 'Rust'];

export default function HomePage() {
  const posts = getLatestPosts(4);

  return (
    <SmoothScrollProvider>
      <Header />
      <main>
        <Hero />

        {/* 最新文章区 */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="flex items-end justify-between mb-10">
            <AnimatedHeading className="text-3xl md:text-4xl font-semibold tracking-tight">
              最新文章
            </AnimatedHeading>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-2 text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors group"
            >
              查看全部
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
          <ScrollReveal>
            <BentoGrid posts={posts} />
          </ScrollReveal>
        </section>

        <SectionDivider />

        {/* 技术栈展示 */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm text-[var(--color-text-tertiary)] uppercase tracking-widest mb-6">
                技术栈
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {techStack.map((tech) => (
                  <Badge key={tech} className="text-sm px-4 py-2">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        <SectionDivider />

        {/* 最终 CTA */}
        <section className="mx-auto max-w-6xl px-6 py-32">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
                开始阅读
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-10 max-w-lg mx-auto">
                深入了解前端开发、编程技术和工程实践。
              </p>
              <Button href="/blog" variant="primary">
                浏览所有文章
              </Button>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
