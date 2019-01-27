import { combineReducers } from "redux"
import { homeReducer } from "./home"
import { connectRouter } from "connected-react-router"

// const reducer = combineReducers({
//   home: homeReducer
// })

// export default reducer

export default history =>
  combineReducers({
    router: connectRouter(history),
    home: homeReducer
  })
