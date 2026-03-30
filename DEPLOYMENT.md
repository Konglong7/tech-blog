# 🚀 部署指南

本文档详细说明如何将博客部署到各个平台。

## 📋 部署前准备

### 1. 确保项目构建成功

```bash
npm run build
```

如果构建成功，会在 `dist/` 目录生成静态文件。

### 2. 配置网站 URL

编辑 `astro.config.mjs`，将 `site` 改为你的实际域名：

```javascript
export default defineConfig({
  site: 'https://your-actual-domain.com',
  // ...
});
```

### 3. 配置评论系统（可选）

如果要使用 Giscus 评论系统：

1. 访问 https://giscus.app/
2. 按照指引配置你的 GitHub 仓库
3. 获取配置参数
4. 编辑 `src/components/Comments.astro`，替换配置

## 🌐 部署到 Vercel（推荐）

### 方式一：通过 Vercel 网站部署

1. 访问 https://vercel.com/
2. 点击 "New Project"
3. 导入你的 GitHub 仓库 `Konglong7/tech-blog`
4. Vercel 会自动检测 Astro 项目
5. 点击 "Deploy"

### 方式二：通过 Vercel CLI 部署

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
vercel

# 部署到生产环境
vercel --prod
```

### 配置环境变量（如果使用 Tina CMS）

在 Vercel 项目设置中添加环境变量：

- `TINA_CLIENT_ID`: 你的 Tina Client ID
- `TINA_TOKEN`: 你的 Tina Token
- `TINA_BRANCH`: main

## 🎯 部署到 Netlify

### 方式一：通过 Netlify 网站部署

1. 访问 https://netlify.com/
2. 点击 "Add new site" → "Import an existing project"
3. 选择 GitHub 并授权
4. 选择 `Konglong7/tech-blog` 仓库
5. 配置构建设置：
   - Build command: `npm run build`
   - Publish directory: `dist`
6. 点击 "Deploy site"

### 方式二：通过 Netlify CLI 部署

```bash
# 安装 Netlify CLI
npm i -g netlify-cli

# 登录
netlify login

# 初始化
netlify init

# 部署
netlify deploy

# 部署到生产环境
netlify deploy --prod
```

## 🐳 部署到自己的服务器

### 使用 Docker

创建 `Dockerfile`:

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

构建和运行：

```bash
# 构建镜像
docker build -t tech-blog .

# 运行容器
docker run -d -p 80:80 tech-blog
```

### 使用 Nginx

```bash
# 1. 构建项目
npm run build

# 2. 上传 dist/ 目录到服务器
scp -r dist/* user@your-server:/var/www/blog/

# 3. 配置 Nginx
```

Nginx 配置示例 (`/etc/nginx/sites-available/blog`):

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/blog;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 启用 gzip 压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # 缓存静态资源
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

重启 Nginx:

```bash
sudo nginx -t
sudo systemctl restart nginx
```

## 🔧 配置自定义域名

### Vercel

1. 进入项目设置 → Domains
2. 添加你的域名
3. 按照提示配置 DNS 记录

### Netlify

1. 进入 Site settings → Domain management
2. 添加自定义域名
3. 配置 DNS 记录

### DNS 配置示例

添加以下记录到你的 DNS 提供商：

**Vercel:**
```
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```

**Netlify:**
```
A     @     75.2.60.5
CNAME www   your-site.netlify.app
```

## 🔒 启用 HTTPS

Vercel 和 Netlify 会自动为你的域名配置 HTTPS 证书（Let's Encrypt）。

如果是自己的服务器，使用 Certbot:

```bash
# 安装 Certbot
sudo apt install certbot python3-certbot-nginx

# 获取证书
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# 自动续期
sudo certbot renew --dry-run
```

## 📊 配置分析（可选）

### Google Analytics

在 `src/layouts/BaseLayout.astro` 的 `<head>` 中添加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script is:inline>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔄 持续部署

Vercel 和 Netlify 都支持自动部署：

- 推送到 `main` 分支 → 自动部署到生产环境
- 推送到其他分支 → 自动创建预览部署

## ✅ 部署检查清单

- [ ] 项目构建成功 (`npm run build`)
- [ ] 配置正确的网站 URL
- [ ] 配置评论系统（如果使用）
- [ ] 配置环境变量（如果使用 Tina CMS）
- [ ] 测试所有页面正常访问
- [ ] 测试深色模式切换
- [ ] 测试 RSS feed (`/rss.xml`)
- [ ] 配置自定义域名
- [ ] 启用 HTTPS
- [ ] 配置分析工具（可选）

## 🆘 常见问题

### 构建失败

检查 Node.js 版本是否 >= 18:

```bash
node --version
```

### 404 错误

确保服务器配置了正确的路由回退到 `index.html`。

### 样式丢失

检查 `astro.config.mjs` 中的 `site` 配置是否正确。

### 评论不显示

检查 Giscus 配置是否正确，GitHub 仓库是否开启了 Discussions。

---

🎉 恭喜！你的博客已经成功部署！
