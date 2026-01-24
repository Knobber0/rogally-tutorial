import { defineConfig } from 'vitepress'


export default defineConfig({
  title: "Asus Rog Ally Optimization",
  description: "Guide to optimize Rog ally",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
//      { text: 'Key Information', link: '/information' }
    ],

    sidebar: [
      {
        text: 'Key Information',
        items: [
          { text: 'Hardware Info' ,link: '/information' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
