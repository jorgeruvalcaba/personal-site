import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import footerStyles from './footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <footer className={footerStyles.footer}>
      <p>all work © { data.site.siteMetadata.author } { new Date().getFullYear() } • all rights reserved</p>
    </footer>
  );
}

export default Footer;