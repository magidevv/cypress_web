const { Page } = require("./page");


class SettingsPage extends Page {
  openSettingsUrl() {
    this.openUrl("#/settings");
  }
}

export default SettingsPage;
