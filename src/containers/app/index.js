import React, { Component } from "react"
import { Layout } from "antd"
import Header from "../header"
import Content from "../home"

import styles from "./index.module.scss"

export const FOOTER_HEIGHT = 60

class App extends Component {
  renderComponent() {
    return (
      <Layout className={styles.root}>
        <Header />

        <Content />

        <Layout.Footer
          className={styles.footer}
          style={{ height: FOOTER_HEIGHT }}
        >
          欢迎 start
        </Layout.Footer>
      </Layout>
    )
  }

  render() {
    return this.renderComponent()
  }
}

export default App
