// import libs
import styled from "@emotion/styled"
import mq from "../../utils/media"
import { CopyrightStyleProps } from "./_props"

// styled footer component
export const StyledFooter = styled.footer`
  display: none;

  ${mq("tablet_up")} {
    grid-area: footer;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-areas: "tracker-wrapper copyright";
    padding: 0 2rem;
    height: 80px;
    border-top: 1px solid var(--border-color);
    box-sizing: border-box;
  }
`
// styled tracker wrapper element
export const TrackerWrapper = styled.div`
  grid-area: tracker-wrapper;
  margin: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

// styled copyright element
export const Copyright = styled("p")<CopyrightStyleProps>`
  grid-area: copyright;
  margin: 0;
  display: flex;
  justify-content: ${props => (props.mobile ? "flex-start" : "flex-end")};
  padding-left: ${props => (props.mobile ? "1rem" : 0)};
  align-items: center;

  ${mq("tablet_up")} {
    display: ${props => (props.mobile ? "none" : "flex")};
  }
`
