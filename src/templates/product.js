import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import Annotation from '../components/annotation';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function ProductTemplate({ data, pageContext }) {
  const { parentPage, sitePage } = data;
  return (
    <Layout
      title={parentPage.context.name}
      navHomePath={parentPage.context.pagePath}
      render={({ isAnnotationsToggled }) => (
        <>
          <SEO title={pageContext.productName} description="Unique products, made-to-order" />
          <div className="section">
            <div className="columns">
              <div className="column is-one-third-desktop">
                <figure className="image">
                  <Img
                    fluid={sitePage.image.childImageSharp.fluid}
                    alt={sitePage.context.imageAlt}
                  />
                  <div className="is-flex is-justify-content-center">
                    <Annotation placement="bottom" isActive={isAnnotationsToggled}>
                      <strong>
                        Product images are generated with Deep AI, providing the product name.
                      </strong>
                    </Annotation>
                  </div>
                </figure>
              </div>
              <div className="column is-flex is-align-items-center is-justify-content-center">
                <div>
                  <p className="title">{pageContext.productName}</p>
                  <p className="subtitle">{pageContext.productPrice}</p>
                  {sitePage.context.productDescription.split('\n').slice(0, 2).map((paragraph) => (
                    <p className="block" key={paragraph}>{paragraph}</p>
                  ))}
                  <div className="is-flex is-justify-content-center">
                    <Annotation placement="bottom" isActive={isAnnotationsToggled}>
                      <strong>
                        {`Descriptions are generated with Deep AI, with given prompt: "${pageContext.productName} is"`}
                      </strong>
                    </Annotation>
                  </div>
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
                const paragraphs = review.review.split('\n');
                return (
                  <div className="section" key={paragraphs[0]}>
                    <div className="is-flex is-justify-content-center">
                      <Annotation placement="top" isActive={isAnnotationsToggled}>
                        <strong>
                          Rating based on Google&apos;s Sentiment Analysis score within text prompt
                          (1 star for negative, 3 stars for neutral, 5 stars for positive)
                        </strong>
                      </Annotation>
                    </div>
                    <p>
                      {new Array(pageContext.stars).fill().map((_, i) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <span className="icon is-small" key={`${i}`}>
                          <i className="fas fa-star" />
                        </span>
                      ))}
                      <strong className="ml-3">{paragraphs[0]}</strong>
                    </p>
                    <div className="block">
                      <div className="ml-6">
                        <Annotation placement="top" isActive={isAnnotationsToggled}>
                          <strong>
                            A random name
                          </strong>
                        </Annotation>
                      </div>
                      <p>
                        <i className="fa fa-user" aria-hidden="true" />
                        <small>
                          {' '}
                          <strong>{review.reviewer}</strong>
                        </small>
                      </p>
                    </div>
                    <div className="block">
                      <p>{paragraphs[2]}</p>
                      <div className="is-flex is-justify-content-center">
                        <Annotation placement="bottom" isActive={isAnnotationsToggled}>
                          <strong>
                            {`Review title and content are generated with Deep AI, with given prompt (using "sentiment"): "A (positive/negative/neutral) review for ${pageContext.productName}"`}
                          </strong>
                        </Annotation>
                      </div>
                    </div>
                    <p className="block">{paragraphs[4]}</p>
                    <p className="block">{paragraphs[6]}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    />
  );
}

ProductTemplate.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  pageContext: PropTypes.shape({
    pagePath: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productPrice: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape),
    stars: PropTypes.number,
  }).isRequired,
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
        imageAlt
        productDescription
      }
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
