const sass = require('sass');

module.exports = {
  pathPrefix: '/ai-storefront-generator',
  siteMetadata: {
    title: 'Beau Davenport',
    description: 'Full-Stack JS Dev',
    author: '@beau_dav',
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
  ],
};
