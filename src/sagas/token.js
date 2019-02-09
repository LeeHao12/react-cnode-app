import { takeLatest, all, fork, call, put } from "redux-saga/effects"
import { tokenAction } from "../actions"
import { postFetch } from "./utils"

const { loadRequire, loadSuccess, loadError, login } = tokenAction.token

function* fetchLogin(action) {
  const token = action.payload

  try {
    yield put(loadRequire())
    const response = yield call(postFetch, "/accesstoken", {
      accesstoken: token
    })
    yield put(loadSuccess(response, token))
  } catch (error) {
    yield put(loadError(error.response.data.error_msg))
  }
}

function* watchLogin() {
  yield takeLatest([login.toString()], fetchLogin)
}

export function* tokenSaga() {
  yield all([fork(watchLogin)])
}
