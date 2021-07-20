/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe(`Interact with Locales`, () => {
	it(`Visit the home page and check for Welcome`, () => {
		cy.visit(`/`).assertRoute(`/`);

		cy.get(`main`).contains(`Welcome`);
	});

	it(`Toggle Locale Modal`, () => {
		cy.get(`#language-switcher`).click();
	});

	it(`Select Spanish`, () => {
		cy.get(`.es-locale`).click();
	});

	it(`Check for Bienvenido`, () => {
		cy.get(`main`).contains(`Bienvenido`);
	});

	it(`Toggle back to English`, () => {
		cy.get(`#language-switcher`).click();

		cy.get(`.en-locale`).click();

		cy.get(`main`).contains(`Welcome`);
	});
});
