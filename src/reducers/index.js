import { combineReducers } from "redux"
import { homeReducer } from "./home"
import { detailReducer } from "./detail"
import { connectRouter } from "connected-react-router"
import { accessReducer } from "./access"

export default history =>
  combineReducers({
    router: connectRouter(history),
    home: homeReducer,
    detail: detailReducer,
    access: accessReducer
  })
