// imports
import {
  MarkdownRemark,
  MarkdownRemarkEdge,
  MarkdownRemarkGroupConnection,
} from "./graphql-types"
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
    events?: EventsProps
    defaultEvents?: EventsProps
    page?: MarkdownRemark
    defaultPage?: MarkdownRemark
  }
  pageContext: PageContextProps
}

export interface PageContextProps extends SitePageContext {
  locale: string
  defaultLocale: string
  currentPage?: number
  numPages?: number
}

export interface EventsProps extends MarkdownRemarkGroupConnection {
  edges: Array<MarkdownRemarkEdge>
}
