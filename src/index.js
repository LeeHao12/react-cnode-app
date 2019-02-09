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
export const history = createBrowserHistory({
  basename: process.env.NODE_ENV === "development" ? "/" : "/react-cnode-app"
})

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
