// import libs
import { MarkdownRemark } from "../../../gatsby/graphqlTypes"

// seo type props
export type SeoProps = {
  config: MarkdownRemark
  activeTitle?: string
  activeFavicon?: any
  locale?: string
}
