// import libs
import { MarkdownRemark, File } from "../../../gatsby/graphql-types"

// header props
export type HeaderProps = {
  config?: MarkdownRemark
  headerLogo?: File
  title?: string
  locale: string
}

// topbar props
export type TopbarProps = {
  isLoading: boolean
  isLoggedIn: boolean
  config: MarkdownRemark
}

// config props
export type configProps = {
  config: MarkdownRemark
  headerLogo?: File
  title?: string
}

// dark mode props
export type DarkModeProps = {
  config: MarkdownRemark
}
