// import libs
import CMS, { init } from "netlify-cms-app"
import { ColorControl, ColorPreview } from "netlify-cms-widget-colorpicker"
import {
  DateTimeZoneControl,
  DateTimeZonePreview,
} from "netlify-cms-widget-datetimezone"
import { LOCALES } from "../utils/constants"

// collections
import events from "./events"
import pages from "./pages"
import configuration from "./configuration"
import cookies from "./cookies"

// import i18n
import i18n from "./i18n"

// active environment
const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

// collections
const collections = [events, pages, configuration, cookies]

// backend
let backend = {
  name: process.env.GATSBY_NETLIFY_BACKEND_NAME,
  repo: process.env.GATSBY_NETLIFY_BACKEND_REPO,
  branch: process.env.GATSBY_NETLIFY_BACKEND_BRANCH,
}

if (activeEnv === "development") {
  backend = {
    name: "proxy",
    proxy_url: "http://localhost:8081/api/v1",
    branch: "develop",
  }
}

// initialize netlify cms
let config = {
  backend,
  site_url: process.env.GATSBY_NETLIFY_SITE_URL,
  display_url: process.env.GATSBY_NETLIFY_DISPLAY_URL,
  media_folder: "content/assets",
  public_folder: "/assets",
  collections,
}

// publish mode
if (backend.name !== "proxy") {
  config.publish_mode = "editorial_workflow"
}

// i18n configuration
if (LOCALES.length > 1) {
  config.i18n = i18n
}

init({ config })

// register widgets
CMS.registerWidget("color", ColorControl, ColorPreview)
CMS.registerWidget("datetimezone", DateTimeZoneControl, DateTimeZonePreview)
