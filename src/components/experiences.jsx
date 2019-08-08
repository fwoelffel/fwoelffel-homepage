import React from 'react';
import TimelineItem from './timeline-item';
import { FaPaperPlane } from 'react-icons/fa';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query {
    allExperiencesYaml {
      nodes {
        start
        location
        link
        end
        what
        where
        description
      }
    }
  }
`;

const Experiences = () => {
  const { allExperiencesYaml } = useStaticQuery(query);
  return (
    <section className='section'>
      <h2 className='title is-2'>
        <FaPaperPlane /> Experiences
      </h2>
      <div className='is-divider' />
      <div className='timeline'>
        {allExperiencesYaml.nodes.map((experience) => (
          <TimelineItem
            start={experience.start}
            end={experience.end}
            what={experience.what}
            where={experience.where}
            location={experience.location}
            link={experience.link}
          >
            {experience.description}
          </TimelineItem>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
