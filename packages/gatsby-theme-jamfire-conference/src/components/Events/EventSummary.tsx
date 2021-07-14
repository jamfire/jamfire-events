// import libs
import React from "react"
import { DateTime } from "luxon"
import { DEFAULT_LOCALE } from "../../utils/constants"
import { EventSummaryProps } from "./_props"

// import components
import { Event, FeaturedImage, Background, Summary } from "./_styles"
import { Link, navigate } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"
import Missing from "../Site/Missing"

export default ({ event, locale }: EventSummaryProps) => {
  const {
    node: {
      frontmatter: {
        title,
        slug,
        eventGraphics: { lobbyImage },
        eventInformation: { startTime },
      },
    },
  } = event

  const eventPath: string =
    locale === DEFAULT_LOCALE ? `/event/${slug}/` : `/${locale}/event/${slug}/`

  const featuredImage: IGatsbyImageData =
    lobbyImage && lobbyImage.childImageSharp
      ? lobbyImage.childImageSharp.gatsbyImageData
      : null

  const dtStartTime = DateTime.fromISO(startTime.datetime)

  return (
    <Event className={`event-${slug}`} onClick={() => navigate(eventPath)}>
      <FeaturedImage>
        {featuredImage && <Background image={featuredImage} alt="" />}
        {!featuredImage && <Missing darker="true" />}
      </FeaturedImage>
      <Summary>
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
      </Summary>
    </Event>
  )
}
