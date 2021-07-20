// import libs
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { DEFAULT_LOCALE } from "../../utils/constants"
import { RoomsProps, RoomItemProps, RoomItemImageProps } from "./rooms.d"

// import components
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Seo from "../seo"
import { List, ListItem } from "../list"
import Missing from "../missing"
import RoomsSearch from "../event-rooms-search/rooms-search"

// import styles
import * as styles from "./rooms.module.scss"

export default ({ config, event, locale }: RoomsProps) => {
  const { title, eventRooms, eventSettings } = event?.frontmatter || {}

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
        activeTitle={`${eventSettings?.roomsLabel} | ${title}`}
        locale={locale}
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
  const { slug } = event?.frontmatter || {}

  const basePath =
    locale === DEFAULT_LOCALE ? `/event/${slug}/` : `/${locale}/event/${slug}/`

  const { t } = useTranslation()

  return (
    <ListItem>
      <div className={styles.roomHeader}>
        <RoomItemImage room={room} />
        <div />
        <Link
          className={styles.joinButton}
          to={`${basePath}rooms/${room.slug}/`}
        >
          {t("buttons.join")}
        </Link>
      </div>
      <div className={styles.roomDescription}>
        {room.title && <p className={styles.title}>{room.title}</p>}
        {room.description && (
          <p className={styles.description}>{room.description}</p>
        )}
      </div>
    </ListItem>
  )
}

const RoomItemImage = ({ room }: RoomItemImageProps) => {
  const { title, image } = room

  return (
    <div className={styles.roomImage}>
      {image && (
        <GatsbyImage
          className={styles.gatsbyImageWrapper}
          image={image?.childImageSharp?.gatsbyImageData}
          alt={title}
        />
      )}
      {!image && <span>{room.title.charAt(0)}</span>}
    </div>
  )
}
