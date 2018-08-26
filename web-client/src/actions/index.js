
import {FETCH_ALL_SKILLS  } from './types';
import axios from 'axios';
const apiUrl = 'http://localhost:8080/skills';

/**
 * Here, we have defined the sync and async actions.
 * Sync action returns an object that contains action type and payload.
 * Async action send a network request to the server and wait for
 * the promise to resolve. When the promise resolves,
 * it fires a sync action with the action type and payload.
 * @param {*} skills
 */
export const fetchSkills = (skills) => {
  return {
    type: FETCH_ALL_SKILLS,
    skills
  }
};

export const fetchAllSkills = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchSkills(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
