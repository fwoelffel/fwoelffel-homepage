import React from 'react';
import TimelineItem from './timeline-item';
import { FaGraduationCap } from 'react-icons/fa';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query {
    allEducationYaml {
      nodes {
        start
        location
        link
        end
        what
        where
      }
    }
  }
`;

const Education = () => {
  const { allEducationYaml } = useStaticQuery(query);
  return (
    <section className='section'>
      <div className='container'>
        <h2 className='title is-2'>
          <FaGraduationCap /> Education
        </h2>
        <div className='is-divider' />
        <div className='timeline'>
          {allEducationYaml.nodes.map((education) => (
            <TimelineItem
              start={education.start}
              end={education.end}
              what={education.what}
              where={education.where}
              location={education.location}
              link={education.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Education;
