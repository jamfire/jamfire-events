import {
  MarkdownRemark,
  MarkdownRemarkFrontmatterEventRoom,
} from "../../gatsby/graphql-types"
import { RouteComponentProps } from "@reach/router"

export interface RoomsProps extends RouteComponentProps {
  config: MarkdownRemark | undefined
  event: MarkdownRemark | undefined
  locale: string
}

// room item props
export interface RoomItemProps {
  room: MarkdownRemarkFrontmatterEventRoom
  event: MarkdownRemark | undefined
  locale: string
}

// room item image props
export interface RoomItemImageProps {
  room: MarkdownRemarkFrontmatterEventRoom
}
