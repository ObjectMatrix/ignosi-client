import React from 'react';
import { connect } from 'react-redux';
import Skill from '../components/skill';
import { fetchAllSkills } from '../actions/';
import Level from '../components/level-select';
import Subject from '../components/subject-select';
import '../css/common.css';

class SkillList extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render () {
    return (
      <div>
        <div>
        <div className="divStyleLevel">{ !!this.props.skills.length && <Level /> }</div>
        <div className="divStyleSubject">{ !!this.props.skills.length && <Subject /> }</div>
        </div>
        {
          !!this.props.skills.length && this.props.skills.map((skill) => {
            return (<Skill key={skill.qeSerialNumber} {...skill} />)
          })
        }
      </div>
      );
  }

}

  const mapStateToProps = state => {
    this.state = state
    return state
  };

  const mapDispatchToProps = dispatch => {
    return {
      fetchAllSkills: () => {
          dispatch(fetchAllSkills());
        }
      }
    };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillList);

