// import types
import { MarkdownRemark } from "../../gatsby/graphql-types"

// topbar props
export type TopbarProps = {
  isLoading: boolean
  isLoggedIn: boolean
  config?: MarkdownRemark
}
