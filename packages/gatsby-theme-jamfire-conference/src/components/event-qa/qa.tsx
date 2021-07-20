// import libs
import React from "react"
import { useTranslation } from "react-i18next"
import { QAProps, QAItem } from "./qa.d"
import cx from "classnames"

// import components
import Seo from "../seo"
import { List, ListItem } from "../list"
import Missing from "../missing"
import { FaQuestion, FaComment } from "react-icons/fa"

// import styles
import * as styles from "./qa.module.scss"

export default ({ config, event, locale }: QAProps) => {
  const { title, eventQA, eventSettings } = event?.frontmatter || {}

  if (!eventQA) return <Missing fontSize={4} />

  return (
    <List>
      <Seo
        config={config}
        activeTitle={`${eventSettings?.qaLabel} | ${title}`}
        locale={locale}
      />
      {eventQA &&
        eventQA.map((item: any, key: number) => (
          <QuestionAnswer key={key} item={item} />
        ))}
    </List>
  )
}

const QuestionAnswer = ({ item }: QAItem) => {
  const { t } = useTranslation()

  return (
    <ListItem>
      <div className={cx(styles.item, styles.question)}>
        <div className={cx(styles.circle, styles.primary)}>
          <FaQuestion title={t("event.qa.question")} />
        </div>
        <div className={styles.text}>{item.question}</div>
      </div>
      <div className={cx(styles.item, styles.answer)}>
        <div className={cx(styles.circle, styles.secondary)}>
          <FaComment title={t("event.qa.answer")} />
        </div>
        <div className={styles.text}>{item.answer}</div>
      </div>
    </ListItem>
  )
}
