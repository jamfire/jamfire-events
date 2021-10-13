// import libs
import { MarkdownRemark, Maybe, File } from "../../gatsby/graphql-types"

// header props
export interface HeaderProps {
  config?: MarkdownRemark
  event?: MarkdownRemark
  headerLogo?: Maybe<File>
  title: string | null
  locale: string
}
