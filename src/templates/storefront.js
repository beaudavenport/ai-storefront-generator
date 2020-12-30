import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Annotation from '../components/annotation';

export default function StorefrontTemplate({ data, pageContext }) {
  const { sitePage, allSitePage } = data;
  return (
    <Layout
      title={pageContext.name}
      navHomePath={pageContext.pagePath}
      render={({ isAnnotationsToggled }) => (
        <>
          <SEO title={pageContext.name} description="Unique products, made-to-order" />
          <div className="section">
            <div className="media">
              <figure className="media-left is-align-self-center">
                <div className="image is-64x64">
                  <Img
                    fixed={sitePage.image.childImageSharp.fixed}
                    alt={sitePage.context.imageAlt}
                  />
                </div>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p className="title">
                    Unique products, made-to-order
                  </p>
                  <p className="subtitle">
                    Browse our selection of offerings below!
                  </p>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className="section">
            <div className="columns is-multiline">
              {allSitePage.edges.map((edge) => (
                <div className="column mb-4 is-one-third-desktop" key={edge.node.context.productName}>
                  <div className="media is-justify-content-center">
                    <figure className="media-left">
                      <div className="is-flex is-justify-content-center ml-6">
                        <Annotation placement="top" isActive={isAnnotationsToggled}>
                          <strong>
                            Product images are generated with Deep AI, providing the product name.
                          </strong>
                        </Annotation>
                      </div>
                      <div className="image is-128X128">
                        <Img
                          fixed={edge.node.image.childImageSharp.fixed}
                          alt={edge.node.context.imageAlt}
                        />
                      </div>
                    </figure>
                    <div className="">
                      <div className="is-flex is-justify-content-flex-start">
                        <div>
                          <p className="is-size-5">
                            <strong>{edge.node.context.productName}</strong>
                            <br />
                            <small>{edge.node.context.productPrice}</small>
                          </p>
                          <p>
                            {new Array(edge.node.context.stars).fill().map((_, i) => (
                              // eslint-disable-next-line react/no-array-index-key
                              <span className="icon is-small" key={`${i}`}>
                                <i className="fas fa-star" />
                              </span>
                            ))}
                          </p>
                          <Annotation placement="bottom" isActive={isAnnotationsToggled}>
                            <strong>
                              Product names are extracted from the text prompt by
                              Google analysis on terms considered &quot;CONSUMER_GOOD&quot;
                            </strong>
                          </Annotation>
                          <p className="is-size-7 subtitle">
                            {edge.node.context.productDescription.split('\n')[0]}
                          </p>
                          <p>
                            <Link to={edge.node.context.pagePath} className="button is-primary">View Details</Link>
                          </p>
                        </div>
                      </div>
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
  pageContext: PropTypes.shape({
    name: PropTypes.string.isRequired,
    pagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query($path: String!) {
    sitePage(context: {pagePath: {eq: $path}}) {
      context {
        imageAlt
      }
      image {
        childImageSharp {
          fixed(width: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    allSitePage(filter: {path: {}, context: {parentPath: {eq: $path}, type: {eq: "Product"}}}) {
      edges {
        node {
          id
          path
          context {
            name
            pagePath
            productName
            productPrice
            stars
            imageAlt
            productDescription
          }
          image {
            childImageSharp {
              fixed(width: 128) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;
