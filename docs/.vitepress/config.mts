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
        collapsed: true,
        items: [
          { text: '概览', link: '/ch1' },
          { text: '澳洲学制与教育体系', link: '/ch1#1-1' },
          { text: '学制与学分扫盲', link: '/ch1#1-2' },
          { text: '灵魂拷问：我需要找中介吗？', link: '/ch1#1-3' },
          { text: '留学资金与时间规划', link: '/ch1#1-4' },
        ]
      },
      {
        text: '寻路澳洲',
        collapsed: true,
        items: [
          { text: '你的专属申请通道', link: '/ch2' },
          { text: '本科申请：高中毕业生', link: '/ch2#2-1' },
          { text: '本科申请：高二学生（预科）', link: '/ch2#2-2' },
          { text: '本科申请：专科毕业生', link: '/ch2#2-3' },
          { text: '本科申请：本科在读（转学）', link: '/ch2#2-4' },
          { text: '硕士申请：授课型硕士与硕士预科', link: '/ch2#2-5' },
          { text: '语言班', link: '/ch2#2-6' },
          { text: 'Offer 机制', link: '/ch2#2-7' },
          { text: '避坑指南：合作办学', link: '/ch2#2-8' },
        ]
      },
      {
        text: '选专业与移民真相',
        collapsed: true,
        items: [
          { text: '概览', link: '/ch3' },
          { text: '合格录取与竞争录取', link: '/ch3#3-1' },
          { text: '行业注册壁垒', link: '/ch3#3-2' },
          { text: '核心签证类型', link: '/ch3#3-3' },
          { text: '常见技术移民代码', link: '/ch3#3-4' },
          { text: '签证结果申诉', link: '/ch3#3-5' },
          { text: '学校排名与移民', link: '/ch3#3-6' },
          { text: '非法入境', link: '/ch3#3-7' },
        ]
      }
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chenzhi-liu/australia-study-guide' }
    ]
  }
})
