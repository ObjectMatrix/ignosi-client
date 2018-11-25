import React from 'react';
import { connect } from 'react-redux';
import { fetchQuiz } from '../../actions/';
import '../../css/common.css';

class Quiz extends React.Component {
  constructor (props) {
    super (props)
    this.state = props
    console.log('props', props)
  }

  render() {
    return(
      <div>
      {
        !!this.props.quizItems.length && this.props.quizItems.map((q) => {
            console.log('LESSONNAME:',this.props.lessonName)
          return (<span> </span>)
        })
      }

      <div  className="col-md-10">
      Hello World Test
      {this.props.quizItems.length}
      </div>
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
)(Quiz);
