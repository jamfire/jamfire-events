/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// import constants
// get constants
// const defaultLocale = process.env.GATSBY_DEFAULT_LOCALE || "en"
// const locales = process.env.GATSBY_LOCALES
//   ? process.env.GATSBY_LOCALES.split(",")
//   : ["en"]

// theme setup check
const ERROR_MESSAGE = `For "gatsby-theme-jamfire-conference", you must define environment variables.
Here is a sample valid set up:

// .env.development
GATSBY_SITE_NAME=Jamfire
GATSBY_SHORT_NAME=Jamfire 

GATSBY_NETLIFY_SITE_URL=https://localhost:8000
GATSBY_NETLIFY_DISPLAY_URL=https://localhost:8000
GATSBY_NETLIFY_BACKEND_NAME=github
GATSBY_NETLIFY_BACKEND_REPO=jamfire/gatsby-starter-jamfire-conference
GATSBY_NETLIFY_BACKEND_BRANCH=master

GATSBY_FIREBASE_API_KEY=<apiKey>
GATSBY_FIREBASE_AUTH_DOMAIN=<authDomain>
GATSBY_FIREBASE_DATABASE_URL=<databaseUrl>
GATSBY_FIREBASE_PROJECT_ID=<projectId>
GATSBY_FIREBASE_STORAGE_BUCKET=<storageBucket>
GATSBY_FIREBASE_MESSAGING_SENDER_ID=<messagingSenderId>
GATSBY_FIREBASE_APP_ID=<appId>
GATSBY_FIREBASE_MEASUREMENT_ID=<measurementId>

Learn more at https://github.com/jamfire/gatsby-theme-jamfire-conference.
`

// pre bootstrap
exports.onPreBootstrap = ({ reporter }) => {
  if (
    !process.env.GATSBY_SITE_NAME ||
    !process.env.GATSBY_SHORT_NAME ||
    !process.env.GATSBY_NETLIFY_SITE_URL ||
    !process.env.GATSBY_NETLIFY_DISPLAY_URL ||
    !process.env.GATSBY_NETLIFY_BACKEND_NAME ||
    !process.env.GATSBY_NETLIFY_BACKEND_REPO ||
    !process.env.GATSBY_NETLIFY_BACKEND_BRANCH ||
    !process.env.GATSBY_FIREBASE_API_KEY ||
    !process.env.GATSBY_FIREBASE_AUTH_DOMAIN ||
    !process.env.GATSBY_FIREBASE_DATABASE_URL ||
    !process.env.GATSBY_FIREBASE_PROJECT_ID ||
    !process.env.GATSBY_FIREBASE_STORAGE_BUCKET ||
    !process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID ||
    !process.env.GATSBY_FIREBASE_APP_ID ||
    !process.env.GATSBY_FIREBASE_MEASUREMENT_ID
  ) {
    reporter.panic(ERROR_MESSAGE)
  }
}

/**
 * Source nodes
 */
// const sourceNodes = require("./src/gatsby/sourceNodes")

// exports.sourceNodes = async ({ actions }) => {
//   await sourceNodes({ actions })
// }

/**
 * Add locale field to nodes based on netlify cms folder structure
 */
const createLocales = require("./src/gatsby/create-locales")

exports.onCreateNode = async ({ node, actions, reporter }) => {
  await createLocales({ node, actions, reporter })
}

/**
 * Create Pages
 */
const createEvents = require("./src/gatsby/create-events")
const createPages = require("./src/gatsby/create-pages")
const create404 = require("./src/gatsby/create-404")

exports.createPages = async ({ actions, graphql, reporter }) => {
  // create events
  const eventActivity = reporter.activityTimer(`Create pages`)
  eventActivity.start()
  await createEvents({ actions, graphql, reporter })
  eventActivity.end()

  // create pages
  const pageActivity = reporter.activityTimer(`Create events`)
  pageActivity.start()
  await createPages({ actions, graphql, reporter })
  pageActivity.end()

  // create 404
  const errorActivity = reporter.activityTimer(`Create 404`)
  errorActivity.start()
  await create404({ actions, reporter })
  errorActivity.end()
}

/**
 * Customize Schema
 */
const createSchemaCustomization = require("./src/gatsby/create-schema-customization")

exports.createSchemaCustomization = async ({ actions, reporter }) => {
  const activity = reporter.activityTimer("Create Schema Customization")
  activity.start()
  await createSchemaCustomization({ actions })
  activity.end()
}

/**
 * Create Custom Resolvers
 */
const createCustomResolvers = require("./src/gatsby/create-resolvers")

exports.createResolvers = async ({ createResolvers, reporter }) => {
  const activity = reporter.activityTimer("Create Schema Customization")
  activity.start()
  await createCustomResolvers({ createResolvers })
  activity.end()
}

/**
 * Customize Webpack
 */
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-leaflet|leaflet/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
