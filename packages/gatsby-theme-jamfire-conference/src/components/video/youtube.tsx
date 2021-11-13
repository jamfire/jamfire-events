// import libs
import React, { useState } from "react"
import { VideoProps } from "./youtube.d"
import YouTube, { Options } from "react-youtube"
import { useTranslation } from "react-i18next"

// import components
import { FaVolumeUp, FaPlay } from "react-icons/fa"

// import styles
import * as styles from "./youtube.module.scss"

export default ({ videoID, locale }: VideoProps) => {
  const [muted, setMuted] = useState(true)
  const [player, setPlayer] = useState(null)
  const [playing, setPlaying] = useState(true)

  const { t } = useTranslation()

  const onReady = (event: any) => {
    setPlayer(event.target)
    event.target.mute()
    event.target.playVideo()
    event.target.setVolume(100)
  }

  const onPause = (event: any) => {
    setPlaying(false)
  }

  const controlMute = () => {
    setMuted(!muted)
    if (player) {
      if (muted) {
        // @ts-expect-error
        player.unMute()
      }
      if (!muted) {
        // @ts-expect-error
        player.mute()
      }
    }
  }

  const playVideo = () => {
    if (player) {
      // @ts-expect-error
      player.playVideo()
      setPlaying(true)
    }
  }

  const opts: Options = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      cc_load_policy: 1,
      // @ts-expect-error
      cc_lang_pref: locale,
      controls: 0,
    },
  }

  return (
    <div className={styles.video}>
      <YouTube
        id="main-stage-video"
        videoId={videoID}
        opts={opts}
        onReady={onReady}
        onPause={onPause}
      />
      <div className={styles.secondaryControls}>
        {muted && (
          <button className={styles.button} onClick={() => controlMute()}>
            <FaVolumeUp /> {muted ? t("video.soundOn") : t("video.soundOff")}
          </button>
        )}
        {!playing && (
          <button className={styles.button} onClick={() => playVideo()}>
            <FaPlay /> {muted ? t("video.playVideo") : t("video.stopVideo")}
          </button>
        )}
      </div>
    </div>
  )
}
