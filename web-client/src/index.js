import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import rootReducer from './reducers';
import { fetchAllSkills} from './actions/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchAllSkills());

ReactDOM.render(
  <Provider store={store}>
  <div>
    <App />,
  </div>
  </Provider>, document.getElementById('root'));

