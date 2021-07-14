// icon wrapper props
export type IconProps = {
  size: number
}

// coordinates data props
export type CoordinatesDataProps = {
  data: [CoordinatesDataItemProps]
}

// coordinates data item props
export type CoordinatesDataItemProps = {
  _id: string
  lon: number
  lat: number
  key: string
  slug: string
  created_at: any
}
