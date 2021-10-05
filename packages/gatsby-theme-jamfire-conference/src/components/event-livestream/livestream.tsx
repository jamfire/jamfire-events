// import libs
import React, { useEffect, useState } from "react"
import { DateTime } from "luxon"
import { LivestreamProps } from "./livestream.d"

// import components
import { GatsbyImage } from "gatsby-plugin-image"
import Missing from "../missing"

// import styles
import * as styles from "./livestream.module.scss"

export default ({ event, locale }: LivestreamProps) => {
  const [timed, setTimed] = useState(false)
  const [timeDiff, setTimeDiff] = useState("")

  const { eventGraphics, eventInformation } = event?.frontmatter || {}

  const { lobbyImage } = eventGraphics || {}

  const { videoUrl, presentationMode, startTime } = eventInformation || {}

  const dtStartTime = DateTime.fromISO(startTime?.datetime).setLocale(locale)

  const timeOffset = () => {
    const diff = dtStartTime.diffNow().toFormat("dd:hh:mm:ss")
    return diff
  }

  useEffect(() => {
    let interval: any = null
    if (presentationMode === "timed") {
      interval = setInterval(() => {
        const diff = timeOffset()
        setTimeDiff(diff)
      }, 1000)
    } else {
      clearInterval(interval)
    }
    timeOffset()
    return () => {
      clearInterval(interval)
    }
  }, [])

  // videoUrl and lobbyImage both missing
  if (!videoUrl && !lobbyImage) return <Missing />

  // no livestream url but lobbyImage exists
  if (!videoUrl && lobbyImage) {
    return (
      <div className={styles.featuredImage}>
        <GatsbyImage
          className={styles.gatsbyImageWrapper}
          image={lobbyImage?.childImageSharp?.gatsbyImageData}
          alt=""
        />
      </div>
    )
  }

  if (presentationMode === "timed") {
    return (
      <div>
        <div className={styles.content} id="livestream">
          <div className={styles.livestream}>
            <iframe
              src={videoUrl || ""}
              allowFullScreen
              frameBorder="0"
              title={"Livestream"}
            />
          </div>
          <p>This video will be available in {timeDiff}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.content} id="livestream">
      <div className={styles.livestream}>
        <iframe
          src={videoUrl || ""}
          allowFullScreen
          frameBorder="0"
          title={"Livestream"}
        />
      </div>
    </div>
  )
}
