import React from 'react';
import Hero from '../components/hero';
import Layout from '../components/layout';
import Identity from '../components/identity';
import Experiences from '../components/experiences';
import Education from '../components/education';

const IndexPage = () => (
  <Layout>
    <Hero>
      <Identity />
    </Hero>
    <Experiences />
    <Education />
  </Layout>
);

export default IndexPage;
