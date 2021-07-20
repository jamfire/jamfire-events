// import libs
import React, { useState, useEffect, Dispatch, SetStateAction } from "react"
import { DateTime, DurationObject } from "luxon"
import { useTranslation } from "react-i18next"
import {
  MarkdownRemarkFrontmatterEventSchedule,
  Maybe,
} from "../../gatsby/graphql-types"
import { TrackerProps } from "./tracker.d"
import cx from "classnames"

// import styles
import * as styles from "./tracker.module.scss"

export default ({ event }: TrackerProps) => {
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
    const currentDateTime: DateTime = DateTime.now()

    let output: string = ""

    // event has ended
    if (currentDateTime > endDateTime) {
      output = `<p className={${styles.italic}}">${t(
        "event.tracker.eventEnded"
      )}</p>`
    }

    // event has not started
    if (startDateTime > currentDateTime) {
      let diff: DurationObject = startDateTime
        .diff(currentDateTime, [
          "days",
          "hours",
          "minutes",
          "seconds",
          "milliseconds",
        ])
        .toObject()

      let html: string | null = null

      html = `<div>`
      html += `<div class="${styles.start}">${t("event.tracker.starts")}:</div>`
      html +=
        // @ts-expect-error
        diff.days > 0
          ? `<div class="${cx(styles.box, styles.time)}"><span class="${
              styles.number
            }">${diff.days}</span><span class="${styles.symbol}">${t(
              "event.tracker.day"
            ).charAt(0)}</span></div>`
          : ""
      html +=
        // @ts-expect-error
        diff.hours > 0
          ? `<div class="${cx(styles.box, styles.time)}"><span class="${
              styles.number
            }">${diff.hours}</span><span class="${styles.symbol}">${t(
              "event.tracker.hour"
            ).charAt(0)}</span></div>`
          : ""
      html +=
        // @ts-expect-error
        diff.minutes >= 0
          ? `<div class="${cx(styles.box, styles.time)}"><span class="${
              styles.number
            }">${diff.minutes}</span><span class="${styles.symbol}">${t(
              "event.tracker.minute"
            ).charAt(0)}</span></div>`
          : ""
      html +=
        // @ts-expect-error
        diff.seconds >= 0
          ? `<div class="${cx(styles.box, styles.time)}"><span class="${
              styles.number
            }">${diff.seconds}</span><span class="${styles.symbol}">${t(
              "event.tracker.second"
            ).charAt(0)}</span></div>`
          : ""
      html += `</div>`

      output = html
    }

    // event active
    eventSchedule.forEach((item: any, key: number) => {
      // get the next item if it exists
      // set to null if it does not exist
      let newKey: number = key + 1
      let nextDateTime: MarkdownRemarkFrontmatterEventSchedule | null =
        eventSchedule[newKey]
      if (typeof nextDateTime === `undefined`) {
        nextDateTime = null
      }

      let nextItemTitle: Maybe<string> | undefined = t("event.tracker.eventEnd")
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

        let html: string | null = null

        html = `<div>`
        html += `<div class="${cx(styles.box, styles.label)}">${t(
          "event.tracker.current"
        )}: ${item.title}</div>`
        html += `<div class="${cx(styles.box, styles.label)}">${t(
          "event.tracker.next"
        )}: ${nextItemTitle}</div>`
        html +=
          // @ts-expect-error
          diff.days > 0
            ? `<div class="${cx(styles.box, styles.time)}"><span class="${
                styles.number
              }">${diff.days}</span><span class="${styles.symbol}">${t(
                "event.tracker.day"
              ).charAt(0)}</span></div>`
            : ""
        html +=
          // @ts-expect-error
          diff.hours > 0
            ? `<div class="${cx(styles.box, styles.time)}"><span class="${
                styles.number
              }">${diff.hours}</span><span class="${styles.symbol}">${t(
                "event.tracker.hour"
              ).charAt(0)}</span></div>`
            : ""
        html +=
          // @ts-expect-error
          diff.minutes >= 0
            ? `<div class="${cx(styles.box, styles.time)}"><span class="${
                styles.number
              }">${diff.minutes}</span><span class="${styles.symbol}">${t(
                "event.tracker.minute"
              ).charAt(0)}</span></div>`
            : ""
        html +=
          // @ts-expect-error
          diff.seconds >= 0
            ? `<div class="${cx(styles.box, styles.time)}"><span class="${
                styles.number
              }">${diff.seconds}</span><span class="${styles.symbol}">${t(
                "event.tracker.second"
              ).charAt(0)}</span></div>`
            : ""
        html += `</div>`

        output = html
      }
    })

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
      <div dangerouslySetInnerHTML={{ __html: tracker }} />
    </div>
  )
}
