import { takeLatest, all, fork, call, put, select } from "redux-saga/effects"
import { homeAction } from "../actions/home"
import { getFetch } from "./utils"
import queryString from "query-string"
import { createMatchSelector } from "connected-react-router"

const {
  loadRequire,
  loadSuccess,
  loadError,
  mount,
  changeTab
} = homeAction.home

function* fetchList() {
  // 获取 router match
  const matchSelector = createMatchSelector({ path: "/:tab" })
  const match = yield select(matchSelector)

  // api url
  const query = queryString.stringify({
    limit: 15,
    tab: (match && match.params && match.params.tab) || undefined,
    mdrender: false
  })
  const url = `/topics?${query}`

  try {
    yield put(loadRequire())
    const response = yield call(getFetch, url)
    yield put(loadSuccess(response.data))
  } catch (error) {
    yield put(loadError(error))
  }
}

function* watchFetchList() {
  yield takeLatest([mount.toString(), changeTab.toString()], fetchList)
}

export function* homeSaga() {
  yield all([fork(watchFetchList)])
}
