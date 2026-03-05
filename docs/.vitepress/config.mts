import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "澳洲大学留学指南",
  description: "全面解析澳洲大学的硬核教程。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: '导读',
        items: [{ text: '从这里开始阅读', link: '/' }]
      },
      {
        text: '留学启航',
        collapsed: false,
        items: [
          { text: '概览', link: '/ch1' },
          { text: '澳洲学制与教育体系', link: '/ch1#1-1-澳洲学制与教育体系' },
          { text: '学制与学分扫盲', link: '/ch1#1-2-学制与学分扫盲' },
          { text: '灵魂拷问：我需要找中介吗？', link: '/ch1#1-3-灵魂拷问-我需要找中介吗' },
          { text: '留学资金与时间规划', link: '/ch1#1-4-留学资金与时间规划' },
        ]
      }
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chenzhi-liu/australia-study-guide' }
    ]
  }
})
