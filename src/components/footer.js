import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container pb-6">
      © Beau Davenport,
      {' '}
      {new Date().getFullYear()}
      . Built with
      {' '}
      <a href="https://www.gatsbyjs.org"><strong>Gatsby</strong></a>
    </div>
  </footer>
);

export default Footer;
