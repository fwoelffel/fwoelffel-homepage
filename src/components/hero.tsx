import React from 'react';
import './layout.scss';

const Hero = ({ children }) => (
  <div className={'hero is-fullheight'}>
    <div className={'hero-body'}>
      <section className={'container'}>{children}</section>
    </div>
  </div>
);

export default Hero;
