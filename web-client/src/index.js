import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from "redux-saga"
// import {watcherSagaFetchAllSkills} from './sagas'
import sagas from './sagas'

import { Provider } from 'react-redux';
import { reducer } from "./reducers";
import App from './containers/app';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()



// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import rootReducer from './reducers';


const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// create a redux store with our reducer above and middleware
let store = createStore(
  reducer,
  /* applyMiddleware(sagaMiddleware),*/
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

// run the saga
// sagaMiddleware.run(watcherSagaFetchAllSkills);
sagaMiddleware.run(sagas)

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Router>
  </Provider>, document.getElementById('root'));

