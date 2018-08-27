
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
export const fetchSkills = skills => {
  return {
    type: FETCH_ALL_SKILLS,
    skills
  }
};

export const fetchAllSkills = () => {
  return (dispatch) => {
    return axios.get(apiUrl+'skills')
      .then(response => {
        dispatch(fetchSkills(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

/**
 * Level-subject
 */
export const fetchLevelSubject = skills => {
  return {
    type: FETCH_LEVEL_SUBJECT,
    skills
  }
};

export const fetchLevelSubjectSkills = (level, subject) => {
  const uri = encodeURI(apiUrl + `${level}/${subject}/levelsubject`)
  console.log(uri)
  return (dispatch) => {
    return axios.get(uri)
      .then(response => {
        dispatch(fetchLevelSubject(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
