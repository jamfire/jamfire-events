import styled from "@emotion/styled"
import mq from "../../utils/media"

export const StyledHome = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "home-image"
    "home-content";
  position: relative;

  ${mq("tablet_side")} {
    height: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "home-content home-image";
  }
`

export const Content = styled.div`
  grid-area: home-content;
  padding: 1rem;

  ${mq("tablet_side")} {
    padding: 2rem;
    height: 100%;
    overflow-y: scroll;
  }
`

export const FeaturedImage = styled.div`
  grid-area: home-image;
  height: 40vh;
  background: var(--content-background);

  ${mq("tablet_side")} {
    height: calc(100vh - 160px);
  }

  .gatsby-image-wrapper {
    height: 40vh;

    ${mq("tablet_side")} {
      height: calc(100vh - 160px);
    }
  }
`
