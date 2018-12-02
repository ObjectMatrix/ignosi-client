
import { FETCH_ALL_SKILLS, FETCH_LEVEL_SUBJECT,
  FETCH_QUIZ, FETCH_PASSAGES, FETCH_ANSWERS, FETCH_TERM_SEARCH } from './types'
import { apiUrl, skillsUrl } from '../constants'
import axios from 'axios'


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
const fetchSkills = skills => {
  return {
    type: FETCH_ALL_SKILLS,
    skills,
  }
};

const fetchQuizItems = quizItems => {
  return {
    type: FETCH_QUIZ,
    quizItems,
  }
}

const fetchLevelSubject = skills => {
  return {
    type: FETCH_LEVEL_SUBJECT,
    skills,
  }
}

const fetchPassageItems = passages => {
  return {
    type: FETCH_PASSAGES,
    passages
  }
}

const fetchAnswerItems = answers => {
  return {
    type: FETCH_ANSWERS,
    answers
  }
}

const fetchTermSearch = skills => {
  return {
    type: FETCH_TERM_SEARCH,
    skills
  }
}
/**
 * ___________________________________________________________
 */

export const fetchAllSkills = (level = null, subject = null) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(skillsUrl);
      dispatch(fetchSkills(response.data));
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
        const response = await axios.get(`${apiUrl}${level}/${subject}/levelsubject`);
        dispatch(fetchLevelSubject(response.data));
    }
    catch (error) {
      throw (error);
    }
  };
}

  /**
  - console.log(axios.get(`${apiUrl}${lessonName}/questions`))
  - await axios.get(`${apiUrl}${lessonName}/quiz`);
  */
  export const fetchQuiz = (lessonName) => {
    return async (dispatch) => {
      try
      {
          axios.all([
            axios.get(`${apiUrl}${lessonName}/questions`),
            axios.get(`${apiUrl}${lessonName}/passage`),
            axios.get(`${apiUrl}${lessonName}/answer`)
        ]).then(axios.spread((respQuestions, respPassages, respAnswers) => {
          dispatch(fetchQuizItems(respQuestions.data))
          dispatch(fetchPassageItems(respPassages.data))
          dispatch(fetchAnswerItems(respAnswers.data))
        }))
      } catch (error) {
        throw (error)
      }
    }
  }

/**
 * search term
 * @param {*} id
 */

export const fetchSearch = (term) => {
  return async (dispatch) => {
    try {
    const response = await axios.get(`${apiUrl}${term}/search`)
    console.log('search: ',response.data)
    dispatch(fetchTermSearch(response.data))
    } catch (error) {
      throw (error)
    }
  }
}
