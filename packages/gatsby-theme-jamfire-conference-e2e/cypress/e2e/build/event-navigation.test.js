describe(`Interact with Event Navigation`, function () {
  it(`Visit Home Page`, function () {
    cy.visit(`/`).assertRoute(`/`)
  })
  it(`Navigate to all events`, function () {
    cy.get(`a.all-events-link`).click().wait(2000)
    cy.assertRoute(`/events/`)
    cy.get(`.event-demo`).contains(`A Demo Event`)
  })
  it(`Navigate to demo event`, function () {
    cy.get(`.event-demo`).click().wait(2000).assertRoute(`/event/demo/`)
    cy.get(`#geolocation-modal .deny`).click()
    cy.get(`main`).contains(`A Demo Event`)
  })
  it(`Navigate to main stage`, function () {
    cy.get(`a.event-mainstage-link`).click().assertRoute(`/event/demo/main-stage/`)
    cy.get(`#geolocation-modal .deny`).click()
  })
  it(`Navigate to schedule`, function () {
    cy.get(`a.event-schedule-link`).click().assertRoute(`/event/demo/schedule/`)
    cy.get(`main`).contains(`Main Session #1`)
  })
  it(`Navigate to rooms`, function () {
    cy.get(`a.event-rooms-link`).click().assertRoute(`/event/demo/rooms/`)
    cy.get(`main`).contains(`Conference Room 1`)
  })
  it(`Navigate to conference room 1`, function () {
    cy.get(`a[href="/event/demo/rooms/jamfire-conference-room-1/"`)
      .click()
      .assertRoute(`/event/demo/rooms/jamfire-conference-room-1/`)
  })
  it(`Navigate to q&a`, function () {
    cy.get(`a.event-qa-link`).click()
    cy.get(`#room-change-modal`).should(`be.visible`)
    cy.get(`#room-change-modal .confirm`).click()
    cy.get(`#room-change-modal`).should(`not.exist`).assertRoute(`/event/demo/qa/`)
  })
  it(`Navigate to map`, function () {
    cy.get(`a.event-map-link`).click().assertRoute(`/event/demo/map/`)
  })
  it(`Navigate home`, function () {
    cy.get(`a.home-link`).click().assertRoute(`/`)
  })
})
