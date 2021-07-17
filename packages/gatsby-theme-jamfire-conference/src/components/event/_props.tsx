// import libs
import { MarkdownRemark } from "../../gatsby/graphqlTypes"
import { RouteComponentProps } from "@reach/router"
import firebase from "firebase/app"

// livestream props
export type LivestreamProps = {
  event: MarkdownRemark
}

// client props
export interface ClientProps extends RouteComponentProps {
  config: MarkdownRemark
  event: MarkdownRemark
  basePath?: string
  subpage?: string
  path?: string
  room?: string
  locale: string
  user?: firebase.User
}

// content styles props
export type ContentStyleProps = {
  padding?: boolean
}

// schedule props
export interface QAProps extends RouteComponentProps {
  config: MarkdownRemark
  event: MarkdownRemark
  path?: string
}

// room item props
export type RoomItemProps = {
  room: any
  event: MarkdownRemark
  locale: string
}

// room search props
export type RoomsSearchProps = {
  setRoomName: (arg0: string) => void
}

// tracker props
export type TrackerProps = {
  event?: MarkdownRemark
}
