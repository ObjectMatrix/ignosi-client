import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';
import Quiz from './containers/quiz-containers/quiz';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import rootReducer from './reducers';

import { fetchAllSkills
         // fetchLevelSubjectSkills,
        // fetchQuiz
        } from './actions/index';

  const composeEnhancers =
    typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(
    fetchAllSkills()
    // fetchLevelSubjectSkills(),
    // fetchQuiz()
    );

ReactDOM.render(
  <Provider store={store}>
  <div>
    {/* <Quiz lessonName='01-MATH-1.7.B'/>*/}
    <App />
  </div>
  </Provider>, document.getElementById('root'));

