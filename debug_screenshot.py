"""
重新截取当前页面以识别问题
"""
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1920, 'height': 1080})

    # 截取首页
    page.goto('http://localhost:4321')
    page.wait_for_load_state('networkidle')
    page.screenshot(path='screenshots/debug-homepage.png', full_page=True)

    # 截取文章页
    page.goto('http://localhost:4321/blog/welcome')
    page.wait_for_load_state('networkidle')
    page.screenshot(path='screenshots/debug-article.png', full_page=True)

    browser.close()
    print("✅ 调试截图已保存")
