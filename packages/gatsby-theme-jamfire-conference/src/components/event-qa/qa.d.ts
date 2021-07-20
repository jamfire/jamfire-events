import {
  MarkdownRemark,
  MarkdownRemarkFrontmatterEventQa,
} from "../../gatsby/graphql-types"
import { RouteComponentProps } from "@reach/router"

export interface QAProps extends RouteComponentProps {
  config: MarkdownRemark | undefined
  event: MarkdownRemark | undefined
  path?: string
  locale: string
}

export interface QAItem {
  item: MarkdownRemarkFrontmatterEventQa
}
