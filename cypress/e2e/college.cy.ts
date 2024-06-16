import CollegeElements from "../support/pages/college";
import HomeElements from "../support/pages/home";

describe("College jorney - ", () => {
  const usuario = require('../fixtures/usuarios.json')[1];
  const colleges = require('../fixtures/college.json')[0];
  const collegeElements = new CollegeElements(colleges);
  const homepageElements = new HomeElements();

  beforeEach(() => {
    cy.login(usuario, false);
    homepageElements.cardsCollege.click();
  });

  it("the form must be previously filled out", () => {
    collegeElements.inputName.should('be.disabled');
    collegeElements.inputThumb.should('be.disabled');
    collegeElements.inputPrimaryColor.should('be.disabled');
    collegeElements.inputSecundaryColor.should('be.disabled');
  });

  xit("all fields must be disable when page is loaded", () => {
  });

  xit("should enabled all fields when user click in update button", () => {
  });

  xit("should go to college list when user click in back button", () => {
  });

  xit("should go to course page when user click in register a new course", () => {
  });
});
