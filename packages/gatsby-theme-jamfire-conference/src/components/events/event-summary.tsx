// import libs
import React from "react"
import { DateTime } from "luxon"
import { DEFAULT_LOCALE } from "../../utils/constants"
import { EventSummaryProps } from "./events.d"
import cx from "classnames"

// import components
import { GatsbyImage } from "gatsby-plugin-image"
import { Link, navigate } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"
import Missing from "../missing"

// import styles
import * as styles from "./event-summary.module.scss"

export default ({ event, locale }: EventSummaryProps) => {
  const {
    node: {
      frontmatter
    },
  } = event

  const {
    title,
    slug,
    eventGraphics,
    eventInformation,
  } = frontmatter || {}

  const {
    lobbyImage
  } = eventGraphics || {}

  const {
    startTime
  } = eventInformation || {}

  const eventPath: string =
    locale === DEFAULT_LOCALE ? `/event/${slug}/` : `/${locale}/event/${slug}/`

  const featuredImage: IGatsbyImageData =
    lobbyImage && lobbyImage.childImageSharp
      ? lobbyImage.childImageSharp.gatsbyImageData
      : null

  const dtStartTime = DateTime.fromISO(startTime?.datetime)

  return (
    <div className={cx(styles.event, `event-${slug}`)} onClick={() => navigate(eventPath)}>
      <div className={styles.featuredImage}>
        {featuredImage && <GatsbyImage image={featuredImage} alt="" className={styles.background} />}
        {!featuredImage && <Missing darker="true" />}
      </div>
      <div className={styles.summary}>
        <h2>
          <Link to={eventPath}>{title}</Link>
        </h2>
        <ul>
          <li className="start">
            {dtStartTime
              .setLocale(locale)
              .toLocaleString(DateTime.DATETIME_FULL)}
          </li>
        </ul>
      </div>
    </div>
  )
}
