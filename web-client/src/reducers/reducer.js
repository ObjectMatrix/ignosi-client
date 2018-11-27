import { FETCH_ALL_SKILLS, FETCH_LEVEL_SUBJECT, FETCH_QUIZ } from '../actions/types';

/**
 * This file contains pure functions and does not relate to backend service.
 * Reducers must be pure functions.
 * So,if the action type is matched with fired action,
 * then it will modify the store and change the current state.
 * @param {*} state
 * @param {*} action
 */
export default function reducer(state = {}, action = {}) {
  console.log('action.type', action.type)
  switch (action.type) {
    case FETCH_ALL_SKILLS:
      return action.skills;
    case FETCH_LEVEL_SUBJECT:
      return action.skills;
      // return ({ level: action.level, subject: action.subject})
    case FETCH_QUIZ:
      return action.quizItems
    default:
      return state;
  }
}

