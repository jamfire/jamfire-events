/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe(`Smoke Test`, () => {
	it(`Site loads`, () => {
		// home page
		cy.visit(`/`).assertRoute(`/`);

		// all events page
		cy.visit(`/events/`).assertRoute(`/events/`);

		// demo event page
		cy.visit(`/event/demo/`).assertRoute(`/event/demo/`);
	});
});
