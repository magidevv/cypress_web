const { MainPage } = require("../pages/main.page");
const { LoginPage } = require("../pages/login.page");
const { SettingsPage } = require("../pages/settings.page");
const { UserPage } = require("../pages/user.page");
const systemMessages = require("../fixtures/system-messages.json");

describe("Login Form", () => {
  const mainPage = new MainPage();
  const loginPage = new LoginPage();
  const settingsPage = new SettingsPage();
  const userPage = new UserPage();

  const USER_LOGIN = Cypress.env("USER_LOGIN");

  beforeEach(() => {
    mainPage.openMainUrl();
  });

  it("Updating the profile bio", () => {
      mainPage.clickSettingsLink();
      cy.url().should("include", "settings");
      mainPage.clickProfileSectionLink();
      cy.url().should("include", `${USER_LOGIN}`);
      userPage.clickEditProfileSettingsBtn();
      cy.url().should("include", "settings");

  });
});
