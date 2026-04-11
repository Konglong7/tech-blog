import Link from 'next/link';
import { cn, formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';
import type { Post } from '@/lib/content';

interface BlogCardProps {
  post: Post;
  featured?: boolean;
  className?: string;
}

export function BlogCard({ post, featured = false, className }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className={cn('group block', className)}>
      <article
        className={cn(
          'relative rounded-2xl border border-white/[0.06] overflow-hidden',
          'bg-white/[0.02] backdrop-blur-sm',
          'transition-all duration-500 ease-out',
          'hover:border-white/[0.15] hover:bg-white/[0.04]',
          'hover:shadow-[0_0_60px_-12px_var(--color-glow)]',
          featured ? 'p-8 md:p-10' : 'p-6',
        )}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-purple-500/[0.03]" />

        <div className="relative">
          {/* Meta */}
          <div className="flex items-center gap-3 mb-4">
            <time className="text-xs text-[var(--color-text-tertiary)] font-mono">
              {formatDate(post.date)}
            </time>
            <span className="h-3 w-px bg-white/10" />
            <span className="text-xs text-[var(--color-text-tertiary)]">~{Math.max(1, Math.ceil(post.content.length / 400))} 分钟</span>
          </div>

          {/* Title */}
          <h3
            className={cn(
              'font-semibold tracking-tight mb-3 text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-hover)] transition-colors duration-300',
              featured ? 'text-2xl md:text-3xl' : 'text-lg',
            )}
          >
            {post.title}
          </h3>

          {/* Description */}
          <p
            className={cn(
              'text-[var(--color-text-secondary)] leading-relaxed mb-5 line-clamp-2',
              featured ? 'text-base' : 'text-sm',
            )}
          >
            {post.description}
          </p>

          {/* Footer: Tags + Arrow */}
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <Badge key={tag}>#{tag}</Badge>
              ))}
            </div>
            <ArrowUpRight
              size={16}
              className="text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </article>
    </Link>
  );
}
