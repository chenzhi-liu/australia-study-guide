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
        text: '<b>§1</b> 学制规则与前期规划',
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
        text: '<b>§2</b> 选择最适合你的升学方案',
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
        text: '<b>§3</b> 澳洲录取、职业注册与移民体系',
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
      },
      {
        text: '<b>§4</b> 数字化申请实操：邮件沟通、材料准备与 AI 辅助指南',
        collapsed: true,
        items: [
          { text: '概览', link: '/ch4' },
          { text: '使用电子邮件', link: '/ch4#4-1' },
          { text: '上传 PDF', link: '/ch4#4-2' },
          { text: '核心申请材料', link: '/ch4#4-3' },
          { text: '材料翻译与公证', link: '/ch4#4-4' },
          { text: 'AI 辅助留学', link: '/ch4#4-5' },
        ]
      },
      {
        text: '<b>§5</b> 学生签证（Visa 500）扫盲',
        collapsed: true,
        items: [
          { text: '概览', link: '/ch5' },
          { text: '澳洲 500 签证是什么？', link: '/ch5#5-1' },
          { text: '为什么需要提交的材料时常发生变化？', link: '/ch5#5-2' },
          { text: '我需要找签证代理吗？', link: '/ch5#5-3' },
          { text: 'GS (Genuine Student) 真实学生测试', link: '/ch5#5-4' },
          { text: '签证材料清单', link: '/ch5#5-5' },
        ]
      }
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chenzhi-liu/australia-study-guide' }
    ]
  }
})
