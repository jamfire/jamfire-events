# Jamstack Conferencing built on GatsbyJS, NetlifyCMS, and Firebase

[![NPM](https://img.shields.io/npm/l/gatsby-theme-jamfire-conference)](https://github.com/jamfire/jamfire/packages/gatsby-theme-jamfire-conference/blob/master/LICENSE) [![npm](https://img.shields.io/npm/v/gatsby-theme-jamfire-conference?style=flat)](https://www.npmjs.com/package/gatsby-theme-jamfire-conference) [![theme tests](https://github.com/jamfire/jamfire/actions/workflows/cypress-jamfire-conference-theme.yml/badge.svg)](https://github.com/jamfire/jamfire/actions/workflows/cypress-jamfire-conference-theme.yml)

_View the demo at [conference.jamfire.io](https://conference.jamfire.io)_

Jamfire Conference is a Gatsby theme built with Netlify CMS and Firebase for online conferencing. This is a multi-lingual theme that features a lobby, the ability to livestream, go to breakout Jitsi-based groups, chat while on the site, as well as a few other odds and ends useful for anyone hosting an online conference. You will need a Github account to log into Netlify CMS, Firebase account, and static file hosting. This site has been tested on [Netlify](https://netlify.com) and [Gatsby Cloud](https://www.gatsbyjs.com/products/cloud/) for hosting and both work well.

## Getting Started

The easiest way to get started is by deploying the starter to Netlify or Gatsby Cloud. Be sure to setup the correct environment variables to deploy a successful build.

[<img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" height="38">](https://app.netlify.com/start/deploy?repository=https://github.com/jamfire/gatsby-starter-jamfire-conference) [<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/jamfire/gatsby-starter-jamfire-conference)

## Environment Configuration

Setup the following enviornment variables either in a `.env.development` file or through your hosting provider.

```env
# site vars
GATSBY_SITE_NAME=Jamfire
GATSBY_SHORT_NAME=Jamfire

# netlify cms
GATSBY_NETLIFY_SITE_URL=https://localhost:8000
GATSBY_NETLIFY_DISPLAY_URL=https://localhost:8000
GATSBY_NETLIFY_BACKEND_NAME=github
GATSBY_NETLIFY_BACKEND_REPO=username/repo
GATSBY_NETLIFY_BACKEND_BRANCH=master

# firebase
GATSBY_FIREBASE_API_KEY=
GATSBY_FIREBASE_AUTH_DOMAIN=
GATSBY_FIREBASE_DATABASE_URL=
GATSBY_FIREBASE_PROJECT_ID=
GATSBY_FIREBASE_STORAGE_BUCKET=
GATSBY_FIREBASE_MESSAGING_SENDER_ID=
GATSBY_FIREBASE_APP_ID=
GATSBY_FIREBASE_MEASUREMENT_ID=

# geolocation api key
GATSBY_GEOLOCATION_API_KEY=

# optional analytics
GATSBY_GOOGLE_ANALYTICS_TRACKING_ID=
GATSBY_GOOGLE_TAG_MANAGER_TRACKING_ID=
GATSBY_FACEBOOK_PIXEL_ID=

# optional locales
GATSBY_DEFAULT_LOCALE=en
GATSBY_LOCALES=en,bg,cs,da,de,el,es,et,fi,fr,hu,it,ja,lt,lv,nl,pl,pt,ro,ru,sk,sl,sv,zh
```

## Firebase Configuration

This theme needs some basic Firebase setup in order to work correctly. You will need to create a Google Firebase account and then enable authentication choices of your liking. You will also need to create an index on the messages table in your Firestore Database.

Messages index to create:

```
event_id Ascending created_at Ascending
```

Geolocation indexes to create:

```
slug Descending created_at Descending
```

You need to implement the following security rules on your Firestore Database.

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /messages/{message} {
      allow read: if true;
    	allow write: if request.auth != null;
    }
    match /geolocation/{geolocation} {
      allow read: if true;
    	allow write: if true;
    }
  }
}
```

## Rapid API KEY

This theme uses RapidAPI to retreive location information for the Event Guest Map. You need to signup for a free RapidAPI account and retrieve your key from the [WeatherAPI integration.](https://rapidapi.com/weatherapi/api/weatherapi-com/)

Put this key in the following env var:

```
GATSBY_RAPID_API_KEY=
```

## Theme Configuration

Add the package to your Gatsby site:

```
yarn add gatsby-theme-jamfire-conference
```

Simply add `gatsby-theme-jamfire-conference` to your plugins under `gastby-config.js`. Your content will live under the `./content` directory in your main repository. When new features get implemented in the the theme, they will automatically be fetched when you upgrade packages or during the build process.

```js
plugins: [
  {
    resolve: `gatsby-theme-jamfire-conference`,
  }
],
```

## Theme Shadowing

GatsbyJS supports Theme Shadowing, allowing you to customize any part of another theme. View the [shadowing docs](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/) to see how to do this. For example, you might want add information to the footer area of this theme. Copy the Footer component to `./src/gatsby-theme-jamfire-conference/components/Site/footer.tsx` and customize to your liking.

## Translations & Locales

The theme interface supports multiple translations that were translated via DeepL. Machine translations are always subject to accuracy. If you find an incorrect translation, please submit it as an issue and we'll update it in new releases. If you would like to create a translation, submit a pull request.

To use translations, you will need to set a default locale and also a csv list of locales you would like to use. This will become available in Netlify CMS as well as a language picker in the header of this theme. Use the lowercase 2-letter code for languages you want to enable. English is the default locale if left unset.

The first locale set in `GATSBY_LOCALES` will be the first language that NetlifyCMS uses in the editing interface.

```
GATSBY_DEFAULT_LOCALE=en
GATSBY_LOCALES=en,bg,cs,da,de,el,es,et,fi,fr,hu,it,ja,lt,lv,nl,pl,pt,ro,ru,sk,sl,sv,zh
```

The following languages are available:

|                  |                  |                   |                   |                |
| ---------------- | ---------------- | ----------------- | ----------------- | -------------- |
| "BG" - Bulgarian | "CS" - Czech     | "DA" - Danish     | "DE" - German     | "EL" - Greek   |
| "EN" - English   | "ES" - Spanish   | "ET" - Estonian   | "FI" - Finnish    | "FR" - French  |
| "HU" - Hungarian | "IT" - Italian   | "JA" - Japanese   | "LT" - Lithuanian | "LV" - Latvian |
| "NL" - Dutch     | "PL" - Polish    | "PT" - Portuguese | "RO" - Romanian   | "RU" - Russian |
| "SK" - Slovak    | "SL" - Slovenian | "SV" - Swedish    | "TR" - Turkish    | "ZH" - Chinese    |                |

## Changelog

See [CHANGELOG.md](CHANGELOG.md)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## Credits

- [gatsby-theme-firebase](https://github.com/epilande/gatsby-theme-firebase) by [@epilande](https://github.com/epilande) for coding inspiration using firebase.
- [gatsby-plugin-firebase](https://github.com/alexluong/gatsby-packages) by [@alexluong](https://github.com/alexluong) for initial error reporting found in `gatsby-node.js`
- John Grisham for setting up [firebase authentication in Gatsby.](https://medium.com/swlh/adding-firebase-authentication-in-gatsby-with-a-little-typescript-magic-adf6ad1fbfb2)
