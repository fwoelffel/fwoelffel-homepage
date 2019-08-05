import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SocialLinks from './social-links';

const siteMetadataQuery = graphql`
  query GetSiteMetadata {
    site {
      siteMetadata {
        position
        title
      }
    }
  }
`;

const Identity = () => {
  const { site } = useStaticQuery(siteMetadataQuery);
  const { position, title } = site.siteMetadata;
  return (
    <div className='has-text-centered'>
      <h1 className='title is-1 is-spaced is-uppercase'>{title}</h1>
      <h2 className='subtitle'>{position}</h2>
      <SocialLinks />
    </div>
  );
};

export default Identity;
