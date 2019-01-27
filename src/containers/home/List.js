import React from "react"
import { Spin } from "antd"
import { connect } from "react-redux"
import { homeAction } from "../../actions/home"
import { homeListIsLoadingSelector } from "../../selectors/home"

class RawList extends React.Component {
  componentDidMount() {
    const { mount, match } = this.props
    mount(match.params.tab)
  }

  render() {
    const { match, isLoading } = this.props

    return (
      <div>
        {match.params.tab}
        {isLoading && <Spin />}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: homeListIsLoadingSelector(state)
  }
}

const mapDispatchToProps = {
  mount: tab => {
    return homeAction.home.mount(tab)
  }
}

const List = connect(
  mapStateToProps,
  mapDispatchToProps
)(RawList)

export default List
