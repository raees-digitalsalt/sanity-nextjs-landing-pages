export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6123ae0755e4663454ac86cd',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-pr3i4k5x',
                  apiId: '4fd13d10-58dc-4720-ad88-7737a7218117'
                },
                {
                  buildHookId: '6123ae07ed6cb700b2aa92ad',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4eadvkv2',
                  apiId: '9a539479-122d-455c-8ece-1fa6a15ba4aa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/raees-digitalsalt/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4eadvkv2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
