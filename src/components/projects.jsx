import React from 'react';
import { FaCodeBranch } from 'react-icons/fa';
import { GoCode, GoEye, GoGitBranch, GoStar } from 'react-icons/go';
import { graphql, useStaticQuery } from 'gatsby';
import ExternalLink from './external-link';

const query = graphql`
  query {
    github {
      viewer {
        pinnedItems(first: 6) {
          nodes {
            ... on GitHub_Repository {
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
              repositoryTopics(first: 5) {
                nodes {
                  topic {
                    name
                  }
                }
              }
              watchers {
                totalCount
              }
            }
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
  topics,
  watchers,
}) => (
  <ExternalLink to={link}>
    <div
      className='card'
      style={{ display: 'flex', 'flex-direction': 'column', height: '100%' }}>
      <div className='card-content'>
        <h3 className='title is-5 is-marginless'>{title}</h3>
        <span className='subtitle is-7'>{link}</span>
        <p style={{ margin: '20px 0px' }}>{description}</p>
        <div className='tags'>
          {topics.map((topic) => (
            <span className='tag'>{topic}</span>
          ))}
        </div>
      </div>
      <footer
        className='card-footer level'
        style={{
          'vertical-align': 'middle',
          'margin-top': 'auto',
          padding: '10px',
        }}>
        <div className='level-left'>
          <span>
            <span style={{ 'margin-right': '2px', 'vertical-align': 'middle' }}>
              <GoCode />
            </span>
            {mainLanguage}
          </span>
        </div>
        <div className='level-right' style={{ 'margin-top': '0' }}>
          <span>
            <span style={{ 'margin-right': '2px', 'vertical-align': 'middle' }}>
              <GoEye />
            </span>
            {watchers}
          </span>
          <span style={{ 'margin-left': '15px' }}>
            <span style={{ 'margin-right': '2px', 'vertical-align': 'middle' }}>
              <GoGitBranch />
            </span>
            {forks}
          </span>
          <span style={{ 'margin-left': '15px' }}>
            <span style={{ 'margin-right': '2px', 'vertical-align': 'middle' }}>
              <GoStar />
            </span>
            {stargazers}
          </span>
        </div>
      </footer>
    </div>
  </ExternalLink>
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
        {github.viewer.pinnedItems.nodes.map((repository) => (
          <div className='column is-one-third'>
            <Project
              title={repository.name}
              description={repository.description}
              link={repository.url}
              forks={repository.forkCount}
              mainLanguage={repository.primaryLanguage.name}
              stargazers={repository.stargazers.totalCount}
              topics={repository.repositoryTopics.nodes.map(
                ({ topic }) => topic.name,
              )}
              watchers={repository.watchers.totalCount}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
