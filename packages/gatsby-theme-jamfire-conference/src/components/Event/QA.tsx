// import libs
import React from "react"
import { useTranslation } from "react-i18next"
import { QAProps } from "./_props"

// import components
import Seo from "../Site/Seo"
import { List, ListItem } from "../Site/List"
import Missing from "../Site/Missing"
import { QAItem, QACircle } from "./_styles"
import { FaQuestion, FaComment } from "react-icons/fa"

export default ({ config, event }: QAProps) => {
  const {
    frontmatter: { title, eventQA, eventSettings },
  } = event

  if (!eventQA) return <Missing fontSize={4} />

  return (
    <List>
      <Seo
        config={config}
        activeTitle={`${eventSettings.qaLabel} | ${title}`}
      />
      {eventQA &&
        eventQA.map((item: any, key: number) => (
          <QuestionAnswer key={key} item={item} />
        ))}
    </List>
  )
}

const QuestionAnswer = ({ item }) => {
  const { t } = useTranslation()

  return (
    <ListItem>
      <QAItem className="question">
        <QACircle className="primary">
          <FaQuestion title={t("event.qa.question")} />
        </QACircle>
        <div className="text">{item.question}</div>
      </QAItem>
      <QAItem className="answer">
        <QACircle className="secondary">
          <FaComment title={t("event.qa.answer")} />
        </QACircle>
        <div className="text">{item.answer}</div>
      </QAItem>
    </ListItem>
  )
}
