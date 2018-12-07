import React from 'react'
import { connect } from 'react-redux'
import Card from '../../components/skill-components/skill'
import Level from '../../components/skill-components/selects'
import Search from '../../components/skill-components/search'
// import { fetchLevelSubjectSkills, fetchSearch } from '../../actions/';
// import { API_CALL_REQUEST } from '../../actions/types'
import { API_CALL_REQUEST, API_CALL_LEVEL_SUBJECT_REQUEST } from '../../actions/types'
import '../../css/common.css';

class SkillList extends React.Component {
  constructor(props) {
    super(props)
    // this.state = props
    this.handleSelect = this.handleSelect.bind(this)
    this.searchKeyPress = this.searchKeyPress.bind(this)
  }

  /**
   * empty skillset, do not update
   * @param {*} nextProps
   * @param {*} nextState
   */
  shouldComponentUpdate(nextProps, nextState)  {
    // if (nextProps.skills.skills.length <= 0 ) {
    //   return false
    // } else {
    //   return true
    // }
    return true
  }
  searchKeyPress(e) {
    try {
    if(e.key === 'Enter') {
      this.searchTerm = e.target.value
      if(this.searchTerm )
        this.props.fetchSearch(this.searchTerm)

      }

      } catch ( e ) {
        console.log(e)
      }
    }


  handleSelect(e) {
    const type = e.type
    switch(type) {
      case 'level':
        this.level = e.value
        break;
      case 'subject':
        this.subject = e.value
        break
      default:
        break
    }
    if(this.level && this.subject) {
      this.props.fetchLevelSubjectSkills(this.level, this.subject)
    }
  }

    render() {
      console.log(this.props)
      const { fetching, skills, onRequestSkills, fetchLevelSubjectSkills, error } = this.props;

      this.uniKeysLevel = [1,2,3,4,5,6,7,8,9,10,11,12]
      this.optionsLevel = this.uniKeysLevel.map((level) => ({ value: level, label: level, type: 'level' }));

      this.uniKeysSubject = ['ALGEBRA I','ALGEBRA II', 'AMERICAN GOVERNMENT',
      'CIENCIAS', 'ECONOMICS', 'ELA', 'ENGLISH I', 'ENGLISH II', 'GEOMETRY',
      'MATEMATICAS', 'MATHEMATICS','PRECALCULUS', 'READING', 'SCIENCE',
      'SOCIAL STUDIES', 'U.S. HISTORY', 'WORLD GEOGRAPHY', 'WORLD HISTORY', 'WRITING'
    ]
      this.optionsSubject = this.uniKeysSubject.map((subject) => ({ value: subject, label: subject, type: 'subject' }));

    return (
      <div>


          {fetching ? (
            <button disabled>Fetching...</button>
          ) : (
            <button onClick={onRequestSkills}>Request Skills</button>
          )}

          <Search searchHandle={this.searchKeyPress} />

          <Level level={this.optionsLevel} subject={this.optionsSubject}  handle={this.handleSelect} />


        {
          (skills != null && !!skills.length) && skills.map((skill) => {
            return (<Card key={skill.qeSerialNumber} {...skill} />)
          })
        }
      </div>
      );
  }

}

  const mapStateToProps = state => {
    return {
      fetching: state.fetching,
      skills: state.skills,
      level: state.level,
      subject: state.subject,
      error: state.error
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      onRequestSkills: (level, subject) => dispatch({
      type: API_CALL_REQUEST,
      level,
      subject
      }),

      fetchLevelSubjectSkills: (level, subject) => dispatch({
        type: API_CALL_LEVEL_SUBJECT_REQUEST,
        level,
        subject
        }),
    }
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillList);


