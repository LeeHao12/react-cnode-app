import React, { Component } from "react"
import { Layout } from "antd"
import styles from "./index.module.scss"

const { Header: LayoutHeader } = Layout

export const HEADER_HEIGHT = 60

class Header extends Component {
  renderOptions() {
    return (
      <div className={styles.options}>
        <div className={styles.item}>home</div>
        <div className={styles.item}>news</div>
        <div className={styles.item}>freshman</div>
        <div className={styles.item}>logout</div>
      </div>
    )
  }

  render() {
    const style = {
      height: HEADER_HEIGHT
    }

    return (
      <LayoutHeader className={styles.root} style={style}>
        <div className={styles.logo}>CNODE</div>
        {this.renderOptions()}
      </LayoutHeader>
    )
  }
}

export default Header
