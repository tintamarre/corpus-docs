// .vuepress/config.js

module.exports = {
  plugins: ['@vuepress/last-updated', '@vuepress/back-to-top'],
  title: 'Documentations of Corpus',
  description: '‍',
  base: '/docs/',
  themeConfig: {
    repo: 'tintamarre/corpus-docs',
    repoLabel: 'Help us',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    smoothScroll: true,
    displayAllHeaders: true, // Default: false
    nextLinks: true,
    prevLinks: true,
    dateFormat: 'YYYY-MM-DD'
  },
};
