module.exports = {
  title: 'Io annotator',
  base: '/Io-Annotation-Documentation/',
  //base: '/documentation/',
  themeConfig: {
    nav: [{ text: 'Home', link: '/' }, { text: 'Io annotator', link: 'http://annotator.ml' }],
    repo: 'SaschaHeyer/Io-Annotation-Documentation',
    
    repoLabel: 'Contribute on Github',
    docsRepo: 'SaschaHeyer/Io-Annotation-Documentation',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',
    dest: '../docs',
    sidebar: {
      '/': [
        {
          title: 'Documentation',
          collapsable: false,
          children: [ 
          'documentation/datasets', 
          'documentation/labels', 
          'documentation/annotate',
          'documentation/dictionaries',
          'documentation/export'
        ]
        },
        {
          title: 'API',
          collapsable: false,
          children: [
          'api/authentication', 
          'api/upload',
          'api/export'
        ]
        }
      ]
    }
  }
};
