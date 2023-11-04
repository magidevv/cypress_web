const { Page } = require("./page");

const profileUsername = '[ng-bind="::$ctrl.profile.username"]';

class UserPage extends Page {
  openUserUrl() {
    this.openUrl("");
  }

  checkProfileUsername(username) {
    this.getElement(profileUsername).should("eq", username);
  }
}

module.exports = { UserPage };
