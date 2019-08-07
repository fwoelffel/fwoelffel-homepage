import React from 'react';
import TimelineItem from './timeline-item';

const Education = () => (
  <section className='section'>
    <div className='container'>
      <h2 className='title is-2'>Education</h2>
      <hr />
      <div className='timeline'>
        <TimelineItem
          start='September 2013'
          end='January 2016'
          what='Engineering degree in computer science'
          where='CNAM'
        />
        <TimelineItem
          start='September 2011'
          end='June 2013'
          what='Two year university degree in computer science'
          where='IUT Saint-Dié'
        />
      </div>
    </div>
  </section>
);

export default Education;
