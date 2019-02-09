import React, { Component } from "react"
import { Layout } from "antd"
import Header from "../header"
import Home from "../home"
import Detail from "../detail"
import styles from "./index.module.scss"
import { Route, Redirect, Switch } from "react-router-dom"
import { FOOTER_HEIGHT } from "../../styles/config"

import "rc-texty/assets/index.css"

class App extends Component {
  renderContent() {
    return (
      <Switch>
        {/* 重定向 */}
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect exact to={"/all"} />
          }}
        />

        <Route exact path="/:tab(all|good|ask|share|job)" component={Home} />

        <Route exact path="/detail/:id" component={Detail} />

        <Route
          render={() => {
            return <div>404</div>
          }}
        />
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
            <a
              href="https://github.com/LeeHao92/react-cnode-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              欢迎 start
            </a>
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
