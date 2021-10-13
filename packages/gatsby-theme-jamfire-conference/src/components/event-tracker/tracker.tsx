// import libs
import React, { useState, useEffect, Dispatch, SetStateAction } from "react"
import { DateTime, Interval, DurationObject } from "luxon"
import { useTranslation } from "react-i18next"
import {
  MarkdownRemarkFrontmatterEventSchedule,
  Maybe,
} from "../../gatsby/graphql-types"
import { TrackerProps } from "./tracker.d"
import cx from "classnames"

// import styles
import * as styles from "./tracker.module.scss"

export default ({ event, locale }: TrackerProps) => {
  const { eventSchedule, eventInformation } = event.frontmatter || {}

  const { startTime, endTime } = eventInformation || {}

  if (!eventSchedule) {
    return null
  }

  // message state
  const [tracker, setTracker]: [string, Dispatch<SetStateAction<string>>] =
    useState("")

  // datetimes
  const startDateTime: DateTime = DateTime.fromISO(startTime?.datetime)
  const endDateTime: DateTime = DateTime.fromISO(endTime?.datetime)

  const { t } = useTranslation()

  const setDisplay: () => string = () => {
    let output: string = ""

    const currentDateTime: DateTime = DateTime.now()
    const dateRange = Interval.fromDateTimes(startDateTime, endDateTime)
    const isAfter = dateRange.isBefore(currentDateTime)
    const isBefore = dateRange.isAfter(currentDateTime)
    const isDuring = dateRange.contains(currentDateTime)

    /** Event has ended */
    if (isAfter) {
      output = `<div class="${cx(styles.bubble, styles.italic)}">${t(
        "event.tracker.eventEnded"
      )}</div>`
    }

    /** Event has not started */
    if (isBefore) {
      output = `<div class="${cx(styles.bubble, styles.italic)}">${t(
        "event.tracker.starts"
      )} ${startDateTime.toRelative({
        style: "long",
        locale: locale,
      })}</div>`
    }

    /** Event is active */
    if (isDuring) {
      eventSchedule.forEach((item: any, key: number) => {
        // get the next item if it exists
        // set to null if it does not exist
        let newKey: number = key + 1
        let nextDateTime: MarkdownRemarkFrontmatterEventSchedule | null =
          eventSchedule[newKey]
        if (typeof nextDateTime === `undefined`) {
          nextDateTime = null
        }

        let nextItemTitle: Maybe<string> | undefined = t(
          "event.tracker.eventEnd"
        )
        if (nextDateTime) {
          nextItemTitle = eventSchedule[newKey]?.title
        }

        // format next datetime with luxon
        let NDT: DateTime | null = null
        if (nextDateTime) {
          NDT = DateTime.fromISO(eventSchedule[newKey]?.startTime?.datetime)
        }
        // set NDT to close of event if no next item
        else {
          NDT = endDateTime
        }

        // current item datetime
        let IDT: DateTime = DateTime.fromISO(item.startTime.datetime)

        if (IDT < currentDateTime && currentDateTime < NDT) {
          let diff: DurationObject = NDT.diff(currentDateTime, [
            "days",
            "hours",
            "minutes",
            "seconds",
            "milliseconds",
          ]).toObject()

          let html: string = ""

          html = `<div class="${cx(styles.bubble, styles.italic)}">${t(
            "event.tracker.current"
          )}: ${item.title}</div>`
          html += `<div class="${cx(styles.bubble, styles.italic)}">${t(
            "event.tracker.next"
          )}: ${nextItemTitle} ${NDT.toRelative({ locale: locale })}</div>`

          output = html
        }
      })
    }

    return output
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const html: string = setDisplay()
      setTracker(html)
    }, 1000)

    return () => clearInterval(timer)
  })

  return (
    <div className={styles.tracker}>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: tracker }}
      />
    </div>
  )
}
