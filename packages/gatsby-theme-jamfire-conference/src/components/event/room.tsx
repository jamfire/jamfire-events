/**
 * Docs
 *
 * https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe
 */

// import libs
import React, { useContext, useEffect, useState } from "react"
import { DateTime } from "luxon"
import { useMatch } from "@reach/router"
import { DEFAULT_LOCALE } from "../../utils/constants"
import { ClientProps } from "./_props"

// import components
import { Context } from "../../services/theme"
import Seo from "../seo"
import Missing from "../missing"
import { JitsiContainer } from "./_styles"

export default ({ config, event, locale, user }: ClientProps) => {
  const {
    frontmatter: {
      slug,
      title,
      eventInformation: { startTime },
      eventRooms,
    },
  } = event

  if (!eventRooms) {
    return (
      <JitsiContainer>
        <Missing />
      </JitsiContainer>
    )
  }

  const { setActiveRoom } = useContext(Context)

  const matchString =
    locale === DEFAULT_LOCALE
      ? `/event/${slug}/rooms/:room`
      : `/${locale}/event/${slug}/rooms/:room`

  const match = useMatch(matchString)

  const eventRoom = eventRooms.find(room => room.slug === match.room)

  // parse date
  const jsDate = new Date(startTime)
  const luxonDate = DateTime.fromMillis(jsDate.getTime())
  const yy = luxonDate.year
  const mm = luxonDate.month
  const dd = luxonDate.day

  const jitsiRoom = `${eventRoom.slug}-${yy}-${mm}-${dd}`

  const jitsiContainerId = "jitsi-container-id"

  const [jitsi, setJitsi] = useState({})

  const loadJitsiScript = () => {
    let resolveLoadJitsiScriptPromise = null

    const loadJitsiScriptPromise = new Promise(resolve => {
      resolveLoadJitsiScriptPromise = resolve
    })

    const script = document.createElement("script")
    script.src = `https://meet.jit.si/external_api.js`
    script.async = true
    script.onload = resolveLoadJitsiScriptPromise
    document.body.appendChild(script)

    return loadJitsiScriptPromise
  }

  const initilizeJitsi = async (cb?: any) => {
    if (!window.JitsiMeetExternalAPI) {
      await loadJitsiScript()
    }

    let options: any = {}

    options.parentNode = document.getElementById(jitsiContainerId)
    options.roomName = jitsiRoom

    options.configOverwrite = {
      disableDeepLinking: true,
      startWithAudioMuted: true,
      startWithVideoMuted: true,
      enableNoisyMicDetection: false,
      enableClosePage: false,
      enableWelcomPage: false,
      enableLayerSuspension: true,
      resolution: 480,
      constraints: {
        video: {
          height: {
            ideal: 480,
            max: 480,
            min: 240,
          },
        },
      },
      disableH264: true,
      liveStreamingEnabled: false,
      videoQuality: {
        disabledCodec: "H264",
      },
      requireDisplayName: true,
      disableInviteFunctions: true,
      doNotStoreRoom: true,
      notice:
        "If your web conference becomes unstable, try disabling your video.",
    }
    options.interfaceConfigOverwrite = {
      MOBILE_APP_PROMO: false,
      TOOLBAR_BUTTONS: [
        "microphone",
        "camera",
        "fodeviceselection",
        "hangup",
        "profile",
        "chat",
        "settings",
        "videoquality",
        "filmstrip",
        "feedback",
        "tileview",
        "help",
      ],
      TILE_VIEW_MAX_COLUMNS: 4,
      CONNECTION_INDICATOR_DISABLED: true,
      DEFAULT_LOCAL_DISPLAY_NAME: "me",
      DISABLE_VIDEO_BACKGROUND: true,
      RECENT_LIST_ENABLED: false,
      SHOW_JITSI_WATERMARK: false,
      SHOW_WATERMARK_FOR_GUESTS: false,
      TOOLBAR_ALWAYS_VISIBLE: true,
      SHOW_PROMOTIONAL_CLOSE_PAGE: false,
    }

    if (user) {
      options.userInfo = {
        email: user.email,
        displayName: user.displayName,
      }
    }

    const _jitsi = new window.JitsiMeetExternalAPI("meet.jit.si", options)

    setJitsi(_jitsi)
  }

  useEffect(() => {
    //jitsi?.dispose?.()
    initilizeJitsi()

    setActiveRoom(true)

    return () => jitsi?.dispose?.()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Seo config={config} activeTitle={`${eventRoom.title} | ${title}`} />
      <JitsiContainer id={jitsiContainerId} />
    </>
  )
}
