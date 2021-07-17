// import styles
import styled from "@emotion/styled"
import mq from "../../utils/media"

// styled switcher
export const LanguageSwitcher = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${mq("tablet_up")} {
    margin-left: 1rem;
  }
`

export const Switcher = styled.div`
  width: 2.5rem;
  height: 28px;
  background: var(--logo-hover);
  color: var(--logo-color);
  border-radius: 4px;
  padding: 2px 0;
  transition: 85ms all ease-out;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
`

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

export const Title = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;

  h3 {
    margin: 0;
    color: var(--logo-color);
  }
`

export const LocalWrapper = styled.div`
  background: var(--content-background);
  display: grid;
  grid-template-columns: 1fr;
  padding: 2rem;
  grid-gap: 1rem;
  margin: -2rem;
  padding: 2rem;
  max-height: 80vh;

  ${mq("tablet_up")} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
  }

  ${mq("tablet_side")} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  ${mq("desktop")} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`

export const Language = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  height: 50px;
  cursor: pointer;

  &:hover {
    .code {
      background: var(--logo-hover);
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    .label {
      background: var(--content-background-hover);
    }
  }

  &.active {
    .code {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    .label {
      background: var(--content-background-hover);
    }
  }
`

export const Code = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--logo-background);
  color: var(--logo-color);
  text-transform: uppercase;
  transition: all 85ms ease-out;
  border-radius: 4px;
`

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
  transition: all 85ms ease-out;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  line-height: 1.2;

  .language {
  }

  .localized {
    font-size: 0.8rem;
    font-style: italic;
  }
`
