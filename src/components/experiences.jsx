import React from 'react';
import TimelineItem from './timeline-item';

const Experiences = () => (
  <section className='section'>
    <div className='container'>
      <h2 className='title is-2'>Experiences</h2>
      <hr />
      <div className='timeline'>
        <TimelineItem
          start='September 2016'
          end='Current'
          what='Backend engineer'
          where='IHU Strasbourg'
        />
        <TimelineItem
          start='September 2013'
          end='August 2016'
          what='Apprenticeship'
          where='IRCAD France'
        />
        <TimelineItem
          start='April 2013'
          end='June 2013'
          what='Internship'
          where='CIC-IT Nancy'
        />
      </div>
    </div>
  </section>
);

export default Experiences;
