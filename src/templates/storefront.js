import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';
import Layout from '../components/layout';
// import blogPostStyles from './blogPost.module.css';
// import SEO from '../components/seo';

export default function StorefrontTemplate({ data, pageContext }) {
  const { allSitePage } = data;
  return (
    <Layout title={pageContext.name} navHomePath={pageContext.pagePath}>
      {/* <SEO title={title} /> */}
      <div>
        <div>
          {pageContext.fakeDescription}
        </div>
        <div className="columns">

          {allSitePage.edges.map((edge) => (
            <div className="column is-3">

              <div className="box">
                <article className="media">
                  <div className="media-left">
                    <figure className="image">
                      <Img
                        fixed={edge.node.productImage.childImageSharp.fixed}
                        alt={edge.node.context.productImageAlt}
                      />
                    </figure>
                  </div>
                  <div className="media-right">
                    <div className="content">
                      <p><strong>{edge.node.context.productName}</strong></p>
                      <Link to={edge.node.context.pagePath} className="button is-link">View</Link>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
StorefrontTemplate.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export const pageQuery = graphql`
  query($path: String!) {
    
    allSitePage(filter: {path: {}, context: {parentPath: {eq: $path}, type: {eq: "Product"}}}) {
      edges {
        node {
          id
          path
          context {
            name
            pagePath
            productName
            productImageAlt
          }
          productImage {
            childImageSharp {
              fixed(width: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;
