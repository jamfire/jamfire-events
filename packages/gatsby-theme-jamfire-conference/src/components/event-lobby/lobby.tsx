// import libs
import React from "react"
import { DateTime } from "luxon"
import { useTranslation } from "react-i18next"
import { LobbyProps } from "./lobby.d"

// import components
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../seo"
import Missing from "../missing"

// import styles
import * as styles from "./lobby.module.scss"

export default ({ config, event, locale }: LobbyProps) => {
  const { frontmatter, html } = event || {}

  const { title, eventInformation, eventGraphics } = frontmatter || {}

  const { startTime, endTime } = eventInformation || {}

  const { lobbyImage, favicon } = eventGraphics || {}

  const featuredImage =
    lobbyImage && lobbyImage.childImageSharp
      ? lobbyImage.childImageSharp.gatsbyImageData
      : null

  const { t } = useTranslation()

  const dtStartTime = DateTime.fromISO(startTime?.datetime)
    .setLocale(locale)
    .toLocaleString(DateTime.DATETIME_FULL)

  const dtEndTime = DateTime.fromISO(endTime?.datetime)
    .setLocale(locale)
    .toLocaleString(DateTime.DATETIME_FULL)

  return (
    <div className={styles.event}>
      <Seo
        activeTitle={`${title}`}
        config={config}
        locale={locale}
        activeFavicon={favicon}
      />
      <div className={styles.content} tabIndex={0} style={{ padding: "2rem" }}>
        <h1>{title}</h1>
        <ul className={styles.eventTimes}>
          <li>
            <strong>{t("event.lobby.starts")}:</strong> {dtStartTime}
          </li>
          <li>
            <strong>{t("event.lobby.ends")}:</strong> {dtEndTime}
          </li>
        </ul>
        <div dangerouslySetInnerHTML={{ __html: html || "" }} />
      </div>

      <div className={styles.featuredImage}>
        {featuredImage && (
          <GatsbyImage
            className={styles.gatsbyImageWrapper}
            image={featuredImage}
            alt=""
          />
        )}
        {!featuredImage && <Missing />}
      </div>
    </div>
  )
}
