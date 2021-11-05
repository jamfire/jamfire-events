// import libs
import React from "react"
import { graphql } from "gatsby"
import { DataProps } from "../gatsby/data-props"

// import components
import Page from "../components/page"

export default ({ data, pageContext }: DataProps) => (
  <Page data={data} pageContext={pageContext} />
)

export const pageQuery = graphql`
  query ($slug: String!, $locale: String!, $defaultLocale: String!) {
    page: pageByLocale(locale: $locale, slug: $slug) {
      ...PageFragment
    }
    defaultPage: pageByLocale(locale: $defaultLocale, slug: $slug) {
      ...PageFragment
    }
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
