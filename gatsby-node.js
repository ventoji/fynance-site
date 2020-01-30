const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // console.log(node);
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent)
    // console.log(fileNode);
    // console.log(`\n`, fileNode.relativeDirectory)

    const slug = createFilePath({
      node,
      getNode,
      basePath: fileNode.relativeDirectory,
    })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(
    `
      {
        allMarkdownRemark {
          nodes {
            fields {
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    result.data.allMarkdownRemark.nodes.forEach(node => {
      createPage({
        path: node.fields.slug,
        component: path.resolve("./src/layouts/ContentpageLayout.js"),
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}

/*

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;
    return graphql(
        `{
            allWordpressPost{
              nodes{ 
                  slug
              }
            }
            }`
    ).then(
        result => {
            result.data.allWordpressPost.nodes.forEach((node) => {
                createPage({
                    path: node.slug,
                    component: path.resolve('./src/layouts/BlogpostLayout.js'),
                    context:{
                        slug: node.slug
                    }
                })
            })
        }
    )
}
*/
