// import libs
const path = require("path")

const defaultLocale = process.env.GATSBY_DEFAULT_LOCALE || "en"

module.exports = async ({ actions, reporter }) => {
  // get needed actions
  const { createPage } = actions

  const create404 = async () => {
    // 404 template component
    const errorTemplate = path.resolve(`${__dirname}/../templates/404.tsx`)

    // build a path
    let pagePath = "/404/"

    // create 404
    reporter.verbose(`[404] ${pagePath}`)
    createPage({
      path: pagePath,
      component: errorTemplate,
      context: {
        locale: defaultLocale,
        defaultLocale: defaultLocale,
      },
    })
  }

  // console output
  reporter.verbose("Creating 404 page")

  // create 404 page
  await create404()
}
