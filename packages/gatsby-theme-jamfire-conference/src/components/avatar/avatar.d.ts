import firebase from "firebase/compat/app"

// profile props
export interface AvatarProps {
  isLoggedIn: boolean
  isLoading: boolean
  profile: firebase.User | null
}
