import firebase from "firebase/app"

// profile props
export interface AvatarProps {
    isLoggedIn: boolean
    isLoading: boolean
    profile: firebase.User | null
}
  