// DO NOT REMOVE THIS FILE YET
// import React, { Component } from 'react'
// import { BrowserRouter } from 'react-router-dom'
// import Logo from './logo';
// import SkillList from './containers/skill-containers/skilllist'
// import { Route, Switch } from 'react-router-dom'
// import Question from './containers/quiz-containers/question'
// import FacebookLoginButton from './fb-login'
// class App extends Component {
//   state = {
//     username: null
//   };

//   onFacebookLogin = (loginStatus, resultObject) => {
//     if (loginStatus === true) {
//       console.log(resultObject.user + '  ' + loginStatus)
//       this.setState({
//         username: resultObject.user.name
//       });
//     } else {
//       alert('Facebook login error');
//     }
//   }

  render() {
    const { username } = this.state
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <h1 className="App-title">iGnosi</h1>
    //     </header>

    //     <div className="App-intro">
    //       { !username &&
    //         <div>
    //           <p>Click below to login</p>
    //           <FacebookLoginButton onLogin={this.onFacebookLogin}>
    //             <button>Facebook</button>
    //           </FacebookLoginButton>
    //         </div>
    //       }
    //       { username &&
    //         <p> Welcome back, {username} </p>
    //         &&
    //         <React.Fragment>
    //         <BrowserRouter>
    //           <Switch>
    //           <Route path='/:id' component={Question} />
    //             <div className="col-md-10">
    //               <Logo />
    //               <SkillList />
    //             </div>
    //           </Switch>
    //           </BrowserRouter>
    //         </React.Fragment>
    //       }

    //     </div>
    //   </div>
    // )

//     return (
//     <React.Fragment>
//     <BrowserRouter>
//       <Switch>
//       <Route path='/:id' component={Question} />
//         <div className="col-md-10">
//           <Logo />
//           <SkillList />
//         </div>
//       </Switch>
//       </BrowserRouter>
//     </React.Fragment>
//     );
//   }
// }

// export default App;

// HOST='0.0.0.0' PORT=8080 npm run start1
