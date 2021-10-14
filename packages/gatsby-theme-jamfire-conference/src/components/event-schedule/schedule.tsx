// import libs
import React from "react"
import { DateTime } from "luxon"
import { ScheduleProps, ScheduleItemProps } from "./schedule.d"
import { useTranslation } from "react-i18next"

// import components
import Seo from "../seo"
import { List, ListItem } from "../list"
import Missing from "../missing"

// import styles
import * as styles from "./schedule.module.scss"

export default ({ config, event, locale, featured }: ScheduleProps) => {
  const { title, eventSchedule, eventSettings } = event?.frontmatter || {}

  const { t } = useTranslation()

  if (!eventSchedule) return <Missing fontSize={4} />

  let pageTitle = ""
  if (featured) {
    pageTitle = eventSettings?.scheduleLabel || t("navigation.mainStage")
  } else {
    pageTitle = eventSettings?.scheduleLabel || t("navigation.schedule")
  }

  return (
    <List>
      <Seo
        config={config}
        activeTitle={`${pageTitle} | ${title}`}
        locale={locale}
      />
      {eventSchedule &&
        eventSchedule.map((item: any, key: number) => (
          <ScheduleItem key={key} item={item} locale={locale} />
        ))}
    </List>
  )
}

const ScheduleItem = ({ item, locale }: ScheduleItemProps) => {
  const dtStartTime = DateTime.fromISO(item?.startTime?.datetime)
    .setLocale(locale)
    .toLocaleString(DateTime.DATETIME_FULL)

  return (
    <ListItem>
      <div className={styles.details}>
        <div className={styles.time}>{dtStartTime}</div>
        <div className={styles.title}>{item.title}</div>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: item.description || "" }}
        />
      </div>
    </ListItem>
  )
}
