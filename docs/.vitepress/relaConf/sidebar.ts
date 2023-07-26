// docs/.vitepress/relaConf/navbar.ts
import { DefaultTheme } from 'vitepress';
// export const sidebar: DefaultTheme.SidebarItem[] =
export const sidebar: DefaultTheme.Sidebar =
// /column/Algothm/表示对这个文件夹下的所有md文件做侧边栏配置
{
  '/column/Interview/':
    [
      {
        text: '面试准备',
        items: [
          {
            text: '面试过程',
            link: '/column/Interview/introduce/'
          },
          {
            text: '简历',
            link: '/column/Interview/curriculumVitae/'
          }
        ]
      },
      {
        text: '基础知识',
        items: [
          {
            text: '浏览器http',
            link: '/column/Interview/base_http/'
          }, {
            text: 'HTML',
            link: '/column/Interview/base_html/'
          }, {
            text: 'CSS',
            link: '/column/Interview/base_css/'
          }, {
            text: 'JAVASCRIPT',
            link: '/column/Interview/base_js/'
          }, {
            text: 'VUE',
            link: '/column/Interview/progress_vue/'
          }
        ]
      }],
  '/column/tool/':
    [
      {
        text:'前端调试和优化',
        items:[
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
      }
    ],
}