// import libs
import React from "react"
import { DateTime } from "luxon"
import { ClientProps } from "./_props"

// import components
import Seo from "../Site/Seo"
import { List, ListItem } from "../Site/List"
import Missing from "../Site/Missing"
import { ScheduleItemDetails } from "./_styles"

export default ({ config, event, locale }: ClientProps) => {
  const {
    frontmatter: { title, eventSchedule, eventSettings },
  } = event

  if (!eventSchedule) return <Missing fontSize={4} />

  return (
    <List>
      <Seo
        config={config}
        activeTitle={`${eventSettings.mainStageLabel} | ${title}`}
      />
      {eventSchedule &&
        eventSchedule.map((item: any, key: number) => (
          <ScheduleItem key={key} item={item} locale={locale} />
        ))}
    </List>
  )
}

const ScheduleItem = ({ item, locale }) => {
  const dtStartTime = DateTime.fromISO(item.startTime.datetime)
    .setLocale(locale)
    .toLocaleString(DateTime.DATETIME_FULL)

  return (
    <ListItem>
      <ScheduleItemDetails>
        <div className="time">{dtStartTime}</div>
        <div className="title">{item.title}</div>
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
      </ScheduleItemDetails>
    </ListItem>
  )
}
