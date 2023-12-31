const { Page } = require("./page");

const loginLink = 'nav [ui-sref="app.login"]';
const registrationLink = 'nav [ui-sref="app.register"]';
const profileSectionLink =
  'a[ui-sref="app.profile.main({ username: $ctrl.currentUser.username })"]';
const settingsLink = 'a[ui-sref="app.settings"]';

class MainPage extends Page {
  openMainUrl() {
    this.openUrl("");
  }

  clickLoginLink() {
    this.clickElement(loginLink);
  }

  clickRegistrationLink() {
    this.clickElement(registrationLink);
  }

  checkProfileSectionUsername(username) {
    this.checkElementText(profileSectionLink, username);
  }

  clickProfileSectionLink() {
    this.clickElement(profileSectionLink);
  }

  clickSettingsLink() {
    this.clickElement(settingsLink);
  }
}

export default MainPage;
