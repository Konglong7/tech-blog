import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollReveal } from '@/components/effects/scroll-reveal';
import { Badge } from '@/components/ui/badge';
import { SmoothScrollProvider } from '@/components/layout/smooth-scroll';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '关于我',
  description: '了解恐龙大王的技术背景和联系方式',
};

const techCategories = [
  { title: '前端开发', items: ['React', 'Vue', 'TypeScript', 'Next.js'] },
  { title: '后端开发', items: ['Node.js', 'Python', 'Go'] },
  { title: '工具链', items: ['Git', 'Docker', 'CI/CD', 'Linux'] },
];

export default function AboutPage() {
  return (
    <SmoothScrollProvider>
      <Header />
      <main className="min-h-screen pt-28 pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">关于我</h1>
            <div className="h-px bg-gradient-to-r from-white/10 to-transparent w-24 my-8" />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="prose mb-16">
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                你好！我是<strong className="text-[var(--color-text-primary)] font-medium">恐龙大王</strong>
                ，一名热爱技术的开发者。
              </p>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                这个博客是我记录技术学习、分享开发经验的地方。我相信通过写作可以更好地理解技术，
                也希望我的文章能够帮助到其他开发者。
              </p>
            </div>
          </ScrollReveal>

          {/* Tech Stack */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-10">
              {techCategories.map((cat) => (
                <div key={cat.title}>
                  <h3 className="text-lg font-medium mb-4">{cat.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <Badge key={item} className="px-4 py-2 text-sm">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal delay={0.3}>
            <div className="mt-16">
              <h3 className="text-lg font-medium mb-4">联系方式</h3>
              <div className="space-y-3 text-[var(--color-text-secondary)]">
                <p>
                  GitHub:{' '}
                  <a
                    href="https://github.com/Konglong7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-accent)] hover:underline"
                  >
                    @Konglong7
                  </a>
                </p>
                <p>
                  Email:{' '}
                  <a href="mailto:1274509150@qq.com" className="text-[var(--color-accent)] hover:underline">
                    1274509150@qq.com
                  </a>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
