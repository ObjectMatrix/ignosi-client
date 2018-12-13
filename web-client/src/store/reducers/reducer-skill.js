// action types
import { ALL_SKILLS, LEVEL_SUBJECT_SKILL, SKILL_SEARCH,
  SUCCESS, FAILURE } from '../actions/types'

// reducer with initial state
const initialState = {
  fetching: false,
  skills: null,
  error: null
};

export default  (state = initialState, action) => {
  switch (action.type) {
    //case ALL_SKILLS:
      //return { ...state, fetching: true, error: null };
    case SUCCESS:
      return { ...state, fetching: false, skills: action.skills, error: null };
    case FAILURE:
      return { ...state, fetching: false, error: action.error };
    //case LEVEL_SUBJECT_SKILL:
      //return { ...state, fetching: false, error: null, error: null };
    default:
      return state;
  }
}
