import React from 'react';
import { connect } from 'react-redux';
import QuestionItem from '../../components/quiz-components/question-item';
import { fetchQuiz } from '../../actions';

import '../../css/common.css';

class Question extends React.Component {
  constructor (props) {
    super (props)
    this.state = props
  }
  componentDidMount = () => {
    const {id} = this.props.match.params
    console.log('lessonName  >', id, 'ThisState: ', this.state )
    this.props.fetchQuiz(id)
  }

  render() {
    console.log('THETOTAL:PASSAGES', this.props.skills.passages)
    console.log('THETOTAL:ANSWERS', this.props.skills.answers)
    const temp = this.props.skills.passages.filter(item => item.pbPassageID==="4FE56FD2-4FF8-4FCA-94C8-39166C64B155")
    console.log('FILTERED: ', temp)
    return (
      <div>
      {
        (this.props.skills.quizItems!= null && !!this.props.skills.quizItems.length)
        && this.props.skills.quizItems.map((q, index) => {

          return (<QuestionItem key={index} {...q}  />)
        })
      }
    </div>
    )
  }

}
/**
 * mapStateToProps and mapDispatchToProps are both pure functions
 * that are provided the stores “state” and “dispatch” respectively.
 * Furthermore, both functions have to return an object,
 * whose keys will then be passed on as the props of the component
 * they are connected to.
 * @param {*} state
 */
const mapStateToProps = state => {
  this.state = state
  return state
};

const mapDispatchToProps = dispatch => ({
  fetchQuiz: (lessonName) => dispatch(fetchQuiz(lessonName)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);
