import React from 'react';

const TimelineItem = ({ start, end, what, where, children: description }) => (
  <div className='timeline-item'>
    <div className='timeline-marker' />
    <div className='timeline-content'>
      <p className='heading'>
        {start} - {end}
      </p>
      <p className='title is-6'>
        {what} at {where}
      </p>
      <div>{description}</div>
    </div>
  </div>
);

export default TimelineItem;
