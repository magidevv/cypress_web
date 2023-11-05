const { Page } = require("./page");

const haveAccLink = 'div.container.page a[ui-sref="app.login"]';
const usernameField = 'input[type="text"]';
const emailField = 'input[type="email"]';
const passwordField = 'input[type="password"]';
const submitBtn = 'button[type="submit"]';

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
}

module.exports = { RegistrationPage };
