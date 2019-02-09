import React from "react"
import ReactDOM from "react-dom"
import createSagaMiddleware from "redux-saga"
import { createStore, compose, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import reducer from "./reducers"
import rootSaga from "./sagas"
import App from "./containers/app"
import { createBrowserHistory } from "history"
import { routerMiddleware, ConnectedRouter } from "connected-react-router"
import "normalize.css"
import "github-markdown-css/github-markdown.css"

import moment from "moment"

moment.locale("CN")

// redux tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
console.log("33")
let tempHistory = createBrowserHistory({
  basename: "/react-cnode-app"
})
if (process.env.NODE_ENV === "development") {
  tempHistory = createBrowserHistory()
}
export const history = tempHistory

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer(history),
  composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
)
