import { takeLatest, all, fork, call, put, select } from "redux-saga/effects"
import { detailAction } from "../actions"
import { getFetch } from "./utils"
import queryString from "query-string"
import { createMatchSelector } from "connected-react-router"

const { loadRequire, loadSuccess, loadError, mount } = detailAction.detail

function* fetchDetail() {
  // 获取 router match
  const matchSelector = createMatchSelector({ path: "/detail/:id" })
  const match = yield select(matchSelector)
  const id = (match && match.params && match.params.id) || undefined
  if (!id) {
    return
  }

  // api url
  const query = queryString.stringify({
    mdrender: false
  })
  const url = `/topic/${id}?${query}`

  try {
    yield put(loadRequire())
    const response = yield call(getFetch, url)
    yield put(loadSuccess(response.data))
  } catch (error) {
    yield put(loadError(error))
  }
}

function* watchFetchDetail() {
  yield takeLatest([mount.toString()], fetchDetail)
}

export function* detailSaga() {
  yield all([fork(watchFetchDetail)])
}
