/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe(`Interact with Cookies`, () => {
	it(`Analytics Cookies should not be set`, () => {
		cy.visit(`/`).assertRoute(`/`);

		cy.getCookie("gatsby-gdpr-google-tagmanager").should("not.exist");

		cy.getCookie("gatsby-gdpr-facebook-pixel").should("not.exist");

		cy.getCookie("gatsby-gdpr-google-analytics").should("not.exist");
	});

	it(`Check for Cookie Notification`, () => {
		cy.get(`#cookie-notice`).contains(`Accept`);

		cy.get(`#cookie-notice`).contains(`Manage`);
	});

	it(`Open Cookie Preferences`, () => {
		cy.get(`#cookie-notice`).contains(`Manage`).click();

		cy.get(`button.necessaryCookies`);
	});

	it(`Check Necessary Cookies is enabled`, () => {
		cy.get(`.necessaryCookies-input input`).should(`be.checked`);
	});

	it(`Toggle Analaytics Cookies`, () => {
		cy.get(`button.analyticsCookies`).click();

		cy.get(`.analyticsCookies-input input[type="checkbox"]`).should(
			`not.be.checked`
		);

		cy.get(`.analyticsCookies-input`).click();

		cy.get(`.analyticsCookies-input input[type="checkbox"]`).should(
			`be.checked`
		);

		cy.get(`.analyticsCookies-input`).click();

		cy.get(`.analyticsCookies-input input[type="checkbox"]`).should(
			`not.be.checked`
		);

		cy.get(`.analyticsCookies-input`).click();

		cy.get(`.analyticsCookies-input input[type="checkbox"]`).should(
			`be.checked`
		);

		Cypress.Cookies.preserveOnce(
			"gatsby-gdpr-google-tagmanager",
			"gatsby-gdpr-facebook-pixel",
			"gatsby-gdpr-google-analytics"
		);
	});

	it(`Accept and close cookie preferences`, () => {
		cy.get(`#manage-cookies footer button`).click();

		cy.get(`#manage-cookies`).should(`not.exist`);

		Cypress.Cookies.preserveOnce(
			"gatsby-gdpr-google-tagmanager",
			"gatsby-gdpr-facebook-pixel",
			"gatsby-gdpr-google-analytics"
		);
	});

	it(`Analytics Cookies should exist`, () => {
		cy.getCookie("gatsby-gdpr-google-tagmanager").should("exist");

		cy.getCookie("gatsby-gdpr-facebook-pixel").should("exist");

		cy.getCookie("gatsby-gdpr-google-analytics").should("exist");

		Cypress.Cookies.preserveOnce(
			"gatsby-gdpr-google-tagmanager",
			"gatsby-gdpr-facebook-pixel",
			"gatsby-gdpr-google-analytics"
		);
	});

	it(`Disable analtyics cookies`, () => {
		cy.get(`#cookie-notice`).contains(`Manage`).click();

		cy.get(`button.analyticsCookies`).click();

		cy.get(`.analyticsCookies-input input[type="checkbox"]`).should(
			`be.checked`
		);

		cy.get(`.analyticsCookies-input`).click();

		cy.get(`.analyticsCookies-input input[type="checkbox"]`).should(
			`not.be.checked`
		);

		cy.get(`#manage-cookies footer button`).click();

		cy.get(`#manage-cookies`).should(`not.exist`);

		cy.getCookie("gatsby-gdpr-google-tagmanager").should("not.exist");

		cy.getCookie("gatsby-gdpr-facebook-pixel").should("not.exist");

		cy.getCookie("gatsby-gdpr-google-analytics").should("not.exist");
	});

	it(`Accept cookies`, () => {
		cy.get(`#cookie-notice .accept-cookies`).click();

		cy.get(`#cookie-notice`).should(`not.exist`);
	});
});
