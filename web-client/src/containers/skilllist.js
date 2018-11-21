import React from 'react';
import { connect } from 'react-redux';
import Card from '../components/skill';
import { fetchLevelSubjectSkills } from '../actions/';
import Level from '../components/level-select';
// import Subject from '../components/subject-select';
import '../css/common.css';

class SkillList extends React.Component {
  constructor(props) {
    super(props)
    this.state = props
  }
state = {
  level: 'all',
  subject: 'all'
}
  handleChangeSelect = (e) => {
    if(e.selectedLevelOption && e.selectedSubjectOption) {
      // console.log(e.selectedLevelOption.value)
      // console.log(e.selectedSubjectOption.value)
      this.props.fetchLevelSubjectSkills(e.selectedLevelOption.value, e.selectedSubjectOption.value)
    }
  }


  render () {
    if(!!this.props.skills.length) {
      console.log(this.props)
      this.keysLevel = this.props.skills.map((level) => ({ value: level.qeGrade, label: level.qeGrade }));
      this.uniKeysLevel = [...(new Set(this.keysLevel.map(({ value }) => value)))];
      this.optionsLevel = this.uniKeysLevel.map((level) => ({ value: level, label: level }));

      this.keysSubject = this.props.skills.map((subject) => ({ value: subject.qeSubject, label: subject.qeSubject }));
      this.uniKeysSubject = [...(new Set(this.keysSubject.map(({ value }) => value)))];
      this.optionsSubject = this.uniKeysSubject.map((subject) => ({ value: subject, label: subject }));
    }
    return (
      <div>
        <div>
        { !!this.props.skills.length && <Level level={this.optionsLevel}
        subject ={this.optionsSubject} onSelect={this.handleChangeSelect} /> }
        </div>
        {
          !!this.props.skills.length && this.props.skills.map((skill) => {
            return (<Card key={skill.qeSerialNumber} {...skill} />)
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

  const mapDispatchToProps = dispatch => ({
    fetchLevelSubjectSkills: (level, subject) => dispatch(fetchLevelSubjectSkills(level, subject)),
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillList);

