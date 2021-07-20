// import libs
import { MarkdownRemark } from "../../gatsby/graphql-types"

// navigation props
export interface NavigationProps {
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
export interface SiteNavigationProps {
  navigation: NavigationProps[]
  config: MarkdownRemark | undefined
}

// navlink props
export interface NavLinkProps {
  locale: string
  link: NavigationProps
}
