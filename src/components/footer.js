import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="content">
      © Beau Davenport,
      {' '}
      {new Date().getFullYear()}
      . Built with
      {' '}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
);

export default Footer;
