import React from 'react';
import Hero from '../components/hero';
import Layout from '../components/layout';
import Identity from '../components/identity';
import Experiences from '../components/experiences';
import Education from '../components/education';
import Achievements from '../components/achievements';
import Projects from '../components/projects';

const IndexPage = () => (
  <Layout>
    <Hero>
      <Identity />
    </Hero>
    <Projects />
    <Achievements />
    <div className='columns is-gapless'>
      <div className='column'>
        <Experiences />
      </div>
      <div className='column'>
        <Education />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
