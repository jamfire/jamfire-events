// import libs
import mergeWith from "lodash/mergeWith"
import { MarkdownRemark } from "../gatsby/graphql-types"

// localize data
export const localizeData: (
  localized: MarkdownRemark,
  original: MarkdownRemark
) => MarkdownRemark = (localized, original) => {
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
