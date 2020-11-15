import Footer from './footer';
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';


const query = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`;

const Layout = ({ children }) => {
  const { site: { siteMetadata: { title, siteUrl } } } = useStaticQuery(query);
  return (
    <>
      <Helmet>
        <html lang='en' />
        <meta charSet='utf-8' />
        <meta name='description' content='Backend engineer' />
        <meta name='author' content='Frédéric Woelffel' />
        <title>{title}</title>
        <link rel='canonical' href={siteUrl} />
      </Helmet>
      <div className='container'>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
