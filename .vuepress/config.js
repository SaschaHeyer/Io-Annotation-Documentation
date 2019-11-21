module.exports = {
  title: 'Io annotator',
  //base: '/Io-Annotation-Documentation/',
  //base: '/documentation/',
  themeConfig: {
    nav: [{ text: 'Home', link: '/' }, { text: 'Io annotator', link: 'http://ioannotator.com' }],
    repo: 'SaschaHeyer/Io-Annotation-Documentation',
    
    repoLabel: 'Contribute on Github',
    docsRepo: 'SaschaHeyer/Io-Annotation-Documentation',
    // defaults to false, set to true to enable
    //editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    //editLinkText: 'Help us improve this page!',
    dest: '../docs',
    sidebar: {
      '/': [
        {
          title: 'Documentation',
          collapsable: true,
          children: [ 
          'documentation/datasets', 
          'documentation/labels', 
          'documentation/dictionaries',
          'documentation/import',
          'documentation/annotate',
          'documentation/export',
          'documentation/review',
          'documentation/metrics',
          'documentation/team',
          'documentation/webhooks'
        ]
        },
        {
          title: 'API',
          collapsable: true,
          children: [
          'api/introduction',
          'api/authentication', 
          'api/import',
          'api/export',
          'api/limits'
        ]
        },
        {
          title: 'Account',
          collapsable: false,
          children: [
          'account/billing', 
          'account/support'
        ]
        }
      ]
    }
  }
};
