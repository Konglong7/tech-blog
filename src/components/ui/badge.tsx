import { cn } from '@/lib/utils';

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        'bg-white/[0.04] border border-white/[0.08] text-[var(--color-text-secondary)]',
        'transition-colors duration-300',
        className,
      )}
    >
      {children}
    </span>
  );
}
