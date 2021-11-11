/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe(`Interact with Event Navigation`, () => {
	it(`Visit Home Page`, () => {
		cy.visit(`/`).assertRoute(`/`);
	});

	it(`Navigate to all events`, () => {
		cy.get(`a.all-events-link`).click().wait(2000);

		cy.assertRoute(`/events/`);

		cy.get(`.event-demo`).contains(`A Demo Event`);
	});

	it(`Navigate to demo event`, () => {
		cy.get(`.event-demo`).click().wait(2000).assertRoute(`/event/demo/`);

		cy.get(`main`).contains(`A Demo Event`);
	});

	it(`Navigate to main stage`, () => {
		cy.get(`a.event-mainstage-link`)
			.click()
			.assertRoute(`/event/demo/main-stage/`);

		cy.get(`#geolocation-modal .deny`).click();
	});

	it(`Navigate to schedule`, () => {
		cy.get(`a.event-schedule-link`)
			.click()
			.assertRoute(`/event/demo/schedule/`);

		cy.get(`main`).contains(`Main Session #1`);
	});

	it(`Navigate to rooms`, () => {
		cy.get(`a.event-rooms-link`).click().assertRoute(`/event/demo/rooms/`);

		cy.get(`main`).contains(`Conference Room 1`);
	});

	it(`Navigate to conference room 1`, () => {
		cy.get(`a[href="/event/demo/rooms/jamfire-conference-room-1/"`)
			.click()
			.assertRoute(`/event/demo/rooms/jamfire-conference-room-1/`);
	});

	it(`Navigate to q&a`, () => {
		cy.get(`a.event-qa-link`).click();

		cy.get(`#room-change-modal`).should(`be.visible`);

		cy.get(`#room-change-modal .confirm`).click();

		cy.get(`#room-change-modal`)
			.should(`not.exist`)
			.assertRoute(`/event/demo/qa/`);
	});

	it(`Navigate to map`, () => {
		cy.get(`a.event-map-link`).click().assertRoute(`/event/demo/map/`);

		cy.get(`#geolocation-modal .deny`).click();
	});

	it(`Navigate home`, () => {
		cy.get(`a.home-link`).click().assertRoute(`/`);
	});
});
