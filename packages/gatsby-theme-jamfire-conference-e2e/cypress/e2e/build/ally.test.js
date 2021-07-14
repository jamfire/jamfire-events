describe(`Check theme for a11y`, function () {
  it(`Home Page a11y`, function () {
    cy.visit(`/`).assertRoute(`/`)
    cy.wait(2000)
    cy.injectAxe()
    cy.configureAxe({
      rules: [
        {
          id: `color-contrast`,
          enabled: false,
        },
      ],
    })
    cy.checkA11y()
  })
  it(`Events Page a11y`, function () {
    cy.visit(`/events/`).assertRoute(`/events/`)
    cy.wait(2000)
    cy.injectAxe()
    cy.configureAxe({
      rules: [
        {
          id: `color-contrast`,
          enabled: false,
        },
      ],
    })
    cy.checkA11y()
  })
  it(`Demo Event -> Lobby a11y`, function () {
    cy.visit(`/event/demo/`).assertRoute(`/event/demo/`)
    cy.wait(2000)
    cy.injectAxe()
    cy.configureAxe({
      rules: [
        {
          id: `color-contrast`,
          enabled: false,
        },
      ],
    })
    cy.get(`#geolocation-modal .deny`).click()
    cy.checkA11y()
  })
  it(`Demo Event -> Main Stage a11y`, function () {
    cy.visit(`/event/demo/main-stage/`).assertRoute(`/event/demo/main-stage/`)
    cy.wait(2000)
    cy.injectAxe()
    cy.configureAxe({
      rules: [
        {
          id: `color-contrast`,
          enabled: false,
        },
      ],
    })
    cy.get(`#geolocation-modal .deny`).click()
    cy.checkA11y()
  })
  it(`Demo Event -> Schedule a11y`, function () {
    cy.visit(`/event/demo/schedule/`).assertRoute(`/event/demo/schedule/`)
    cy.wait(2000)
    cy.injectAxe()
    cy.configureAxe({
      rules: [
        {
          id: `color-contrast`,
          enabled: false,
        },
      ],
    })
    cy.get(`#geolocation-modal .deny`).click()
    cy.checkA11y()
  })
  it(`Demo Event -> Rooms a11y`, function () {
    cy.visit(`/event/demo/rooms/`).assertRoute(`/event/demo/rooms/`)
    cy.wait(2000)
    cy.injectAxe()
    cy.configureAxe({
      rules: [
        {
          id: `color-contrast`,
          enabled: false,
        },
      ],
    })
    cy.get(`#geolocation-modal .deny`).click()
    cy.checkA11y()
  })
  it(`Demo Event -> Conference Room a11y`, function () {
    cy.visit(`/event/demo/rooms/jamfire-conference-room-1/`).assertRoute(`/event/demo/rooms/jamfire-conference-room-1/`)
    cy.wait(2000)
    cy.injectAxe()
    cy.configureAxe({
      rules: [
        {
          id: `color-contrast`,
          enabled: false,
        },
        {
          id: `frame-title`,
          enabled: false,
        },
      ],
    })
    cy.get(`#geolocation-modal .deny`).click()
    cy.checkA11y()
  })
  it(`Demo Event -> Q&A`, function () {
    cy.visit(`/event/demo/qa/`).assertRoute(`/event/demo/qa/`)
    cy.wait(2000)
    cy.injectAxe()
    cy.configureAxe({
      rules: [
        {
          id: `color-contrast`,
          enabled: false,
        },
      ],
    })
    cy.get(`#geolocation-modal .deny`).click()
    cy.checkA11y()
  })
})
