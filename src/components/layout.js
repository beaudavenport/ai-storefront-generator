import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Footer from './footer';

const Layout = ({ title, navHomePath, children }) => (
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
            <Link to={navHomePath} className="navbar-item">
              Products
            </Link>
            <Link to={`${navHomePath}about-us`} className="navbar-item">
              About Us
            </Link>
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
  title: PropTypes.string.isRequired,
  navHomePath: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
