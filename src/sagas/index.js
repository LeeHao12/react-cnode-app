import { all, fork } from "redux-saga/effects"
import { homeSaga } from "./home"

function* rootSaga() {
  yield all([fork(homeSaga)])
}

export default rootSaga
