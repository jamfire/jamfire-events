// import libs
import React from "react"
import { SidebarProps } from "./_props"

// import components
import { Sidebar } from "./_styles"

export default ({ children }: SidebarProps) => {
  return <Sidebar>{children}</Sidebar>
}
