/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Footer from './footer';

const Layout = ({ title, navHomePath, render }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnnotationsToggled, setIsAnnotationsToggled] = useState(false);
  return (
    <div>
      <nav className="navbar is-light is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to={navHomePath} className="navbar-item">
              <strong>{title}</strong>
            </Link>
            <a
              role="button"
              className="navbar-burger"
              ari-label="menu"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div id="navbarBasicExample" className={`navbar-menu${isMenuOpen ? ' is-active' : ''}`}>
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
                  {!isAnnotationsToggled ? (
                    <button type="button" className="button is-warning" onClick={() => setIsAnnotationsToggled(true)}>
                      Show Annotations
                    </button>
                  ) : (
                    <button type="button" className="button is-warning is-inverted" onClick={() => setIsAnnotationsToggled(false)}>
                      Hide Annotations
                    </button>
                  )}
                </div>
              </div>
              <div className="navbar-item">
                <div className="buttons">
                  <Link to="/" className="button is-link">
                    Back to Entries
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="container pt-6">
        {render({ isAnnotationsToggled })}
      </div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  navHomePath: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default Layout;
