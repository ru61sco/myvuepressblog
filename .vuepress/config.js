module.exports = {
    themeConfig: {
      lastUpdated: '更新时间',
      logo: '/assets/img/logo.png',
      nav: [
          {text: "Home", link: '/'},
          {text: "Guide", link: '/about'},
          {text: "Bing搜索", link: 'https://bing.com'}
      ],
      sidebar: {
        '/life/':[
          'travel',
          'photography',
          'music',
        ],
        '/work/':[
          'biology',
          'pharma',
        ],
      }
    }
  }