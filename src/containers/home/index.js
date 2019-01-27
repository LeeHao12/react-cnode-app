import React, { Component } from "react"
import { Layout } from "antd"
import { HEADER_HEIGHT } from "../header"
import styles from "./index.module.scss"
import { FOOTER_HEIGHT } from "../app"
import { Route, Switch, withRouter } from "react-router-dom"
import List from "./List"
import { AppRedirect } from "../../components/redirect"

const { Content } = Layout

class Home extends Component {
  renderLinks() {
    const { history } = this.props
    return (
      <div>
        <div
          onClick={() => {
            history.push("/all")
          }}
        >
          all
        </div>
        <div
          onClick={() => {
            history.push("/good")
          }}
        >
          good
        </div>
      </div>
    )
  }

  render() {
    return (
      <Content
        className={styles.root}
        style={{ marginTop: HEADER_HEIGHT, marginBottom: FOOTER_HEIGHT }}
      >
        <AppRedirect from="/" to="/all" />

        {this.renderLinks()}

        <Switch>
          <Route path="/:tab(all|good)" component={List} />
          <Route
            render={() => {
              return <div>404</div>
            }}
          />
        </Switch>
      </Content>
    )
  }
}

export default withRouter(Home)
