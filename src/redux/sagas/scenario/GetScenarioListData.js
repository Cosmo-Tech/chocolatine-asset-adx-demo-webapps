// Copyright (c) Cosmo Tech.
// Licensed under the MIT license.

import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects'
import { SCENARIO_ENDPOINT, SCENARIO_ACTIONS_KEY } from '../../commons/ScenarioConstants'

function * scenarioListData () {
  try {
    const { data } = yield axios.get(SCENARIO_ENDPOINT.GET_SCENARIO_LIST)
    yield put({ type: SCENARIO_ACTIONS_KEY.SET_SCENARIO_LIST, list: data.list })
  } catch (error) {
    console.log(error)
  }
}

function * getScenarioListData () {
  yield takeEvery(SCENARIO_ACTIONS_KEY.GET_SCENARIO_LIST, scenarioListData)
}

export default getScenarioListData
