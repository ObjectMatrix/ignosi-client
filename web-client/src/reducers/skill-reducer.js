import {FETCH_ALL_SKILLS  } from '../actions/types';

/**
 * This file contains pure functions and does not relate to backend service.
 * Reducers must be pure functions.
 * So,if the action type is matched with fired action,
 * then it will modify the store and change the current state.
 * @param {*} state
 * @param {*} action
 */
export default function skillsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_ALL_SKILLS:
      return action.skills;
    default:
      return state;
  }
}
