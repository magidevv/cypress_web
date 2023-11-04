const { Page } = require("./page");

const haveAccLink = 'div.container.page a[ui-sref="app.login"]';

class RegistrationPage extends Page {
  openRegistrationUrl() {
    this.openUrl("#/register");
  }

  clickHaveAccLink() {
    this.clickElement(haveAccLink);
  }
}

module.exports = { RegistrationPage };
