import React from 'react';
import TimelineItem from './timeline-item';
import { FaPaperPlane } from 'react-icons/fa';

const Experiences = () => (
  <section className='section'>
    <h2 className='title is-2'>
      <FaPaperPlane /> Experiences
    </h2>
    <div className='is-divider' />
    <div className='timeline'>
      <TimelineItem
        start='September 2016'
        end='Current'
        what='Backend engineer'
        where='IHU Strasbourg'
        location='Strasbourg, France'
        link='https://www.ihu-strasbourg.eu/'
      />
      <TimelineItem
        start='September 2013'
        end='August 2016'
        what='Apprenticeship'
        where='IRCAD France'
        location='Strasbourg, France'
        link='https://www.ircad.fr/'
      />
      <TimelineItem
        start='April 2013'
        end='June 2013'
        what='Internship'
        where='CIC-IT Nancy'
        location='Nancy, France'
        link='http://www.cic-it-nancy.fr/en/'
      />
    </div>
  </section>
);

export default Experiences;
