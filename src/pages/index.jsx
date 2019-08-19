import React from 'react';
import Hero from '../components/hero';
import Layout from '../components/layout';
import Identity from '../components/identity';
import Experiences from '../components/experiences';
import Education from '../components/education';
import Skills from '../components/skills';
import Achievements from '../components/achievements';
import Projects from '../components/projects';

const IndexPage = () => (
  <Layout>
    <Hero>
      <Identity />
    </Hero>
    <Skills />
    <div className='columns is-gapless'>
      <div className='column'>
        <Experiences />
      </div>
      <div className='column'>
        <Education />
      </div>
    </div>
    <Achievements />
    <Projects />
  </Layout>
);

export default IndexPage;
