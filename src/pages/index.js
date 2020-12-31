import React from 'react';
import { graphql, Link } from 'gatsby';
import { PropTypes } from 'prop-types';
import Img from 'gatsby-image';
import Footer from '../components/footer';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  const entries = data.allMarkdownRemark.edges.map((edge) => edge.node);
  return (
    <div>
      <SEO title="AI Storefront Generator" description="A silly assortment of e-commerce storefronts created with the power of machine learning!" />
      <div className="hero is-light">
        <div className="hero-body">
          <div className="container">
            <div className="is-flex is-flex-direction-row is-justify-content-space-between">
              <div>
                <h1 className="title is-2">
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
              <figure className="image is-128x128">
                <Img
                  fluid={data.heroImage.childImageSharp.fluid}
                  alt="A silly AI-generated image of a Shop"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <section className="section">
          <p className="title is-5">
            Artificial Intelligence tools, in their current form, are quite powerful.
          </p>
          <p className="title is-5">
            <em>
              But they can also be pretty silly.
            </em>
          </p>
          <p className="block">
            <strong>AI Storefront Generator</strong>
            {' '}
            explores the silly side of AI by using
            {' '}
            <a href="https://en.wikipedia.org/wiki/Natural_language_processing">
              Natural Language Processing (NLP)
            </a>
            {' '}
            to analyze a text prompt, then using AI image and text
            generation to create a fake e-commerce storefront.
            {' '}
            <strong>
              Sadly, none of the products are actually for sale (at least, not yet...)
            </strong>
          </p>
          <p className="block">
            Each storefront consists of a
            {' '}
            <em>Products</em>
            {' '}
            page (with a list of all the entities
            considered a CONSUMER_GOOD
            based on Google&apos;s Natural Language analysis), individual
            product details pages (which include reviews based on the sentiment analysis of
            the CONSUMER_GOOD in the original text), and an
            {' '}
            <em>About Us</em>
            {' '}
            page
            with a featured image and AI-generated description of the storefront.
          </p>
          <p className="block">
            As you explore the storefronts, select
            {' '}
            <strong>Show Annotations</strong>
            {' '}
            from the storefront navigation menu
            to see a breakdown of components that have AI-generated content!
          </p>
          <h3 className="title is-5">The Benefits of Gatsby</h3>
          <p className="block">
            <strong>
              <a href="https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/">The Gatsby Node API</a>
            </strong>
            {' '}
            provides a lot of neat capabilities. In addition to general manipulation of data
            (i.e., turning markdown prompts into pages), you can also
            {' '}
            <strong>authenticate and consume third-party API&apos;s asynchronously,</strong>
            {' '}
            which
            {' '}
            <strong>AI Storefront Generator </strong>
            leverages to consume the
            {' '}
            <strong>
              <a href="https://cloud.google.com/natural-language">Google Natural Language</a>
            </strong>
            {' '}
            and
            {' '}
            <strong>
              <a href="https://deepai.org/apis">Deep AI</a>
            </strong>
            {' '}
            API&apos;s
            {' '}
            <strong>at build time,</strong>
            {' '}
            while providing a purely static (and therefore
            fast and secure) experience for actual visitors to the site.
          </p>
          <p className="block">
            An interesting outcome of this functionality is that anytime
            a new entry prompt is added,
            {' '}
            <strong>
              all the storefronts will be rebuilt, with new AI-generated content. How exciting!
            </strong>
          </p>
          <hr />
          <h3 className="title is-4">Entries</h3>
          <p className="title is-6">
            All of the below entries have been converted into storefronts.
            Click on &quot;View Storefront&quot; to see!
          </p>
          {entries.map((node) => (
            <div className="box" key={node.frontmatter.name}>
              <div className="content">
                <h4 className="title is-4">{node.frontmatter.name}</h4>
                <p>
                  <small>Added by:</small>
                  <br />
                  <strong>
                    {node.frontmatter.author}
                  </strong>
                  <br />
                  <a href={`https://github.com/${node.frontmatter.github}`} aria-label="reply">
                    <span className="icon is-small">
                      <i className="fab fa-github" />
                    </span>
                    {' '}
                    {node.frontmatter.github}
                  </a>
                </p>
                <p>
                  &ldquo;
                  {node.frontmatter.tagline}
                  &ldquo;
                </p>
                <hr />
                <div className="content">
                  <p className="is-family-monospace">{node.rawMarkdownBody}</p>
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
                    tagline: A quick note about your prompt
                    <br />
                    ---
                    <br />
                    Your text prompt. Max length is 2000 characters.
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
        </section>
      </div>
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
    heroImage: file(relativePath: { eq: "shop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            name
            author
            github
            tagline
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
