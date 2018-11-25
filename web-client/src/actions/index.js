
import { FETCH_ALL_SKILLS, FETCH_LEVEL_SUBJECT, FETCH_QUIZ } from './types';
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

 /**
  * Fetch All Skills of All levels and Subject
  * @param {*} skills
  * @param {*} level
  * @param {*} subject
  */
const fetchSkills = (skills, level, subject) => {
  return {
    type: FETCH_ALL_SKILLS,
    skills,
    level,
    subject
  }
};
const fetchQuizItems = (quizItems, lessonName) => {
  return {
    type: FETCH_QUIZ,
    quizItems,
    lessonName
  }
}

const fetchLevelSubject = (skills, level, subject)  => {
  return {
    type: FETCH_LEVEL_SUBJECT,
    skills,
    level,
    subject
  }
}
export const fetchAllSkills = (level, subject) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${apiUrl}skills`);
      dispatch(fetchSkills(response.data, level, subject));
    }
    catch (error) {
      throw (error);
    }
  };
};


/**
 * Skill Items by
 * Level-subject only
 */
export const fetchLevelSubjectSkills = (level, subject) => {
  return async (dispatch) => {
    try {
      // path: '/{level}/{subject}/levelsubject',
        const response = await axios.get(`${apiUrl}${level}/${subject}/levelsubject`);
        dispatch(fetchLevelSubject(response.data, level, subject));
    }
    catch (error) {
      throw (error);
    }
  };
}

/**
 * Quiz Items Fetch
 */
export const fetchQuiz = (lessonName) => {
  // console.log(axios.get(`${apiUrl}${lessonName}/questions`))
  return async (dispatch) => {
    try {
      const response = axios.get(`${apiUrl}${lessonName}/questions`);
      console.log('quizData: ', response.data);
      dispatch(fetchQuizItems(response.data, lessonName));
    }
    catch (error) {
      throw (error);
    }
  };
};
