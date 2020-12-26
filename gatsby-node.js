const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { createRemoteFileNode } = require('gatsby-source-filesystem');

const deepAIAPIService = require('./src/services/deepAIAPIService');
const googleLanguageAPIService = require('./src/services/googleLanguageAPIService');

const createMainStorefrontPage = async (createPage, node) => {
  const storefrontTemplate = path.resolve('src/templates/storefront.js');
  const fakeDescription = await Promise.resolve(`Fake asynchronous generated description for: + ${node.frontmatter.name}`);
  const mainImageUrl = await deepAIAPIService.getImageUrlFromText(node.frontmatter.name);
  const mainImageAlt = `An AI-generated image of ${node.frontmatter.name}`;
  createPage({
    path: node.fields.slug,
    component: storefrontTemplate,
    context: {
      fakeDescription,
      pagePath: node.fields.slug,
      name: node.frontmatter.name,
      imageUrl: mainImageUrl,
      imageAlt: mainImageAlt,
    },
  });
};

const createProductPages = async (createPage, node, textAnalysis) => {
  const productTemplate = path.resolve('src/templates/product.js');
  const consumerGoods = textAnalysis.filter((entity) => entity.type === 'CONSUMER_GOOD');
  return Promise.all(consumerGoods.map(async (entity, index) => {
    const review1 = await deepAIAPIService.createProductReview(entity.name, entity.sentiment.score);
    const review2 = await deepAIAPIService.createProductReview(entity.name, entity.sentiment.score);
    const productDescription = await deepAIAPIService.createProductDescription(entity.name);
    const imageUrl = await deepAIAPIService.getImageUrlFromText(node.frontmatter.name);

    createPage({
      path: `${node.fields.slug}${index}`,
      component: productTemplate,
      context: {
        type: 'Product',
        pagePath: `${node.fields.slug}${index}`,
        parentPath: node.fields.slug,
        productName: entity.name,
        productDescription,
        imageUrl,
        imageAlt: `A deep-ai generated image of ${entity.name}`,
        reviews: [review1, review2],
      },
    });
    Promise.resolve();
  }));
};

const createAboutUsPage = async (createPage, node, textAnalysis) => {
  const aboutUsTemplate = path.resolve('src/templates/aboutUs.js');
  const locations = textAnalysis.filter((entity) => entity.type === 'LOCATION').map((entity) => entity.name);
  const aboutUs = await deepAIAPIService.createAboutUs(node.frontmatter.name, locations);
  createPage({
    path: `${node.fields.slug}about-us`,
    component: aboutUsTemplate,
    context: {
      title: aboutUs.title,
      text: aboutUs.text,
      imageUrl: aboutUs.imageUrl,
      imageAlt: `A deep-ai generated image of ${node.frontmatter.name}`,
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
  if (node.internal.type === 'SitePage' && node.context && node.context.imageUrl) {
    const fileNode = await createRemoteFileNode({
      url: node.context.imageUrl, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store, // Gatsby's Redux store
    });
      // if the file was created, attach the new node to the parent node
    if (fileNode) {
      node.image___NODE = fileNode.id;
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
    const textAnalysis = await googleLanguageAPIService.getTextAnalysis(node.excerpt);
    await createMainStorefrontPage(createPage, node);
    await createProductPages(createPage, node, textAnalysis);
    await createAboutUsPage(createPage, node, textAnalysis);
    return Promise.resolve();
  });
  return Promise.all(pageCreationPromises);
};
