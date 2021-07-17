// import libs
import React from "react"
import { graphql, PageProps } from "gatsby"

// import components
import ErrorPage from "../components/404"

export default ({ data, pageContext }: PageProps) => (
  <ErrorPage data={data} pageContext={pageContext} />
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
