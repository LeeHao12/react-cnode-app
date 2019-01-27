import React from "react"
import { Route, Redirect } from "react-router-dom"

export function AppRedirect({ from, to }) {
  return (
    <Route
      exact
      path={from}
      render={() => {
        return <Redirect exact to={to} from={from} />
      }}
    />
  )
}
