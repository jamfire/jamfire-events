// import libs
import React from "react"
import { graphql } from "gatsby"
import { DataProps } from "../gatsby/dataProps"

// import components
import Events from "../components/Events"

export default ({ data, pageContext }: DataProps) => (
  <Events data={data} pageContext={pageContext} />
)

export const eventsQuery = graphql`
  query EventsQuery(
    $skip: Int!
    $limit: Int!
    $locale: String!
    $defaultLocale: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    events: allMarkdownRemark(
      filter: {
        fields: { locale: { eq: $locale }, templateKey: { eq: "event" } }
      }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          ...EventsFragment
        }
      }
    }
    defaultEvents: allMarkdownRemark(
      filter: {
        fields: { locale: { eq: $defaultLocale }, templateKey: { eq: "event" } }
      }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          ...EventsFragment
        }
      }
    }
    config: configByLocale(locale: $locale) {
      ...ConfigurationFragment
    }
    cookies: cookiesByLocale(locale: $locale) {
      ...CookiesFragment
    }
  }
`
