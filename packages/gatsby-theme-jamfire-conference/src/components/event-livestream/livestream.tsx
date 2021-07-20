// import libs
import React from "react"
import { LivestreamProps } from "./livestream.d"

// import components
import { GatsbyImage } from "gatsby-plugin-image"
import Missing from "../missing"

// import styles
import * as styles from "./livestream.module.scss"

export default ({ event }: LivestreamProps) => {
  const { eventGraphics, eventInformation } = event.frontmatter || {}

  const { lobbyImage } = eventGraphics || {}

  const { livestreamUrl } = eventInformation || {}

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
