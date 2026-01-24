import { defineConfig } from 'vitepress'


export default defineConfig({
  title: "Asus Rog Ally Optimization",
  description: "Guide to optimize Rog ally",
  base: "/rogally-tutorial/" ,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
//      { text: 'Introduction', link: '/information' }
    ],

    sidebar: [
      {
        text: '📖 Introduction',
	collapsed: false,
        items: [
          { text: 'Hardware Info', link: '/hardware' },
          { text: 'The Problem', link: '/windows' },
        ]
      },
      {
	text: '🚀 Performance',
	collpased: false,
	items:[
	 { text: 'Removing Windows', link: '/linux-install' },
	]
      }		
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
