import React, { Component } from 'react';
import Logo from './logo';
import SkillList from './containers/skill-containers/skilllist';

class App extends Component {
  render() {
    return (
    <React.Fragment>
      <div className="col-md-10">
        <Logo />
        <SkillList />
      </div>
      </React.Fragment>
    );
  }
}

export default App;
