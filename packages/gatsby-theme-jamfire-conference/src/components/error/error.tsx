// import libs
import React, { useEffect, useState } from "react"
import { ErrorProps } from "./error.d"

// import styles
import * as styles from "./error.module.scss"

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

  return <div className={styles.error}>{children}</div>
}
