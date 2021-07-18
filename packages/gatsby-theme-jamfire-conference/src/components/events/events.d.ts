// import libs
import { MarkdownRemark } from "../../gatsby/graphql-types"

// event summary type
export interface EventSummaryProps {
  event: {
    node: MarkdownRemark
  }
  locale: string
}
