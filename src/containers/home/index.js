import React, { Component } from "react"
import { Layout, Button } from "antd"
import { HEADER_HEIGHT } from "../header"
import { Redirect } from "react-router-dom"
import styles from "./index.module.scss"
import { FOOTER_HEIGHT } from "../app"
import { Link, Route } from "react-router-dom"
const { Content } = Layout

class Home extends Component {
  render() {
    return (
      <Content
        className={styles.root}
        style={{ marginTop: HEADER_HEIGHT, marginBottom: FOOTER_HEIGHT }}
      >
        {/* 使用 Route 组件配合重定向 */}
        <Route
          exact
          path="/"
          render={() => {
            return (
              <Redirect
                exact
                to={{
                  pathname: "/all"
                }}
              />
            )
          }}
        />

        <Link to={"/all"}>全部</Link>

        <Route
          path="/all"
          render={() => {
            return <div>all</div>
          }}
        />

        <Button onClick={() => {}} />
      </Content>
    )
  }
}

export default Home
