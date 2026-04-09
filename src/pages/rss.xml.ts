/**
 * RSS Feed 生成器
 * 为博客生成 RSS 订阅源
 */
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { siteUrl } from '../../site.config.mjs';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  const publishedPosts = posts
    .filter(post => !post.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: '恐龙大王的技术博客',
    description: '分享前端开发、编程技术和个人见解',
    site: context.site || siteUrl,
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.id.replace('.md', '')}/`,
      categories: post.data.tags,
      author: post.data.author,
    })),
    customData: `<language>zh-CN</language>`,
  });
}
