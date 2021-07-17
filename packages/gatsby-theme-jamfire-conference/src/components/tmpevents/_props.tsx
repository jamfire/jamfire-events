// import libs
import { MarkdownRemark } from "../../gatsby/graphqlTypes"

// event summary type
export type EventSummaryProps = {
  event: {
    node: MarkdownRemark
  }
  locale: string
}
