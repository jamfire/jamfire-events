// import libs
import styled from "@emotion/styled"

// button component
export const Button = styled.a`
  background: var(--button-background);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  transition: all 85ms ease-out;

  &:hover {
    background: var(--logo-background);
    color: var(--logo-color);
    text-decoration: none;
  }
`
