// import libs
import { MarkdownRemark } from "../../gatsby/graphql-types"
import { RouteComponentProps } from "@reach/router"

// client props
export interface ClientProps extends RouteComponentProps {
  config?: MarkdownRemark
  event?: MarkdownRemark
  defaultEventID?: string
  basePath?: string
  locale: string
  defaultEventID?: string
}
