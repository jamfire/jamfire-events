// import libs
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { DEFAULT_LOCALE } from "../../utils/constants"
import {
  RoomsProps,
  RoomItemProps,
  RoomItemImageProps,
  JoinButtonProps,
} from "./rooms.d"

// import components
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { List, ListItem } from "../list"
import Missing from "../missing"
import RoomsSearch from "../event-rooms-search/rooms-search"
import { GoLinkExternal } from "react-icons/go"

// import styles
import * as styles from "./rooms.module.scss"

export default ({ config, event, locale }: RoomsProps) => {
  const { title, eventRooms, eventSettings } = event?.frontmatter || {}

  const [activeRooms, setActiveRooms] = useState("")

  const { t } = useTranslation()

  // set the room name for search
  const setRoomName = (search: string) => {
    setActiveRooms(search.toLocaleLowerCase())
  }

  // filter rooms
  const filterRooms: (room: string) => boolean = (room: any) => {
    if (
      room.title.toLowerCase().includes(activeRooms) ||
      room.description.toLowerCase().includes(activeRooms) ||
      room.slug.toLowerCase().includes(activeRooms) ||
      room.roomType.toLowerCase().includes(activeRooms) ||
      room.roomLocale.toLowerCase().includes(activeRooms)
    ) {
      return true
    }
    return false
  }

  // no event rooms
  if (!eventRooms) return <Missing fontSize={4} />

  const pageTitle = eventSettings?.roomsLabel || t("navigation.rooms")

  return (
    <List>
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
      <EndItem />
    </List>
  )
}

const EndItem = () => {
  const { t } = useTranslation()

  return (
    <ListItem>
      <div className={styles.endItem} />
    </ListItem>
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
        <div className={styles.roomJoin}>
          <div className={styles.roomType}>
            {room.roomType && <span>{room.roomType}</span>}
            {room.roomLocale && <span>{room.roomLocale}</span>}
          </div>
          <JoinButton room={room} basePath={basePath} />
        </div>
      </div>
      <div className={styles.roomDescription}>
        <div>
          {room.title && <p className={styles.title}>{room.title}</p>}
          {room.description && (
            <p className={styles.description}>{room.description}</p>
          )}
        </div>
      </div>
    </ListItem>
  )
}

const JoinButton = ({ room, basePath }: JoinButtonProps) => {
  const { t } = useTranslation()

  // embedded jitsi type
  if (room.roomType === "jitsi") {
    return (
      <Link className={styles.joinButton} to={`${basePath}rooms/${room.slug}/`}>
        {t("buttons.join")}
      </Link>
    )
  }
  // non jitsi meeting
  else {
    return (
      <a
        className={styles.joinButton}
        href={room.roomUrl || "#"}
        target="_blank"
        rel="noreferrer"
      >
        {t("buttons.join")} <GoLinkExternal className={styles.externalLink} />
      </a>
    )
  }
}

const RoomItemImage = ({ room }: RoomItemImageProps) => {
  const { title, image } = room || {}

  // @ts-expect-error
  const length = Object.keys(image).length

  if (length === 0) {
    return (
      <div className={styles.roomImage}>
        <span>{room.title.charAt(0)}</span>
      </div>
    )
  }

  return (
    <div className={styles.roomImage}>
      <GatsbyImage
        className={styles.gatsbyImageWrapper}
        image={image?.childImageSharp?.gatsbyImageData}
        alt={title}
      />
    </div>
  )
}
