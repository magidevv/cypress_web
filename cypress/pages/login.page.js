const { Page } = require("./page");

const needAccLink = 'div.container.page a[ui-sref="app.register"]';
const emailField = 'input[type="email"]';
const passwordField = 'input[type="password"]';
const submitBtn = 'button[type="submit"]';
const loginErrorMsg = 'li[ng-repeat="error in errors"]';

class LoginPage extends Page {
  openLoginUrl() {
    this.openUrl("#/login");
  }

  clickNeedAccLink() {
    this.clickElement(needAccLink);
  }

  fillLoginForm(email, password) {
    this.fillElement(emailField, email);
    this.fillElement(passwordField, password);
    this.clickElement(submitBtn);
  }

  checkLoginErrorMsg(msg) {
    this.getElement(loginErrorMsg).should("contain.text", msg);
  }
}

module.exports = { LoginPage };
