import React, { Component } from "react"
import { Layout } from "antd"
import styles from "./index.module.scss"

const { Header: LayoutHeader } = Layout

export const HEADER_HEIGHT = 60

class Header extends Component {
  render() {
    return (
      <LayoutHeader className={styles.root} style={{ height: HEADER_HEIGHT }}>
        <div>1</div>
      </LayoutHeader>
    )
  }
}

export default Header
