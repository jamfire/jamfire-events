// import styles
import styled from "@emotion/styled"
import mq from "../../utils/media"

// import components
import { GatsbyImage } from "gatsby-plugin-image"

// events wrapper component
export const EventsWrapper = styled.div`
  background: var(--content-background);
  min-height: 100%;
`

// events component
export const Events = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  position: relative;
  padding: 1rem;

  ${mq("tablet_up")} {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    padding: 2rem;
  }

  ${mq("tablet_side")} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

// event component
export const Event = styled.div`
  background: var(--callout-background);
  border-radius: 4px;
  cursor: pointer;
`

// summary component
export const Summary = styled.div`
  padding: 1rem;

  h2 {
    font-size: 1.8rem;
    margin: 0 0 0.5rem;
  }

  ul {
    list-style: none;
    margin: 0;

    li {
      margin-bottom: 0;

      .start {
      }
      .end {
      }
    }
  }

  ${mq("tablet_up")} {
    padding: 2rem;
  }
`

// featured image component
export const FeaturedImage = styled.div`
  height: 20vh;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background: var(--content-background-darker);

  ${mq("tablet_up")} {
    height: 30vh;
  }
`

// background component
export const Background = styled(GatsbyImage)`
  height: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`
