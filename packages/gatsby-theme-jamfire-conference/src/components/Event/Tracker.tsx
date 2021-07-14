// import libs
import React, { useState, useEffect, Dispatch, SetStateAction } from "react"
import { DateTime, DurationObject } from "luxon"
import { useTranslation } from "react-i18next"
import { MarkdownRemarkFrontmatterEventSchedule } from "../../gatsby/graphqlTypes"
import { TrackerProps } from "./_props"

// import components
import { Tracker } from "./_styles"

export default ({ event }: TrackerProps) => {
  const {
    frontmatter: {
      eventSchedule,
      eventInformation: { startTime, endTime },
    },
  } = event || {}

  if (!eventSchedule) {
    return <></>
  }

  // message state
  const [tracker, setTracker]: [string, Dispatch<SetStateAction<string>>] =
    useState(null)

  // datetimes
  const SDT: DateTime = DateTime.fromISO(startTime.datetime)
  const EDT: DateTime = DateTime.fromISO(endTime.datetime)

  const { t } = useTranslation()

  const setDisplay: () => string = () => {
    const CDT: DateTime = DateTime.now()

    let output: string | null = null

    // event has ended
    if (CDT > EDT) {
      output = `<p class="italic">${t("event.tracker.eventEnded")}</p>`
    }

    // event has not started
    if (SDT > CDT) {
      let diff: DurationObject = SDT.diff(CDT, [
        "days",
        "hours",
        "minutes",
        "seconds",
        "milliseconds",
      ]).toObject()

      let html: string | null = null

      html = `<div>`
      html += `<div class="start">${t("event.tracker.starts")}:</div>`
      html +=
        diff.days > 0
          ? `<div class="box time"><span class="number">${
              diff.days
            }</span><span class="symbol">${t("event.tracker.day").charAt(
              0
            )}</span></div>`
          : ""
      html +=
        diff.hours > 0
          ? `<div class="box time"><span class="number">${
              diff.hours
            }</span><span class="symbol">${t("event.tracker.hour").charAt(
              0
            )}</span></div>`
          : ""
      html +=
        diff.minutes >= 0
          ? `<div class="box time"><span class="number">${
              diff.minutes
            }</span><span class="symbol">${t("event.tracker.minute").charAt(
              0
            )}</span></div>`
          : ""
      html +=
        diff.seconds >= 0
          ? `<div class="box time"><span class="number">${
              diff.seconds
            }</span><span class="symbol">${t("event.tracker.second").charAt(
              0
            )}</span></div>`
          : ""
      html += `</div>`

      output = html
    }

    // event active
    eventSchedule.forEach((item: any, key: number) => {
      // get the next item if it exists
      // set to null if it does not exist
      let newKey: number = key + 1
      let nextDateTime: MarkdownRemarkFrontmatterEventSchedule =
        eventSchedule[newKey]
      if (typeof nextDateTime === `undefined`) {
        nextDateTime = null
      }

      let nextItemTitle: string = t("event.tracker.eventEnd")
      if (nextDateTime) {
        nextItemTitle = eventSchedule[newKey].title
      }

      // format next datetime with luxon
      let NDT: DateTime | null = null
      if (nextDateTime) {
        NDT = DateTime.fromISO(eventSchedule[newKey].startTime.datetime)
      }
      // set NDT to close of event if no next item
      else {
        NDT = EDT
      }

      // current item datetime
      let IDT: DateTime = DateTime.fromISO(item.startTime.datetime)

      if (IDT < CDT && CDT < NDT) {
        let diff: DurationObject = NDT.diff(CDT, [
          "days",
          "hours",
          "minutes",
          "seconds",
          "milliseconds",
        ]).toObject()

        let html: string | null = null

        html = `<div>`
        html += `<div class="box label">${t("event.tracker.current")}: ${
          item.title
        }</div>`
        html += `<div class="box label">${t(
          "event.tracker.next"
        )}: ${nextItemTitle}</div>`
        html +=
          diff.days > 0
            ? `<div class="box time"><span class="number">${
                diff.days
              }</span><span class="symbol">${t("event.tracker.day").charAt(
                0
              )}</span></div>`
            : ""
        html +=
          diff.hours > 0
            ? `<div class="box time"><span class="number">${
                diff.hours
              }</span><span class="symbol">${t("event.tracker.hour").charAt(
                0
              )}</span></div>`
            : ""
        html +=
          diff.minutes >= 0
            ? `<div class="box time"><span class="number">${
                diff.minutes
              }</span><span class="symbol">${t("event.tracker.minute").charAt(
                0
              )}</span></div>`
            : ""
        html +=
          diff.seconds >= 0
            ? `<div class="box time"><span class="number">${
                diff.seconds
              }</span><span class="symbol">${t("event.tracker.second").charAt(
                0
              )}</span></div>`
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
    <Tracker>
      <div dangerouslySetInnerHTML={{ __html: tracker }} />
    </Tracker>
  )
}
