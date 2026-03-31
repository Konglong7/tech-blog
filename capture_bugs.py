"""
截取当前问题页面
"""
from playwright.sync_api import sync_playwright
import time

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1920, 'height': 1080})

    # 首页
    page.goto('http://localhost:4321')
    page.wait_for_load_state('networkidle')
    page.screenshot(path='screenshots/bug-homepage.png', full_page=True)

    # 鼠标悬停在标签上
    page.goto('http://localhost:4321/blog')
    page.wait_for_load_state('networkidle')
    page.screenshot(path='screenshots/bug-blog-tags.png', full_page=True)

    browser.close()
    print("✅ 问题截图已保存")
