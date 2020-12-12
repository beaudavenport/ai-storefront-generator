const path = require('path');

const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const basePath = `${node.frontmatter.name}/`;
    const slug = createFilePath({ node, getNode, basePath });
    console.log('YOOOOOOOOOOOOOOOOOO', slug);
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              frontmatter {
                name
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  );
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }
  // Create pages for each markdown file.
  const storefrontTemplate = path.resolve('src/templates/storefront.js');
  console.log(result.data.allMarkdownRemark.edges);
  result.data.allMarkdownRemark.edges.forEach(async ({ node }) => {
    const fakeDescription = await Promise.resolve(`Fake asynchronous generated description for: + ${node.frontmatter.name}`);
    console.log({ fakeDescription });
    createPage({
      path: node.fields.slug,
      component: storefrontTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        fakeDescription,
      },
    });
  });
  return Promise.resolve();
};
