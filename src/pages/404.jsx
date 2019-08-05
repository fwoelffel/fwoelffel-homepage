import React from 'react';

import { Link } from 'gatsby';
import Hero from '../components/hero';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <Hero>
      <h1 className='title is-1'>AWW MAN...</h1>
      <p>You just hit a route that doesn't exist.</p>
      <Link to='/'>Go back to the home page</Link>
    </Hero>
  </Layout>
);

export default NotFoundPage;
