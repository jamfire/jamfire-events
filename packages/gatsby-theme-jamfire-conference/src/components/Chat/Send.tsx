// import libs
import React, { useState, useContext } from "react"
import firebase from "firebase/app"
import { useTranslation } from "react-i18next"
import { SendProps } from "./_props"

// import components
import { FirebaseContext } from "../../services"
import { Context } from "../Context"
import { FaFacebookF, FaTwitter, FaGoogle, FaEnvelope } from "react-icons/fa"
import { StyledSend, Form, Input, Button } from "./_styles"

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
      <StyledSend className="login" onClick={() => setToggleLogin(true)}>
        <div className="label">
          <span>{t("event.chat.login")}</span>
        </div>
        <div className="icons">
          <FaFacebookF className="icon" />
          <FaTwitter className="icon" />
          <FaGoogle className="icon" />
          <FaEnvelope className="icon" />
        </div>
      </StyledSend>
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
      .collection("messages")
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
    <StyledSend>
      <Form onSubmit={sendMessage}>
        <Input
          type="text"
          placeholder={t("event.chat.message")}
          onChange={handleChange}
          value={message}
        />
        <Button disabled={disabled}>{t("event.chat.send")}</Button>
      </Form>
    </StyledSend>
  )
}
