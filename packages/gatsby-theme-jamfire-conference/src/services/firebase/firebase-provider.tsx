// import libs
import React, {
  FC,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { checkIsClient } from "../../utils/check-is-client"
import { getFirebase } from "./get-firebase-instance"
import { FirebaseContextData } from "./firebase"

// import components
import FirebaseContext from "./firebase-context"

// firebase provider
const FirebaseProvider: FC<FirebaseContextData> = ({ children }) => {
  // check if is browser
  const isClient: boolean = useMemo(() => checkIsClient(), [])

  // state management
  const [firebase, setFirebase] = useState<firebase.app.App | null>(null)
  const [firestore, setFirestore] =
    useState<firebase.firestore.Firestore | null>(null)
  const [auth, setAuth] = useState<firebase.auth.Auth | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [profile, setProfile] = useState<firebase.User | null>(null)
  const [authToken, setAuthToken]: [
    string | null,
    Dispatch<SetStateAction<string | null>>
  ] = useState(isClient ? window.localStorage.getItem("authToken") : null)

  // set auth token to local storage and state
  const onSetAuthToken = (token: string | null) => {
    setAuthToken(token)
    if (token) {
      localStorage.setItem("authToken", token)
    }
  }

  // logout of firebase
  const logout = () => {
    console.log("logout")
    if (isClient && auth) {
      auth.signOut()
      localStorage.removeItem("authToken")
    }
  }

  // set firebase instance
  useEffect(() => {
    const firebaseInstance = getFirebase()
    setFirebase(firebaseInstance)

    if (firebaseInstance) {
      setFirestore(firebaseInstance.firestore())
      setIsLoading(false)

      let auth: firebase.auth.Auth
      if (isClient) {
        auth = firebaseInstance.auth()
        setAuth(auth)
      }
    }
  }, [])

  // get the logged in user
  useEffect(() => {
    if (isClient && auth) {
      // Listen for auth state changes
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          setProfile(user)
          setIsLoggedIn(true)
        } else {
          setProfile(null)
          setIsLoggedIn(false)
        }
      })

      // Unsubscribe to the listener when unmounting
      return () => {
        unsubscribe()
      }
    }
  }, [auth])

  // get the token
  useEffect(() => {
    if (isClient && !authToken) {
      const token = window.localStorage.getItem("authToken")

      if (token) {
        onSetAuthToken(token)
      }
    }
  }, [authToken, isClient])

  return (
    <FirebaseContext.Provider
      value={{
        authToken,
        firebase,
        firestore,
        isLoading,
        isLoggedIn,
        profile,
        logout,
        setAuthToken: onSetAuthToken,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseProvider
