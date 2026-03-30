---
title: "如何实现优雅的深色模式"
description: "详细介绍如何在网站中实现深色模式切换，避免闪烁问题。"
date: 2026-03-29
tags: ["CSS", "深色模式", "用户体验"]
draft: false
author: "恐龙大王"
---

## 深色模式的重要性

深色模式已经成为现代网站的标配功能。它不仅能减少眼睛疲劳，还能节省设备电量。

### 实现方案

#### 1. CSS 变量

使用 CSS 变量定义颜色主题：

```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #111827;
}

.dark {
  --bg-primary: #0f172a;
  --text-primary: #f1f5f9;
}
```

#### 2. 避免闪烁

在页面加载前立即执行主题检测：

```javascript
const getTheme = () => {
  if (localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches 
    ? 'dark' 
    : 'light';
};

const theme = getTheme();
document.documentElement.classList.toggle('dark', theme === 'dark');
```

#### 3. 主题切换

实现平滑的主题切换：

```javascript
function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
```

### 最佳实践

1. **尊重系统偏好** - 默认使用系统主题
2. **持久化选择** - 保存用户的主题选择
3. **平滑过渡** - 使用 CSS transition
4. **避免闪烁** - 在 HTML head 中内联脚本

### 用户体验考虑

- 提供明显的切换按钮
- 使用合适的图标（太阳/月亮）
- 确保所有元素都适配深色模式
- 测试对比度是否符合无障碍标准

### 总结

实现深色模式需要考虑性能、用户体验和无障碍性。通过合理的技术方案，可以为用户提供优雅的深色模式体验。
