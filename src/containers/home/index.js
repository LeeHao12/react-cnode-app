import React, { Component } from "react"
import { Layout, Tabs, Icon } from "antd"
import styles from "./index.module.scss"
import { connect } from "react-redux"

import { Route, Switch, withRouter } from "react-router-dom"
import List from "./List"
import {
  HOME_TABS_HEIGHT,
  FOOTER_HEIGHT,
  HEADER_HEIGHT,
  PAGE_PADDING
} from "../../styles/config"
import { homeAction } from "../../actions/home"

const { Content } = Layout
const TabPane = Tabs.TabPane

const tabsConfig = [
  {
    key: "/all",
    iconType: "book",
    text: "全部"
  },
  {
    key: "/good",
    iconType: "like",
    text: "精华"
  }
]

class Home extends Component {
  state = {
    windowWidth: window.innerWidth
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({
        windowWidth: window.innerWidth
      })
    })
  }

  componentWillUnmount() {
    window.removeEventListener("resize")
  }

  renderTabs() {
    const { history, changeTab } = this.props

    const width = this.state.windowWidth - PAGE_PADDING * 2

    return (
      <Tabs
        className={styles.tabs}
        style={{ height: HOME_TABS_HEIGHT, width }}
        defaultActiveKey="/all"
        onTabClick={pathname => {
          history.push(pathname)
          changeTab()
        }}
      >
        {tabsConfig.map(config => {
          return (
            <TabPane
              tab={
                <span>
                  <Icon type={config.iconType} />
                  {config.text}
                </span>
              }
              key={config.key}
            />
          )
        })}
      </Tabs>
    )
  }

  renderContent() {
    return (
      <Switch>
        <Route path="/:tab(all|good)" component={List} />
      </Switch>
    )
  }

  render() {
    return (
      <Content
        style={{
          marginTop: HEADER_HEIGHT,
          marginBottom: FOOTER_HEIGHT,
          paddingLeft: PAGE_PADDING,
          paddingRight: PAGE_PADDING
        }}
      >
        {this.renderTabs()}
        {this.renderContent()}
      </Content>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = {
  changeTab: () => {
    return homeAction.home.changeTab()
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
)
