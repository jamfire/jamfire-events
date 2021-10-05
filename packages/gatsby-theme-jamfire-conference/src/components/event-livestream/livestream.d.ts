import { MarkdownRemark } from "../../gatsby/graphql-types"

export interface LivestreamProps {
  event: MarkdownRemark | undefined
  locale: string
}
