import React from 'react'
import { connect } from 'react-redux'
// import get from 'lodash.get'
// import keyBy from 'lodash.keyby'
import { removeTilde } from '../../utils/'
import QuestionItem from '../../components/quiz-components/question-item'
import PassageItem from '../../components/quiz-components/passage-item'
import AnswerItem from '../../components/quiz-components/answer-item'
import AnswerKeys from '../../components/quiz-components/print-keys'

// import { fetchQuiz } from '../../store/actions';

// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../../css/common.css'

class Question extends React.Component {
  constructor (props) {
    super (props)
    this.state = props
    this.getPassage = this.getPassage.bind(this)
    this.getQuestion = this.getQuestion.bind(this)
    this.getAnswers = this.getAnswers.bind(this)
    this.setAnswerKeys = this.setAnswerKeys.bind(this)
    this.getAnswerKeys = this.getAnswerKeys.bind(this)
    this.answerkeys = new Set()
  }
  componentDidMount = () => {
    const {id} = this.props.match.params
    // console.log('lessonName  >', id, 'ThisState: ', this.state )
    this.props.fetchQuiz(id)
    // console.log(this.state)

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

  setAnswerKeys = (kv) => {
    this.answerkeys.add(kv)
  }
  getAnswerKeys = () => {
    return Array.from(this.answerkeys)
  }
  /**
   * id: question Id
   * init: A, B, C, D, E ...
   * index: sequence
   */
  getAnswers = (id, init, index) => this.props.skills.answers.map((item) => {
    if(item.abQuestionId === id) {
      let answerId = item.abAnswerId
      let questionId = item.abQuestionId
      let answer = removeTilde(item.abAnswer)
      let status = item.abCorrectAnswer

      if (status === 'YES') {
        this.setAnswerKeys([index, init].join())
      }

      let radioPart = `${init}. <input type="radio" name="${questionId}" value="${status}" id="${answerId}"
      onChange="alert(this.value)"/> `
      init = String.fromCharCode(init.charCodeAt() + 1)
      return `${radioPart}${answer}`
    }

  })

  render() {
    return (
      <div>
      {
        (this.props.skills.quizItems!= null && !!this.props.skills.quizItems.length)
        && this.props.skills.quizItems.map((q, index) => {
          const passage = this.getPassage(q.qbPassageId).join('')
          const answers = this.getAnswers(q.qbQuestionId, 'A', index + 1).join('')

          {/* const answerKeys = this.getAnswerKeys() */}

          return (
            <div>
              <PassageItem key={q.qbPassageId} passage={passage} />
              <QuestionItem key={q.qbQuestionId} question={q.qbQuestion} seq={index+1}  />
              <AnswerItem key={q.SerialNumber} answers={answers} seq={index+1} />
              {/* <AnswerKeys answerkeys={answerKeys} /> */}
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
 // fetchQuiz: (lessonName) => dispatch(fetchQuiz(lessonName))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);
