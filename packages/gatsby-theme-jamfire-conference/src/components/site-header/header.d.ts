// import libs
import { MarkdownRemark, File } from "../../gatsby/graphql-types"

// header props
export interface HeaderProps {
  config?: MarkdownRemark
  headerLogo?: File
  title: string | null
  locale: string
}
