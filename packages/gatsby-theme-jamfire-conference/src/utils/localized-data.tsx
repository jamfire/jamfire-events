// import libs
import mergeWith from "lodash/mergeWith"
import { type } from "os"
import {
  MarkdownRemark,
  MarkdownRemarkGroupConnection,
} from "../gatsby/graphql-types"

// localize data
export const localizeData: (
  localized: MarkdownRemark | undefined,
  original: MarkdownRemark | undefined
) => MarkdownRemark | undefined = (localized, original) => {
  const data = mergeWith(original, localized, customizer)
  return data
}

// mergeWith customizer
const customizer: (
  objValue: object | string,
  srcValue: object | string
) => object | string = (objValue, srcValue) => {
  if (typeof srcValue === "string") {
    return srcValue
  }
  if (typeof srcValue === "object") {
    const {
      // @ts-expect-error
      eventBranding, // @ts-expect-error
      eventGraphics, // @ts-expect-error
      eventRooms, // @ts-expect-error
      eventSchedule, // @ts-expect-error
      eventSettings, // @ts-expect-error
      eventQA, // @ts-expect-error
      slug, // @ts-expect-error
      title,
    } = srcValue || {}

    if (!eventBranding) {
      // @ts-expect-error
      srcValue.eventBranding = objValue.eventBranding
    }
    if (!eventGraphics) {
      // @ts-expect-error
      srcValue.eventGraphics = objValue.eventGraphics
    }
    if (!eventRooms) {
      // @ts-expect-error
      srcValue.eventRooms = objValue.eventRooms
    }
    if (!eventSchedule) {
      // @ts-expect-error
      srcValue.eventSchedule = objValue.eventSchedule
    }
    if (!eventSettings) {
      // @ts-expect-error
      srcValue.eventSettings = objValue.eventSettings
    }
    if (!eventQA) {
      // @ts-expect-error
      srcValue.eventQA = objValue.eventQA
    }
    if (!slug) {
      // @ts-expect-error
      srcValue.slug = objValue.slug
    }
    if (!title) {
      // @ts-expect-error
      srcValue.title = objValue.title
    }

    return srcValue
  }
  if (!srcValue) {
    return objValue
  }

  return srcValue
}
