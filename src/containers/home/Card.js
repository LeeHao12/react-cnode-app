import React from "react"
import styles from "./Card.module.scss"
import { Tag } from "antd"
import moment from "moment"

export class Card extends React.Component {
  render() {
    const {
      author,
      title,
      content,
      reply_count,
      visit_count,
      last_reply_at,
      good,
      top
    } = this.props.data

    return (
      <div className={styles.root}>
        <div className={styles.author}>
          <img src={author.avatar_url} alt="avatar" className={styles.avatar} />
          <span className={styles.loginname}>{author.loginname}</span>
        </div>

        <div className={styles.cardContent}>
          <span className={styles.title}>{title}</span>
          <div className={styles.content}>{content.substr(0, 250)}</div>
          <div className={styles.reply}>
            <span className={styles.item}>
              最后回复：{moment(last_reply_at).format("YYYY-MM-DD hh:mm:ss")}
            </span>
            <span className={styles.item}>回复：{reply_count}</span>
            <span className={styles.item}>浏览：{visit_count}</span>
          </div>
        </div>

        <div className={styles.tag}>
          {good && <Tag color="magenta">精品</Tag>}
          {top && <Tag color="volcano">置顶</Tag>}
          <span className={styles.visit} />
        </div>
      </div>
    )
  }
}
