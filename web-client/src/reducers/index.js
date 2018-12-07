// action types
import { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE,
  API_CALL_LEVEL_SUBJECT_REQUEST } from '../actions/types'


// reducer with initial state
const initialState = {
  fetching: false,
  skills: null,
  level: null,
  subject: null,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, skills: null, level: action.level, subject: action.subject, error: null };
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, skills: action.skills, level: action.level, subject: action.subject, error: null  };
    case API_CALL_FAILURE:
      return { ...state, fetching: false, skills: null, error: action.error };
    case API_CALL_LEVEL_SUBJECT_REQUEST:
      return { ...state, fetching: false, skills: action.skills,
        level: action.level, subject: action.subject, error: null  };

    default:
      return state;
  }
}
