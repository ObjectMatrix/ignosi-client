import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { fetchLevelSubjectSkills } from '../actions/';

class Level extends React.Component {
  state = {
    selectedLevelOption: null,
  }
  handleChange = (selectedLevelOption) => {
    this.setState({ selectedLevelOption });
    this.props.levelSubjectSkills(selectedLevelOption);
    // console.log(`Option selected:`, selectedLevelOption);
  }
  sendAlert = () => {
    this.props.sendTheAlert()
}

  render() {
    const { selectedLevelOption } = this.state;
    const keys = this.props.skills.map((level) => ({ value: level.qeGrade, label: level.qeGrade }));
    const uniKeys = [...(new Set(keys.map(({ value }) => value)))];
    const options = uniKeys.map((level) => ({ value: level, label: level }));

    return (
      <Select
        value={selectedLevelOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

const mapStateToProps = state => {
  this.state = state
  return state
};

const mapDispatchToProps = dispatch => {
  return {
    levelSubjectSkills: (level) => {
      const subject = 'MATHEMATICS';
        dispatch(fetchLevelSubjectSkills(level.value, subject));
      }
    }
  };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Level);
