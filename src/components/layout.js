import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const Layout = ({ children }) =>
// const data = useStaticQuery(graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//         description
//       }
//     }
//   }
// `);

  (
    <div className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <p>AI Storefront Generator</p>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              Home
            </a>

            <a className="navbar-item">
              Documentation
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>View All</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {children}
      <div>
        <footer>
          © Beau Davenport,
          {' '}
          {new Date().getFullYear()}
          . Built with
          {' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </div>
  );
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
