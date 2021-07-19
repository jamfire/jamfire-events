// import libs
import { MarkdownRemark } from "../../gatsby/graphql-types"
import { RouteComponentProps } from "@reach/router"
import firebase from "firebase/app"

// livestream props
export interface LivestreamProps {
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
export interface ContentStyleProps {
  padding?: boolean
}

// schedule props
export interface QAProps extends RouteComponentProps {
  config: MarkdownRemark
  event: MarkdownRemark
  path?: string
}


