import { RouteComponentProps } from "@reach/router"
import { MarkdownRemark } from "../../gatsby/graphql-types"
import firebase from "firebase/compat/app"

// chat props
export interface ChatProps extends RouteComponentProps {
  config?: MarkdownRemark
  event?: MarkdownRemark
  path?: string
  locale: string
  featured?: boolean
}

// message props
export interface MessagesProps {
  event_id?: string | null
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
    locale: string
    translations: string[]
  }
  userId: string | number
  sameSender: boolean
  nextSender: boolean
  currentLocale: string
}

// send props
export interface SendProps {
  event_id?: string | null
  chats: any
  setChats: any
  scrollToBottom: any
  user: firebase.User | null
}

// translation props
export interface TranslationProps {
  currentLocale: string
  translations: string[]
}
