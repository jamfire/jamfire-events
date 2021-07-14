// import libs
import React from "react"
import { graphql } from "gatsby"
import { DataProps } from "../gatsby/dataProps"

// import components
import Event from "../components/Event"

export default ({ data, pageContext }: DataProps) => (
  <Event data={data} pageContext={pageContext} />
)

// page content query
export const eventQuery = graphql`
  query ($slug: String!, $locale: String!, $defaultLocale: String!) {
    event: eventByLocale(locale: $locale, slug: $slug) {
      ...EventFragment
    }
    defaultEvent: eventByLocale(locale: $defaultLocale, slug: $slug) {
      ...EventFragment
    }
    config: configByLocale(locale: $locale) {
      ...ConfigurationFragment
    }
    defaultConfig: configByLocale(locale: $locale) {
      ...ConfigurationFragment
    }
    cookies: cookiesByLocale(locale: $defaultLocale) {
      ...CookiesFragment
    }
    defaultCookies: cookiesByLocale(locale: $defaultLocale) {
      ...CookiesFragment
    }
  }
`
