// import libs
import React from "react"
import { DateTime } from "luxon"
import { useTranslation } from "react-i18next"
import { ClientProps } from "./_props"

// import components
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../site/seo"
import Missing from "../site/missing"
import { Event, Content, FeaturedImage } from "./_styles"

export default ({ config, event, locale }: ClientProps) => {
  const {
    frontmatter: {
      title,
      eventInformation: { startTime, endTime },
      eventGraphics: { lobbyImage, favicon },
    },
    html,
  } = event

  const featuredImage =
    lobbyImage && lobbyImage.childImageSharp
      ? lobbyImage.childImageSharp.gatsbyImageData
      : null

  const { t } = useTranslation()

  const dtStartTime = DateTime.fromISO(startTime.datetime)
    .setLocale(locale)
    .toLocaleString(DateTime.DATETIME_FULL)

  const dtEndTime = DateTime.fromISO(endTime.datetime)
    .setLocale(locale)
    .toLocaleString(DateTime.DATETIME_FULL)

  return (
    <Event>
      <Seo
        activeTitle={`${title}`}
        config={config}
        locale={locale}
        activeFavicon={favicon}
      />
      <Content padding={true} tabIndex={0}>
        <h1>{title}</h1>
        <ul className="event-times">
          <li>
            <strong>{t("event.lobby.starts")}:</strong> {dtStartTime}
          </li>
          <li>
            <strong>{t("event.lobby.ends")}:</strong> {dtEndTime}
          </li>
        </ul>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Content>

      <FeaturedImage>
        {featuredImage && <GatsbyImage image={featuredImage} alt="" />}
        {!featuredImage && <Missing />}
      </FeaturedImage>
    </Event>
  )
}
