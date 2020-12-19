const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { createRemoteFileNode } = require('gatsby-source-filesystem');

const deepAIAPIService = require('./src/services/deepAIAPIService');
const googleLanguageAPIService = require('./src/services/googleLanguageAPIService');

const createMainStorefrontPage = async (createPage, node) => {
  const storefrontTemplate = path.resolve('src/templates/storefront.js');
  const fakeDescription = await Promise.resolve(`Fake asynchronous generated description for: + ${node.frontmatter.name}`);
  createPage({
    path: node.fields.slug,
    component: storefrontTemplate,
    context: {
      fakeDescription,
      pagePath: node.fields.slug,
      name: node.frontmatter.name,
    },
  });
};

const createProductPages = async (createPage, node) => {
  const productTemplate = path.resolve('src/templates/product.js');
  const textAnalysis = await googleLanguageAPIService.getTextAnalysis(node.excerpt);
  const consumerGoods = textAnalysis.filter((entity) => entity.type === 'CONSUMER_GOOD');
  return Promise.all(consumerGoods.map(async (entity, index) => {
    const review = await deepAIAPIService.createProductReview(entity.name, entity.sentiment.score);
    createPage({
      path: `${node.fields.slug}${index}`,
      component: productTemplate,
      context: {
        type: 'Product',
        pagePath: `${node.fields.slug}${index}`,
        parentPath: node.fields.slug,
        productName: entity.name,
        productImageUrl: 'https://images.unsplash.com/photo-1603038124597-2c5c207edf47',
        productImageAlt: `A picture from unsplash of ${entity.name}`,
        reviews: [review],
      },
    });
    Promise.resolve();
  }));
};

const createAboutUsPage = async (createPage, node) => {
  const aboutUsTemplate = path.resolve('src/templates/aboutUs.js');
  const fakeDescription = await Promise.resolve('This storefront has been a dream of mine for years! Thank you for shopping.');
  createPage({
    path: `${node.fields.slug}about-us`,
    component: aboutUsTemplate,
    context: {
      fakeDescription,
      pagePath: `${node.fields.slug}about-us`,
      parentPath: node.fields.slug,
      name: node.frontmatter.name,
    },
  });
};

exports.onCreateNode = async ({
  node, getNode, actions, store, cache, createNodeId,
}) => {
  const { createNodeField, createNode } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const basePath = 'src/prompts';
    const slug = createFilePath({ node, getNode, basePath });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
  // For all pages that have an image url, call createRemoteFileNode
  if (node.internal.type === 'SitePage' && node.context && node.context.productImageUrl) {
    const fileNode = await createRemoteFileNode({
      url: node.context.productImageUrl, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store, // Gatsby's Redux store
    });
      // if the file was created, attach the new node to the parent node
    if (fileNode) {
      node.productImage___NODE = fileNode.id;
    }
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
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
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return Promise.reject();
  }
  // Create storefront layout and product pages based on results of analysis for each prompt.
  const pageCreationPromises = result.data.allMarkdownRemark.edges.map(async ({ node }) => {
    await createMainStorefrontPage(createPage, node);
    await createProductPages(createPage, node);
    await createAboutUsPage(createPage, node);
    return Promise.resolve();
  });
  return Promise.all(pageCreationPromises);
};
