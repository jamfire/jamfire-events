// import libs
import styled from "@emotion/styled"
import mq from "../../../utils/media"

// import props
import { IconProps } from "./_props"

// map wrapper component
export const MapWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 160px);
  position: relative;
  z-index: 2;

  ${mq("tablet_up")} {
    height: calc(100vh - 160px);
  }

  .leaflet-container {
    height: 100%;
    position: relative;
    z-index: 2;
  }

  .leaflet-div-icon {
		background: transparent;
		border: none;
	}

	svg {height: auto, width: auto}
`

export const IconWrapper = styled.div<IconProps>`
  height: ${props => `calc(16px * (${props.size}/100) + 16px)`};
  width: ${props => `calc(16px * (${props.size}/100) + 16px)`};
  transition: all 85ms ease-out;
`

export const IconBackground = styled.div`
  height: 100%;
  width: 100%;
  background: var(--logo-background);
  opacity: 0.35;
  border-radius: 100%;
  z-index: 2;
  transition: all 85ms ease-out;
`
