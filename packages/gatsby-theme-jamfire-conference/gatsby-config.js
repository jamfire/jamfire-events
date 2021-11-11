const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config({
  path: `.env.${activeEnv}`,
})

const path = require("path")

module.exports = () => {
  return {
    siteMetadata: {
      title: process.env.GATSBY_SITE_NAME,
    },
    plugins: [
      /**
       * Typescript settings
       */
      {
        resolve: `gatsby-plugin-typescript`,
        options: {
          isTSX: true, // defaults to false
          jsxPragma: `jsx`, // defaults to "React"
          allExtensions: true, // defaults to false
        },
      },
      /**
       * Netlify && Netlify CMS
       */
      {
        resolve: `gatsby-plugin-netlify`,
      },
      {
        resolve: `gatsby-plugin-netlify-cms`,
        options: {
          modulePath: `${__dirname}/src/cms/cms.js`,
          //stylesPath: `${__dirname}/src/cms/cms.css`, // default: undefined
          manualInit: true,
        },
      },
      /**
       * SEO
       */
      {
        resolve: `gatsby-plugin-react-helmet-async`,
      },
      /**
       * Typography & Styling
       */
      {
        resolve: `gatsby-plugin-sass`,
        options: {
          implementation: require("sass"),
        },
      },
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: path.join(__dirname, `src/theme/typography`),
          omitGoogleFont: true,
        },
      },
      /**
       * Gastby Cloud
       */
      {
        resolve: `gatsby-plugin-gatsby-cloud`,
      },
      /**
       * Analytics
       */
      {
        resolve: `gatsby-plugin-gdpr-cookies`,
        options: {
          googleAnalytics: {
            trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
            cookieName: "gatsby-gdpr-google-analytics",
            anonymize: true,
            allowAdFeatures: false,
          },
          googleTagManager: {
            trackingId: process.env.GATSBY_GOOGLE_TAG_MANAGER_TRACKING_ID,
            cookieName: "gatsby-gdpr-google-tagmanager",
            dataLayerName: "dataLayer",
          },
          facebookPixel: {
            pixelId: process.env.GATSBY_FACEBOOK_PIXEL_ID,
            cookieName: "gatsby-gdpr-facebook-pixel",
          },
          environments: ["production", "development"],
        },
      },
      /**
       * Performance Tweaks
       */
      {
        resolve: `gatsby-plugin-nprogress`,
        options: {
          // Setting a color is optional.
          color: process.GATSBY_NPROGRESS_COLOR
            ? process.GATSBY_NPROGRESS_COLOR
            : "#2fdb92",
          // Disable the loading spinner.
          showSpinner: false,
        },
      },
      {
        resolve: `gatsby-plugin-loadable-components-ssr`,
      },
      /**
       * Content Sourcing
       */
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `site`,
          path: path.resolve(`content/site`),
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `pages`,
          path: path.resolve(`content/pages`),
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `events`,
          path: path.resolve(`content/events`),
        },
      },
      /**
       * Image Processing
       */
      {
        resolve: `gatsby-plugin-image`,
      },
      {
        resolve: `gatsby-plugin-sharp`,
      },
      {
        resolve: `gatsby-transformer-sharp`,
      },
      /**
       * Markdown Transformer
       */
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: "gatsby-remark-external-links",
              options: {
                target: "_blank",
                rel: "noreferrer",
              },
            },
            {
              resolve: `gatsby-remark-images`,
              options: {
                // It's important to specify the maxWidth (in pixels) of
                // the content container as this plugin uses this as the
                // base for generating different widths of each image.
                maxWidth: 1920,
              },
            },
          ],
        },
      },
      {
        resolve: `gatsby-transformer-remark-frontmatter`,
      },
      /**
       * Leaflet Integration
       */
      {
        resolve: `gatsby-plugin-react-leaflet`,
        options: {
          linkStyles: true,
        },
      },
    ],
  }
}
