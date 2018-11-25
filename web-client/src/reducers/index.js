import { combineReducers } from 'redux';
import skills from './reducer';
import quizItems from './reducer';
/**
 * The combineReducers helper function turns an object
 * whose values are different reducing functions into a single
 * reducing function you can pass to createStore.
 * The resulting reducer calls every child reducer,
 * and gathers their results into a single state object.
 * --------------------------------------
 *   combineReducers
 * --------------------------------------
 * Redux uses a single root reducer function that accepts the current state
 * (and an action) as input and returns a new state. Users of Redux may write
 * the root reducer function in many different ways, but a recommended common
 * practice is breaking up the state object into slices and using a separate
 * sub reducer to operate on each slice of the state. Usually,
 * Redux's helper utility, combineReducers is used to do this.
 * combineReducers is a nice shortcut because it encourages the good practice
 * of reducer composition, but the abstraction can prevent understanding
 * the simplicity of Redux reducers.
 */
export default combineReducers(
  {
    skills,
    quizItems
  }
);
