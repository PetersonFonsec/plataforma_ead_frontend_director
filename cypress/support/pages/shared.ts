export default class SharedElements {

  get buttonMenu() {
    return cy.get("#button-menu-header");
  }

  get avatarHeader() {
    return cy.get("#avatar-header");
  }

  get asideMenu() {
    return cy.get("#aside-menu");
  }

  public getItemAsideMenu(menuName: string) {
    return cy.get("#aside-menu li ");
  }
}
