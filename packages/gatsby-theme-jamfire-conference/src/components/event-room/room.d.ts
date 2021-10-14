import { MarkdownRemark } from "../../gatsby/graphql-types"
import firebase from "firebase/compat/app"
import { RouteComponentProps } from "@reach/router"

export interface RoomProps extends RouteComponentProps {
  config?: MarkdownRemark
  event?: MarkdownRemark
  locale: string
  user: firebase.User | null
}
