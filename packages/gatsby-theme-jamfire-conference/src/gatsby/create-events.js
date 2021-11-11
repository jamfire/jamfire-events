// import libs
const path = require("path")

// get constants
const defaultLocale = process.env.GATSBY_DEFAULT_LOCALE || "en"
const locales = process.env.GATSBY_LOCALES
  ? process.env.GATSBY_LOCALES.split(",")
  : ["en"]

module.exports = async ({ actions, graphql, reporter }) => {
  // limit per query
  const PER_PAGE = 12

  // graphql query
  const GET_EVENTS = `
  query GET_EVENTS($limit: Int, $skip: Int, $locale: String) {
    events:allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: {eq: "event"}
        }
        fields: {
          locale: {eq: $locale}
        }
      }, 
      limit: $limit, 
      skip: $skip, 
      sort: {
        fields: frontmatter___eventInformation___startTime___datetime, 
        order: DESC
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            slug
          }
          fields {
            locale
          }
        }
      }
      pageInfo {
        currentPage
        hasNextPage
        pageCount
      }
    }
  }
  `

  // get node actions
  const { createPage, createRedirect } = actions

  // storage variables for processing and pagination
  const allEvents = []
  const eventPages = []
  let pageNumber = 0

  // process the data to create individual events and event pages
  const fetchEvents = async variables => {
    await graphql(GET_EVENTS, variables).then(({ data }) => {
      const {
        events: {
          edges,
          pageInfo: { currentPage, hasNextPage, pageCount },
        },
      } = data

      // events page path
      const eventsPagePath =
        variables.skip === 0 ? `/events/` : `/events/${pageNumber + 1}/`

      // data to create paginated event pages
      eventPages[pageNumber] = {
        path: eventsPagePath,
        context: {
          currentPage: currentPage,
          numPages: pageCount,
          hasNextPage: hasNextPage,
          skip: variables.skip,
          limit: variables.limit,
        },
      }

      // push all events
      edges.map(({ node }) => {
        allEvents.push(node)
      })

      // run the query again if there are more pages
      if (hasNextPage) {
        pageNumber++
        let skipVal = currentPage * variables.limit
        return fetchEvents({
          limit: variables.limit,
          skip: skipVal,
          locale: variables.locale,
        })
      }
    })
  }

  // initialize the query
  await fetchEvents({
    limit: PER_PAGE,
    skip: 0,
    locale: defaultLocale,
  }).then(() => {
    // events page template
    const eventsTemplate = path.resolve(`${__dirname}/../templates/events.tsx`)

    // create localized paginated event pages
    eventPages.map(eventPage => {
      // loop through locales and create page
      locales.map(locale => {
        // build the localized path
        const localizedPath =
          locale === defaultLocale
            ? eventPage.path
            : `/${locale}${eventPage.path}`

        // create page
        const localizedEventPage = {
          path: localizedPath,
          component: eventsTemplate,
          context: {
            currentPage: eventPage.context.currentPage,
            numPages: eventPage.context.numPages,
            hasNextPage: eventPage.context.hasNextPage,
            skip: eventPage.context.skip,
            limit: eventPage.context.limit,
            locale: locale,
            defaultLocale: defaultLocale,
          },
        }

        // console output
        reporter.verbose(`[page] ${localizedPath}`)

        // create the page
        createPage(localizedEventPage)

        // create redirects
        if (locale === defaultLocale) {
          reporter.verbose(
            `[page] /${locale}${eventPage.path} -> ${localizedPath} (301)`
          )
          createRedirect({
            fromPath: `/${locale}${eventPage.path}`,
            isPermanent: true,
            redirectInBrowser: true,
            toPath: localizedPath,
          })
          createRedirect({
            fromPath: `/${locale}${eventPage.path}`.slice(0, -1),
            isPermanent: true,
            redirectInBrowser: true,
            toPath: localizedPath,
          })
        }
      })
    })

    // console output
    reporter.info(
      `Total Event Pages: ${eventPages.length}, Locales: ${locales.length}`
    )

    // event template component
    const eventTemplate = path.resolve(`${__dirname}/../templates/event.tsx`)

    // create localized events
    allEvents.map(event => {
      // loop through locales and create page
      locales.map(locale => {
        // build an event path
        let eventPath =
          locale === defaultLocale
            ? `/event/${event.frontmatter.slug}/`
            : `/${locale}/event/${event.frontmatter.slug}/`

        // create routes for event
        reporter.verbose(`[event] ${eventPath}`)
        createPage({
          path: eventPath,
          component: eventTemplate,
          context: {
            locale: locale,
            defaultLocale: defaultLocale,
            slug: event.frontmatter.slug,
          },
        })

        // extra paths to create
        // const paths = [
        //   "main-stage",
        //   "schedule",
        //   "rooms",
        //   "qa",
        //   "map"
        // ]

        // paths.forEach(path => {
        //   // create dynamic routes
        //   createPage({
        //     path: `${eventPath}${path}`,
        //     component: eventTemplate,
        //     context: {
        //       locale: locale,
        //       defaultLocale: defaultLocale,
        //       slug: event.frontmatter.slug,
        //     },
        //   })
        // })

        // create dynamic routes
        createPage({
          path: `${eventPath}:route`,
          matchPath: `${eventPath}*`,
          component: eventTemplate,
          context: {
            locale: locale,
            defaultLocale: defaultLocale,
            slug: event.frontmatter.slug,
          },
        })

        // create a redirect from default locale
        if (locale === defaultLocale) {
          reporter.verbose(
            `[event] /${locale}${eventPath} -> ${eventPath} (301)`
          )
          createRedirect({
            fromPath: `/${locale}${eventPath}`,
            isPermanent: true,
            redirectInBrowser: true,
            toPath: eventPath,
          })
          createRedirect({
            fromPath: `/${locale}${eventPath}`.slice(0, -1),
            isPermanent: true,
            redirectInBrowser: true,
            toPath: eventPath,
          })
        }
      })
    })

    // console output
    reporter.info(
      `Total Events: ${allEvents.length}, Locales: ${locales.length}`
    )
  })
}
