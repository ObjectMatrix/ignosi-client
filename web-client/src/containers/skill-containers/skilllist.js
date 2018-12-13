import React from 'react'
import { connect } from 'react-redux'
// import { map } from 'ramda'
import Card from '../../components/skill-components/skill'
import Level from '../../components/skill-components/selects'
import Search from '../../components/skill-components/search'

import { API_CALL_REQUEST, API_CALL_LEVEL_SUBJECT_REQUEST } from '../../store/actions/types'
import { ALL_SKILL, LEVEL_SUBJECT_SKILL, SKILL_SEARCH } from '../../store/actions/types'

import {uniKeysLevel, uniKeysSubject} from '../../constants'
import '../../css/common.css';

class SkillList extends React.Component {
  constructor(props) {
    super(props)
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
      !!this.props.onRequestLevelSubjectSkills && this.props.onRequestLevelSubjectSkills(this.level, this.subject)
    }
  }

    render() {
      const { fetching, skills, onRequestAllSkills, onRequestLevelSubjectSkills, fetchSearch, error } = this.props;
      this.optionsLevel = uniKeysLevel.map((level) => ({ value: level, label: level, type: 'level' }));
      this.optionsSubject = uniKeysSubject.map((subject) => ({ value: subject, label: subject, type: 'subject' }));

    return (
      <div>
          {fetching ? (
            <button disabled>Fetching...</button>
          ) :  (
          <div>
            <button onClick={this.props.onRequestAllSkills}>View All</button>
            <Search searchHandle={this.searchKeyPress} />
          </div>
          )}
        <div>
        <Level level={this.optionsLevel} subject={this.optionsSubject}  handle={this.handleSelect} />
        {
          !!skills && skills.skills.map((skill) => {
            return (<Card key={skill.qeSerialNumber} {...skill} />)
          })
        }
      </div>
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
      onRequestAllSkills: () => dispatch({ type: 'ALL_SKILLS',
      level: null,
      subject: null
    }),

      onRequestLevelSubjectSkills: (level, subject) => dispatch({
        type: 'LEVEL_SUBJECT_SKILL',
          level,
          subject
        }),

        fetchSearch: searchTerm => dispatch({
          type : 'SKILL_SEARCH',
          searchTerm
        }),
    }
  }


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillList);


