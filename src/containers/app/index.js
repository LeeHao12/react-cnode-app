import React, { Component } from "react"
import { Layout } from "antd"
import Header from "../header"
import Home from "../home"
import styles from "./index.module.scss"
import { Route, Redirect, Switch } from "react-router-dom"
import { FOOTER_HEIGHT } from "../../styles/config"
import "rc-texty/assets/index.css"

class App extends Component {
  renderContent() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect exact to={"/all"} />
          }}
        />

        <Route component={Home} />
      </Switch>
    )
  }

  renderComponent() {
    return (
      <Layout className={styles.root}>
        <Header />

        {this.renderContent()}

        <Layout.Footer
          className={styles.footer}
          style={{ height: FOOTER_HEIGHT }}
        >
          <div>
            <div>欢迎 start</div>
          </div>
        </Layout.Footer>
      </Layout>
    )
  }

  render() {
    return this.renderComponent()
  }
}

export default App
