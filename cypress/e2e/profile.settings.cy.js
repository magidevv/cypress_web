import MainPage from "../pages/main.page";
import LoginPage from "../pages/login.page";
import UserPage from "../pages/user.page";
import SettingsPage from "../pages/settings.page";

const validEmail = Cypress.env("USER_EMAIL");
const validPassword = Cypress.env("USER_PASSWORD");

const mainPage = new MainPage();
const loginPage = new LoginPage();
const settingsPage = new SettingsPage();
const userPage = new UserPage();

const USER_LOGIN = Cypress.env("USER_LOGIN");

describe("Login Form", () => {
  beforeEach(() => {
    mainPage.openMainUrl();
    mainPage.clickLoginLink();
    loginPage.fillLoginForm(validEmail, validPassword);
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
