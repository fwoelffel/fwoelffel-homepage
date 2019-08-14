import React from 'react';
import { FaCodeBranch } from 'react-icons/fa';
import { GoCode, GoGitBranch, GoStar } from 'react-icons/go';
import { graphql, useStaticQuery } from 'gatsby';
import ExternalLink from './external-link';

const query = graphql`
  query {
    github {
      viewer {
        pinnedRepositories(first: 6) {
          nodes {
            nameWithOwner
            url
            stargazers {
              totalCount
            }
            primaryLanguage {
              name
            }
            name
            forkCount
            description
          }
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
  const { github } = useStaticQuery(query);
  return (
    <section className='section'>
      <h2 className='title is-2'>
        <FaCodeBranch /> Projects
      </h2>
      <div className='is-divider' />
      <div className='columns is-multiline'>
        {github.viewer.pinnedRepositories.nodes.map((repository) => (
          <div className='column is-one-third'>
            <Project
              title={repository.name}
              description={repository.description}
              link={repository.url}
              forks={repository.forkCount}
              mainLanguage={repository.primaryLanguage.name}
              stargazers={repository.stargazers.totalCount}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
