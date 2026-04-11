import { BlogCard } from './blog-card';
import type { Post } from '@/lib/content';

interface BentoGridProps {
  posts: Post[];
}

export function BentoGrid({ posts }: BentoGridProps) {
  if (posts.length === 0) return null;

  // 第 1 篇大卡片 + 后续标准卡片
  const [first, ...rest] = posts;

  return (
    <div className="space-y-6">
      {/* 首篇文章 - 大卡片 */}
      {first && <BlogCard post={first} featured />}

      {/* 后续文章 - 网格 */}
      {rest.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
