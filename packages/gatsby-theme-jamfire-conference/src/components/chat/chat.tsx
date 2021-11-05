// import libs
import React, { useContext, useState, useEffect } from "react"
import { ChatProps } from "./chat.d"
import { checkIsClient } from "../../utils/check-is-client"
import { useTranslation } from "react-i18next"

// import components
import { FirebaseContext } from "../../services"
import Seo from "../seo"
import Messages from "./messages"
import Send from "./send"

// import styles
import * as styles from "./chat.module.scss"

export default ({ config, event, locale, featured }: ChatProps) => {
  const { id, frontmatter } = event || {}

  const { title, eventSettings } = frontmatter || {}

  const [chats, setChats] = useState([])
  const [mobile, setMobile] = useState(false)

  const isClient = checkIsClient()

  const { t } = useTranslation()

  useEffect(() => {
    if (typeof document !== `undefined` && isClient) {
      let width: number = document.getElementById("layout")?.clientWidth || 576
      setMobile(width < 576 ? true : false)
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

  let pageTitle = ""
  if (featured) {
    pageTitle = eventSettings?.mainStageLabel || t("navigation.mainStage")
  } else {
    pageTitle = eventSettings?.mainStageLabel || t("navigation.chat")
  }

  return (
    <div className={`chat ${styles.chat}`} id="chat">
      <Seo
        config={config}
        activeTitle={`${pageTitle} | ${title}`}
        locale={locale}
      />
      <Messages
        event_id={frontmatter?.slug}
        chats={chats}
        setChats={setChats}
        scrollToBottom={scrollToBottom}
        user={user}
      />
      <Send
        event_id={frontmatter?.slug}
        chats={chats}
        setChats={setChats}
        scrollToBottom={scrollToBottom}
        user={user}
      />
    </div>
  )
}
