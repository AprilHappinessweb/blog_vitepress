// docs/.vitepress/relaConf/navbar.ts
import { DefaultTheme } from 'vitepress';
export const nav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  {
    text: '面试汇总',
    items: [
      {
        text: '面试态度和自我介绍',
        link: '/column/Interview/introduce/'
      },
      {
        text: '简历',
        link: '/column/Interview/curriculumVitae/',
      },
      {
        text: '浏览器http',
        link: '/column/Interview/base_http/',
      },
      {
        text: 'HTML',
        link: '/column/Interview/base_html/',
      },
      {
        text: 'CSS',
        link: '/column/Interview/base_css/',
      },
      {
        text: 'JAVASCRIPT',
        link: '/column/Interview/base_js/',
      },
      {
        text: 'VUE',
        link: '/column/Interview/progress_vue/',
      }
    ]
  },
  {
    text: '前端调试和优化',
    items: [
      {
        text: 'Webpack',
        link: '/column/tool/webpack/'
      },
      {
        text: 'Vite',
        link: '/column/tool/vite/',
      },
      {
        text: '模拟数据',
        link: '/column/tool/mock/',
      },
      {
        text: 'Git',
        link: '/column/tool/git/',
      }
    ]
  },
  //     {
  //       text: 'Echarts',
  //       link: 'https://github.com/Jacqueline712',
  //     }
  {
    text: '关于我们',
    link:'/column/ours/'
  }
];