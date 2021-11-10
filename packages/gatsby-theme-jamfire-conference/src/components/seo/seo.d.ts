// import libs
import { MarkdownRemark } from "../../gatsby/graphql-types"

// seo type props
export interface SeoProps {
  config?: MarkdownRemark
  activeTitle?: string
  activeFavicon?: any
  locale: string
  event?: MarkdownRemark
}
