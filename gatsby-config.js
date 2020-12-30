const sass = require('sass');

module.exports = {
  pathPrefix: '/ai-storefront-generator',
  siteMetadata: {
    title: 'AI Storefront Generator',
    titleTemplate: '%s | AI Storefront Generator',
    description: 'AI-created e-commerce, for the Gatsby Silly Site Challeng, 2020.',
    url: 'https://beaudavenport.github.io/ai-storefront-generator/',
    image: '/images/shop.jpg',
    author: 'Beau Davenport',
    twitterUsername: 'beaudav',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: sass,
      },
    },
    'gatsby-plugin-fontawesome-css',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    // "gatsby-plugin-manifest",
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/prompts`,
        name: 'markdown-pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
      __key: 'images',
    },
  ],
};
