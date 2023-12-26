import MainPage from "../pages/main.page";
import LoginPage from "../pages/login.page";
import UserPage from "../pages/user.page";
import RegistrationPage from "../pages/registration.page.js";
import Helper from "../helper/helper.js";

const validRandomUsername = Helper.generateRandomValidUsername();
const validUsername = validRandomUsername;
const validRandomEmail = Helper.generateRandomValidEmail();
const validRandomPassword = Helper.generateRandomValidPassword();
const invalidRandomUsername = Helper.generateRandomInvalidUsername();
const invalidRandomEmail = Helper.generateRandomInvalidEmail();
const invalidRandomPassword = Helper.generateRandomInvalidPassword();

const mainPage = new MainPage();
const loginPage = new LoginPage();
const registrationPage = new RegistrationPage();
const userPage = new UserPage();

const baseUrl = Cypress.config("baseUrl");

describe("Registration Form", () => {
  it("Registration with valid credentials", () => {
    mainPage.openMainUrl();
    mainPage.clickRegistrationLink();
    cy.url().should("include", "register");
    mainPage.clickLoginLink();
    cy.url().should("include", "login");
    loginPage.clickNeedAccLink();
    cy.url().should("include", "register");
    registrationPage.fillRegistrationForm(
      validRandomUsername,
      validRandomEmail,
      validRandomPassword
    );
    cy.url().should("eq", `${baseUrl + "#/"}`);
    mainPage.checkProfileSectionUsername(validUsername);
    mainPage.clickProfileSectionLink();
    cy.url().should("include", `${validUsername}`);
    userPage.checkProfileUsername(validUsername);
  });

  it("Registration with invalid credentials", () => {
    registrationPage.openRegistrationUrl();
    registrationPage.fillRegistrationForm(
      invalidRandomUsername,
      invalidRandomEmail,
      invalidRandomPassword
    );
    // registrationPage.checkLoginErrorMsgs([
    //   RegistrationPage.invalidUsername_error,
    //   RegistrationPage.invalidEmail_error,
    //   RegistrationPage.invalidPassword_error
    // ]);
    // registrationPage.checkRedHighlightFields(["text", "email", "password"]);
  });

  it("Registration with empty required fields", () => {
    registrationPage.openRegistrationUrl();
    registrationPage.clickSubmitBtn();
    registrationPage.checkLoginErrorMsgs([
      // RegistrationPage.blankUsername_error,
      RegistrationPage.blankEmail_error,
      // RegistrationPage.blankPassword_error
    ]);
    // registrationPage.checkRedHighlightFields(["text", "email", "password"]);
  });
});
