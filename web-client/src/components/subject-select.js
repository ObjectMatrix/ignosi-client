import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

class Subject extends React.Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { selectedOption } = this.state;
    const keys = this.props.skills.map((level) => ({ value: level.qeSubject, label: level.qeSubject }));
    const uniKeys = [...(new Set(keys.map(({ value }) => value)))];
    const options = uniKeys.map((level) => ({ value: level, label: level }));

    return (
      <Select
        value={selectedOption}
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
