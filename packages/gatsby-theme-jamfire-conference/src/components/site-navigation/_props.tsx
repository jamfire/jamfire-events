// import libs
import { MarkdownRemark } from "../../../gatsby/graphql-types"

// navigation props
export type NavigationProps = {
  title: string
  to: string
  className: string
  icon: any
  partiallyActive: boolean
  translate?: boolean
  enabled?: boolean
  cb?: () => void
}

// navigation props
export type SiteNavigationProps = {
  navigation: NavigationProps[]
  config: MarkdownRemark
}

// navlink props
export type NavLinkProps = {
  locale: string
  link: NavigationProps
}
