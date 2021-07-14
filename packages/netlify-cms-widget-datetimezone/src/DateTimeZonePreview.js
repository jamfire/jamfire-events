// import libs
import React from "react"
import { DateTime } from "luxon"

export default function DateTimeZonePreview({ value }) {
  // value is empty
  if (!value || value.datetime === null || value.timezone === null) {
    return <div>Enter a valid date, time, and timezone</div>
  }

  // get entry and local datetime
  const datetime = DateTime.fromISO(value.datetime, { zone: value.timezone })
  const datetimeLocal = DateTime.fromISO(value.datetime, {
    zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  })

  // invald date
  if (!datetime.isValid) {
    return <div>Enter a valid date, time, and timezone</div>
  }

  return (
    <p>
      Entry DateTime: {datetime.toLocaleString(DateTime.DATETIME_FULL)}
      <br />
      Local DateTime: {datetimeLocal.toLocaleString(DateTime.DATETIME_FULL)}
    </p>
  )
}
