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
  // {
  //   text: '经典项目demo',
  //   link: '/column/Growing/'
  // },
  // {
  //   text: '前端调试和优化',
  //   items: [
  //     {
  //       text: 'Webpack',
  //       link: 'https://juejin.cn/user/3131845139247960/posts'
  //     },
  //     {
  //       text: 'Vite',
  //       link: 'https://github.com/Jacqueline712',
  //     },
  //     {
  //       text: 'Mock数据',
  //       link: 'https://github.com/Jacqueline712',
  //     }
  //   ]
  // },
  // {
  //   text: '其他',
  //   items: [
  //     {
  //       text: '常见的Git命令',
  //       link: 'https://juejin.cn/user/3131845139247960/posts'
  //     },
  //     {
  //       text: 'Echarts',
  //       link: 'https://github.com/Jacqueline712',
  //     }
  //   ]
  // },
  {
    text: '关于我',
    items: [
      {
        text: '掘金',
        link: 'https://juejin.cn/user/1292681406322365'
      },
      {
        text: 'Github',
        link: 'https://github.com/AprilHappinessweb',
      }
    ]
  }
];