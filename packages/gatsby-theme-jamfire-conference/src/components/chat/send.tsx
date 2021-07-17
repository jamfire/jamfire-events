// import libs
import React, { useState, useContext } from "react"
import firebase from "firebase/app"
import { useTranslation } from "react-i18next"
import { SendProps } from "./_props"
import cx from "classnames"

// import components
import { FirebaseContext } from "../../services"
import { Context } from "../../services/theme"
import { FaFacebookF, FaTwitter, FaGoogle, FaEnvelope } from "react-icons/fa"

// import styles
import * as styles from "./send.module.scss"

export default ({
  event_id,
  chats,
  setChats,
  scrollToBottom,
  user,
}: SendProps) => {
  const [disabled, setDisabled] = useState(true)
  const [message, setMessage] = useState("")
  const { setToggleLogin } = useContext(Context)

  const { firestore } = useContext(FirebaseContext)

  const { t } = useTranslation()

  if (!event_id) return <></>

  if (!user)
    return (
      <div className={cx(styles.send, styles.login)} onClick={() => setToggleLogin(true)}>
        <div className="label">
          <span>{t("event.chat.login")}</span>
        </div>
        <div className={styles.icons}>
          <FaFacebookF className={styles.icon} />
          <FaTwitter className={styles.icon} />
          <FaGoogle className={styles.icon} />
          <FaEnvelope className={styles.icon} />
        </div>
      </div>
    )

  const sendMessage = (event: any) => {
    setDisabled(true)

    // build temporary chat
    const chat = {
      created_at: firebase.firestore.Timestamp.now(),
      message: message,
      user_id: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      event_id: event_id,
    }

    // set new temporary chats
    let newChats = JSON.parse(JSON.stringify(chats))
    newChats.push(chat)
    setChats(newChats)
    scrollToBottom()

    // save chat to firebase
    firestore
      ?.collection("messages")
      .add(chat)
      .then(docRef => {
        console.log("Document written with ID: ", docRef.id)
        setMessage("")
        setDisabled(false)
        scrollToBottom()
      })
      .catch(error => {
        console.log("Error adding document: ", error)
        setMessage("")
        setDisabled(false)
        scrollToBottom()
      })

    event.preventDefault()
  }

  const handleChange = (event: any) => {
    setMessage(event.target.value)

    if (event.target.value.length > 0) {
      setDisabled(false)
    }
    if (event.target.value.length === 0) {
      setDisabled(true)
    }
  }

  return (
    <div className={styles.send}>
      <form className={styles.form} onSubmit={sendMessage}>
        <input
          className={styles.input}
          type="text"
          placeholder={t("event.chat.message")}
          onChange={handleChange}
          value={message}
        />
        <button className={styles.button} disabled={disabled}>{t("event.chat.send")}</button>
      </form>
    </div>
  )
}
