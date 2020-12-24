import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Annotation from '../components/annotation';

export default function AboutUsTemplate({ pageContext, data }) {
  return (
    <Layout
      title={pageContext.name}
      navHomePath={pageContext.parentPath}
      render={({ isAnnotationsToggled }) => (
        <>
          <SEO title={pageContext.name} description={pageContext.title} />
          <div className="section">
            <div className="columns">
              <div className="column">
                <div className="section">
                  <h1 className="title">{pageContext.title}</h1>
                </div>
              </div>
              <div className="column is-4-desktop">
                <figure className="image">
                  <div className="is-flex is-justify-content-center">
                    <Annotation placement="top" isActive={isAnnotationsToggled}>
                      <strong>
                        About Us image is generated by Deep AI based on the above title prompt.
                      </strong>
                    </Annotation>
                  </div>
                  <Img
                    fluid={data.sitePage.image.childImageSharp.fluid}
                    alt={data.sitePage.context.imageAlt}
                  />
                </figure>
              </div>
            </div>
            <div className="section">
              {pageContext.text}
            </div>
          </div>
        </>
      )}
    />
  );
}

AboutUsTemplate.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export const pageQuery = graphql`
  query($path: String!) {
    sitePage(context: {pagePath: {eq: $path}}) {
      id
      context {
        imageAlt
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
