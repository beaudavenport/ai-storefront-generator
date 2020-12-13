import React from 'react';
import { graphql, Link } from 'gatsby';
import { PropTypes } from 'prop-types';
// import Img from 'gatsby-image';
// import SEO from '../components/seo';
// import containerStyles from '../components/container.module.css';
// import blogPageStyles from './blogPage.module.css';
// import pageStyles from './page.module.css';
import './customstyles.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../components/footer';

const IndexPage = ({ data }) => {
  const entries = data.allMarkdownRemark.edges.map((edge) => edge.node);
  return (
    <div>
      <section className="hero is-light">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              AI Storefront Generator
            </h1>
            <h2>
              Part of the
              <a href="https://www.gatsbyjs.com/silly-site-challenge/">
                {' '}
                Gatsby Silly Site Challenge
              </a>
            </h2>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h3 className="title">Entries</h3>
          <p className="subtitle">
            All of the below entries have been converted into storefronts.
            Click on &quot;View Storefront&quot; to see!
          </p>
          {entries.map((node) => (
            <div className="box">
              <div className="content">
                <h4 className="title">{node.frontmatter.name}</h4>
                <p>
                  Added by:
                  {' '}
                  <strong>
                    {node.frontmatter.author}
                  </strong>
                  {' | '}
                  <small>
                    <a href={`https://github.com/${node.frontmatter.github}`} aria-label="reply">
                      <span className="icon is-small">
                        <i className="fab fa-github" />
                      </span>
                      {' '}
                      {node.frontmatter.github}
                    </a>
                  </small>
                </p>
                <hr />
                <div className="content">
                  <p>{node.rawMarkdownBody}</p>
                </div>
                <Link to={node.fields.slug} className="button is-link">
                  View Storefront
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
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
           rawMarkdownBody
           fields {
             slug
           }
         }
       }
     }
   }
 `;
