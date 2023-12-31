import MainPage from "../pages/main.page";
import LoginPage from "../pages/login.page";
import UserPage from "../pages/user.page";
import RegistrationPage from "../pages/registration.page";
import Helper from "../helper/helper.js";

const invalidRandomEmail = Helper.generateRandomInvalidEmail();
const invalidRandomPassword = Helper.generateRandomInvalidPassword();

const baseUrl = Cypress.config("baseUrl");
const validUsername = Cypress.env("USER_LOGIN");
const validEmail = Cypress.env("USER_EMAIL");
const validPassword = Cypress.env("USER_PASSWORD");

const mainPage = new MainPage();
const registrationPage = new RegistrationPage();
const loginPage = new LoginPage();
const userPage = new UserPage();

describe("Login Form", () => {
  it("Login with valid credentials", () => {
    mainPage.openMainUrl();
    mainPage.clickLoginLink();
    mainPage.includeUrl("login");
    mainPage.clickRegistrationLink();
    registrationPage.includeUrl("register");
    registrationPage.clickHaveAccLink();
    loginPage.includeUrl("login");
    loginPage.fillLoginForm(validEmail, validPassword);
    mainPage.equalUrl(`${baseUrl}`);
    mainPage.checkProfileSectionUsername(validUsername);
    mainPage.clickProfileSectionLink();
    userPage.includeUrl(`${validUsername}`);
    userPage.checkProfileUsername(validUsername);
  });

  it("Login with an invalid email", () => {
    loginPage.openLoginUrl();
    loginPage.fillLoginForm(invalidRandomEmail, validPassword);
    loginPage.checkLoginErrorMsgs([LoginPage.invalidCredentials_error]);
    // loginPage.checkRedHighlightFields(["email", "password"]);
  });

  it("Login with an invalid password", () => {
    loginPage.openLoginUrl();
    loginPage.fillLoginForm(validEmail, invalidRandomPassword);
    loginPage.checkLoginErrorMsgs([LoginPage.invalidCredentials_error]);
    // loginPage.checkRedHighlightFields(["email", "password"]);
  });

  it("Login with empty required fields", () => {
    loginPage.openLoginUrl();
    loginPage.clickSubmitBtn();
    // loginPage.checkLoginErrorMsgs([
    //   LoginPage.blankEmail_error,
    //   LoginPage.blankPassword_error
    // ]);
    // loginPage.checkRedHighlightFields(["email", "password"]);
  });
});
