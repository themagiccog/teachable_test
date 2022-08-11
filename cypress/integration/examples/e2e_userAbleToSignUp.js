/// <reference types="Cypress" />
import LandingPage from "../pageObjects/LandingPage";
import SignUpPage from "../pageObjects/SignUpPage";

describe("User is able to sign up", function () {
  let data;
  before(() => {
    // runs once before all tests in the block
    cy.fixture("example").then((fData) => {
      data = fData;
    });
  });

  const landingPage = new LandingPage();
  const signUp = new SignUpPage();

  // launch the landing page
  it("Launch Zeachable page", function () {
    cy.visit(Cypress.env("baseUrl"));
  });

  // Click to open the Sign Up page
  it("Open the Sign up page", function () {
    landingPage.getSignUpButton().click();
  });

  // Enter details in Sign up page
  it("Enter user details to sign up", function () {
    var today = new Date();
    var date =
      today.getFullYear() +
      "_" +
      (today.getMonth() + 1) +
      "_" +
      today.getDate();
    var time =
      today.getHours() + "_" + today.getMinutes() + "_" + today.getSeconds();
    var dateTimeEmail = date + "_" + time + "@exmaple.com";

    signUp.getFullName().type(data.fullName);
    signUp.getEmail().type(dateTimeEmail);
    signUp.getPassword().type(data.password);
    signUp.getCheckBox().click();
  });

  //Sign Up
  it("Sign Up", function () {
    signUp.getSignUpPageSignUpButton().click();
  });
});
