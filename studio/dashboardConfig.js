export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e116ed94040ecb9cf1675fb',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-c66mpg86',
                  apiId: 'd30c70bb-3c52-4d97-8c69-5ed8dcc37e84'
                },
                {
                  buildHookId: '5e116ed9247a8387e0ce0c65',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-vc5ijfdr',
                  apiId: 'ff269981-40a1-402f-a70e-10c96956fe89'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nhduong29/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-vc5ijfdr.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
