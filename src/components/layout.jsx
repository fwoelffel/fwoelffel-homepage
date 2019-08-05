import Footer from './footer';
import React from 'react';

const Layout = ({ children }) => (
  <>
    <div>{children}</div>
    <Footer />
  </>
);

export default Layout;
