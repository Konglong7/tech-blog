import type { Metadata } from 'next';
import { inter } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '恐龙大王的技术博客',
    template: '%s | 恐龙大王的技术博客',
  },
  description: '分享前端开发、编程技术和个人见解',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: '恐龙大王的技术博客',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body className="font-sans antialiased">
        <div className="noise-overlay" />
        <div className="grid-pattern" />
        <div className="aurora-container">
          <div className="aurora-blob" />
          <div className="aurora-blob" />
          <div className="aurora-blob" />
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
