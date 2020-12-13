import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Footer from './footer';

const Layout = ({ title, navHomePath, children }) =>
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
    <div>
      <div className="container">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link to={navHomePath} className="navbar-item">
              <strong>{title}</strong>
            </Link>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">
                Products
              </a>
              <a className="navbar-item">
                About Us
              </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link to="/" className="button is-link">
                    Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </div>
      <Footer />
    </div>
  );
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
