import React from 'react';
import { graphql, Link } from 'gatsby';
import { PropTypes } from 'prop-types';
// import Img from 'gatsby-image';
// import SEO from '../components/seo';
// import containerStyles from '../components/container.module.css';
// import blogPageStyles from './blogPage.module.css';
// import pageStyles from './page.module.css';

import Layout from '../components/layout';

const IndexPage = ({ data }) => {
  const entries = data.allMarkdownRemark.edges.map((edge) => edge.node);
  return (
    <Layout>
      {/* <SEO title="Home" /> */}
      <div className="container">
        <p>Entries</p>
        {entries.map((node) => (
          <Link to={node.fields.slug}>
            <div>
              <h1>{node.frontmatter.name}</h1>
              <p>{node.frontmatter.author}</p>
              <p>
                {node.frontmatter.github}
              </p>
              <p>{node.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default IndexPage;

export const query = graphql`
   query {
     allMarkdownRemark {
       totalCount
       edges {
         node {
           id
           frontmatter {
            name
            author
            github
           }
           excerpt(format: HTML, pruneLength: 250)
           fields {
             slug
           }
         }
       }
     }
   }
 `;
