import React, { Component } from "react"
import { Layout, Modal, Input, notification } from "antd"
import Texty from "rc-texty"
import styles from "./index.module.scss"
import { HEADER_HEIGHT } from "../../styles/config"
import { history } from "../.."
import { connect } from "react-redux"
import { tokenAction } from "../../actions"

const { Header: LayoutHeader } = Layout

function animation(e) {
  switch (e.index) {
    case 0:
      return {
        rotate: 90,
        opacity: 0,
        y: -60
      }
    case 10:
    case 1:
      return {
        y: -60,
        x: -10,
        opacity: 0
      }
    case 9:
    case 2:
      return {
        y: -60,
        x: 20,
        opacity: 0
      }
    case 3:
      return {
        y: 60,
        opacity: 0
      }
    case 8:
    case 4:
      return {
        x: 30,
        opacity: 0
      }
    case 5:
      return {
        enter: [
          {
            scale: 2,
            opacity: 0,
            type: "set"
          },
          { scale: 1.2, opacity: 1, duration: 300 },
          { scale: 0.9, duration: 200 },
          { scale: 1.05, duration: 150 },
          { scale: 1, duration: 100 }
        ],
        leave: {
          opacity: 0,
          scale: 0
        }
      }
    case 6:
      return {
        scale: 0.8,
        x: 30,
        y: -10,
        opacity: 0
      }
    case 7:
      return {
        scale: 0.8,
        x: 30,
        y: 10,
        opacity: 0
      }
    default:
      return {
        opacity: 0
      }
  }
}

class Header extends Component {
  state = {
    showLoginDialog: false,
    showAboutMeDialog: false,
    token: ""
  }

  componentDidMount() {
    // notification.open({
    //   message: "welcome",
    //   description:
    //     "欢迎来访 😀，本客户端使用 React 全家桶，不定期更新，欢迎 star."
    // })
  }

  componentWillReceiveProps() {
    // error 无 -> 有
  }

  renderOptions() {
    return (
      <div className={styles.options}>
        <div
          className={styles.item}
          onClick={() => {
            this.setState({
              showLoginDialog: true
            })
          }}
        >
          Login
        </div>

        <div
          className={styles.item}
          onClick={() => {
            this.setState({
              showAboutMeDialog: true
            })
          }}
        >
          AboutMe
        </div>
      </div>
    )
  }

  render() {
    const style = {
      height: HEADER_HEIGHT
    }

    return (
      <LayoutHeader className={styles.root} style={style}>
        <div
          className={styles.logo}
          onClick={() => {
            history.push("/")
          }}
        >
          <Texty enter={animation} leave={animation}>
            CNODE COMMUNITY
          </Texty>
        </div>

        {this.renderOptions()}

        <Modal
          footer={null}
          title="AboutMe"
          visible={this.state.showAboutMeDialog}
          onCancel={() => {
            this.setState({
              showAboutMeDialog: false
            })
          }}
        >
          <div>北京前端一枚</div>
          <div>e-mail：lee_haoo@163.com</div>
          <div>
            github：
            <a href="https://github.com/LeeHao92">
              https://github.com/LeeHao92
            </a>
          </div>
        </Modal>

        <Modal
          okButtonDisabled
          title="Login"
          visible={this.state.showLoginDialog}
          onOk={() => {
            this.props.login(this.state.token)
          }}
          onCancel={() => {
            this.setState({
              showLoginDialog: false
            })
          }}
        >
          <Input
            placeholder="请输入 token"
            value={this.state.token}
            onChange={e => {
              this.setState({ token: e.target.value })
            }}
          />
          <a href="https://cnodejs.org/setting"> 获取 token</a>
        </Modal>
      </LayoutHeader>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = {
  login: token => {
    return tokenAction.token.login(token)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
