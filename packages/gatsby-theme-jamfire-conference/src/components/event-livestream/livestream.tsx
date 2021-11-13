// import libs
import React from "react"
import { LivestreamProps } from "./livestream.d"
import { useTranslation } from "react-i18next"

// import components
import { GatsbyImage } from "gatsby-plugin-image"
import Missing from "../missing"
import { YouTubeVideo } from "../video"

// import styles
import * as styles from "./livestream.module.scss"

export default ({ event }: LivestreamProps) => {
  const { eventGraphics, eventInformation } = event?.frontmatter || {}

  const { lobbyImage } = eventGraphics || {}

  const { livestreamUrl } = eventInformation || {}

  // locale settings
  const { i18n } = useTranslation()

  // video params
  let videoType = null
  let videoID = null

  // get video type and id
  if (livestreamUrl?.includes("youtube")) {
    videoType = "youtube"
    videoID = new URL(livestreamUrl).pathname.split("/")[2]
  }

  // livestreamUrl and lobbyImage both missing
  if (!livestreamUrl && !lobbyImage) return <Missing />

  // no livestream url but lobbyImage exists
  if (!livestreamUrl && lobbyImage) {
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

  if (videoType === "youtube" && videoID) {
    return <YouTubeVideo videoID={videoID} locale={i18n.language} />
  }

  return (
    <div className={styles.content} id="livestream">
      <div className={styles.livestream}>
        <iframe
          src={livestreamUrl || ""}
          allowFullScreen
          frameBorder="0"
          title={"Livestream"}
        />
      </div>
    </div>
  )
}
