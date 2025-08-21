import HomeElements from "../support/pages/home";

describe("Student Lesson Jorney - ", () => {
  const [estudanteSemRegistro] = require('../fixtures/usuarios.json');
  const homepageElements = new HomeElements();

  describe("Usuario de backoffice sem registros", () => {
    beforeEach(() => {
      cy.login(estudanteSemRegistro);
    });

    it("Should be in home page", () => {
      cy.url().should('include', '/backoffice');
    });

    xit("Should show jumbotron profile", () => {
      homepageElements.jumbotronFinalizeSeuCadastro.should('be.visible');
    });

    it("Should show jumbotron wellcome", () => {
      homepageElements.jumbotronBemVindo.should('be.visible');
    });

    it("Should open aside menu when ", () => {
      homepageElements.buttonMenu.click();
      homepageElements.asideMenu.should('be.visible');
    });

    xit("Should redirect when to profile page when clicked in jumbotronFinalizeSeuCadastro", () => {
      homepageElements.buttonFinalizeSeuCadastro.click();
      cy.url().should('include', '/backoffice/profile');
    });

    it("Should redirect when to create college page when clicked in jumbotronBemVindo", () => {
      homepageElements.buttonBemVindo.click();
      cy.url().should('include', '/backoffice/create-college');
    });
  });
});
