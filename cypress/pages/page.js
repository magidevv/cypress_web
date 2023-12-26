class Page {

  openUrl(url) {
    cy.visit(url || "/");
  }

  getElement(element) {
    return cy.get(element);
  }

  clickElement(element) {
    this.getElement(element).click();
  }

  fillElement(element, data) {
    this.getElement(element).type(data);
  }

  checkElementText(element, text) {
    this.getElement(element).should("include.text", text);
  }
}

module.exports = { Page };
