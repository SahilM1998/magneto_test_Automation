import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import CreateAccountPage from "../pageObjects/CreateAccountPage.js";
import HomePage from "../pageObjects/HomePage.js";
import ForgotPasswordPage from "../pageObjects/ForgotPasswordPage.js";
import ApiHelper from "../utils/ApiHelper.js";

const homePage = new HomePage();
const createAccountPage = new CreateAccountPage();
const forgotPasswordPage = new ForgotPasswordPage();
const apiHelper = new ApiHelper();

Given("I intercept all network calls to the domain", () => {
  cy.intercept("**").as("networkCalls");
});

Given("User is on the LUMA Home page", () => {
  homePage.visitHomePage();
});

Given("User clicks on create account", () => {
  homePage.clickCreateAccount();
});

Then("User enters input field {string} with {string}", (field, value) => {
  createAccountPage.enterInputField(field, value);
});

Then("User clicks on Create an account", () => {
  createAccountPage.submitAccountCreation();
});

Then("User should be logged in and see the success message", () => {
  createAccountPage.verifySuccessMessage();
});

Then("The error message for {string} should be {string}", (field, errorMessage) => {
  createAccountPage.verifyErrorMessage(field, errorMessage);
});

Then("User clicks on forgot password", () => {
  forgotPasswordPage.clickForgotPassword();
});

Then("All links should return a valid status code", () => {
  apiHelper.verifyAllLinksStatus();
});

Then("All links should navigate to the correct URL", () => {
  apiHelper.verifyLinkNavigation();
});

Then("The search field should be visible with placeholder {string}", (placeholder) => {
  homePage.verifySearchPlaceholder(placeholder);
});

Then("The store logo should be visible", () => {
  homePage.verifyStoreLogo();
});

Then("I should see {string} inside the main container", (text) => {
  homePage.verifyMainContainerText(text);
});

Then("I should see {string} inside the footer", (text) => {
  homePage.verifyFooterText(text);
});

Then("The cart option should be visible", () => {
  homePage.verifyCartOption();
});

Then("The copyright text should be {string}", (text) => {
  homePage.verifyCopyrightText(text);
});

Then("No network call should return a status code of 400 or 500", () => {
  apiHelper.verifyNoErrorStatus();
});