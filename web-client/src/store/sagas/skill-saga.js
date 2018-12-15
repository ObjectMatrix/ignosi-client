import { call, put, takeLatest, all, takeEvery, take, select } from 'redux-saga/effects'
import { apiUrl, skillsUrl } from '../../constants'
import axios from 'axios'
import { setSkills }  from '../actions/action-skill'
import { ALL_SKILLS, LEVEL_SUBJECT_SKILL, SKILL_SEARCH,
          ITEMS_BY_LESSON, SUCCESS, FAILURE } from '../actions/types'

function* watchAll() {
  yield takeLatest(ALL_SKILLS, workerAllSkillSaga)
  yield takeLatest(LEVEL_SUBJECT_SKILL, workerAllSkillSagaLevelSubject)
  yield takeLatest(SKILL_SEARCH, workerSearch)
  yield takeLatest(ITEMS_BY_LESSON, workerItems)
}

function* workerAllSkillSagaLevelSubject(action) {
  if(!action.subject || !action.level)
    return;
  try {
    const response = yield call(fetchSkillsLevelSubject, action)
    const skills = response.data;
    // dispatch a success action to the store
    yield put({ type: SUCCESS, skills,
      subject:action.subject,
      level: action.level,
    });

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: FAILURE, error });
  }
}

function fetchSkillsLevelSubject (action) {

  return axios ({
    method: 'GET',
    url: `${apiUrl}${action.level}/${action.subject}/levelsubject`
  })
}

// --------------------------------------------------------
// worker saga: makes the api call when watcher saga sees the action
function* workerAllSkillSaga(action) {
  try {
    const response = yield call(fetchSkills);
    const skills = response.data;
    // dispatch a success action to the store with the new dog
    yield put({ type: SUCCESS, skills });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: FAILURE, error });
  }
}

function fetchSkills (action) {
  return axios ({
    method: 'GET',
    url: skillsUrl
  })
}

//--------------------------------------------------------------

function* workerSearch(action) {
  if(!action.searchTerm)
    return
  try {
    const response = yield call(fetchSearchedSkills, action)
    const skills = response.data;
    // dispatch a success action to the store with the new dog
    yield put({ type: SUCCESS, skills });

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: FAILURE, error });
  }
}

function fetchSearchedSkills (action) {
  return axios ({
    method: 'GET',
    url: `${apiUrl}${action.searchTerm}/search`
  })
}
//----------------------------------------------------------------
function* workerItems(action) {
  if(!action.lessonName)
    return
  try {
    const response = yield call(fetchItems, action)
    const skills = response.data;
    // dispatch a success action to the store with the new dog
    yield put({ type: SUCCESS, skills });

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: FAILURE, error });
  }
}
function fetchItems (action) {
  return axios ({
    method: 'GET',
    url: `${apiUrl}${action.lessonName}/questions`
  })
}

export default watchAll
