import React from 'react'
import { connect } from 'react-redux'
import Card from '../../components/skill-components/skill'
import Level from '../../components/skill-components/selects'
import Search from '../../components/skill-components/search'
import { fetchLevelSubjectSkills, fetchSearch } from '../../actions/';
import '../../css/common.css';

class SkillList extends React.Component {
  constructor(props) {
    super(props)
    this.state = props
    this.handleSelect = this.handleSelect.bind(this)
    this.searchKeyPress = this.searchKeyPress.bind(this)
  }

  componentDidMount = () => {
  }

  componentDidUpdate = (prevProps) => {
  }

  /**
   * empty skillset, do not update
   * @param {*} nextProps
   * @param {*} nextState
   */
  shouldComponentUpdate(nextProps, nextState)  {
    if (nextProps.skills.skills.length <= 0 ) {
      return false
    } else {
      return true
    }
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
      // console.log(this.level, this.subject)
    }
  }

  render () {
    if(this.props.skills.skills != null && !!this.props.skills.skills.length) {
      // this.keysLevel = this.props.skills.map((level) => ({ value: level.qeGrade, label: level.qeGrade }));
      // this.uniKeysLevel = [...(new Set(this.keysLevel.map(({ value }) => value)))];
      this.uniKeysLevel = [1,2,3,4,5,6,7,8,9,10,11,12]
      this.optionsLevel = this.uniKeysLevel.map((level) => ({ value: level, label: level, type: 'level' }));

      // this.keysSubject = this.props.skills.map((subject) => ({ value: subject.qeSubject, label: subject.qeSubject }));
      // this.uniKeysSubject = [...(new Set(this.keysSubject.map(({ value }) => value)))];
      this.uniKeysSubject = ['ALGEBRA I','ALGEBRA II', 'AMERICAN GOVERNMENT',
      'CIENCIAS', 'ECONOMICS', 'ELA', 'ENGLISH I', 'ENGLISH II', 'GEOMETRY',
      'MATEMATICAS', 'MATHEMATICS','PRECALCULUS', 'READING', 'SCIENCE',
      'SOCIAL STUDIES', 'U.S. HISTORY', 'WORLD GEOGRAPHY', 'WORLD HISTORY', 'WRITING'
    ]
      this.optionsSubject = this.uniKeysSubject.map((subject) => ({ value: subject, label: subject, type: 'subject' }));
    }
    return (
      <div>
        { this.props.skills.skills !== null && !!this.props.skills.skills.length &&
          <Search searchHandle={this.searchKeyPress} />
        }

        { this.props.skills.skills !== null && !!this.props.skills.skills.length &&
          <Level level={this.optionsLevel} subject={this.optionsSubject}  handle={this.handleSelect} />
        }

        {
          (this.props.skills.skills != null && !!this.props.skills.skills.length) && this.props.skills.skills.map((skill) => {
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
    fetchSearch: (searchTerm) => dispatch(fetchSearch(searchTerm))
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillList);

