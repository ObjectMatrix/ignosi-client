
import { FETCH_ALL_SKILLS, FETCH_LEVEL_SUBJECT } from './types';
import axios from 'axios';
const apiUrl = 'http://localhost:8080/';

/**
 * Here, we have defined the sync and async actions.
 * Sync action returns an object that contains action type and payload.
 * Async action send a network request to the server and wait for
 * the promise to resolve. When the promise resolves,
 * it fires a sync action with the action type and payload.
 * @param {*} skills
 */
export const fetchSkills = (skills, level, subject) => {
  return {
    type: FETCH_ALL_SKILLS,
    skills,
    level,
    subject
  }
};

export const fetchAllSkills = (level='all', subject='all') => {
  return (dispatch) => {
    return axios.get(apiUrl+'skills')
      .then(response => {
        dispatch(fetchSkills(response.data, level, subject))
      })
      .catch(error => {
        throw(error);
      });
  };
};


/**
 * Level-subject
 */
export const fetchLevelSubject = (level, subject)  => {
  return {
    type: FETCH_LEVEL_SUBJECT,
    level,
    subject
  }
};

export const fetchLevelSubjectSkills = (level, subject) => {
  return (dispatch) => dispatch(fetchLevelSubject(level, subject))
}
