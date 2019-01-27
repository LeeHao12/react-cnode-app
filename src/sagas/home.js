import { takeLatest, all, fork, call, put } from "redux-saga/effects"
import { homeAction } from "../actions/home"
import { getFetch } from "./utils"
const { loadRequire, loadSuccess, loadError, mount } = homeAction.home

function* fetchList(action) {
  const url = "/topics?limit=5&tab=" + action.payload.tab

  try {
    yield put(loadRequire())
    const response = yield call(getFetch, url)
    yield put(loadSuccess(response.data))
    // yield put(push("/okdj"))
  } catch (error) {
    yield put(loadError(error))
  }
}

function* watchFetchList() {
  yield takeLatest(mount.toString(), fetchList)
}

export function* homeSaga() {
  yield all([fork(watchFetchList)])
}
