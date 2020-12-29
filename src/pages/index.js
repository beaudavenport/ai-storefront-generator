import React from 'react';
import { graphql, Link } from 'gatsby';
import { PropTypes } from 'prop-types';
import Footer from '../components/footer';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  const entries = data.allMarkdownRemark.edges.map((edge) => edge.node);
  return (
    <div>
      <SEO title="AI Storefront Generator" description="A silly assortment of e-commerce storefronts created with the power of machine learning!" />
      <section className="hero is-light">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              AI Storefront Generator
            </h1>
            <p>
              A silly assortment of e-commerce storefronts
              created with the power of machine learning!
            </p>
            <p>
              Built for the
              <a href="https://www.gatsbyjs.com/silly-site-challenge/">
                {' '}
                <strong>Gatsby Silly Site Challenge 2020</strong>
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h3 className="title is-5">Entries</h3>
          <p className="subtitle is-6">
            All of the below entries have been converted into storefronts.
            Click on &quot;View Storefront&quot; to see!
          </p>
          {entries.map((node) => (
            <div className="box" key={node.frontmatter.name}>
              <div className="content">
                <h4 className="title is-4">{node.frontmatter.name}</h4>
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
          <div className="box">
            <div className="content">
              <h4 className="title is-4"><em>Add your own!</em></h4>
              <hr />
              <div className="content">
                <p>
                  You can create your own AI-generated storefront with a file-addition pull request.
                  No cloning necessary!
                </p>
                <p>
                  Follow the link to the
                  {' '}
                  <a href="https://github.com/beaudavenport/ai-storefront-generator">Github project page</a>
                  {' '}
                  and select:
                </p>
                <pre>Add file -&gt; Create new file</pre>
                <p>
                  On the following screen, specify a new markdown file name for your prompt like so:
                </p>
                <pre>src/prompts/my-cool-prompt.md</pre>
                <p>
                  And complete the contents of your new prompt file with name, author, github,
                  and prompt like so:
                </p>
                <pre>
                  <p>
                    ---
                    <br />
                    name: Your Storefront Name
                    <br />
                    author: Your name
                    <br />
                    github: Your github username
                    <br />
                    ---
                    <br />
                    Your text prompt. Max length is 500 words.
                    This will be used to generate the content for your storefront!
                    <br />
                    <br />
                    Note: you can get a sense of the sort of content
                    that might be created by visiting the
                    <a href="https://cloud.google.com/natural-language"> Google Natural Language API Demo</a>
                    <br />
                    (in particular, ensure there are a  variety of
                    CONSUMER_GOOD entities in the analysis,
                    <br />
                    as these will be converted into products for your storefront!)
                  </p>
                </pre>
                <p>
                  Finally, fill out the
                  {' '}
                  <strong>propose new file</strong>
                  {' '}
                  commit section and submit. I&apos;ll approve as soon as I can!
                </p>
              </div>
              <p>
                <strong>
                  <a href="https://github.com/beaudavenport/ai-storefront-generator" className="button is-primary">
                    Visit project on Github
                  </a>
                </strong>
              </p>
            </div>
          </div>
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
