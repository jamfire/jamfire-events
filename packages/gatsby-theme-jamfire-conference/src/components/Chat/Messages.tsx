// import libs
import React, { useEffect, useState, useContext } from "react"
import { MessagesProps } from "./_props"
import { useFirestoreQuery } from "../../services"
import { useTranslation } from "react-i18next"

// import components
import { FirebaseContext } from "../../services"
import Loader from "../Site/Loader"
import {
  Container,
  Inner,
  StyledMessages,
  StyledMessage,
  Text,
  Avatar,
  Name,
} from "./_styles"

export default ({
  chats,
  setChats,
  scrollToBottom,
  user,
  event_id,
}: MessagesProps) => {
  const { t } = useTranslation()

  const { firestore } = useContext(FirebaseContext)

  const [data, isLoading, error] = useFirestoreQuery(
    firestore
      .collection("messages")
      .where("event_id", "==", event_id)
      .orderBy("created_at", "asc")
      .limit(100)
  )

  const [scrollActive, setScrollActive] = useState(true)

  useEffect(() => {
    const container = document.getElementById("chat-messages")
    if (container) {
      container.onwheel = e => {
        const top: number = container.scrollTop + 600
        const height: number = container.scrollHeight
        if (top >= height) {
          setScrollActive(true)
        } else {
          setScrollActive(false)
        }
      }
    }
  })

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollActive) {
        scrollToBottom()
      }
    }, 100)
    return () => clearInterval(interval)
  })

  useEffect(() => {
    if (typeof data !== `undefined`) {
      setChats(data)
    }
  }, [data])

  if (error) {
    return (
      <Container>
        <Inner>{error.message}</Inner>
      </Container>
    )
  }

  if (isLoading) {
    return (
      <Container>
        <Loader />
      </Container>
    )
  }

  if (chats.length === 0) {
    return (
      <Container>
        <Inner>{t("event.chat.beTheFirst")}</Inner>
      </Container>
    )
  }

  return (
    <Container>
      <StyledMessages id="chat-messages">
        {chats.map((message: any, id: number) => {
          let currentId = message.user_id
          let prevId =
            typeof chats[id - 1] !== `undefined` ? chats[id - 1].user_id : null
          let nextId =
            typeof chats[id + 1] !== `undefined` ? chats[id + 1].user_id : null
          let sameSender = currentId === prevId ? true : false
          let nextSender = currentId === nextId ? true : false

          return (
            <Message
              key={id}
              item={message}
              userId={user ? user.uid : 0}
              sameSender={sameSender}
              nextSender={nextSender}
            />
          )
        })}
      </StyledMessages>
      <div id="messages-bottom" />
    </Container>
  )
}

const Message = ({ item, userId, sameSender, nextSender }) => {
  const { message, created_at, user_id, displayName, photoURL } = item

  const me = userId === user_id ? "me" : "not-me"
  const first = sameSender ? "not-first" : "first"

  return (
    <StyledMessage className={`${me} ${first}`}>
      {!nextSender && (
        <Avatar>
          <img src={photoURL} alt={displayName} />
        </Avatar>
      )}
      <Text className={me}>
        <span>{message}</span>
      </Text>
      {!nextSender && <Name className={me}>{displayName}</Name>}
    </StyledMessage>
  )
}
