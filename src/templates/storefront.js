import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
// import Img from 'gatsby-image';
import Layout from '../components/layout';
// import blogPostStyles from './blogPost.module.css';
// import SEO from '../components/seo';

export default function StorefrontTemplate({ data, pageContext }) {
  // const { markdownRemark } = data;
  // const { frontmatter, html } = markdownRemark;
  // const {
  //   title, publishDate, tagline, image, imageAttribution,
  // } = frontmatter;
  return (
    <Layout>
      {/* <SEO title={title} /> */}
      <div>
        <div>
          {/* <Img
            fluid={image.childImageSharp.fluid}
            style={{
              maxHeight: 500, width: '100%', objectFit: 'cover', objectPosition: '50%',
            }}
          /> */}
          {pageContext.fakeDescription}
        </div>
      </div>
    </Layout>
  );
}
StorefrontTemplate.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

// export const pageQuery = graphql`
//   query($path: String!) {
//     markdownRemark(fields: { slug: { eq: $path } }) {
//       html
//       frontmatter {
//         title
//         publishDate
//         tagline
//         image {
//           childImageSharp {
//             fluid(maxWidth: 500, quality: 90) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         imageAttribution
//       }
//       description: excerpt(pruneLength: 130)
//       fields {
//         slug
//       }
//     }
//   }
// `;
