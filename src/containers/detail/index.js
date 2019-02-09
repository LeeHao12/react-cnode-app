import React, { Component } from "react"
import { connect } from "react-redux"
import { Layout, Spin, Icon } from "antd"
import { FOOTER_HEIGHT, HEADER_HEIGHT, PAGE_PADDING } from "../../styles/config"
import { detailAction } from "../../actions"
import { detailDataSelector, detailIsLoadingSelector } from "../../selectors"
import styles from "./index.module.scss"
import cx from "classnames"
import moment from "moment"
import showdown from "showdown"
import QueueAnim from "rc-queue-anim"

const { Content } = Layout
const converter = new showdown.Converter()

class Detail extends Component {
  componentDidMount() {
    this.props.mount()
  }

  renderReply() {
    const {
      data: { replies, reply_count }
    } = this.props
    return (
      <div className={styles.replyContainer}>
        <div className={styles.replyCount}>回复数：{reply_count}</div>

        {replies.map(item => {
          const html = converter.makeHtml(item.content)

          return (
            <div key={item.id} className={styles.item}>
              <div className={styles.author}>
                <div className={styles.authorInfo}>
                  <img
                    src={item.author.avatar_url}
                    alt="avatar"
                    className={styles.avatar}
                  />
                  <div className={styles.date}>
                    <span>{item.author.loginname}</span>
                    <span>
                      {moment(item.create_at).format("YYYY年MM月DD日 hh:mm:ss")}
                    </span>
                  </div>
                </div>

                {/* 按钮 */}
                <div className={styles.option}>
                  <div className={styles.like}>
                    <span>{item.ups.length}</span>
                    <Icon type="like" className={styles.icon} />
                  </div>

                  <div>
                    <Icon type="message" />
                  </div>
                </div>
              </div>

              <article
                className={cx("markdown-body", styles.replyArticle)}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          )
        })}
      </div>
    )
  }

  renderContent() {
    const { data } = this.props
    if (!data) {
      return null
    }
    const { title } = data
    const html = converter.makeHtml(data.content)

    return (
      <QueueAnim>
        <div className={styles.content} key="content">
          <div className={styles.title}>{title}</div>

          <div className={styles.info}>
            <span>作者：{data.author.loginname}</span>
            <span>
              发布时间：
              {moment(data.create_at).format("YYYY年MM月DD日 hh:mm:ss")}
            </span>
          </div>

          <article
            className={cx("markdown-body", styles.contentArticle)}
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {this.renderReply()}
        </div>
      </QueueAnim>
    )
  }

  render() {
    const { data, loading } = this.props

    if (loading) {
      return (
        <div className={styles.loading}>
          <Spin />
        </div>
      )
    }

    if (!data) {
      return null
    }

    return (
      <Content
        className={styles.root}
        style={{
          marginTop: HEADER_HEIGHT,
          marginBottom: FOOTER_HEIGHT,
          paddingLeft: PAGE_PADDING,
          paddingRight: PAGE_PADDING
        }}
      >
        {this.renderContent()}
      </Content>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: detailDataSelector(state),
    loading: detailIsLoadingSelector(state)
  }
}

const mapDispatchToProps = {
  mount: () => {
    return detailAction.detail.mount()
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)
