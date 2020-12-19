import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
// import Img from 'gatsby-image';
import Layout from '../components/layout';
// import SEO from '../components/seo';

export default function ProductTemplate({ data, pageContext }) {
  const { parentPage, sitePage } = data;
  return (
    <Layout title={parentPage.context.name} navHomePath={parentPage.context.pagePath}>
      {/* <SEO title={title} /> */}
      <div className="section">
        <div className="columns">
          <div className="column is-one-third-desktop">
            <figure className="image">
              <Img
                fluid={sitePage.productImage.childImageSharp.fluid}
                alt={sitePage.context.productImageAlt}
              />
            </figure>
          </div>
          <div className="column is-flex is-align-items-center is-justify-content-center">
            <div>
              <p className="title">{pageContext.productName}</p>
              <p className="subtitle">$99.99</p>
              <p>Nothing better than a great description of a good product.</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="section">
        <div className="container">
          <h4 className="subtitle is-4">
            Reviews for
            {' '}
            <strong>
              {pageContext.productName}
            </strong>
          </h4>

          {pageContext.reviews.map((review) => {
            const paragraphs = review.review.split('A positive review of')[1].split('\n');
            return (
              <div className="media">
                <figure className="media-left">
                  <p>
                    <i className="fa fa-user" aria-hidden="true" />
                    <small>
                      {' '}
                      {review.reviewer}
                    </small>
                  </p>
                </figure>
                <div className="media-content">
                  <div className="content">
                    {new Array(review.stars).fill().map(() => (
                      <span className="icon is-small">
                        <i className="fas fa-star" />
                      </span>
                    ))}
                    <p>
                      <strong>{paragraphs[0]}</strong>
                    </p>
                    <p>{paragraphs[2]}</p>
                    <p>{paragraphs[4]}</p>
                    <p>{paragraphs[6]}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
ProductTemplate.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export const pageQuery = graphql`
  query($parentPath: String!, $path: String!) {
    parentPage: sitePage(context: {pagePath: {eq: $parentPath}}) {
      id
      context {
        name
        pagePath
      }
    }
    sitePage(context: {pagePath: {eq: $path}, type: {eq: "Product"}}) {
      id
      context {
        productImageAlt
      }
      productImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
