import firebase from "firebase/app"
import { MarkdownRemarkFrontmatterSocialLogin } from "../../gatsby/graphql-types"

// social login props
export interface SocialLoginProps {
  socialLogin?: MarkdownRemarkFrontmatterSocialLogin | null
}

// login provider props
export type LoginProviderProps =
  | firebase.auth.FacebookAuthProvider
  | firebase.auth.GoogleAuthProvider
  | firebase.auth.TwitterAuthProvider
  | firebase.auth.GithubAuthProvider
