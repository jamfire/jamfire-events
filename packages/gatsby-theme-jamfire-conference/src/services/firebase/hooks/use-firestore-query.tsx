// import libs
import * as React from "react"

const useFirestoreQuery = (query: any) => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState(null)
  const [docs, setDocs] = React.useState([])

  React.useEffect(() => {
    const unsubscribe = query
      .onSnapshot(
        (querySnapshot: any) => {
          setIsLoading(false)
          setDocs(
            querySnapshot.docs.map((doc: any) => ({
              _id: doc.id,
              ...doc.data(),
            }))
          )
        },
        (err: Error) => {
          setError(err)
        }
      )

    return () => unsubscribe()
  }, [])

  return [docs, isLoading, error]
}

export default useFirestoreQuery
