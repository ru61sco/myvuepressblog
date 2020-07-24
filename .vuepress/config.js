const moment = require("moment")

module.exports = {
  title: 'Rubisco\'s blog',
  description: '硅锗的小站，记录个人生活',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: '硅锗' }],
    ['meta', { name: 'keywords', content: 'vuepress, personal, images' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  plugins: {
    '@vuepress/last-updated': {
      transformer: (timestamp) => moment(timestamp).format("LLLL")
    },
    '@vuepress/pwa': {
      serviceWorker: true,
      updatedPopup: {
        message: "博主又更了新鲜事",
        buttonText: "get新鲜事√",
      }
    },
    '@vssue/vuepress-plugin-vssue': {
      // set `platform` rather than `api`
      platform: 'github-v4',
      // all other options of Vssue are allowed
      owner: 'hugeneuron',
      repo: 'docs',
      clientId: '35a661b9e57fa08c3a4a',
      clientSecret: '9a44abe493c34eb939db3e55f414d2a37b03e567',
      autoCreateIssue: false,
    },
  },
  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/assets/img/logo.png',
    nav: [
      { text: "Home", link: '/' },
      { text: "Guide", link: '/about' },
      { text: "Bing搜索", link: 'https://bing.com' }
    ],
    sidebar: {
      '/life/': [
        'travel',
        'photography',
        'music',
      ],
      '/work/': [
        'biology',
        'pharma',
      ],
    }
  }
}