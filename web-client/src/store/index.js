import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

import reducers from './reducers'
import sagas from './sagas/skill-saga'
// import sagas from './sagas/root-sagas'
import initialState from './initial-state'

// create react-saga middleware
const sagaMiddleware = createSagaMiddleware()

// used for Redux DevTools browser extesion
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware)),
)
sagaMiddleware.run(sagas)

export default store
