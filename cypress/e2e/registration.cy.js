const { MainPage } = require("../pages/main.page");
const { LoginPage } = require("../pages/login.page");
const { RegistrationPage } = require("../pages/registration.page");
const { UserPage } = require("../pages/user.page");
const testData = require("../fixtures/test-data.js");
const systemMessages = require("../fixtures/system-messages.json");

describe("Registration Form", () => {
  const mainPage = new MainPage();
  const loginPage = new LoginPage();
  const registrationPage = new RegistrationPage();
  const userPage = new UserPage();

  const baseUrl = Cypress.config("baseUrl");
  const USER_LOGIN = Cypress.env("USER_LOGIN");

  beforeEach(() => {
    mainPage.openMainUrl();
  });

  it("Registration with valid credentials", () => {
    mainPage.clickRegistrationLink();
    cy.url().should("include", "register");
    mainPage.clickLoginLink();
    cy.url().should("include", "login");
    loginPage.clickNeedAccLink();
    cy.url().should("include", "register");
    registrationPage.fillRegistrationForm(
      testData.randomUsername,
      testData.randomEmail,
      testData.randomPassword
    );
    cy.url().should("eq", `${baseUrl + "#/"}`);
    mainPage.checkProfileSectionUsername(USER_LOGIN);
    mainPage.clickProfileSectionLink();
    cy.url().should("include", `${USER_LOGIN}`);
    userPage.checkProfileUsername(USER_LOGIN);
  });

  it("Registration with invalid credentials", () => {
    registrationPage.openRegistrationUrl();
    registrationPage.fillRegistrationForm(
      testData.randomBadUsername,
      testData.randomBadEmail,
      testData.randomBadPassword
    );
    registrationPage.checkLoginErrorMsgs([
      systemMessages["invalid-username"],
      systemMessages["invalid-email"],
      systemMessages["invalid-password"],
    ]);
    registrationPage.checkRedHighlightFields(["text", "email", "password"]);
  });

  it("Registration with empty required fields", () => {
    registrationPage.openRegistrationUrl();
    registrationPage.clickSubmitBtn();
    registrationPage.checkLoginErrorMsgs([
      systemMessages["blank-username"],
      systemMessages["blank-email"],
      systemMessages["blank-password"],
    ]);
    registrationPage.checkRedHighlightFields(["text", "email", "password"]);
  });
});
