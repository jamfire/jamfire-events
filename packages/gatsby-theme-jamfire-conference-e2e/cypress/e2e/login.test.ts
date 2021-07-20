/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe(`Interact with Login`, () => {
	it(`Visit homepage and click avatar button`, () => {
		cy.visit(`/`).assertRoute(`/`).get(`#avatar`).click();
	});

	it(`Check for login modal`, () => {
		cy.get(`#login-modal`).should(`be.visible`);
	});

	it(`Click outside login modal`, () => {
		cy.get(`body`).trigger(`mousedown`, { position: `topLeft` }).click();

		cy.get(`#login-modal`).should(`not.exist`);
	});

	it(`Click login button`, () => {
		cy.get(`button.login`).click();

		cy.get(`#login-modal`).should(`be.visible`);
	});

	it(`Check for login email and password errors`, () => {
		cy.get(`button.email-login`).click();

		cy.get(`#login-modal`).contains(`Email is required`);

		cy.get(`#login-modal`).contains(`Password is required`);

		cy.get(`#login-modal input[name=email]`).type(`123`);

		cy.get(`#login-modal input[name=password]`).type(`123`);

		cy.get(`#login-modal`).contains(`Invalid Email`);

		cy.get(`#login-modal`).contains(`Password is too short`);

		cy.get(`#login-modal input[name=email]`).type(`@email.com`);

		cy.get(`#login-modal input[name=password]`).type(`4567890`);

		cy.get(`button.email-login`).click();

		cy.get(`#login-modal`).contains(`There is no user`);
	});
});
