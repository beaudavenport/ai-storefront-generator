import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo';

export default function NotFoundPage() {
  return (
    <div className="container">
      <SEO title="Not Found" description="This is a 404 page" />
      <div className="section">
        <h1 className="title">404 Not Found</h1>
        <h2 className="subtitle">Head back to AI Storefront Generator Home to get started!</h2>
        <Link to="/" className="button is-link">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
