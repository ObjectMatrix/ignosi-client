import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import store from './store'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import App from './containers/app';

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Router>
  </Provider>, document.getElementById('root'));

