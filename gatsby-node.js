/* eslint-disable no-restricted-syntax */

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { createRemoteFileNode } = require('gatsby-source-filesystem');
const slugify = require('slugify');
const realDeepAIAPIService = require('./src/services/deepAIAPIService');
const mockDeepAIAPIService = require('./src/services/mockDeepAIAPIService');

const MOCK_SERVICES = false;

const deepAIAPIService = MOCK_SERVICES ? mockDeepAIAPIService : realDeepAIAPIService;
const googleLanguageAPIService = MOCK_SERVICES ? require('./src/services/mockGoogleLanguageAPIService') : require('./src/services/googleLanguageAPIService');

const createMainStorefrontPage = async (createPage, node) => {
  console.log(`creating storefront for ${node.frontmatter.name}`);
  const storefrontTemplate = path.resolve('src/templates/storefront.js');
  const fakeDescription = await Promise.resolve(`Fake asynchronous generated description for: + ${node.frontmatter.name}`);
  const mainImageUrl = await deepAIAPIService.postText2Image(node.frontmatter.name);
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
  return Promise.resolve();
};

const getProductStars = (sentimentScore) => {
  if (sentimentScore > 0.2) {
    return 5;
  }
  if (sentimentScore < -0.2) {
    return 1;
  }
  return 3;
};

const createProductPages = async (createPage, node, textAnalysis) => {
  console.log(`creating product pages for ${node.frontmatter.name}`);
  const productTemplate = path.resolve('src/templates/product.js');
  const consumerGoods = textAnalysis.filter((entity) => entity.type === 'CONSUMER_GOOD');
  for await (const consumerGood of consumerGoods) {
    const stars = getProductStars(consumerGood.sentiment.score);
    let review1;
    let review2;
    let productDescription;
    try {
      productDescription = await deepAIAPIService.createProductDescription(consumerGood.name);
    } catch (ex) {
      console.log('failed to make product description. falling back to mock', ex);
      productDescription = await mockDeepAIAPIService.createProductDescription(consumerGood.name);
    }
    try {
      review1 = await deepAIAPIService.createProductReview(consumerGood.name, stars);
    } catch (ex) {
      console.log('failed to make review 1. falling back to mock', ex);
      review1 = await mockDeepAIAPIService.createProductReview(consumerGood.name, stars);
    }
    try {
      review2 = await deepAIAPIService.createProductReview(consumerGood.name, stars);
    } catch (ex) {
      console.log('failed to make review 2. falling back to mock', ex);
      review2 = await mockDeepAIAPIService.createProductReview(consumerGood.name, stars);
    }
    const imageUrl = await deepAIAPIService.postText2Image(consumerGood.name);

    createPage({
      path: `${node.fields.slug}${slugify(consumerGood.name)}`,
      component: productTemplate,
      context: {
        type: 'Product',
        pagePath: `${node.fields.slug}${slugify(consumerGood.name)}`,
        parentPath: node.fields.slug,
        productName: consumerGood.name,
        productPrice: `$${Math.floor(Math.random() * (100 - 2))}.99`,
        productDescription,
        imageUrl,
        imageAlt: `A deep-ai generated image of ${consumerGood.name}`,
        stars,
        reviews: [review1, review2],
      },
    });
  }
  return Promise.resolve();
};

const createAboutUsPage = async (createPage, node, textAnalysis) => {
  console.log(`creating about us for ${node.frontmatter.name}`);
  const aboutUsTemplate = path.resolve('src/templates/aboutUs.js');
  const locations = textAnalysis.filter((entity) => entity.type === 'LOCATION').map((entity) => entity.name);
  const prompt = `The story of ${node.frontmatter.name} begins in ${locations.length ? `${locations[0]}.` : 'a commitment to quality.'}`;
  let aboutUsDescription;
  let aboutUsImage;
  try {
    aboutUsDescription = await deepAIAPIService.createAboutUsDescription(node.frontmatter.name, prompt);
  } catch (ex) {
    console.log('failed to make about us description. falling back', ex);
    aboutUsDescription = 'Deep AI was unable to generate a description for this storefront!';
  }
  try {
    aboutUsImage = await deepAIAPIService.createAboutUsImage(node.frontmatter.name, prompt);
  } catch (ex) {
    console.log('failed to make about us image. falling back', ex);
    aboutUsImage = 'https://placekitten.com/300/300';
  }
  createPage({
    path: `${node.fields.slug}about-us`,
    component: aboutUsTemplate,
    context: {
      title: prompt,
      text: aboutUsDescription,
      imageUrl: aboutUsImage,
      imageAlt: `A deep-ai generated image of ${node.frontmatter.name}`,
      pagePath: `${node.fields.slug}about-us`,
      parentPath: node.fields.slug,
      name: node.frontmatter.name,
    },
  });
  return Promise.resolve();
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
      // eslint-disable-next-line no-param-reassign
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
              excerpt(pruneLength: 2000)
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
  for await (const edge of result.data.allMarkdownRemark.edges) {
    const { node } = edge;
    console.log('i am getting called');
    const textAnalysis = await googleLanguageAPIService.getTextAnalysis(node.excerpt);
    await createMainStorefrontPage(createPage, node);
    await createAboutUsPage(createPage, node, textAnalysis);
    await createProductPages(createPage, node, textAnalysis);
    console.log('gonna resolve now');
  }
  console.log('now you call me at long last');
  return Promise.resolve();
};
