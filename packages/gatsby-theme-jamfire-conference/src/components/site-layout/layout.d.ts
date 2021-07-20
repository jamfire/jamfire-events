// import libs
import { MarkdownRemark, Maybe, File } from "../../gatsby/graphql-types"

// layout props
export interface LayoutProps {
  children: any
  title: string | null
  config?: MarkdownRemark | undefined
  cookies?: MarkdownRemark | undefined
  event?: MarkdownRemark | undefined
  headerLogo?: Maybe<File>
  favicon?: Maybe<File>
  useHeaderTitle?: boolean
  locale: string
}
