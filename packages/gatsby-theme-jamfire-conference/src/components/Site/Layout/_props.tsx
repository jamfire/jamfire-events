// import libs
import { MarkdownRemark } from "../../../gatsby/graphqlTypes"

// layout props
export interface LayoutProps {
  children: any
  title: string | null
  config?: MarkdownRemark
  cookies?: MarkdownRemark
  event?: MarkdownRemark
  headerLogo?: File | null
  favicon?: File | null
  useHeaderTitle?: boolean
  locale: string
}
