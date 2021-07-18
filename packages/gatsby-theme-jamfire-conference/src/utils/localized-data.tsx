// import libs
import mergeWith from "lodash/mergeWith"
import { MarkdownRemark, MarkdownRemarkGroupConnection } from "../gatsby/graphql-types"

// localize data
export const localizeData: (
  localized: MarkdownRemark |  undefined,
  original: MarkdownRemark |  undefined
) => MarkdownRemark |  undefined = (localized, original) => {
  const data = mergeWith(original, localized, customizer)
  return data
}

// localize data
export const localizeEvents: (
  localized: MarkdownRemarkGroupConnection | undefined,
  original: MarkdownRemarkGroupConnection | undefined
) => MarkdownRemarkGroupConnection | undefined = (localized, original) => {
  const data = mergeWith(original, localized, customizer)
  return data
}

// mergeWith customizer
const customizer: (
  objValue: object | string,
  srcValue: object | string
) => object | string = (objValue, srcValue) => {
  if (srcValue === null || srcValue === "") {
    return objValue
  }
  return srcValue
}
