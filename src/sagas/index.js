import { all, fork } from "redux-saga/effects"
import { homeSaga } from "./home"
import { detailSaga } from "./detail"
import { tokenSaga } from "./token"

function* rootSaga() {
  yield all([fork(homeSaga), fork(detailSaga), fork(tokenSaga)])
}

export default rootSaga
