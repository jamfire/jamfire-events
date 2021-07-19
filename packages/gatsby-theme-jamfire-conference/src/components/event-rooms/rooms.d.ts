import { MarkdownRemark } from "../../gatsby/graphql-types"

export interface RoomsProps {
    config: MarkdownRemark
    event: MarkdownRemark
    locale: string
}


// room item props
export interface RoomItemProps {
    room: any
    event: MarkdownRemark
    locale: string
}