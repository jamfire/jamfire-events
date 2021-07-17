// import libs
import React, { useContext, useMemo, useEffect } from "react"
import { FirebaseContext } from "../../services"
import { checkIsClient } from "../../utils/check-is-client"
import { navigate } from "gatsby"
import { PrivateRouteProps } from "./_props"

export default ({ children, path = "/" }: PrivateRouteProps) => {
  const { authToken } = useContext(FirebaseContext)

  const isClient: boolean = useMemo(() => checkIsClient(), [])

  useEffect(() => {
    const checkPermission = () => {
      if (!authToken && window.location.href !== path) {
        return navigate(path)
      }
    }

    if (!isClient) {
      return
    }

    checkPermission()
  }, [authToken, isClient, path])

  if (!authToken) {
    return null
  }

  return <>{children}</>
}
