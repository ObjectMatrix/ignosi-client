import React, { Component } from 'react';
import Logo from './logo';
import Skills from './skills';


class App extends Component {
  render() {
    return (
      <React.Fragment>

        <div>
          <Logo />
          <Skills />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
