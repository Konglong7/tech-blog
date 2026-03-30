# 🦖 恐龙大王的技术博客

一个使用 Astro 构建的现代化个人技术博客，具有简约大气的设计风格和完整的博客功能。

## ✨ 特性

- 🚀 **极致性能** - 基于 Astro 的静态网站生成，加载速度极快
- 🎨 **简约设计** - 清晰的排版，大量留白，充满高级感
- 🌓 **深色模式** - 支持亮色/暗色主题切换，自动适配系统偏好
- 📝 **Markdown 写作** - 使用 Markdown 编写文章，支持代码高亮
- 🎯 **Tina CMS** - 集成可视化内容管理系统，方便文章管理
- 💬 **Giscus 评论** - 基于 GitHub Discussions 的评论系统
- 📡 **RSS 订阅** - 自动生成 RSS feed
- 🏷️ **标签系统** - 文章分类和标签过滤
- 📱 **响应式设计** - 完美适配各种设备
- ⚡ **SEO 优化** - 自动生成 sitemap，搜索引擎友好

## 🛠️ 技术栈

- **框架**: [Astro](https://astro.build/) - 现代化静态网站生成器
- **样式**: [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- **CMS**: [Tina CMS](https://tina.io/) - 可视化内容管理系统
- **评论**: [Giscus](https://giscus.app/) - GitHub Discussions 评论系统
- **部署**: [Vercel](https://vercel.com/) / [Netlify](https://netlify.com/) - 静态网站托管

## 📦 项目结构

```
tech-blog/
├── src/
│   ├── components/          # 可复用组件
│   │   ├── Header.astro     # 网站头部
│   │   ├── Footer.astro     # 网站底部
│   │   ├── BlogCard.astro   # 博客卡片
│   │   ├── Comments.astro   # 评论组件
│   │   └── DarkModeToggle.astro  # 深色模式切换
│   ├── layouts/             # 页面布局
│   │   ├── BaseLayout.astro      # 基础布局
│   │   └── BlogPostLayout.astro  # 博客文章布局
│   ├── pages/               # 页面路由
│   │   ├── index.astro      # 首页
│   │   ├── about.astro      # 关于页面
│   │   ├── blog/
│   │   │   ├── index.astro  # 博客列表
│   │   │   └── [slug].astro # 文章详情（动态路由）
│   │   └── rss.xml.ts       # RSS feed
│   ├── content/             # 博客文章内容
│   │   └── blog/            # Markdown 文章
│   ├── styles/              # 全局样式
│   │   └── global.css       # 全局 CSS
│   └── content.config.ts    # 内容集合配置
├── tina/                    # Tina CMS 配置
│   └── config.ts
├── public/                  # 静态资源
├── astro.config.mjs         # Astro 配置
├── tailwind.config.mjs      # Tailwind 配置
├── vercel.json              # Vercel 部署配置
└── package.json
```

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/your-username/tech-blog.git
cd tech-blog
```

### 2. 安装依赖

```bash
npm install
```

### 3. 配置环境变量

复制 `.env.example` 为 `.env` 并填写配置：

```bash
cp .env.example .env
```

编辑 `.env` 文件：

```env
# Tina CMS 配置（可选，如果不使用 CMS 可以跳过）
TINA_CLIENT_ID=your_client_id_here
TINA_TOKEN=your_token_here
TINA_BRANCH=main

# 网站配置
SITE_URL=https://yourdomain.com
```

### 4. 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:4321](http://localhost:4321) 查看网站。

### 5. 构建生产版本

```bash
npm run build
```

构建产物将生成在 `dist/` 目录。

### 6. 预览生产版本

```bash
npm run preview
```

## 📝 写作指南

### 创建新文章

在 `src/content/blog/` 目录下创建新的 `.md` 文件：

```markdown
---
title: "文章标题"
description: "文章描述"
date: 2026-03-31
tags: ["标签1", "标签2"]
draft: false
author: "恐龙大王"
---

## 文章内容

这里是文章正文...
```

### 使用 Tina CMS 管理文章

1. 启动开发服务器：`npm run dev`
2. 访问 `/admin/index.html`
3. 使用可视化界面创建和编辑文章

## 🎨 自定义配置

### 修改网站信息

编辑以下文件来自定义网站信息：

- `src/components/Header.astro` - 修改网站标题和导航
- `src/components/Footer.astro` - 修改版权信息和社交链接
- `src/pages/about.astro` - 修改关于页面内容
- `astro.config.mjs` - 修改网站 URL

### 配置评论系统

1. 访问 [Giscus 官网](https://giscus.app/)
2. 按照指引配置你的 GitHub 仓库
3. 获取配置参数
4. 编辑 `src/components/Comments.astro`，替换以下内容：
   - `data-repo`: 你的 GitHub 仓库
   - `data-repo-id`: 仓库 ID
   - `data-category-id`: 分类 ID

### 修改主题颜色

编辑 `src/styles/global.css` 中的 CSS 变量：

```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #111827;
  --accent: #3b82f6;
  /* 更多颜色... */
}
```

## 🚢 部署

### 部署到 Vercel（推荐）

1. 将代码推送到 GitHub
2. 访问 [Vercel](https://vercel.com/)
3. 导入你的 GitHub 仓库
4. Vercel 会自动检测 Astro 项目并部署
5. 配置环境变量（如果使用 Tina CMS）

### 部署到 Netlify

1. 将代码推送到 GitHub
2. 访问 [Netlify](https://netlify.com/)
3. 导入你的 GitHub 仓库
4. 构建命令：`npm run build`
5. 发布目录：`dist`

### 部署到自己的服务器

```bash
# 构建项目
npm run build

# 将 dist/ 目录上传到服务器
# 配置 Nginx 或其他 Web 服务器指向 dist/ 目录
```

## 📋 可用命令

| 命令 | 说明 |
| :--- | :--- |
| `npm install` | 安装依赖 |
| `npm run dev` | 启动开发服务器 (localhost:4321) |
| `npm run build` | 构建生产版本到 ./dist/ |
| `npm run preview` | 本地预览生产版本 |
| `npm run astro ...` | 运行 Astro CLI 命令 |

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 👤 作者

**恐龙大王**

- GitHub: [@your-username](https://github.com/your-username)
- Email: your-email@example.com

## 🙏 致谢

- [Astro](https://astro.build/) - 优秀的静态网站生成器
- [Tailwind CSS](https://tailwindcss.com/) - 强大的 CSS 框架
- [Tina CMS](https://tina.io/) - 现代化的内容管理系统
- [Giscus](https://giscus.app/) - 基于 GitHub 的评论系统

---

⭐ 如果这个项目对你有帮助，请给个 Star！
