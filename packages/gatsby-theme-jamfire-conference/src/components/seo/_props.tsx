// import libs
import { MarkdownRemark } from "../../../gatsby/graphql-types"

// seo type props
export type SeoProps = {
  config: MarkdownRemark
  activeTitle?: string
  activeFavicon?: any
  locale: string
}
