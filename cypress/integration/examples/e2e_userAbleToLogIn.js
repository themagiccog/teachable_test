/// <reference types="Cypress" />
import LogInPage from "../pageObjects/LogInPage";
import LandingPage from "../pageObjects/LandingPage";
import HomePage from "../pageObjects/HomePage";

describe("User is able to sign up", function () {
  let data;
  before(() => {
    // runs once before all tests in the block
    cy.fixture("example").then((fData) => {
      data = fData;
    });
  });

  const loginPage = new LogInPage();
  const landingPage = new LandingPage();
  const homePage = new HomePage();

  // launch the landing page
  it("Launch Zeachable page", function () {
    cy.visit(Cypress.env("baseUrl"));
  });

  // Click to the Login Up page
  it("Open the Login page", function () {
    landingPage.getLogInButton().click();
  });

  // Enter login details
  it("Enter Authenticated user details", function () {
    loginPage.getEmail().type(data.email);
    loginPage.getPassword().type(data.password);
  });

  // Log into user page
  it("Verify User is logged in", function () {
    loginPage.getLogin().click();

    // Validate that takehome is the header name
    homePage.getHeader().then(function (element) {
      const actualText = element.text();
      expect(actualText.includes("takehome")).to.be.true;
    });
  });
});
