// imports
import { MarkdownRemark, MarkdownRemarkGroupConnection } from "./graphql-types"
import { SitePageContext } from "./graphql-types"
import { RouteComponentProps } from "@reach/router"

// extend gatsby data props for markdown content
export interface DataProps extends RouteComponentProps {
  data: {
    config: MarkdownRemark
    defaultConfig: MarkdownRemark
    cookies: MarkdownRemark
    defaultCookies: MarkdownRemark
    event?: MarkdownRemark
    defaultEvent?: MarkdownRemark
    events?: MarkdownRemarkGroupConnection
    defaultEvents?: MarkdownRemarkGroupConnection
    page?: MarkdownRemark
    defaultPage?: MarkdownRemark
  }
  pageContext: SitePageContext
}
