// .vuepress/config.js

module.exports = {
  title: 'Corpus documentation',
  description: 'ULiège product',
  plugins: ['@vuepress/last-updated', '@vuepress/back-to-top', 'mermaidjs'],
  themeConfig: {
    
    sidebar: 'auto',
    nav: [
      { text: '🏠', link: '/documentation/' },
      { text: 'Corpus', link: 'https://corpus.lltl.be' },
    ],
    sidebar: 
    {
      '/documentation/': [
        '00-theoretical-preambule',
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
