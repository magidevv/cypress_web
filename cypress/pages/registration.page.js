const { Page } = require("./page");

const haveAccLink = 'div.container.page a[ui-sref="app.login"]';
const usernameField = 'input[type="text"]';
const emailField = 'input[type="email"]';
const passwordField = 'input[type="password"]';
const submitBtn = 'button[type="submit"]';
const loginErrorMsgs = 'ul.error-messages li';

class RegistrationPage extends Page {
  openRegistrationUrl() {
    this.openUrl("#/register");
  }

  clickHaveAccLink() {
    this.clickElement(haveAccLink);
  }

  fillRegistrationForm(username, email, password) {
    this.fillElement(usernameField, username);
    this.fillElement(emailField, email);
    this.fillElement(passwordField, password);
    this.clickElement(submitBtn);
  }

  checkLoginErrorMsgs(errorMsgs) {
    this.getElement(loginErrorMsgs).should("have.length", errorMsgs.length);

    errorMsgs.forEach((msg, index) => {
      this.getElement(loginErrorMsgs).eq(index).should("contain.text", msg);
    });
  }

  checkRedHighlightFields(fields) {
    for (const field of fields) {
      const selector = `input[type="${field}"]`;
      const redHighlightField = this.getElement(selector);
      redHighlightField.should("have.css", "border-color", "rgb(255, 0, 0)");
    }
  }
}

module.exports = { RegistrationPage };
