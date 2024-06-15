import HomeElements from "../support/pages/home";
import ProfileElements from "../support/pages/profile";

describe("Profile - ", () => {
  const usuarios = require('../fixtures/usuarios.json')[1];
  const registerElements = new ProfileElements(usuarios);
  const error = require('../fixtures/error-login.json');
  const homepageElements = new HomeElements();

  beforeEach(() => {
    cy.login(usuarios);
    homepageElements.buttonFinalizeSeuCadastro.click();
  });

  xit("Should be in profile page", () => {
    cy.url().should('include', '/area-logada/profile');
  });

  xit("the form must be previously filled out", () => {
    registerElements.emailInput.should('have.value', usuarios.email);
    registerElements.nameInput.should('have.value', usuarios.name);
  });

  xit("should disable field when form is filled", () => {
    registerElements.clearForm();
    registerElements.fillFormValid();
    registerElements.submitButton.should('be.enabled');
  });

  xit("should return to home", () => {
    registerElements.backButton.click();
    cy.url().should('include', '/area-logada/home');
  });

  xit("should show message error whem update profile fail", () => {
    cy.intercept('PATCH', 'http://localhost:3000/users/', {
      statusCode: 420,
      body: { error }
    }).as('errorProfile');

    registerElements.clearForm();
    registerElements.fillFormValid();
    registerElements.submitButton.click();
    registerElements.messageAlert.should('be.visible');
  });

  it("should show message error whem update profile fail", () => {
    // cy.intercept('PATCH', 'http://localhost:3000/users/', {
    //   statusCode: 201,
    //   body: usuarios
    // }).as('successProfile');

    registerElements.clearForm();
    registerElements.fillFormValid();
    registerElements.submitButton.click();
    registerElements.messageAlert.should('be.visible');
  });
})
