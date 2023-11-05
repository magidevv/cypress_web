const { MainPage } = require("../pages/main.page");
const { LoginPage } = require("../pages/login.page");
const { RegistrationPage } = require("../pages/registration.page");
const { UserPage } = require("../pages/user.page");
const testData = require("../fixtures/test-data.js");
const systemMessages = require("../fixtures/system-messages.json");

describe("Login Form", () => {
  const mainPage = new MainPage();
  const loginPage = new LoginPage();
  const registrationPage = new RegistrationPage();
  const userPage = new UserPage();

  const baseUrl = Cypress.config("baseUrl");
  const USER_LOGIN = Cypress.env("USER_LOGIN");
  const USER_EMAIL = Cypress.env("USER_EMAIL");
  const USER_PASSWORD = Cypress.env("USER_PASSWORD");

  beforeEach(() => {
    mainPage.openMainUrl();
  });

  it("Login with valid credentials", () => {
    mainPage.clickLoginLink();
    cy.url().should("include", "login");
    mainPage.clickRegistrationLink();
    cy.url().should("include", "register");
    registrationPage.clickHaveAccLink();
    cy.url().should("include", "login");
    loginPage.fillLoginForm(USER_EMAIL, USER_PASSWORD);
    cy.url().should("eq", `${baseUrl + "#/"}`);
    mainPage.checkProfileSectionUsername(USER_LOGIN);
    mainPage.clickProfileSectionLink();
    cy.url().should("include", `${USER_LOGIN}`);
    userPage.checkProfileUsername(USER_LOGIN);
  });

  it("Login with an invalid email", () => {
    loginPage.openLoginUrl();
    loginPage.fillLoginForm(testData.randomBadEmail, USER_PASSWORD);
    loginPage.checkLoginErrorMsgs([systemMessages["invalid-credentials"]]);
    loginPage.checkRedHighlightFields(["email", "password"]);
  });

  it("Login with an invalid password", () => {
    loginPage.openLoginUrl();
    loginPage.fillLoginForm(USER_EMAIL, testData.randomBadPassword);
    loginPage.checkLoginErrorMsgs([systemMessages["invalid-credentials"]]);
    loginPage.checkRedHighlightFields(["email", "password"]);
  });

  it("Login with empty required fields", () => {
    loginPage.openLoginUrl();
    loginPage.clickSubmitBtn();
    loginPage.checkLoginErrorMsgs([systemMessages["blank-email"], systemMessages["blank-password"]]);
    loginPage.checkRedHighlightFields(["email", "password"]);
  });

  it("Registration with valid credentials", () => {
    mainPage.clickRegistrationLink();
    cy.url().should("include", "register");
    mainPage.clickLoginLink();
    cy.url().should("include", "login");
    loginPage.clickNeedAccLink();
    cy.url().should("include", "register");
    registrationPage.fillRegistrationForm(testData.randomUsername, testData.randomEmail, testData.randomPassword);
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
    registrationPage.checkLoginErrorMsgs([systemMessages["invalid-username"], systemMessages["invalid-email"], systemMessages["invalid-password"]]);
    registrationPage.checkRedHighlightFields(["text", "email", "password"]);
  });

  it("Registration with empty required fields", () => {
    registrationPage.openRegistrationUrl();
    registrationPage.clickSubmitBtn();
    registrationPage.checkLoginErrorMsgs([
      systemMessages["blank-username"], systemMessages["blank-email"], systemMessages["blank-password"]
    ]);
    registrationPage.checkRedHighlightFields(["text", "email", "password"]);
  });
});
