// import libs
import React from "react"
import { localizeData } from "../../utils/localized-data"
import { DataProps } from "../../gatsby/data-props"
import { useTranslation } from "react-i18next"

// import components
import Layout from "../site-layout"
import { EventsWrapper, Events } from "./_styles"
import EventSummary from "./event-summary"
import Pagination from "../pagination"

export default ({ data, pageContext }: DataProps) => {
  const {
    events,
    defaultEvents,
    config,
    defaultConfig,
    cookies,
    defaultCookies,
  } = data

  const eventsData = localizeData(events, defaultEvents)
  const configData = localizeData(config, defaultConfig)
  const cookiesData = localizeData(cookies, defaultCookies)

  const { t } = useTranslation()

  return (
    <Layout
      title={t("navigation.allEvents")}
      locale={pageContext.locale}
      config={configData}
      cookies={cookiesData}
    >
      <EventsWrapper>
        <Events>
          {eventsData.edges.map((event: any, key: number) => (
            <EventSummary key={key} event={event} locale={pageContext.locale} />
          ))}
        </Events>
        <Pagination
          currentPage={pageContext.currentPage}
          numPages={pageContext.numPages}
          locale={pageContext.locale}
          path={`/events/`}
        />
      </EventsWrapper>
    </Layout>
  )
}
