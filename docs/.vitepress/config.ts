import { defineConfig } from 'vitepress'
import { nav, sidebar } from './relaConf'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "skpr",
  description: "前端面试题集",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/avatar.png',
    nav: nav,

    sidebar: sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AprilHappinessweb/blog_vitepress' }
    ],
    search: {
      provider: 'local'
    }
  },
  base: '/blog_vitepress/',
  outDir: '/blog_vitepress/'
})
