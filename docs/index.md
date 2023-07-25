---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: 美少女前端的博客
titleTemplate: 一起来学习吧
editLink: true
lastUpdated: true

hero:
  name: "skpr"
  text: "新星之火"
  tagline: 可以不万丈光芒，但不要停止发光，你坚持的东西总有一天会反过来拥抱你
  image:
        # 首页右边的图片
        src: /images/avatar.png
        # 图片的描述
        alt: avatar
  actions:
    - theme: brand
      text: 开始学习
      link: /column/home/
    # - theme: alt
    #   text: 刷面试题
    #   link: /column/study/

features:
  - icon: 🤹
    title: 面试题分享
    details: 每天进步一点点
  - icon: 🎨
    title: 项目分享
    details: 开源简单的前端技术DEMO
  - icon: 🌞
    title: 快乐学习
    details: 相信自己能够飞起来
---

<script setup>
  import home from './components/home.vue'
</script>
<!-- <home/> -->
