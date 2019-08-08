import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const siteBuildTimeQuery = graphql`
  query GetSiteBuildTime {
    site {
      buildTime(formatString: "llll")
    }
  }
`;

const Footer = () => {
  const { site } = useStaticQuery(siteBuildTimeQuery);
  const { buildTime } = site;
  return (
    <footer className={'footer has-text-centered'}>
      <div className='container'>Last built {buildTime}</div>
      <span className='is-size-7 has-text-grey is-family-secondary'>
        ©{new Date().getFullYear()} Frédéric Woelffel
      </span>
    </footer>
  );
};

export default Footer;
