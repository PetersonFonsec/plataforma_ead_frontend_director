import CollegeCreateElements from "../support/pages/college-create";
import HomeElements from "../support/pages/home";

describe("College jorney - ", () => {
  const response = require('../fixtures/college-response-success.json');
  const [usuarioSemRegistros] = require('../fixtures/usuarios.json');
  const error = require('../fixtures/error-login.json');
  const college = require('../fixtures/college.json')[0];
  const collegeElements = new CollegeCreateElements(college);
  const homepageElements = new HomeElements();

  beforeEach(() => {
    cy.login(usuarioSemRegistros);
    homepageElements.buttonBemVindo.click();
  });

  it("Should disabled submitbutton when field name is empty", () => {
    collegeElements.fillFormValid();
    collegeElements.inputName.clear();
    collegeElements.buttonSubmit.should('be.disabled');
  });

  it("Should disabled submitbutton when field primary color is empty", () => {
    collegeElements.inputName.type(college.name);
    collegeElements.inputThumb.selectFile(college.CollegeStyle[0].thumbCy);
    collegeElements.inputSecundaryColor = college.secundaryColor;

    collegeElements.buttonSubmit.should('be.disabled');
  });

  it("Should disabled submitbutton when field secundary color is empty", () => {
    collegeElements.inputName.type(college.name);
    collegeElements.inputThumb.selectFile(college.CollegeStyle[0].thumbCy);
    collegeElements.inputPrimaryColor = college.primaryColor;

    collegeElements.buttonSubmit.should('be.disabled');
  });

  it("Should disabled submitbutton when field thumb is empty", () => {
    collegeElements.inputName.type(college.name);
    collegeElements.inputPrimaryColor = college.primaryColor;
    collegeElements.inputSecundaryColor = college.secundaryColor;

    collegeElements.buttonSubmit.should('be.disabled');
  });

  it("Should enabled submitbutton when form is filled", () => {
    collegeElements.fillFormValid();
    collegeElements.buttonSubmit.should('be.enabled');
  });

  it("Should show message error when service return an error", () => {
    cy.intercept('POST', `${Cypress.env('url')}/college`, {
      statusCode: 400,
      body: error
    }).as('stubCollege');

    collegeElements.fillFormValid();
    collegeElements.buttonSubmit.click();
    collegeElements.alert.should('be.visible');
  });

  it("Should redirect to details page when service return a success", () => {
    cy.intercept('POST', `${Cypress.env('url')}/college`, {
      statusCode: 201,
      body: response
    }).as('stubCollege');

    collegeElements.fillFormValid();
    collegeElements.buttonSubmit.click();

    cy.url().should('include', `/area-logada/college/${college.id}`);
  });
});
