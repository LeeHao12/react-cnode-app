import React from "react"
import { Spin } from "antd"
import { connect } from "react-redux"
import { homeAction } from "../../actions/home"
import {
  homeListIsLoadingSelector,
  homeListSelector
} from "../../selectors/home"
import styles from "./List.module.scss"
import { HOME_TABS_HEIGHT } from "../../styles/config"
import { Card } from "./Card"
import QueueAnim from "rc-queue-anim"

class RawList extends React.Component {
  componentDidMount() {
    this.props.mount()
  }

  render() {
    const { isLoading, list } = this.props

    if (isLoading) {
      return (
        <div
          className={styles.root}
          style={{ paddingTop: HOME_TABS_HEIGHT + 100 }}
        >
          <Spin />
        </div>
      )
    }

    return (
      <QueueAnim
        className={styles.root}
        style={{ paddingTop: HOME_TABS_HEIGHT }}
      >
        {list.map(data => {
          return <Card data={data} key={data.id} />
        })}
      </QueueAnim>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: homeListIsLoadingSelector(state),
    list: homeListSelector(state)
  }
}

const mapDispatchToProps = {
  mount: () => {
    return homeAction.home.mount()
  }
}

const List = connect(
  mapStateToProps,
  mapDispatchToProps
)(RawList)

export default List
