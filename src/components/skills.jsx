import React, { Component } from 'react';
import { FaFlask, FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';
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

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shownSkills: this.props.skills.slice(
        0,
        Math.floor(this.props.skills.length / 2),
      ),
      isCollapsed: true,
    };
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    this.setState((prevState) => ({
      shownSkills: prevState.isCollapsed
        ? this.props.skills
        : this.props.skills.slice(0, Math.floor(this.props.skills.length / 2)),
      isCollapsed: !prevState.isCollapsed,
    }));
  }

  render() {
    return (
      <section className='section'>
        <h2 className='title is-2'>
          <FaFlask /> Skills
        </h2>
        <div className='is-divider' />
        <div className='columns'>
          <div className='column'>
            {this.state.shownSkills
              .slice(0, Math.ceil(this.state.shownSkills.length / 2))
              .map(({ name, value }) => (
                <SkillBar name={name} level={value} />
              ))}
          </div>
          <div className='column'>
            {this.state.shownSkills
              .slice(Math.ceil(this.state.shownSkills.length / 2))
              .map(({ name, value }) => (
                <SkillBar name={name} level={value} />
              ))}
          </div>
        </div>
        <div
          style={{ display: 'flex', 'flex-direction': 'column' }}
          className='has-text-centered has-text-grey-light is-size-7'
          onClick={this.toggleState}>
          {this.state.isCollapsed ? (
            <>
              <span>Show more</span>
              <span>
                <FaAngleDoubleDown />
              </span>
            </>
          ) : (
            <>
              <span>
                <FaAngleDoubleUp />
              </span>
              <span>Show less</span>
            </>
          )}
        </div>
      </section>
    );
  }
}

export default (props) => {
  const skills = useStaticQuery(query).allSkillsYaml.nodes;
  return <Skills {...props} skills={skills} />;
};
