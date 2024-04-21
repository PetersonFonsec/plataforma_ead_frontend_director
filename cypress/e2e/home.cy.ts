import HomeElements from "../support/pages/home";

describe("Home jorney - ", () => {
  const usuarios = require('../fixtures/usuarios.json');
  const homepageElements = new HomeElements();

  beforeEach(() => {
    cy.login(usuarios);
  });

  it("Should be in home page", () => {
    cy.url().should('include', '/area-logada/home');
  });

  it("Should show jumbotron profile", () => {
    homepageElements.jumbotronBemVindo.should('be.visible');
  });

  it("Should show jumbotron wellcome", () => {
    homepageElements.jumbotronFinalizeSeuCadastro.should('be.visible');
  });

  it("Should open aside menu when ", () => {
    homepageElements.buttonMenu.click();
    homepageElements.asideMenu.should('be.visible');
  });

  it("Should redirect when to profile page when clicked in jumbotronFinalizeSeuCadastro", () => {
    homepageElements.buttonFinalizeSeuCadastro.click();
    cy.url().should('include', '/area-logada/home');
  });

  it("Should redirect when to create college page when clicked in jumbotronBemVindo", () => {
    homepageElements.buttonBemVindo.click();
    cy.url().should('include', '/area-logada/create-college');
  });
})
