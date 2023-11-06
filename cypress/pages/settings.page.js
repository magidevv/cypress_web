const { Page } = require("./page");


class SettingsPage extends Page {
  openSettingsUrl() {
    this.openUrl("#/settings");
  }
}

module.exports = { SettingsPage };
