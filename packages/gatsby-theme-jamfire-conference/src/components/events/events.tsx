// import libs
import React from "react"
import { localizeData, localizeEvents } from "../../utils/localized-data"
import { DataProps } from "../../gatsby/data-props"
import { useTranslation } from "react-i18next"

// import components
import Layout from "../site-layout"
import EventSummary from "./event-summary"
import Pagination from "../pagination"

// import styles
import * as styles from "./events.module.scss"

export default ({ data, pageContext }: DataProps) => {
  const {
    events,
    defaultEvents,
    config,
    defaultConfig,
    cookies,
    defaultCookies,
  } = data || {}

  const eventsData = localizeEvents(events, defaultEvents)
  const configData = localizeData(config, defaultConfig)
  const cookiesData = localizeData(cookies, defaultCookies)

  const { t } = useTranslation()

  const currentPage: number = pageContext.currentPage || 0
  const numPages: number = pageContext.numPages || 0

  return (
    <Layout
      title={t("navigation.allEvents")}
      locale={pageContext.locale}
      config={configData}
      cookies={cookiesData}
    >
      <div className={styles.wrapper}>
        <div className={styles.events}>
          {eventsData?.edges.map((event: any, key: number) => (
            <EventSummary key={key} event={event} locale={pageContext.locale} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          numPages={numPages}
          locale={pageContext.locale}
          path={`/events/`}
        />
      </div>
    </Layout>
  )
}
