import React, { Component } from 'react'
import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import Logo from '../logo';
import SkillList from './skill-containers/skilllist'
import Question from './quiz-containers/question'
import Notfound from '../components/http-status/notfound'

class App extends Component {
  render() {
    return (
    <React.Fragment>
    <BrowserRouter>
    <div>
    <Switch>
      <Route path='/:id' component={Question} />
      <div className="col-md-10">
        <Logo />
        <SkillList />
      </div>
      <Route component={Notfound} />
      </Switch>
    </div>
    </BrowserRouter>
    </React.Fragment>
    );
  }
}

export default App;

// HOST='0.0.0.0' PORT=80 npm run start1
