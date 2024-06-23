import HomeElements from "../support/pages/home";
import ProfileElements from "../support/pages/profile";

describe("Profile - ", () => {
  const [usuarioSemRegistros] = require('../fixtures/usuarios.json');
  const error = require('../fixtures/error-login.json');

  const registerElements = new ProfileElements(usuarioSemRegistros);
  const homepageElements = new HomeElements();

  beforeEach(() => {
    cy.login(usuarioSemRegistros);
    homepageElements.buttonFinalizeSeuCadastro.click();
  });

  it("Should be in profile page", () => {
    cy.url().should('include', '/area-logada/profile');
  });

  it("the form must be previously filled out", () => {
    registerElements.emailInput.should('have.value', usuarioSemRegistros.email);
    registerElements.nameInput.should('have.value', usuarioSemRegistros.name);
  });

  it("should disable field when form is filled", () => {
    registerElements.clearForm();
    registerElements.fillFormValid();
    registerElements.submitButton.should('be.enabled');
  });

  it("should return to home", () => {
    registerElements.backButton.click();
    cy.url().should('include', '/area-logada/home');
  });

  it("should show message error whem update profile fail", () => {
    cy.intercept('PATCH', `${Cypress.env('url')}/users`, {
      statusCode: 420,
      body: error
    }).as('errorProfile');

    registerElements.clearForm();
    registerElements.fillFormValid();
    registerElements.submitButton.click();
    registerElements.messageAlert.should('be.visible');
  });
})
