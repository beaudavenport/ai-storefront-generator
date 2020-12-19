import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';
import Layout from '../components/layout';
// import SEO from '../components/seo';

export default function AboutUsTemplate({ pageContext }) {
  return (
    <Layout
      title={pageContext.name}
      navHomePath={pageContext.parentPath}
      render={({ isAnnotationsToggled }) => (
        <>
          {/* <SEO title={title} /> */}
          <div className="section">
            {pageContext.fakeDescription}
          </div>
        </>
      )}
    />
  );
}
AboutUsTemplate.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
