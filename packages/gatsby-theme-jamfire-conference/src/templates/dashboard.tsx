// import libs
import React from "react"
import { graphql } from "gatsby"
import { DataProps } from "../gatsby/dataProps"

// import components
import Dashboard from "../components/Dashboard"

export default ({ data, pageContext }: DataProps) => (
  <Dashboard data={data} pageContext={pageContext} />
)

export const pageQuery = graphql`
  query ($locale: String!, $defaultLocale: String!) {
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
