import { Feed } from 'feed';
import { getAllPosts } from '@/lib/content';
import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export async function GET() {
  try {
    const posts = getAllPosts();
    const feed = new Feed({
      title: '恐龙大王的技术博客',
      description: '分享前端开发、编程技术和个人见解',
      id: SITE_URL,
      link: SITE_URL,
      language: 'zh-CN',
      copyright: `© ${new Date().getFullYear()} 恐龙大王`,
      author: { name: '恐龙大王', link: 'https://github.com/Konglong7' },
    });

    posts.forEach((post) => {
      feed.addItem({
        title: post.title,
        id: `${SITE_URL}/blog/${post.slug}`,
        link: `${SITE_URL}/blog/${post.slug}`,
        description: post.description,
        date: new Date(post.date),
        category: post.tags.map((tag) => ({ name: tag })),
        author: [{ name: post.author }],
      });
    });

    return new NextResponse(feed.rss2(), {
      headers: { 'Content-Type': 'application/xml' },
    });
  } catch {
    return new NextResponse('RSS generation failed', { status: 500 });
  }
}
