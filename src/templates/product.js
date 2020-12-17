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
        <div className="card">
          <div className="card-image">
            <figure className="image">
              <Img
                fixed={sitePage.productImage.childImageSharp.fixed}
                alt={sitePage.context.productImageAlt}
              />
            </figure>
          </div>
          <div className="card-content">
            <p className="title is-4">{pageContext.productName}</p>
            <p className="subtitle is-6">$99.99</p>
            <div className="container">
              <h4 className="title is-4">Reviews</h4>
              {pageContext.reviews.map((review) => {
                const paragraphs = review.review.split('A positive review of')[1].split('\n');
                return (
                  <div className="container">
                    {new Array(review.stars).fill().map(() => (
                      <span className="icon is-small">
                        <i className="fas fa-star" />
                      </span>
                    ))}
                    <p className="title is-5">{paragraphs[0]}</p>
                    <p className="subtitle">{review.reviewer}</p>
                    <p>{paragraphs[2]}</p>
                    <p>{paragraphs[4]}</p>
                    <p>{paragraphs[6]}</p>
                  </div>
                );
              })}
            </div>
          </div>
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
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`;
