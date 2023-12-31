const { Page } = require("./page");

const profileUsername = '[ng-bind="::$ctrl.profile.username"]';
const editProfileSettingsBtn = 'a[ui-sref="app.settings"][ng-show="$ctrl.isUser"]';

class UserPage extends Page {
  checkProfileUsername(username) {
    this.checkElementText(profileUsername, username);
  }

  clickEditProfileSettingsBtn() {
    this.clickElement(editProfileSettingsBtn);
  }
}

export default UserPage;
