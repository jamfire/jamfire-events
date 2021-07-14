// @see https://medium.com/swlh/adding-firebase-authentication-in-gatsby-with-a-little-typescript-magic-adf6ad1fbfb2

// firebase service
export {
  FirebaseContext,
  FirebaseProvider,
  useFirestoreQuery,
} from "./firebase"

export { GeolocationContext, GeolocationProvider } from "./geolocation"

// jamfire utilities
export { jamfireSet, jamfireGet } from "./jamfire"
