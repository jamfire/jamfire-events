// import libs
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { DEFAULT_LOCALE } from "../../utils/constants"
import { ClientProps, RoomItemProps } from "./_props"

// import components
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../Site/Seo"
import { List, ListItem } from "../Site/List"
import Missing from "../Site/Missing"
import RoomsSearch from "./RoomsSearch"
import { RoomHeader, RoomDescription, RoomImage, JoinButton } from "./_styles"

export default ({ config, event, locale }: ClientProps) => {
  const {
    frontmatter: { title, eventRooms, eventSettings },
  } = event

  const [activeRooms, setActiveRooms] = useState("")

  // set the room name for search
  const setRoomName = (search: string) => {
    setActiveRooms(search)
  }

  // filter rooms
  const filterRooms: (room: string) => boolean = (room: any) => {
    if (
      room.title.includes(activeRooms) ||
      room.description.includes(activeRooms) ||
      room.slug.includes(activeRooms)
    ) {
      return true
    }
    return false
  }

  // no event rooms
  if (!eventRooms) return <Missing fontSize={4} />

  return (
    <List>
      <Seo
        config={config}
        activeTitle={`${eventSettings.roomsLabel} | ${title}`}
      />
      <ListItem>
        <RoomsSearch setRoomName={setRoomName} />
      </ListItem>
      {eventRooms &&
        eventRooms.map((room: any, key: number) => {
          if (filterRooms(room)) {
            return (
              <RoomItem key={key} room={room} event={event} locale={locale} />
            )
          }
        })}
    </List>
  )
}

const RoomItem = ({ room, event, locale }: RoomItemProps) => {
  const {
    frontmatter: { slug },
  } = event

  const basePath =
    locale === DEFAULT_LOCALE ? `/event/${slug}/` : `/${locale}/event/${slug}/`

  const { t } = useTranslation()

  return (
    <ListItem>
      <RoomHeader>
        <RoomItemImage room={room} />
        <div />
        <JoinButton to={`${basePath}rooms/${room.slug}/`}>
          {t("buttons.join")}
        </JoinButton>
      </RoomHeader>
      <RoomDescription>
        {room.title && <p className="title">{room.title}</p>}
        {room.description && <p className="description">{room.description}</p>}
      </RoomDescription>
    </ListItem>
  )
}

const RoomItemImage = ({ room }) => {
  const { title, image } = room

  return (
    <RoomImage>
      {image && (
        <GatsbyImage
          image={image.childImageSharp.gatsbyImageData}
          alt={title}
        />
      )}
      {!image && <span>{room.title.charAt(0)}</span>}
    </RoomImage>
  )
}
