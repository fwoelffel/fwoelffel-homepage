import React from 'react';
import Hero from '../components/hero';
import Layout from '../components/layout';
import Identity from '../components/identity';
import Experiences from '../components/experiences';

const IndexPage = () => (
  <Layout>
    <Hero>
      <Identity />
    </Hero>
    <Experiences />
  </Layout>
);

export default IndexPage;
