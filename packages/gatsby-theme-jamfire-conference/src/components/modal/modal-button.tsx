// import libs
import React from "react"

// import components
import { Button } from "./_styles"

export default ({ label, onClick, className }) => {
  return (
    <Button className={className} onClick={onClick}>
      {label}
    </Button>
  )
}
