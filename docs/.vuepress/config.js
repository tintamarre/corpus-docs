// .vuepress/config.js

module.exports = {
  plugins: ['@vuepress/last-updated', '@vuepress/back-to-top'],
  title: 'Documentation of Corpus',
  description: '‍Corpus is a free open source software developed by University of Liège in Belgium',
  base: '/',
  themeConfig: {
    sidebar: 'auto',
    nav: [
      { text: 'Corpus', link: 'https://corpus.lltl.be' },
    ],
    sidebar: 
    {
      '/documentation/': [
        '01-create-content',
        '02-label-content',
        '03-tag-content',
        '04-share-corpus', 
        '99-faq'
      ],
    },
    repo: 'tintamarre/corpus-docs',
    repoLabel: 'Help us',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    smoothScroll: true,
    displayAllHeaders: true, // Default: false
    nextLinks: true,
    prevLinks: true,
    dateFormat: 'YYYY-MM-DD',
    lastUpdated: 'Last Updated', // string | boolean
  },

};
