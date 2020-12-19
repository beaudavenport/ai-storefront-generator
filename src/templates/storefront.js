import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';
import Layout from '../components/layout';
// import SEO from '../components/seo';

export default function StorefrontTemplate({ data, pageContext }) {
  const { allSitePage } = data;
  return (
    <Layout
      title={pageContext.name}
      navHomePath={pageContext.pagePath}
      render={({ isAnnotationsToggled }) => (
        <>
          {/* <SEO title={title} /> */}
          <div className="section">
            <div>
              {pageContext.fakeDescription}
            </div>
          </div>
          <div className="section">
            <div className="columns">
              {allSitePage.edges.map((edge) => (
                <div className="column is-one-quarter">
                  <div className="content">
                    <figure className="image">
                      <Img
                        fixed={edge.node.productImage.childImageSharp.fixed}
                        alt={edge.node.context.productImageAlt}
                      />
                    </figure>
                  </div>
                  <div className="content is-flex is-justify-content-center">
                    <div>
                      <p>
                        <strong>{edge.node.context.productName}</strong>
                        <br />
                        <small>$99.99</small>
                      </p>
                      <Link to={edge.node.context.pagePath} className="button is-primary">View</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    />
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
