---
templateKey: event
published: true
slug: demo
title: A Demo Event
eventInformation:
  startTime:
    datetime: 2030-01-30T10:00:00.000-05:00
    timezone: America/New_York
  endTime:
    datetime: 2030-01-30T12:00:00.000-05:00
    timezone: America/New_York
  livestreamUrl: https://www.youtube.com/embed/gSpPtHSELfY?autoplay=1&cc_load_policy=1&cc_lang_pref=en&mute=1
eventGraphics:
  lobbyImage: demo-event.jpg
  favicon: ""
  headerLogo: ""
eventBranding:
  primaryColor: "#144d7f"
  primaryColorHover: "#165891"
eventSchedule:
  - startTime:
      datetime: 2030-01-30T10:00:00.000-05:00
      timezone: America/New_York
    title: "Main Session #1: Welcome"
    description: What is the Jamstack?
  - startTime:
      datetime: 2030-01-30T10:30:00.000-05:00
      timezone: America/New_York
    title: "Breakout Session #1"
    description: Table Hosts
  - startTime:
      datetime: 2030-01-30T10:35:00.000-05:00
      timezone: America/New_York
    title: "Main Session #2: Javascript"
    description: Why Javascript matters
  - startTime:
      datetime: 2030-01-30T10:45:00.000-05:00
      timezone: America/New_York
    title: "Breakout Session #2"
    description: Tables Hosts
  - startTime:
      datetime: 2030-01-30T11:00:00.000-05:00
      timezone: America/New_York
    title: "Main Session #3: APIs"
    description: Why APIs matter
  - startTime:
      datetime: 2030-01-30T11:15:00.000-05:00
      timezone: America/New_York
    title: "Breakout Session #3"
    description: Table Hosts
  - startTime:
      datetime: 2030-01-30T11:30:00.000-05:00
      timezone: America/New_York
    title: "Main Session #4: Markup"
    description: Using NetlifyCMS to manage your content
  - startTime:
      datetime: 2030-01-30T11:40:00.000-05:00
      timezone: America/New_York
    title: "Breakout Session #4"
    description: Table Hosts
  - startTime:
      datetime: 2030-01-30T11:55:00.000-05:00
      timezone: America/New_York
    title: Wrapping Up
    description: How to deploy
eventRooms:
  - slug: jamfire-conference-room-1
    title: Conference Room 1
    description: |+
      Conference Room 1 with a graphic.

    image: pexels-bruno-salvadori-2269872.jpg
    roomType: jitsi
    roomLocale: en
  - title: Conference Room 2
    slug: jamfire-conference-room-2
    description: |+
      Conference Room 2 without a graphic.

    roomType: jitsi
    roomLocale: en
  - roomType: zoom
    slug: jamfire-conference-room-3
    title: Conference Room 3
    description: Conference Room 3 that launches a Zoom meeting.
    roomUrl: https://zoom.us/my/kalebheitzman?pwd=1234567890
    image: room-3.jpg
    roomLocale: es
  - roomType: google
    slug: jamfire-conference-room-4
    title: Conference Room 4
    description: Conference Room 4 that launches a Google Meet conference.
    roomUrl: https://meet.google.com/stj-sryk-rff
    image: room-4.jpg
    roomLocale: en
  - roomType: jitsi
    slug: jamfire-conference-room-5
    title: Conference Room 5
    description: Conference Room 5 that launches a Google Meet conference.
    image: pexels-bruno-salvadori-2269872.jpg
    roomLocale: en
eventQA:
  - question: Where can I access this conference?
    answer: You can access it on desktop, tablet, and mobile devices.
  - question: What is the Jamstack?
    answer: Javasript, APIs, and Markup
  - question: What accounts do I need?
    answer: Github, Firebase, and Netlify
eventSettings:
  pollsLabel: Polls
  qaLabel: Q&A
  mainStage: true
  mainStageLabel: Main Stage
  qa: true
  mainStageFeature: chat
  polls: false
  schedule: true
  rooms: true
  mapLabel: Attendees
  chat: true
  allEventsLabel: All Events
  allEvents: true
  map: true
  chatLabel: Chat
  roomsLabel: Rooms
  scheduleLabel: Schedule
---

## Welcome to the Demo Event

This event showcases every feature available for a single event. Try opening the page on your mobile device or a tablet. This site is fully responsive.

### Graphics

**Favicon** - You can set a different favicon per event for bookmark goodness.

**Logo** - Customizable per event and separate from the Home Page logo.

**Event Graphic** - Displayed prominently in the lobby and on the All Events page.

### Navigation

**Home** - This doesn't need any explanation.

**Lobby** - A place to desribe your event as well as display start and end times.

**Main Stage** - This is where the Livestream lives. Or a video of your choice. You can set it to autoplay using URL parameters based on what service you choose to stream from.

**Rooms** - Breakout online conferencing rooms for your event using Jitsi.

**Chat** - Available to logged-in users, a place to interact with other guests at your online event.

**Q&A** - The catch-all place to answer your events most frequently asked questions.

**Map** - A guest map featuring who is attending your event.

### Human interaction

**Dark Mode** - Automatically set by the users computer or toggled using the Dark Mode toggle button.

**Login/Logout** - For accessing chat and hopefully more as new features are added to the theme.
