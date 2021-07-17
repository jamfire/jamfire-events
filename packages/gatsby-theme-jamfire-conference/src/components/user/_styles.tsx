import styled from "@emotion/styled"
import mq from "../../utils/media"

export const StyledAvatar = styled.div`
  grid-area: profile;
  position: relative;
  display: flex;
  background: var(--logo-background);
  justify-content: center;
  align-items: center;

  ${mq("tablet_up")} {
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    background: transparent;
  }

  ${mq("desktop")} {
    grid-gap: 1rem;
    grid-template-columns: 1fr 40px;
  }
`

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: var(--content-background);
  color: var(--nav-anchor-color);
  cursor: pointer;

  &:hover {
    background: var(--content-background-hover);
  }

  &.cursor {
    cursor: pointer;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    margin-bottom: 0;
    border: 1px solid var(--logo-color);
    box-sizing: content-box;
  }
`

// styled social logins
export const SocialLogins = styled.div``

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

// styled login button
export const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 0.5rem;
  cursor: pointer;
  margin-right: 5px;
  margin-bottom: 5px;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 4px;
  background: var(--form-button-bg);
  color: var(--form-button-color);

  &:hover {
    background: var(--form-button-bg-hover);
    color: var(--form-button-color-hover);
  }
`

// styled login form
export const LoginForm = styled.div``

// styled input wrapper component
export const FieldWrapper = styled.div`
  margin-bottom: 1rem;
`

// error component
export const FormError = styled.div`
  padding: 0.5rem 1rem 0;
  color: var(--form-error-color);
  font-style: italic;
  font-size: 0.85rem;
`

// styled input component
export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid var(--form-border);
  box-sizing: border-box;
  outline: 0;
  border-radius: 4px;
  background: var(--form-input-background);
  color: var(--form-input-color);
`

// styled button component
export const Button = styled.button`
  border-radius: 4px;
  outline: 0;
  border: 0;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background: var(--form-button-bg);
  color: var(--form-button-color);

  &:hover {
    background: var(--form-button-bg-hover);
    color: var(--form-button-color-hover);
  }
`

// toggle button component
export const Toggle = styled.button`
  outline: 0;
  border: 0;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background: none;
  color: var(--form-button-color);
`

// styled user
export const StyledUser = styled.div`
  display: none;

  ${mq("tablet_up")} {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }

  button {
    background: var(--logo-hover);
    border: none;
    border-radius: 4px;
    padding: 1px 0.75rem;
    outline: none;
    cursor: pointer;
    color: var(--logo-color);

    &.logout {
      display: none;

      ${mq("tablet_up")} {
        display: block;
      }
    }
  }
`

// styled login header
export const LoginHeader = styled.div`
  background: var(--logo-background);
  color: var(--logo-color);
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  padding: 1rem 2rem;

  display: grid;
  grid-template-columns: 2fr 1fr;

  h3 {
    display: flex;
    height: 100%;
    align-items: center;
    color: var(--logo-color);
  }
`

// styled title component
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

// styled modal component
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`

// login wrapper component
export const LoginWrapper = styled.div`
  background: var(--content-background);
  display: grid;
  grid-template-columns: 1fr;
  width: 90vw;
  margin: -2rem;
  padding: 2rem;

  ${mq("tablet_up")} {
    grid-template-columns: 3fr 2fr;
    grid-gap: 2rem;
    width: 50vw;
  }
`
