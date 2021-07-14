// import libs
const path = require("path")

// get constants
const defaultLocale = process.env.GATSBY_DEFAULT_LOCALE || "en"
const locales = process.env.GATSBY_LOCALES
  ? process.env.GATSBY_LOCALES.split(",")
  : ["en"]

module.exports = async ({ actions, graphql, reporter }) => {
  // limit per query
  const PER_PAGE = 10

  // graphql query
  const GET_PAGES = `
  query GET_PAGES($limit: Int, $skip: Int, $locale: String) {
    pages:allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: {eq: "page"}
        }
        fields: {
          locale: {eq: $locale}
        }
      }
      limit: $limit, 
      skip: $skip, 
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

  // get needed actions
  const { createPage, createRedirect } = actions

  // array to store all nodes in
  const allNodes = []

  // find all default locale pages and created localized versions
  const fetchPages = async variables => {
    await graphql(GET_PAGES, variables).then(({ data }) => {
      // get the nodes and pagination data
      const {
        pages: {
          edges,
          pageInfo: { currentPage, hasNextPage },
        },
      } = data

      // push page to nodes array
      edges.map(({ node }) => {
        allNodes.push(node)
      })

      // if there are more pages, execute the query again
      if (hasNextPage) {
        pageNumber++
        let skipVal = currentPage * variables.limit
        return fetchPages({
          limit: variables.limit,
          skip: skipVal,
          locale: variables.locale,
        })
      }

      // return the nodes
      return allNodes
    })
  }

  // initiaze the query
  await fetchPages({
    limit: PER_PAGE,
    skip: 0,
    locale: defaultLocale,
  }).then(() => {
    // page template component
    const pageTemplate = path.resolve(`${__dirname}/../templates/page.tsx`)

    // iterate through pages and create localized versions
    allNodes.map(page => {
      // loop through locales and create page
      locales.map(locale => {
        // build a path with locale
        let path =
          locale === defaultLocale
            ? page.frontmatter.slug
            : `/${locale}/${page.frontmatter.slug}`.replace("//", "/")

        // create page
        reporter.verbose(`[page] ${path}`)
        createPage({
          path: path,
          component: pageTemplate,
          context: {
            locale: locale,
            defaultLocale: defaultLocale,
            slug: page.frontmatter.slug,
          },
        })

        // add redirects
        if (locale === defaultLocale) {
          reporter.verbose(`301 Redirect /${locale}${path} -> ${path}`)
          createRedirect({
            fromPath: `/${locale}${path}`,
            isPermanent: true,
            redirectInBrowser: true,
            toPath: path,
          })
          createRedirect({
            fromPath: `/${locale}${path}`.slice(0, -1),
            isPermanent: true,
            redirectInBrowser: true,
            toPath: path,
          })
        }
      })
    })

    // console output
    reporter.info(`Total Pages: ${allNodes.length}, Locales: ${locales.length}`)
  })
}
