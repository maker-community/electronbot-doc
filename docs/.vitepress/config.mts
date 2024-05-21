import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ElectronBot精选文档",
  description: "主要包含复刻流程和相关介绍",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],
    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2023-${new Date().getFullYear()} <a href="https://github.com/outian">tian.ou</a>`
    },

    sidebar: [
      {
        text: '文档中心',
        items: [
          { text: '1.背景说明', link: '/start-doc' },
          { text: '2.电子重要信息汇总', link: '/guide/2_电子制作步骤及重要信息汇总/README' },
          { text: '3.基础知识扫盲', link: '/guide/3_基础知识扫盲/README' },
          { text: '4.硬件制作', link: '/guide/4_硬件制作/README' },
          { text: '5.2024年新版硬件', link: '/guide/5_2024年新版硬件/README' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/maker-community' },
      {
        icon: {
          svg: '<svg t="1716319042196" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1629" width="200" height="200"><path d="M306.005333 117.632L444.330667 256h135.296l138.368-138.325333a42.666667 42.666667 0 0 1 60.373333 60.373333L700.330667 256H789.333333A149.333333 149.333333 0 0 1 938.666667 405.333333v341.333334a149.333333 149.333333 0 0 1-149.333334 149.333333h-554.666666A149.333333 149.333333 0 0 1 85.333333 746.666667v-341.333334A149.333333 149.333333 0 0 1 234.666667 256h88.96L245.632 177.962667a42.666667 42.666667 0 0 1 60.373333-60.373334zM789.333333 341.333333h-554.666666a64 64 0 0 0-63.701334 57.856L170.666667 405.333333v341.333334a64 64 0 0 0 57.856 63.701333L234.666667 810.666667h554.666666a64 64 0 0 0 63.701334-57.856L853.333333 746.666667v-341.333334A64 64 0 0 0 789.333333 341.333333zM341.333333 469.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v85.333333a42.666667 42.666667 0 0 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666666-42.666667z m341.333334 0a42.666667 42.666667 0 0 1 42.666666 42.666667v85.333333a42.666667 42.666667 0 0 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666667-42.666667z" p-id="1630"></path></svg>'
        },
        link: 'https://space.bilibili.com/25228512',
        // 也可以为无障碍添加一个自定义标签 (可选但推荐):
        ariaLabel: 'cool link'
      }
    ]
  }
})