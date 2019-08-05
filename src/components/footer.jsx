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
    </footer>
  );
};

export default Footer;
