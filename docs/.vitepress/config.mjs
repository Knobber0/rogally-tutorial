import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Asus Rog Ally Optimization",
  description: "Guide to optimize Rog ally",
  base: "/rogally-tutorial/",
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
          { text: '⚙️ ROG Ally and Technical Issues', link: '/rog-ally-and-technical-issues' },
        ]
      },
      {
        text: '🚀 Performance',
        collapsed: false,
        items: [
          {
            text: '💻 Software level',
            items: [
              { text: '🗑️ Removing Windows', link: '/linux-install' },
              { text: '🛠️ Deckyloader', link: '/deckyloader' },
              { text: '🔩 Custom Kernel', link: '/custom-kernel' },
              { text: '🎮 Game mods', link: '/game-modding' },
	      { text: '🌀 Fan Curve', link: '/fan-curve' },
	      { text: '🔍 Fsr', link: '/fsr' },
	      { text: '🧠 UMA Buffer', link: '/uma' }
            ]
          },
          {
            text: '⚙️ Hardware level',
            items: [
              { text: '🔋 Undervolting', link: '/undervolt' },
	      { text: '⚡ Overclock', link: '/overclock' },
	      { text: '❄️ Thermal Mmods', link: '/thermal' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
