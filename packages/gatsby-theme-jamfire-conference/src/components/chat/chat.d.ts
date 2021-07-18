import { RouteComponentProps } from "@reach/router"
import { MarkdownRemark } from "../../gatsby/graphql-types"
import firebase from "firebase/app"

// chat props
export interface ChatProps extends RouteComponentProps {
  config: MarkdownRemark
  event: MarkdownRemark
  path?: string
}

// message props
export interface MessagesProps {
  event_id: string
  chats: any
  setChats: any
  scrollToBottom: any
  user: firebase.User | null
  mobile?: boolean
  mobileHeight?: number | null
}

// message props
export interface MessageProps {
  item: {
    message: string
    created_at: {
      seconds: number
      milliseconds: number
    }
    user_id: string
    displayName: string
    photoURL: string
  },
  userId: string | number,
  sameSender: boolean,
  nextSender: boolean,
}

// send props
export interface SendProps {
  event_id: string
  chats: any
  setChats: any
  scrollToBottom: any
  user: firebase.User | null
}
