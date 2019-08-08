import React from 'react';
import { FaFlask } from 'react-icons/fa';

const skillList = [
  { tech: 'Typescript', value: 90 },
  { tech: 'Javascript', value: 95 },
  { tech: 'Docker', value: 90 },
  { tech: 'Docker Swarm', value: 75 },
  { tech: 'Gitlab CI', value: 85 },
  { tech: 'Nest.js', value: 95 },
  { tech: 'Node.js', value: 95 },
  { tech: 'TypeORM', value: 95 },
  { tech: 'React', value: 20 },
  { tech: 'CouchDB', value: 70 },
  { tech: 'PostgreSQL', value: 60 },
  { tech: 'Redis', value: 70 },
].sort((skill1, skill2) =>
  skill1.value > skill2.value ? -1 : skill1.value < skill2.value ? 1 : 0,
);

const SkillBar = ({ tech, level }) => (
  <>
    <label for={'skill-' + tech}>{tech}</label>
    <progress
      id={'skill-' + tech}
      className='progress is-primary'
      value={level}
      max='100'
    />
  </>
);

const Skills = () => (
  <section className='section'>
    <h2 className='title is-2'>
      <FaFlask /> Skills
    </h2>
    <div className='is-divider' />
    <div className='columns'>
      <div className='column'>
        {skillList
          .slice(0, Math.ceil(skillList.length / 2))
          .map(({ tech, value }) => (
            <SkillBar tech={tech} level={value} />
          ))}
      </div>
      <div className='column'>
        {skillList
          .slice(Math.ceil(skillList.length / 2))
          .map(({ tech, value }) => (
            <SkillBar tech={tech} level={value} />
          ))}
      </div>
    </div>
  </section>
);

export default Skills;
