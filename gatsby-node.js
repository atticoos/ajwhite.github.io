const path = require('path');

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async (ctx) => {
  // @TODO: create any pages dynamically
  // https://www.gatsbyjs.org/docs/using-unstructured-data/

  return createMarkdownPages(ctx);
}

exports.onCreateWebpackConfig = ({actions: {setWebpackConfig}}) => {
  setWebpackConfig({
    resolve: {
      alias: {
        Components: path.resolve(__dirname, 'src/components')
      }
    }
  });
}

function createMarkdownPages ({actions: {createPage}, graphql}) {
  const blogPostTemplate = path.resolve('src/PageComponents/Posts/Post.js');

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              permalink
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.frontmatter.permalink,
        component: blogPostTemplate,
        context: {}
      })
    })
  })
}
