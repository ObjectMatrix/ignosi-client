import React from 'react';
import { connect } from 'react-redux';
// import get from 'lodash.get'
// import keyBy from 'lodash.keyby'
import { removeTilde } from '../../utils/'
import QuestionItem from '../../components/quiz-components/question-item';
import PassageItem from '../../components/quiz-components/passage-item';
import AnswerItem from '../../components/quiz-components/answer-item';
import { fetchQuiz } from '../../actions';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Question extends React.Component {
  constructor (props) {
    super (props)
    this.state = props
    this.getPassage = this.getPassage.bind(this)
    this.getQuestion = this.getQuestion.bind(this)
    this.getAnswers = this.getAnswers.bind(this)
    // this.removeTilde = this.removeTilde.bind(this)

  }
  componentDidMount = () => {
    const {id} = this.props.match.params
    // console.log('lessonName  >', id, 'ThisState: ', this.state )
    this.props.fetchQuiz(id)

  }

  getStatus = (e) => {
    alert (e.target.value)
  }

  getPassage = (id) => this.props.skills.passages.map((item) => {
    if(item.pbPassageID === id)
      return item.pbPassage
  })

  getQuestion = (id) => this.props.skills.quizItems.map((item) => {
    if(item.qbQuestionId === id)
      return item.qbQuestion
  })

  getAnswers = (id) => this.props.skills.answers.map((item) => {
    if(item.abQuestionId === id) {
      let answerId = item.abAnswerId
      let questionId = item.abQuestionId
      let answer = removeTilde(item.abAnswer)
      let status = item.abCorrectAnswer
      return `<input type="radio" name="${questionId}" value="${status}" id="${answerId}"
      onChange="alert(this.value)"/> ${answer}`
    }
  })

  /**
   * A~ etc. being used by authors
   * when intended sequence of listing is intended
   */
  // removeTilde = (str) => {
  //     let mapObj = {
  //       'A~': '',
  //       'B~': '',
  //       'C~': '',
  //       'D~': '',
  //       'E~': '',
  //       'F~': ''
  //     }
  //     return str.replace(/A~|B~|C~|D~|E~/gi, (matched) =>  mapObj[matched])
  // }

  render() {
    return (
      <div>
      {
        (this.props.skills.quizItems!= null && !!this.props.skills.quizItems.length)
        && this.props.skills.quizItems.map((q, index) => {
          let passage = this.getPassage(q.qbPassageId).join('')
          let answers = this.getAnswers(q.qbQuestionId).join(' ')
          return (
            <div>
            <PassageItem key={q.qbPassageId} passage={passage} />
            <QuestionItem key={q.qbQuestionId} question={q.qbQuestion}  />
            <AnswerItem key={q.SerialNumber} answers={answers} />
            </div>
            )
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
