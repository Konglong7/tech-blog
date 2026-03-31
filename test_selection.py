"""
测试文本选中效果
"""
from playwright.sync_api import sync_playwright
import time

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1920, 'height': 1080})

    # 访问博客列表页
    page.goto('http://localhost:4321/blog')
    page.wait_for_load_state('networkidle')

    # 截取正常状态
    page.screenshot(path='screenshots/tags-normal.png')

    print("✅ 测试完成")
    browser.close()
