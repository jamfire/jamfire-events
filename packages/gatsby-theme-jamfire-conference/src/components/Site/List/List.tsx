// import libs
import React from "react"
import { ListProps, ListItemProps } from "./_props"

// import components
import { StyledList, StyledListItem } from "./_styles"

export const List = ({ children }: ListProps) => {
  return <StyledList tabIndex={0}>{children}</StyledList>
}

export const ListItem = ({ children }: ListItemProps) => {
  return <StyledListItem>{children}</StyledListItem>
}
