import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SocialLinks from './social-links';
import Img from 'gatsby-image';
import styles from './identity.module.scss';

const query = graphql`
  query {
    site {
      siteMetadata {
        position
        title
      }
    }
    file(relativePath: { eq: "avatar.jpeg" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`;

const Identity = () => {
  const { site, file } = useStaticQuery(query);
  const { position, title } = site.siteMetadata;
  return (
    <div className='has-text-centered'>
      <Img
        className={styles.avatar}
        fixed={file.childImageSharp.fixed}
        alt='avatar'
      />
      <h1 className='title is-1 is-spaced is-uppercase'>{title}</h1>
      <h2 className='subtitle'>{position}</h2>
      <SocialLinks />
    </div>
  );
};

export default Identity;
