onAnswerSelect:  (e) => {
  this.setState({
    site: e.currentTarget.value
    });
}

const Answers = props =>
    {!!this.props.answers &&
    props.answers.map(c => (
      <li>
        <input type="radio" name="answer" value={c.id}
        onChange={this.onAnswerSelect} />{c.answer}
      </li>
    ))
    }


