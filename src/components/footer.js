import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container pb-6">
      <p>
        © Beau Davenport,
        {' '}
        {new Date().getFullYear()}
      </p>
      <p>
        Built with
        {' '}
        <a href="https://www.gatsbyjs.org"><strong>Gatsby</strong></a>
      </p>
      <p>
        <a href="https://beaudavenport.github.io/"><strong>More about me</strong></a>
      </p>
    </div>
  </footer>
);

export default Footer;
