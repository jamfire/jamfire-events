import { MarkdownRemark } from "../../gatsby/graphql-types"
import { RouteComponentProps } from "@reach/router"

export interface LobbyProps extends RouteComponentProps {
  config?: MarkdownRemark
  event?: MarkdownRemark
  locale: string
}
