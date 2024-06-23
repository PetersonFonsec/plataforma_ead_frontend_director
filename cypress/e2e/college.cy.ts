import CollegeElements from "../support/pages/college";
import HomeElements from "../support/pages/home";

describe("College jorney - ", () => {
  const [usuarioSemRegistros, usuarioComRegistro] = require('../fixtures/usuarios.json');
  const college = require('../fixtures/college.json')[0];
  const collegeStyle = college.CollegeStyle[0];
  const collegeElements = new CollegeElements(college);
  const homepageElements = new HomeElements();

  beforeEach(() => {
    cy.login(usuarioComRegistro);
    homepageElements.cardsCollege.click();
  });

  it("the form must be previously filled out", () => {
    collegeElements.inputName.should('have.value', college.name);
    collegeElements.inputPrimaryColor.should('have.value', collegeStyle.primaryColor.toLowerCase());
    collegeElements.inputThumbImage.should('have.attr', 'src').should('include', collegeStyle.thumb);
    collegeElements.inputSecundaryColor.should('have.value', collegeStyle.secundaryColor.toLowerCase());
  });

  it("all fields must be disable when page is loaded", () => {
    collegeElements.inputName.should('be.disabled');
    collegeElements.inputThumb.should('be.disabled');
    collegeElements.inputPrimaryColor.should('be.disabled');
    collegeElements.inputSecundaryColor.should('be.disabled');
  });

  it("should enabled all fields when user click in update button", () => {
    collegeElements.buttonEnabledFields.click();

    collegeElements.inputName.should('be.enabled');
    collegeElements.inputThumb.should('be.enabled');
    collegeElements.inputPrimaryColor.should('be.enabled');
    collegeElements.inputSecundaryColor.should('be.enabled');
  });

  it("should go to college list when user click in back button", () => {
    collegeElements.backButton.click();
    cy.url().should('include', '/area-logada/home');
  });

  it("should go to course page when user click in register a new course", () => {
    collegeElements.newCourseButton.click();
    cy.url().should('include', `/area-logada/college/${college.id}/course`);
  });

  it("should go to course page when user click in register a new course", () => {
    collegeElements.newCourseButton.click();
    cy.url().should('include', `/area-logada/college/${college.id}/course`);
  });
});
