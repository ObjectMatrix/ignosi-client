import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Logo from './logo';
import SkillList from './containers/skill-containers/skilllist';
import { Route, Switch } from 'react-router-dom';
import Question from './containers/quiz-containers/question'
class App extends Component {
  render() {
    return (
    <React.Fragment>
    <BrowserRouter>
      <Switch>
      <Route path='/quiz/:id' component={Question} />
        <div className="col-md-10">
          <Logo />
          <SkillList />
        </div>
      </Switch>
      </BrowserRouter>
    </React.Fragment>
    );
  }
}

export default App;
