import React from 'react';

const ExternalLink = ({ to, children, className }) => (
  <a className={className} href={to} target='_blank' rel='noopener noreferrer'>
    {children}
  </a>
);

export default ExternalLink;
