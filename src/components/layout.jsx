import Footer from './footer';
import React from 'react';
import { Helmet } from 'react-helmet';

const Layout = ({ children }) => (
  <>
    <Helmet>
      <html lang='en'/>
      <meta charSet='utf-8' />
      <meta name='description' content='Backend engineer' />
      <meta name='author' content='Frédéric Woelffel' />
      <title>Frédéric Woelffel</title>
      <link rel='canonical' href='https://fwoelffel.me' />
    </Helmet>
    <div className='container'>{children}</div>
    <Footer />
  </>
);

export default Layout;
