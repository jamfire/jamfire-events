// imports
import { LatLngBoundsExpression, LatLngBounds } from "leaflet"

// icon wrapper props
export type IconProps = {
  size: number
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

export interface BoundsProps {
  bounds: LatLngBoundsExpression
}

export type SetBoundsProps = 
  [LatlngBoundsExpression, React.Dispatch<React.SetStateAction<LatLngBounds>>]

export interface DataProps {
  _id: string
  lat: string
  lon: string
  key: string
  slug: string
  created_at: {
    nanoseconds: number
    seconds: number
  }
}