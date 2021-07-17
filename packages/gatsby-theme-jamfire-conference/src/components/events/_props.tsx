// import libs
import { MarkdownRemark } from "../../gatsby/graphql-types"

// event summary type
export type EventSummaryProps = {
  event: {
    node: MarkdownRemark
  }
  locale: string
}
