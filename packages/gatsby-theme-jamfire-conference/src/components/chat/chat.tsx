// import libs
import React, { useContext, useState, useEffect } from "react"
import { ChatProps } from "./chat.d"
import { bp } from "../../utils/media"
import { checkIsClient } from "../../utils/check-is-client"

// import components
import { FirebaseContext } from "../../services"
import Seo from "../seo"
import Messages from "./messages"
import Send from "./send"

// import styles
import * as styles from "./chat.module.scss"

export default ({ config, event }: ChatProps) => {
  const { id, frontmatter, fields } = event

  const { title, eventSettings } = frontmatter || {}

  const { locale } = fields || {}

  const [chats, setChats] = useState([])
  const [mobile, setMobile] = useState(false)

  const isClient = checkIsClient()

  useEffect(() => {
    if (typeof document !== `undefined` && isClient) {
      let width: number =
        document.getElementById("layout")?.clientWidth || bp.tablet_up
      setMobile(width < bp.tablet_up ? true : false)
    }
  }, [])

  const { profile: user } = useContext(FirebaseContext)

  const scrollToBottom = () => {
    const container = document.getElementById("chat-messages")

    if (mobile) {
      const messagesBottom = document.getElementById("messages-bottom")
      messagesBottom?.scrollIntoView()
    } else {
      if (container) {
        container.scrollTop = container.scrollHeight
      }
    }
  }

  return (
    <div className={`chat ${styles.chat}`} id="chat">
      <Seo
        config={config}
        activeTitle={`${eventSettings?.chatLabel} | ${title}`}
        locale={locale}
      />
      <Messages
        event_id={id}
        chats={chats}
        setChats={setChats}
        scrollToBottom={scrollToBottom}
        user={user}
      />
      <Send
        event_id={id}
        chats={chats}
        setChats={setChats}
        scrollToBottom={scrollToBottom}
        user={user}
      />
    </div>
  )
}
