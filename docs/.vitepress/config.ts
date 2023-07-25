import { defineConfig } from 'vitepress'
import { nav,sidebar } from './relaConf'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "前端美少女",
  description: "一个小前端的博客空间",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/avatar.png',
    nav: nav,

    sidebar: sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AprilHappinessweb' }
    ],
    search: {
      provider: 'local'
    }
  },
  base:'/blog_vitepress/',
  outDir:'../blog_vitepress'
})
