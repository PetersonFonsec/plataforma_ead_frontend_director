import CollegeElements from "../support/pages/college-create";
import HomeElements from "../support/pages/home";

describe("Curse jorney - ", () => {
  const response = require('../fixtures/college-response-success.json');
  const error = require('../fixtures/error-login.json');
  const usuario = require('../fixtures/usuarios.json')[1];
  const colleges = require('../fixtures/college.json')[0];
  const collegeElements = new CollegeElements(colleges);
  const homepageElements = new HomeElements();

  beforeEach(() => {
    cy.login(usuario);
    homepageElements.buttonBemVindo.click();
  });

  it("the form must be previously filled out", () => {
  });
});
