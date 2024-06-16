import SharedElements from "./shared";

export default class CollegeElements extends SharedElements {
  constructor(public college: any) {
    super()
  }

  get inputName() {
    return cy.get("#college-name-input");
  }

  get inputPrimaryColor() {
    return cy.get("#college-primary-color-input-color");
  }

  set inputPrimaryColor(color) {
    cy.get("#college-primary-color-input-color")
      .invoke('val', color)
      .trigger('change', { force: true })
  }

  get inputSecundaryColor() {
    return cy.get("#college-secundary-color-input-color");
  }

  set inputSecundaryColor(color) {
    cy.get("#college-secundary-color-input-color")
      .invoke('val', color)
      .trigger('change', { force: true })
  }

  get inputThumb() {
    return cy.get("#college-thumb-input-upload-input-file");
  }

  get updateButton() {
    return cy.get('#create-college-submit .button')
  }

  get newCourseButton() {
    return cy.get('#create-college-submit .button')
  }

  get alert() {
    return cy.get('#create-college-alert')
  }
}
