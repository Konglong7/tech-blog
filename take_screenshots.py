"""
截取博客网站的各个页面截图
"""
from playwright.sync_api import sync_playwright
import time

def take_screenshots():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1920, 'height': 1080})

        # 1. 首页 - 浅色模式
        print("截取首页（浅色模式）...")
        page.goto('http://localhost:4321')
        page.wait_for_load_state('networkidle')
        page.screenshot(path='screenshots/01-homepage-light.png', full_page=True)

        # 2. 首页 - 深色模式
        print("截取首页（深色模式）...")
        page.locator('#theme-toggle').click()
        time.sleep(0.5)
        page.screenshot(path='screenshots/02-homepage-dark.png', full_page=True)

        # 3. 博客列表页 - 浅色模式
        print("截取博客列表页（浅色模式）...")
        page.locator('#theme-toggle').click()  # 切回浅色
        time.sleep(0.5)
        page.goto('http://localhost:4321/blog')
        page.wait_for_load_state('networkidle')
        page.screenshot(path='screenshots/03-blog-list-light.png', full_page=True)

        # 4. 博客列表页 - 深色模式
        print("截取博客列表页（深色模式）...")
        page.locator('#theme-toggle').click()
        time.sleep(0.5)
        page.screenshot(path='screenshots/04-blog-list-dark.png', full_page=True)

        # 5. 文章详情页 - 浅色模式
        print("截取文章详情页（浅色模式）...")
        page.locator('#theme-toggle').click()  # 切回浅色
        time.sleep(0.5)
        page.goto('http://localhost:4321/blog/welcome')
        page.wait_for_load_state('networkidle')
        page.screenshot(path='screenshots/05-article-welcome-light.png', full_page=True)

        # 6. 文章详情页 - 深色模式
        print("截取文章详情页（深色模式）...")
        page.locator('#theme-toggle').click()
        time.sleep(0.5)
        page.screenshot(path='screenshots/06-article-welcome-dark.png', full_page=True)

        # 7. Astro 文章 - 浅色模式
        print("截取 Astro 文章（浅色模式）...")
        page.locator('#theme-toggle').click()  # 切回浅色
        time.sleep(0.5)
        page.goto('http://localhost:4321/blog/astro-introduction')
        page.wait_for_load_state('networkidle')
        page.screenshot(path='screenshots/07-article-astro-light.png', full_page=True)

        # 8. 深色模式文章 - 深色模式
        print("截取深色模式文章（深色模式）...")
        page.locator('#theme-toggle').click()
        time.sleep(0.5)
        page.goto('http://localhost:4321/blog/dark-mode-implementation')
        page.wait_for_load_state('networkidle')
        page.screenshot(path='screenshots/08-article-darkmode-dark.png', full_page=True)

        # 9. 关于页面 - 浅色模式
        print("截取关于页面（浅色模式）...")
        page.locator('#theme-toggle').click()  # 切回浅色
        time.sleep(0.5)
        page.goto('http://localhost:4321/about')
        page.wait_for_load_state('networkidle')
        page.screenshot(path='screenshots/09-about-light.png', full_page=True)

        # 10. 关于页面 - 深色模式
        print("截取关于页面（深色模式）...")
        page.locator('#theme-toggle').click()
        time.sleep(0.5)
        page.screenshot(path='screenshots/10-about-dark.png', full_page=True)

        # 11. 移动端视图 - 首页
        print("截取移动端首页...")
        page.set_viewport_size({'width': 375, 'height': 812})
        page.locator('#theme-toggle').click()  # 切回浅色
        time.sleep(0.5)
        page.goto('http://localhost:4321')
        page.wait_for_load_state('networkidle')
        page.screenshot(path='screenshots/11-mobile-homepage.png', full_page=True)

        # 12. 移动端视图 - 博客列表
        print("截取移动端博客列表...")
        page.goto('http://localhost:4321/blog')
        page.wait_for_load_state('networkidle')
        page.screenshot(path='screenshots/12-mobile-blog-list.png', full_page=True)

        browser.close()
        print("\n✅ 所有截图已保存到 screenshots/ 目录")

if __name__ == '__main__':
    take_screenshots()
