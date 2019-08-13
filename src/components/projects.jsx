import React from 'react';
import { FaCodeBranch } from 'react-icons/fa';
import { GoCode, GoGitBranch, GoStar } from 'react-icons/go';
import { graphql, useStaticQuery } from 'gatsby';
import ExternalLink from './external-link';

const query = graphql`
  query {
    project: github {
      repository(owner: "nestjsx", name: "nest-bull") {
        name
        description
        stargazers {
          totalCount
        }
        forkCount
        url
        primaryLanguage {
          name
        }
      }
    }
  }
`;

const Project = ({
  title,
  description,
  stargazers,
  link,
  forks,
  mainLanguage,
}) => (
  <div className='card'>
    <ExternalLink to={link}>
      <div className='card-content'>
        <p className='title'>{title}</p>
        <p>{description}</p>
      </div>
      <footer className='card-footer level'>
        <span className='level-left'>
          <GoGitBranch />
          {forks}
        </span>
        <span>
          <GoCode />
          {mainLanguage}
        </span>
        <span className='level-right'>
          <GoStar />
          {stargazers}
        </span>
      </footer>
    </ExternalLink>
  </div>
);

const Projects = () => {
  const { project } = useStaticQuery(query);
  return (
    <section className='section'>
      <h2 className='title is-2'>
        <FaCodeBranch /> Projects
      </h2>
      <div className='is-divider' />
      <div className='columns'>
        <div className='column is-one-quarter'>
          <Project
            title={project.repository.name}
            description={project.repository.description}
            link={project.repository.url}
            forks={project.repository.forkCount}
            mainLanguage={project.repository.primaryLanguage.name}
            stargazers={project.repository.stargazers.totalCount}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
