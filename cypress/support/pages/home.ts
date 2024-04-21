import SharedElements from "./shared";

export default class HomeElements extends SharedElements {

  get jumbotronFinalizeSeuCadastro() {
    return cy.get("#home-page-jumbotron-profile");
  }

  get buttonFinalizeSeuCadastro() {
    return cy.get("#home-page-jumbotron-profile");
  }

  get jumbotronBemVindo() {
    return cy.get("#home-page-jumbotron-wellcome .button");
  }

  get buttonBemVindo() {
    return cy.get("#home-page-jumbotron-wellcome .button");
  }
}
