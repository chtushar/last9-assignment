/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const allBlogsTemplate = require.resolve('./src/templates/AllBlogs.tsx')
  const blogTemplate = require.resolve('./src/templates/Blog.tsx')

  const allBlogs = await graphql(`
    query {
      allGhostPost {
        edges {
          node {
            id
            slug
            title
            primary_author {
              name
              twitter
            }
            published_at
          }
        }
      }
    }
  `)
  

  createPage({
    path: "/blogs",
    component: allBlogsTemplate,
    context: {
      allBlogs: allBlogs.data.allGhostPost.edges,
    },
    defer: true,
  })

  allBlogs.data.allGhostPost.edges.forEach(({ node }) => {
    createPage({
      path: `/blogs/${node.slug}`,
      component: blogTemplate,
      context: {
        slug: node.slug,
      },
      defer: true,
    })
  })
}
