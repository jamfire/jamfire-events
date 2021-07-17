import { RouteComponentProps } from "@reach/router"
import { MarkdownRemark } from "../../gatsby/graphqlTypes"
import firebase from "firebase/app"

// chat props
export interface ChatProps extends RouteComponentProps {
  config: MarkdownRemark
  event: MarkdownRemark
  path?: string
}

// message props
export type MessagesProps = {
  event_id: string
  chats: any
  setChats: any
  scrollToBottom: any
  user: firebase.User | null
  mobile?: boolean
  mobileHeight?: number | null
}

// types
export type SendProps = {
  event_id: string
  chats: any
  setChats: any
  scrollToBottom: any
  user: firebase.User | null
}
