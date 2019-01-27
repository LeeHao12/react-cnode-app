import React from "react"
import { Button } from "antd"
import { withRouter } from "react-router-dom"

class RawList extends React.Component {
  render() {
    return (
      <div>
        <Button
          onClick={() => {
            this.props.history.replace("/haha")
          }}
        />
      </div>
    )
  }
}

const List2 = withRouter(RawList)

export default List2
