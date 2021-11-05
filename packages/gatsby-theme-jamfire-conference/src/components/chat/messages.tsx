// import libs
import React, { useEffect, useState, useContext } from "react"
import { MessagesProps, MessageProps, TranslationProps } from "./chat.d"
import { useFirestoreQuery } from "../../services"
import { useTranslation } from "react-i18next"
import { DateTime } from "luxon"
import cx from "classnames"

// import components
import { FirebaseContext } from "../../services"
import Loader from "../loader"

// import styles
import * as styles from "./messages.module.scss"

export default ({
  chats,
  setChats,
  scrollToBottom,
  user,
  event_id,
}: MessagesProps) => {
  const { i18n, t } = useTranslation()

  const currentLocale = i18n.language

  const { firestore } = useContext(FirebaseContext)

  const [data, isLoading, error] = useFirestoreQuery(
    firestore
      ?.collection("messages")
      .where("event_id", "==", event_id)
      .orderBy("created_at", "asc")
      .limit(100)
  )

  const [scrollActive, setScrollActive] = useState(true)

  useEffect(() => {
    const container = document.getElementById("chat-messages")
    if (container) {
      container.onwheel = () => {
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
      <div className={styles.container}>
        <div className={styles.inner}>{t("event.chat.error")}</div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className={styles.container}>
        <Loader />
      </div>
    )
  }

  if (chats.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.inner}>{t("event.chat.beTheFirst")}</div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <ul className={styles.messages} id="chat-messages">
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
              currentLocale={currentLocale}
            />
          )
        })}
      </ul>
      <div id="messages-bottom" />
    </div>
  )
}

const Message = ({
  item,
  userId,
  sameSender,
  nextSender,
  currentLocale,
}: MessageProps) => {
  const { message, created_at, user_id, displayName, photoURL, locale } = item

  const me = userId === user_id ? "me" : "not-me"
  const first = sameSender ? "not-first" : "first"
  const date = DateTime.fromSeconds(created_at.seconds)

  const authKey = process.env.GATSBY_DEEPL_API_KEY || null

  return (
    <li className={cx(styles.message, styles[me], styles[first])}>
      {!nextSender && (
        <div className={styles.avatar}>
          <img src={photoURL} alt={displayName} />
        </div>
      )}
      <div className={cx(styles.text, styles[me])}>
        <span>
          {message}
          {locale !== currentLocale && authKey && (
            <TranslatedMessage
              locale={locale}
              currentLocale={currentLocale}
              message={message}
            />
          )}
        </span>
      </div>
      {!nextSender && me === "me" && (
        <div className={cx(styles.name, styles[me])}>
          <span>{displayName}</span>
          <span>{date.toLocaleString(DateTime.DATETIME_SHORT)}</span>
        </div>
      )}
      {!nextSender && me === "not-me" && (
        <div className={cx(styles.name, styles[me])}>
          <span>{date.toLocaleString(DateTime.DATETIME_SHORT)}</span>
          <span>{displayName}</span>
        </div>
      )}
    </li>
  )
}

const TranslatedMessage = ({
  locale,
  currentLocale,
  message,
}: TranslationProps) => {
  const authKey = process.env.GATSBY_DEEPL_API_KEY

  if (!authKey) return <></>

  let url = `https://api.deepl.com/v2/translate?auth_key=${authKey}`
  url += `&text=${encodeURIComponent(message)}`
  url += `&target_lang=${currentLocale}`
  url += `&source_lang=${locale}`

  const [translation, setTransation] = useState("...")

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setTransation(data.translations[0].text)
      })
  }, [])

  return <div className={styles.translation}>{translation}</div>
}
