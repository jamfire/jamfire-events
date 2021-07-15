// import libs
import React, { useContext, useState, useEffect } from "react"
import { ChatProps } from "./_props"
import { bp } from "../../utils/media"
import { checkIsClient } from "../../utils/check-is-client"

// import components
import { StyledChat } from "./_styles"
import { FirebaseContext } from "../../services"
import Seo from "../Site/Seo"
import Messages from "./Messages"
import Send from "./Send"

export default ({ config, event }: ChatProps) => {
  const {
    id,
    frontmatter: { title, eventSettings },
    fields: { locale }
  } = event

  const [chats, setChats] = useState([])
  const [mobile, setMobile] = useState(false)

  const isClient = checkIsClient()

  useEffect(() => {
    if (typeof document !== `undefined` && isClient) {
      let width: number = document.getElementById("layout")?.clientWidth || bp.tablet_up
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
    <StyledChat id="chat">
      <Seo
        config={config}
        activeTitle={`${eventSettings.chatLabel} | ${title}`}
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
    </StyledChat>
  )
}
