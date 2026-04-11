import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
  className?: string;
}

export function Button({ href, children, variant = 'primary', className }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]';

  const variants = {
    primary:
      'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] hover:shadow-[0_0_30px_var(--color-glow)]',
    ghost:
      'border border-white/10 bg-white/[0.03] text-[var(--color-text-secondary)] hover:bg-white/[0.08] hover:border-white/20 hover:text-[var(--color-text-primary)]',
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
