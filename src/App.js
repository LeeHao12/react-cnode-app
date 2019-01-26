import React, { Component } from "react"
import styles from "./App.module.scss"
import { Button } from "antd"

class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Button type="primary">Button</Button>
      </div>
    )
  }
}

export default App
