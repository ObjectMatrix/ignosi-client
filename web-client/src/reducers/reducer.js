import { FETCH_ALL_SKILLS, FETCH_LEVEL_SUBJECT,
  FETCH_QUIZ, FETCH_PASSAGES, FETCH_ANSWERS,
  FETCH_TERM_SEARCH  } from '../actions/types';

/**
 * This file contains pure functions and does not relate to backend service.
 * Reducers must be pure functions.
 * So,if the action type is matched with fired action,
 * then it will modify the store and change the current state.
 * @param {*} state
 * @param {*} action
 */
const initialState = {
  skills: [],
  quizItems: [],
  passages:[],
  answers: [],
  hint: [],
  solution: [],
  keys: []
};

export default function reducer(state = initialState, action) {
  // console.log('action.type', action.type)
  switch (action.type) {
    case FETCH_ALL_SKILLS:
      return {...state, skills: state.skills.concat(action.skills) }

    case FETCH_TERM_SEARCH:
      state.skills = initialState.skills
      return {...state, skills: state.skills.concat(action.skills) }

    case FETCH_LEVEL_SUBJECT:
      state = initialState
      return {...state, skills: state.skills.concat(action.skills) }

    case FETCH_QUIZ:
      state.quizItems = initialState.quizItems
      return {...state, quizItems: state.quizItems.concat(action.quizItems) }

    case FETCH_PASSAGES:
      state.passages = initialState.passages
      return {...state, passages: state.passages.concat(action.passages) }

    case FETCH_ANSWERS:
      state.answers = initialState.answers
      return {...state, answers: state.answers.concat(action.answers) }

    default:
      return state;
  }
}

