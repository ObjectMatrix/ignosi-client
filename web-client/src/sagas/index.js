import { call, put, takeLatest, all } from 'redux-saga/effects'
import { apiUrl, skillsUrl } from '../constants'
import axios from 'axios'


import { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE,
  API_CALL_LEVEL_SUBJECT_REQUEST } from '../actions/types'

export default function* watcherSagaFetchAllSkills() {
  yield takeLatest(API_CALL_REQUEST, fetchAllSkillsSaga)
}

export function* watcherSagaFetchLevelSubjectSkills() {
  yield takeLatest(API_CALL_LEVEL_SUBJECT_REQUEST, fetchLevelSubjectSaga)
}

function fetchSkills () {
  return axios ({
    method: "get",
    url: skillsUrl
  })
}

function fetchSkillsLevelSubject (level, subject) {
  console.log(`${apiUrl}{level}/{subject}/levelsubject}`)
  return axios ({
    method: "get",
    url: `${apiUrl}{level}/{subject}/levelsubject}`
  })
}
/**
 * We want to create a saga, using redux-saga,
 * that will initiate an API call for alist of skills,
 * then tell the Store whether that API call was a success
 * or a failure.
 */
function *fetchAllSkillsSaga () {
  try {
    const response = yield call(fetchSkills);
    const skills = response.data;
    // dispatch a success action to the store
    yield put({ type: API_CALL_SUCCESS, skills });

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: API_CALL_FAILURE, error });
  }
}

//
function *fetchLevelSubjectSaga () {
  try {
    const response = yield call(fetchSkillsLevelSubject);
    const skills = response.data;
    // dispatch a success action to the store
    yield put({ type: API_CALL_LEVEL_SUBJECT_REQUEST, skills });

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: API_CALL_FAILURE, error });
  }
}
