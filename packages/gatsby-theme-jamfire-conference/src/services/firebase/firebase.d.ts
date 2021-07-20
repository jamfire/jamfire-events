import firebase from "firebase/app"

// firebase context data
export interface FirebaseContextData {
  firebase: firebase.app.App | null
  firestore: firebase.firestore.Firestore | null
  isLoading: boolean
  isLoggedIn: boolean
  profile: firebase.User | null
  authToken: string | null
  setAuthToken: (authToken: string | null) => void
  logout: () => void
}
