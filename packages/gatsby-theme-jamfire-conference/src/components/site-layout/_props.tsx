// import libs
import { MarkdownRemark } from "../../../gatsby/graphql-types"

// layout props
export interface LayoutProps {
  children: any
  title: string | null
  config?: MarkdownRemark
  cookies?: MarkdownRemark
  event?: MarkdownRemark | null
  headerLogo?: File | null
  favicon?: File | null
  useHeaderTitle?: boolean
  locale: string
}
