import firebase from "firebase/app"
import {
  MarkdownRemark,
  MarkdownRemarkFrontmatterSocialLogin,
} from "../../gatsby/graphqlTypes"

// profile props
export type ProfileProps = {
  isLoggedIn: boolean
  isLoading: boolean
  profile?: firebase.User
}

// login provider props
export type LoginProviderProps =
  | firebase.auth.FacebookAuthProvider
  | firebase.auth.GoogleAuthProvider
  | firebase.auth.TwitterAuthProvider
  | firebase.auth.GithubAuthProvider

// form values interface
export interface FormValues {
  email: string
  password: string
  passwordConfirmation: string
}

// user props
export type UserProps = {
  isLoading: boolean
  isLoggedIn: boolean
}

// login header props
export type LoginHeaderProps = {
  config: MarkdownRemark
}

// login modal props
export type LoginModalProps = {
  config: MarkdownRemark
}

// social login props
export type SocialLoginProps = {
  socialLogin: MarkdownRemarkFrontmatterSocialLogin
}
