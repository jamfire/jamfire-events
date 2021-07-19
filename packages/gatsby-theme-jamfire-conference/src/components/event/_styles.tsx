// import libs
import styled from "@emotion/styled"
import mq from "../../utils/media"
import { ContentStyleProps } from "./event.d"
import { Link } from "gatsby"

// event component
export const Event = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "featured-image"
    "content";
  position: relative;

  ${mq("tablet_side")} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "content featured-image";
    height: calc(100vh - 160px);
  }
`

// content component
export const Content = styled.div<ContentStyleProps>`
  grid-area: content;
  padding: ${props => (props.padding ? "2rem" : "0")};

  ${mq("tablet_side")} {
    overflow-y: scroll;
    height: fill-available;
    height: 100%;
    border-right: 1px solid var(--border-color);
  }

  .event-times {
    background: var(--content-background);
    border-radius: 4px;
    list-style: none;
    margin-left: 0;
    padding: 0.5rem 1rem;
    border-radius: 4px;

    li {
      margin: 0;
    }
  }
`

// featured image component
export const FeaturedImage = styled.div`
  height: 40vh;
  background: var(--content-background);
  grid-area: featured-image;

  ${mq("tablet_side")} {
    height: calc(100vh - 160px);
  }

  .gatsby-image-wrapper {
    height: 40vh;

    ${mq("tablet_side")} {
      height: calc(100vh - 160px);
      width: 100%;
    }
  }
`

// livestream wrapper
export const LivestreamWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
    margin: 0;
  }
`

// qa item component
export const QAItem = styled.div`
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: 30px 1fr;
  grid-gap: 0.5rem;

  &.question {
    background: var(--qa-header-color);
  }

  &.answer {
    padding-bottom: 1.5rem;
  }

  .text {
    margin-top: 3px;
  }
`

// qa circle component
export const QACircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background: var(--list-header-background-callout);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 12px;

  &.primary {
    background: var(--logo-background);
    color: var(--logo-color);
  }

  &.secondary {
    background: var(--qa-secondary-background);
    color: var(--qa-secondary-color);
  }
`

// jitsi container
export const JitsiContainer = styled.div`
  background: #374e62;
  height: calc(100vh - 80px);

  iframe {
    height: 100%;
  }

  ${mq("tablet_up")} {
    height: calc(100vh - 160px);
  }
`

// styled button
export const Button = styled.button`
  border: 0;
  outline: 0;
  background: var(--button-background);
  margin-right: 5px;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  color: var(--text-color);

  &:hover {
    background: var(--button-background-hover);
    color: var(--button-text-hover);
  }
`

// header component
export const Header = styled.div`
  background: var(--logo-background);
  color: var(--logo-color);
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  padding: 1rem 2rem;

  display: grid;
  grid-template-columns: 2fr 1fr;

  h3 {
    display: flex;
    align-items: center;
    color: var(--logo-color);
    height: 100%;
  }
`



