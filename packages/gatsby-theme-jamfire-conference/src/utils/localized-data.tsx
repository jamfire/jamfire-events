// import libs
import mergeWith from "lodash/mergeWith"

// localize data
export const localizeData: (localized: any, original: any) => any = (
  localized,
  original
) => {
  const data = mergeWith(original, localized, customizer)
  return data
}

// mergeWith customizer
const customizer: (originalValue: any, localizedValue: any) => object | string =
  (originalValue, localizedValue) => {
    // local string exists
    if (typeof localizedValue === "string") {
      return localizedValue
    }
    // local object exists, recursively run through customizer
    if (typeof localizedValue === "object") {
      return mergeWith(originalValue, localizedValue, customizer)
    }
    // local value does not exist, return original value
    if (!localizedValue) {
      return originalValue
    }
  }
