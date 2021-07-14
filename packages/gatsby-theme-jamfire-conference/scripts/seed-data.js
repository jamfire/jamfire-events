// get environment
const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config({
  path: `.env.${activeEnv}`,
})

// firebase configuration
const config = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  databaseUrl: process.env.GATSBY_FIREBASE_DATABASE_URL,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
  appId: process.env.GATSBY_FIREBASE_APP_ID,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
  measurementId: process.env.GATSBY_FIREBASE_MEASUREMENT_ID,
}

// lodash
const _ = require("lodash")

// firebase
const firebase = require("firebase")
const firebaseApp = firebase.initializeApp(config)
const firestore = firebaseApp.firestore()

// geolocated cities
const cities = [
  {
    key: "paris",
    lat: "48.85341",
    lon: "2.3488",
  },
  {
    key: "london",
    lat: "51.509865",
    lon: "-0.118092",
  },
  {
    key: "capetown",
    lat: "-34.270836",
    lon: "18.459778",
  },
  {
    key: "vienna",
    lat: "48.20849",
    lon: "16.37208",
  },
  {
    key: "moscow",
    lat: "55.751244",
    lon: "37.618423",
  },
  {
    key: "beijing",
    lat: "39.916668",
    lon: "116.383331",
  },
  {
    key: "joberg",
    lat: "-26.20227",
    lon: "28.04363",
  },
  {
    key: "losangeles",
    lat: "34.052235",
    lon: "-118.243683",
  },
  {
    key: "sanfran",
    lat: "37.77493",
    lon: "-122.41942",
  },
  {
    key: "nashville",
    lat: "36.174465",
    lon: "-86.767960",
  },
]

cities.forEach(city => {
  const count = _.random(1, 100)
  for (i = 1; i <= count; i++) {
    city.slug = "demo"
    city.created_at = firebase.firestore.Timestamp.now()

    firestore
      .collection("geolocation")
      .add(city)
      .then(docRef => {
        console.log("Document written with ID: ", docRef.id)
      })
      .catch(error => {
        console.log("Error adding document: ", error)
      })
  }
})
