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
                  buildHookId: '61971ccf0596734d98f4899c',
                  title: 'Sanity Studio',
                  name: 'sanity-launchtrip-blog-studio',
                  apiId: '6639f04f-be79-4ca3-a0d9-dfff6530e58d'
                },
                {
                  buildHookId: '61971ccfbbfc2c42c2eec703',
                  title: 'Blog Website',
                  name: 'sanity-launchtrip-blog',
                  apiId: 'b7ed5a48-4f69-402a-8b67-8ec84f2ffabc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/juansebasleal/sanity-launchtrip-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-launchtrip-blog.netlify.app', category: 'apps'}
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
