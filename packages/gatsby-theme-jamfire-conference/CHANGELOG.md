# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.17] - 2021-07-14

### Fixed

- Fixed leaflet error

## [1.0.16] - 2021-07-13

### Added

- Updated dependencies

## [1.0.15] - 2021-07-13

### Fixed

- removed cypress deps

## [1.0.14] - 2021-07-13

### Fixed

- added missing `netlify-cms-widget-datetimezone` dependency

## [1.0.13] - 2021-07-13

### Changed

- Updated readme documentation
## [1.0.12] - 2021-07-11

### Changed

- Added `netlify-cms-widget-datetimezone` and updated theme files to use ISO instead of custom dateformat.

## [1.0.11] - 2021-07-05

### Added

- Netlify CMS file-based configuration
- Geolocation function

### Changed

- Content Structure to better faciliate relative images
- Branding has now become Configuration. See the starter content folder for the structure change needed.

## [1.0.10] - 2021-07-02

### Added

- Guest Map to events
- Seed Data for maps under `./scripts/seed-data`

### Changed

- Refactored Styled Components and Props into thier respective folders so it's easier to shadow the theme and update styles as necessary. If someone really wants to change the FC they can without having to copy and paste styles, props, etc.

## [1.0.9] - 2021-06-27

### Added

- Custom locale resolvers
- Lang fields to nodes
- Template key fields to nodes
- Basic theme tests. (contrast is disabled in a11y test)
- Markdown component for parsing markdown from frontmatter

### Changed

- Major localization refactor
- Separated props and styles from components for easier component shadowing

### Fixed

- Branding content folder error
- Missing image childImageSharp errors throughout site
- Room navigation errors
- Manifest override of favicon

## [1.0.8] - 2021-06-25

### Fixed

- Hotfixed broken repo link

## [1.0.7] - 2021-06-25

### Added

- Codegen automated types
- Type definitions throughout theme
- Netlify CMS datetime with timezone custom widget
- Option to select chat or schedule for mainstage

### Changed

- Combined lerna and yarn workspace for theme development
- Batch translator converts xml to json

## [1.0.6] - 2021-06-21

### Added

- Locale switcher in header
- 24 interface languages translated via DeepL
- `en,bg,cs,da,de,el,es,et,fi,fr,hu,it,ja,lt,lv,nl,pl,pt,ro,ru,sk,sl,sv,zh`
- NetlifyCMS support for translation content
- `GATSBY_DEFAULT_LOCALE` for setting default locale
- `GATSBY_LOCALES` for setting additional locales
- Added codegen with `gatsby-plugin-typegen`

### Changed

- Converted Netlify CMS config from yaml to js

### Deprecated

- Old cms file structure will no longer work. Content is now organized by locale and must be organized in locale folders, `content/pages/en`

## [1.0.5] - 2021-06-07

### Fixed

- [Hotfix] Webpack analyser dependency issue

## [1.0.4] - 2021-06-07

### Added

- Github code quality check
- @loadable/components code splitting
- Seo updates
- Locally hosted fonts

### Changed

- Replaced Font Awesome with react-icons
- Lighthouse performance tweaks
- Manifest tweaks

## [1.0.3] - 2021-06-06

### Added

- Enabled Netlify CMS editorial workflow
- Added Cookies Page
- Added Cookies Management
- Enabled GDPR compliant anayltics
- Added VERY basic user dashboard

### Changed

- Seo via react-async-helmet Seo component instead of through context

## [1.0.2] - 2021-06-04

### Fixed

- Firebase needed `GATSBY_` prefixed environment variables to run in the browser.

## [1.0.1] - 2021-06-03

### Added

- Firebase Service
- Offline ability
- App manifest

### Changed

- Migrated to new `gatsby-plugin-image`
- Updated Gatsby to v3
- Updated all official gatsby plugins
- Replaced gatsby-theme-firebase login with local implementation
- Chat now uses firebase service

### Deprecated

- No longer using gatsby-theme-firebase due to outdated packages

## [1.0.0] - 2021-06-01

### Added

- Initial Release
- NetlifyCMS for Content Management
- Firebase for User Authentication and Interaction
- GatsbyJS for Application Development
- Feature: Home Page
- Feature: Events Page
- Feature: Event with Lobby, Schedule, Livestream, Chat, Breakout Rooms, and Q&A

## Changelog Format

```
## [0.0.0] - YYYY-MM-DD

### Added
- _For new features._

### Changed
- _For changes in existing functionality._

### Deprecated
- _For once-stable features removed in upcoming releases._

### Removed
- _For deprecated features removed in this release._

### Fixed
- _For any bug fixes._

### Security
- _To invite users to upgrade in case of vulnerabilities._
```
