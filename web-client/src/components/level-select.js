import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import '../css/common.css';
// import { fetchLevelSubjectSkills } from '../actions/';

class Level extends React.Component {
  state = {
    selectedLevelOption: null,
    selectedSubjectOption: null,
  }

  handleChangeLevel = (selectedLevelOption) => {
    this.setState({ selectedLevelOption });
  }

  handleChangeSubject = (selectedSubjectOption) => {
    this.setState({ selectedSubjectOption });
  }

  componentDidUpdate() {
    this.props.onSelect(this.state)
  }
  render() {
    const optionsLevel = this.props.level
    const optionsSubject = this.props.subject
    const { selectedLevelOption } = this.state;
    const { selectedSubjectOption } = this.state;

    return (
    <div>

      <div className="divStyleLevel">
          <Select
            value={selectedLevelOption}
            onChange={this.handleChangeLevel}
            options={optionsLevel}
          />
      </div>

      <div className="divStyleSubject">
          <Select
            value={selectedSubjectOption}
            onChange={this.handleChangeSubject}
            options={optionsSubject}
          />
      </div>

    </div>
    );
  }
}

const mapStateToProps = state => {
  this.state = state
  return state
};

// const mapDispatchToProps = dispatch => {

//   return {
//     fetchLevelSubject: () => {
//       console.log(this.state)
//      dispatch(fetchLevelSubjectSkills('3', 'READING'));
//     }
//     }
//   };

export default connect(
  mapStateToProps,
  null
)(Level);
