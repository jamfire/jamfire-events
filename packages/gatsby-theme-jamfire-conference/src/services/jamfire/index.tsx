/**
 * Jamfire Conference settings
 *
 * Using localStorage for populating application state
 */
import { checkIsClient } from "../../utils/check-is-client"

// for window checking
const isClient: boolean = checkIsClient()

// private get jamfire settings
const getJamfireSettings = () => {
  if (isClient) {
    let settings: string | object = localStorage.getItem("jamfireSettings")
    if (settings === null) {
      settings = {}
    } else {
      settings = JSON.parse(settings)
    }
    return settings
  }

  return {}
}

// set jamfire setting
export const jamfireSet = (name: string, value: string) => {
  if (isClient) {
    let settings = getJamfireSettings()

    let values = Object.assign({}, settings, {
      [name]: value,
    })

    return localStorage.setItem("jamfireSettings", JSON.stringify(values))
  }

  return null
}

// get jamfire settings
export const jamfireGet = (name: string) => {
  if (isClient) {
    let settings = getJamfireSettings()

    return settings[name] || null
  }

  return null
}
