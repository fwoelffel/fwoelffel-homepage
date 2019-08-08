import React from 'react';
import { FaFlask } from 'react-icons/fa';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query {
    allSkillsYaml(sort: { fields: [value, name], order: DESC }) {
      nodes {
        name
        value
      }
    }
  }
`;

const SkillBar = ({ name, level }) => (
  <>
    <label for={'skill-' + name}>{name}</label>
    <progress
      id={'skill-' + name}
      className='progress is-primary'
      value={level}
      max='100'
    />
  </>
);

const Skills = () => {
  const { allSkillsYaml } = useStaticQuery(query);
  return (
    <section className='section'>
      <h2 className='title is-2'>
        <FaFlask /> Skills
      </h2>
      <div className='is-divider' />
      <div className='columns'>
        <div className='column'>
          {allSkillsYaml.nodes
            .slice(0, Math.ceil(allSkillsYaml.nodes.length / 2))
            .map(({ name, value }) => (
              <SkillBar name={name} level={value} />
            ))}
        </div>
        <div className='column'>
          {allSkillsYaml.nodes
            .slice(Math.ceil(allSkillsYaml.nodes.length / 2))
            .map(({ name, value }) => (
              <SkillBar name={name} level={value} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
