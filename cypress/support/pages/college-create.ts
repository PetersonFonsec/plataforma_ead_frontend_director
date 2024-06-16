import SharedElements from "./shared";

export default class CollegeCreateElements extends SharedElements {
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

  get buttonSubmit() {
    return cy.get('#create-college-submit .button')
  }

  get alert() {
    return cy.get('#create-college-alert')
  }

  public fillFormValid() {
    this.inputName.type(this.college.name);
    this.inputThumb.selectFile(this.college.thumb);
    this.inputPrimaryColor = this.college.primaryColor;
    this.inputSecundaryColor = this.college.secundaryColor;
  }
}
