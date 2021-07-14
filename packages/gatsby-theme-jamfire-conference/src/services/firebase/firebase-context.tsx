// import libs
import { createContext } from "react"
import firebase from "firebase/app"

// firebase context data
export interface FirebaseContextData {
  firebase: firebase.app.App | null
  firestore: firebase.firestore.Firestore | null
  isLoading: boolean
  isLoggedIn: boolean
  profile: firebase.User | null
  authToken: string | null
  setAuthToken: (authToken: string) => void
  logout: () => void
}

// firebase context
const FirebaseContext = createContext<FirebaseContextData>({
  firebase: null,
  firestore: null,
  authToken: null,
  profile: null,
  isLoading: true,
  isLoggedIn: false,
  setAuthToken: () => {},
  logout: () => {},
})

export default FirebaseContext
