// import libs
import React, { useEffect, useState } from "react"
import { ErrorProps } from "./_props"

// import components
import { Error } from "./_styles"

// error component
export default ({ children }: ErrorProps) => {
  const [showError, setShowError] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowError(false)
    }, 6000)

    return () => clearTimeout(timer)
  })

  if (!showError) {
    return <></>
  }

  return <Error>{children}</Error>
}
