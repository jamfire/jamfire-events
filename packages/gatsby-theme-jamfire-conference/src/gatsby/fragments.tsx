import { graphql } from "gatsby"

// page fragment
export const PageFragment = graphql`
  fragment PageFragment on MarkdownRemark {
    frontmatter {
      title
      pageGraphics {
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 900, layout: CONSTRAINED)
          }
        }
      }
    }
    fields {
      locale
    }
    html
  }
`

// event fragment
export const EventFragment = graphql`
  fragment EventFragment on MarkdownRemark {
    id
    fields {
      locale
    }
    frontmatter {
      title
      slug
      eventInformation {
        livestreamUrl
        startTime {
          datetime
          timezone
        }
        endTime {
          datetime
          timezone
        }
      }
      eventSchedule {
        title
        startTime {
          datetime
          timezone
        }
        description
      }
      eventGraphics {
        favicon {
          childImageSharp {
            gatsbyImageData(height: 50, placeholder: NONE, layout: FIXED)
          }
        }
        headerLogo {
          childImageSharp {
            gatsbyImageData(height: 50, placeholder: NONE, layout: FIXED)
          }
        }
        lobbyImage {
          childImageSharp {
            gatsbyImageData(width: 960, layout: CONSTRAINED)
          }
        }
      }
      eventBranding {
        primaryColor
        primaryColorHover
      }
      eventRooms {
        slug
        title
        description
        roomLocale
        roomType
        image {
          childImageSharp {
            gatsbyImageData(height: 40, width: 40, layout: FIXED)
          }
        }
      }
      eventQA {
        answer
        question
      }
      eventSettings {
        allEvents
        allEventsLabel
        mainStage
        mainStageLabel
        mainStageFeature
        chat
        chatLabel
        schedule
        scheduleLabel
        rooms
        roomsLabel
        qa
        qaLabel
        map
        mapLabel
      }
    }
    html
  }
`

// events fragment
export const EventsFragment = graphql`
  fragment EventsFragment on MarkdownRemark {
    id
    fields {
      locale
    }
    frontmatter {
      title
      slug
      eventInformation {
        startTime {
          datetime
          timezone
        }
        endTime {
          datetime
          timezone
        }
      }
      eventGraphics {
        lobbyImage {
          childImageSharp {
            gatsbyImageData(width: 720, layout: CONSTRAINED)
          }
        }
      }
      eventBranding {
        primaryColor
        primaryColorHover
      }
    }
  }
`

// branding fragment
export const ConfigurationFragment = graphql`
  fragment ConfigurationFragment on MarkdownRemark {
    frontmatter {
      title
      description
      siteUrl
      colors {
        primaryColor
        primaryColorHover
        darkModeOnColor
        darkModeOffColor
      }
      graphics {
        logo {
          childImageSharp {
            gatsbyImageData(height: 50, placeholder: NONE, layout: FIXED)
          }
        }
        favicon {
          childImageSharp {
            gatsbyImageData(height: 50, placeholder: BLURRED, layout: FIXED)
          }
        }
      }
      socialLogin {
        facebook
        google
        twitter
        github
      }
    }
  }
`

// cookies fragment
export const CookiesFragment = graphql`
  fragment CookiesFragment on MarkdownRemark {
    frontmatter {
      cookieNotification {
        title
        content
      }
      necessaryCookies {
        title
        content
      }
      analyticsCookies {
        enabled
        title
        content
      }
    }
  }
`
