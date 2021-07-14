// import styles
import styled from "@emotion/styled"
import mq from "../../../utils/media"

// styled header
export const StyledHeader = styled.div`
  grid-area: header;

  display: grid;
  grid-template-columns: 1fr 80px 60px;
  grid-template-areas: "branding topbar profile";
  grid-gap: 0;

  ${mq("tablet_up")} {
    grid-template-columns: 100px 1fr 1fr;
    grid-template-areas: "profile branding topbar";
  }
`

// topbar component
export const Topbar = styled.div`
  grid-area: topbar;
  background: var(--logo-background);

  display: flex;
  justify-content: flex-end;
  grid-template-areas: "user";

  ${mq("tablet_up")} {
    padding: 0 2rem;
  }
`

// branding component
export const Branding = styled.div`
  grid-area: branding;

  background: var(--logo-background);
  color: var(--logo-color);
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 80px;

  h1 {
    margin: 0;
    padding: 0;
    color: var(--logo-color);
    line-height: 1;
    font-size: 1.65rem;

    a {
      text-decoration: none;
      color: var(--logo-color);
    }
  }

  ${mq("tablet_up")} {
    padding: 0 2rem;
  }
`

// container component
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 75px;
`

// icon component
export const Icon = styled.div`
  color: #fff;
  text-align: center;

  .sun {
    vertical-align: -0.25rem;
  }

  .moon {
    vertical-align: -0.25rem;
  }
`
