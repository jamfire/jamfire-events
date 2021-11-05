// import libs
import React from "react"
import { graphql } from "gatsby"
import { DataProps } from "../gatsby/data-props"

// import components
import ErrorPage from "../components/404"

export default ({ data, pageContext }: DataProps) => (
  <ErrorPage data={data} pageContext={pageContext} />
)

export const pageQuery = graphql`
  query ($locale: String!, $defaultLocale: String!) {
    config: configByLocale(locale: $locale) {
      ...ConfigurationFragment
    }
    defaultConfig: configByLocale(locale: $defaultLocale) {
      ...ConfigurationFragment
    }
    cookies: cookiesByLocale(locale: $locale) {
      ...CookiesFragment
    }
    defaultCookies: cookiesByLocale(locale: $defaultLocale) {
      ...CookiesFragment
    }
  }
`
