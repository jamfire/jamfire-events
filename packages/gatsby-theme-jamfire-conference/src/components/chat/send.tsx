// import libs
import React, { useState, useContext } from "react"
import firebase from "firebase/compat/app"
import { useTranslation } from "react-i18next"
import { SendProps } from "./chat.d"
import { LOCALES } from "../../utils/constants"
import cx from "classnames"

// import components
import { FirebaseContext } from "../../services"
import { ThemeContext } from "../../services/theme"
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
  const { setToggleLogin } = useContext(ThemeContext)

  const { firestore } = useContext(FirebaseContext)

  const { i18n, t } = useTranslation()

  if (!event_id) return <></>

  if (!user)
    return (
      <div
        className={cx(styles.send, styles.login)}
        onClick={() => setToggleLogin(true)}
      >
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

  const getTranslations = async (message: string) => {
    // get the deepl api key if it exists
    const authKey = process.env.GATSBY_DEEPL_API_KEY
    const baseUrl = process.env.GATSBY_DEEPL_BASE_URL

    if (!authKey) return {}

    // build language params
    const sourceLang = i18n.language

    // get the locales
    let locales = LOCALES.filter(locale => locale !== sourceLang)

    // build the initial translations object
    let translations: any = {}
    LOCALES.forEach(locale => {
      translations[locale] = ""
    })

    // set the sourceLang default message
    translations[sourceLang] = message

    let urls: any = []
    locales.forEach(locale => {
      let url = `${baseUrl}/v2/translate?auth_key=${authKey}`
      url += `&text=${encodeURIComponent(message)}`
      url += `&target_lang=${locale}`
      url += `&source_lang=${sourceLang}`

      urls.push(
        fetch(url).then(res =>
          res.json().then(data => {
            return data.translations[0].text
          })
        )
      )
    })

    return await Promise.all(urls).then(data => {
      // build the translatedText dataset
      let translatedText: any = {}
      locales.forEach((locale, idx) => {
        translatedText[locale] = data[idx]
      })

      // add the original translation
      translatedText[sourceLang] = message

      return translatedText
    })
  }

  const sendMessage = async (event: any) => {
    event.preventDefault()

    setDisabled(true)

    const translations = await getTranslations(message)

    // build temporary chat
    let chat = {
      created_at: firebase.firestore.Timestamp.now(),
      message: message,
      user_id: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      event_id: event_id,
      locale: i18n.language,
      // translations: translations
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

        firestore
          ?.collection("messages")
          .doc(docRef.id)
          .update({ translations: translations })
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
        <button className={styles.button} disabled={disabled}>
          {t("event.chat.send")}
        </button>
      </form>
    </div>
  )
}
