// imports
import {
  MarkdownRemark,
  MarkdownRemarkEdge,
  MarkdownRemarkGroupConnection,
} from "./graphql-types"
import { SitePageContext } from "./graphql-types"
import { RouteComponentProps } from "@reach/router"

// data props for templates
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

// extend page context interface
export interface PageContextProps extends SitePageContext {
  locale: string
  defaultLocale: string
  currentPage?: number
  numPages?: number
}

// event props interface
export interface EventsProps extends MarkdownRemarkGroupConnection {
  edges: Array<MarkdownRemarkEdge>
}
