import CollegeElements from "../support/pages/college";
import HomeElements from "../support/pages/home";

describe("College jorney - ", () => {
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

  it("Should disabled submitbutton when field name is empty", () => {
    collegeElements.fillFormValid();
    collegeElements.inputName.clear();
    collegeElements.buttonSubmit.should('be.disabled');
  });

  it("Should disabled submitbutton when field primary color is empty", () => {
    collegeElements.inputName.type(colleges.name);
    collegeElements.inputThumb.selectFile(colleges.thumb);
    collegeElements.inputSecundaryColor = colleges.secundaryColor;

    collegeElements.buttonSubmit.should('be.disabled');
  });

  it("Should disabled submitbutton when field secundary color is empty", () => {
    collegeElements.inputName.type(colleges.name);
    collegeElements.inputThumb.selectFile(colleges.thumb);
    collegeElements.inputPrimaryColor = colleges.primaryColor;

    collegeElements.buttonSubmit.should('be.disabled');
  });

  it("Should disabled submitbutton when field thumb is empty", () => {
    collegeElements.inputName.type(colleges.name);
    collegeElements.inputPrimaryColor = colleges.primaryColor;
    collegeElements.inputSecundaryColor = colleges.secundaryColor;

    collegeElements.buttonSubmit.should('be.disabled');
  });

  it("Should enabled submitbutton when form is filled", () => {
    collegeElements.fillFormValid();
    collegeElements.buttonSubmit.should('be.enabled');
  });

  it("Should show message error when service return an error", () => {
    cy.intercept('POST', 'http://localhost:3000/auth/login', {
      statusCode: 400,
      body: { error }
    }).as('stubLogin');

    collegeElements.fillFormValid();
    collegeElements.buttonSubmit.click();
    collegeElements.alert.should('be.visible');
  });

  it("Should show message success when service return a success", () => {
    // cy.intercept('POST', 'http://localhost:3000/college', {
    //   statusCode: 201,
    //   body: { response }
    // }).as('stubCollege');

    collegeElements.fillFormValid();
    collegeElements.buttonSubmit.click();
    collegeElements.alert.should('be.visible');
  });
});
