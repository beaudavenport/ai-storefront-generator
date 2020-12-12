const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const googleLanguageAPIService = require('./src/services/googleLanguageAPIService');

const createMainStorefrontPage = async (createPage, node) => {
  const storefrontTemplate = path.resolve('src/templates/storefront.js');
  const fakeDescription = await Promise.resolve(`Fake asynchronous generated description for: + ${node.frontmatter.name}`);
  createPage({
    path: node.fields.slug,
    component: storefrontTemplate,
    // In your blog post template's graphql query, you can use pagePath
    // as a GraphQL variable to query for data from the markdown file.
    context: {
      fakeDescription,
      pagePath: node.fields.slug,
    },
  });
};

const createProductPages = async (createPage, node) => {
  const productTemplate = path.resolve('src/templates/product.js');
  const textAnalysis = await googleLanguageAPIService.getTextAnalysis(node.excerpt);
  const consumerGoods = textAnalysis.filter((entity) => entity.type === 'CONSUMER_GOOD');
  consumerGoods.forEach((entity, index) => {
    console.log('certainly trying', entity);
    createPage({
      path: `${node.fields.slug}${index}`,
      component: productTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        pagePath: `${node.fields.slug}/${index}`,
        productName: entity.name,
      },
    });
  });
};

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
    return Promise.reject();
  }
  // Create storefront layout and product pages based on results of analysis for each prompt.
  const pageCreationPromises = result.data.allMarkdownRemark.edges.map(async ({ node }) => {
    await createMainStorefrontPage(createPage, node);
    await createProductPages(createPage, node);
    return Promise.resolve();
  });
  return Promise.all(pageCreationPromises);
  // return Promise.resolve();
};
