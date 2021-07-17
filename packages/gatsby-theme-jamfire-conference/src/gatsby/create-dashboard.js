// import libs
const path = require("path")

// get constants
const defaultLocale = process.env.GATSBY_DEFAULT_LOCALE || "en"
const locales = process.env.GATSBY_LOCALES
  ? process.env.GATSBY_LOCALES.split(",")
  : ["en"]

module.exports = async ({ actions, reporter }) => {
  // get needed actions
  const { createPage, createRedirect } = actions

  const createDashboard = async () => {
    // dashboard template component
    const dashboardTemplate = path.resolve(
      `${__dirname}/../templates/dashboard.tsx`
    )

    for await (locale of locales) {
      // build a path with locale
      let path =
        locale === defaultLocale
          ? `/dashboard`
          : `/${locale}/dashboard/`.replace("//", "/")

      // create dashboard
      reporter.verbose(`[dashboard] ${path}`)
      createPage({
        path: path,
        component: dashboardTemplate,
        context: {
          locale: locale,
          defaultLocale: defaultLocale,
        },
      })

      // add redirects
      if (locale === defaultLocale) {
        reporter.verbose(`[dashboard] /${locale}${path} -> ${path} (301)`)
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
    }
  }

  // console output
  reporter.verbose("Creating dashboard")

  // create dashboard pages
  await createDashboard()
}
