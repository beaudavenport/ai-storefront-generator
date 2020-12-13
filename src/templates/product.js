import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
// import Img from 'gatsby-image';
import Layout from '../components/layout';
// import SEO from '../components/seo';

export default function ProductTemplate({ data, pageContext }) {
  const { parentPage, sitePage } = data;
  console.log(sitePage);
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
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris.
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
    sitePage(context: {pagePath: {eq: $path}}) {
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
