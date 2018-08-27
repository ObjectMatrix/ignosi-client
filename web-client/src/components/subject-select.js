import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

class Subject extends React.Component {
  state = {
    selectedSubjectOption: null,
  }
  handleChange = (selectedSubjectOption) => {
    this.setState({ selectedSubjectOption });
    console.log(`Option selected:`, selectedSubjectOption);
  }
  render() {
    const { selectedSubjectOption } = this.state;
    const keys = this.props.skills.map((level) => ({ value: level.qeSubject, label: level.qeSubject }));
    const uniKeys = [...(new Set(keys.map(({ value }) => value)))];
    const options = uniKeys.map((level) => ({ value: level, label: level }));

    return (
      <Select
        value={selectedSubjectOption}
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

export default connect(
  mapStateToProps,
  null
)(Subject);
