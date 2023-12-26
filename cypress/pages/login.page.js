const { Page } = require("./page");

const needAccLink = 'div.container.page a[ui-sref="app.register"]';
const emailField = 'input[type="email"]';
const passwordField = 'input[type="password"]';
const submitBtn = 'button[type="submit"]';
const loginErrorMsgs = 'ul.error-messages li';

class LoginPage extends Page {
  static invalidCredentials_error = "email or password is invalid";
  static blankEmail_error = "email can't be blank";
  static blankPassword_error = "password can't be blank";

  openLoginUrl() {
    this.openUrl("/login");
  }

  clickNeedAccLink() {
    this.clickElement(needAccLink);
  }

  fillLoginForm(email, password) {
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

  clickSubmitBtn() {
    this.clickElement(submitBtn);
  }
}

export default LoginPage;
