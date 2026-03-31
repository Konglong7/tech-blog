"""
全面测试页面加载和布局
"""
from playwright.sync_api import sync_playwright
import time

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1920, 'height': 1080})

    print("测试首页...")
    page.goto('http://localhost:4321')
    page.wait_for_load_state('networkidle')
    time.sleep(1)
    page.screenshot(path='screenshots/test-homepage.png', full_page=True)

    # 获取页面 HTML 检查问题
    content = page.content()
    with open('screenshots/homepage-debug.html', 'w', encoding='utf-8') as f:
        f.write(content)

    print("测试博客列表...")
    page.goto('http://localhost:4321/blog')
    page.wait_for_load_state('networkidle')
    time.sleep(1)
    page.screenshot(path='screenshots/test-blog.png', full_page=True)

    print("测试文章页...")
    page.goto('http://localhost:4321/blog/welcome')
    page.wait_for_load_state('networkidle')
    time.sleep(1)
    page.screenshot(path='screenshots/test-article.png', full_page=True)

    browser.close()
    print("✅ 测试完成")
